# El Tintero · código

Web con turnero para El Tintero. Es una demo de portfolio: el pago y los WhatsApp son simulados. Backend en FastAPI + PostgreSQL, frontend en React con Vite, todo con Docker.

## Levantarlo

1. Copiá `.env.example` como `.env` y poné una contraseña en `DB_PASSWORD`.
2. `docker compose up --build`
3. La primera vez, cargá los datos de la demo: `docker compose exec api python -m app.seed`
4. Web: http://localhost:5173 · API: http://localhost:8000/docs
5. Para ver el sitio como queda publicado (HTML pre-renderizado): `docker compose exec web npm run build`; queda en `web/dist`.

## Pruebas

`docker compose exec api pytest -q`

## Estructura

- `api/app/models.py`: tablas (docente, clase, reserva, pago, mensaje_whatsapp, usuario_panel) y el cálculo de lugares libres.
- `api/alembic/`: migraciones. Después de cambiar un modelo: `docker compose exec api alembic revision --autogenerate -m "qué cambió"`.
- `api/app/seed.py`: los datos de la demo, los mismos que en Figma.
- `web/src/tokens.css`: colores, espacios, radios, sombras y tipografías sacados de Figma.
- `web/src/paginas/`: Home, Qué ofrecemos, Niveles, Sobre El Tintero, Modalidades, Profesores y Contacto. Están generadas desde Figma (ver abajo); no se editan a mano.
- `web/src/componentes/`: encabezado (con el menú de celular), aviso superior, pie, botones, trazos rojos y el movimiento (`movimiento.js` y `comunes.css`).
- `web/public/img/`: fotos y texturas exportadas de Figma, con el mismo recorte.

## Diseño responsive

- 1024 px o más: el diseño de escritorio de Figma, que mide 1440. Entre 1024 y 1440 se achica entero en proporción; arriba de 1440 queda centrado.
- Menos de 1024 px: el diseño de celular de Figma (390), centrado en una columna.
- Con "reducir movimiento" activado en el sistema, todo se ve quieto.

## Páginas generadas desde Figma

`herramientas/figma-a-codigo/` tiene el generador. `gen.js` se pega en la consola de Figma (con la API de plugins activa) y arma JSX + CSS por sección emparejando la versión de escritorio con la de celular; `armar.py` junta las secciones en cada página. Si cambia el diseño, se vuelve a generar en vez de tocar el CSS a mano.

## Etapas

1. Base (esta): Docker, modelos, migración inicial, datos de la demo y tokens. (Listo)
2. Sitio público: Home, P1–P5 y Contacto, iguales a Figma y pre-renderizados. (Listo)
3. Reserva simulada (sin base de datos, para la demo): pantallas R1–R8 de Figma, opciones que se eligen, campos editables y lugar guardado 20 minutos. (Listo)
4. Pago simulado: aprobado / pendiente / rechazado (sin guardar nada). (Listo)
5. Tu reserva y cancelación (pantallas T1–T3, ejemplo con devolución) y página 404. (Listo)
6. Panel: ingreso con cookie de sesión, clases, reservas, docentes y agenda docente.
7. Publicación de la demo.

## Publicar la demo

La demo es un sitio estático: no necesita la API ni la base.

- Netlify, Vercel o similar: carpeta base `web`, comando `npm run build`, carpeta a publicar `web/dist`.
- Cada página sale en su carpeta (`reservar/materia/index.html`), así funciona en cualquier hosting; `404.html` queda en la raíz.
- Después de publicar, poner la dirección en `web/.env.production` (`VITE_SITIO=https://...`) y volver a publicar: es la imagen que aparece al compartir el link (`web/public/og.png`).

La reserva de la demo vive solo en el navegador (`src/componentes/reserva.js`): los resúmenes muestran el ejemplo de Figma (Ana y Juli), no lo que se elige. La versión con FastAPI + PostgreSQL (etapas 6 y 7 originales) queda para más adelante.

## Panel y agenda docente

No tienen enlaces desde el sitio: se entra escribiendo la dirección. Son pantallas de demo (sin contraseña real ni datos guardados) y llevan `noindex` para que no aparezcan en Google. Ojo: cualquiera que conozca la dirección puede verlas.

- `/panel` ingreso → "Ingresar" lleva a la agenda
- `/panel/agenda`, `/panel/clases`, `/panel/clases/nueva`, `/panel/reservas`, `/panel/reservas/dia`, `/panel/reservas/detalle`, `/panel/docentes`
- `/docente` agenda de un docente (escritorio y celular)

El panel solo está diseñado para escritorio: en pantallas chicas se ve el diseño de 1440 achicado.
