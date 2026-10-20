// Generado desde Figma (r1). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import EnlaceFlecha from "../componentes/EnlaceFlecha.jsx";
import "./ReservaPaso1.css";

export default function ReservaPaso1() {
  return (
    <>
      <section className="r1-renglones" />
      <section className="r1-pasos">
        <p className="r1-pasos__volver">← Inicio</p>
        <div className="r1-pasos__pasos">
          <div className="r1-pasos__paso-1">
            <div className="r1-pasos__numero">
              <p className="r1-pasos__n1">1</p>
            </div>
            <p className="r1-pasos__que-necesitas">Qué necesitás</p>
          </div>
          <div className="r1-pasos__rectangle" />
          <div className="r1-pasos__paso-2">
            <div className="r1-pasos__numero-2">
              <p className="r1-pasos__n2">2</p>
            </div>
            <p className="r1-pasos__materia-y-modalidad">Materia y modalidad</p>
          </div>
          <div className="r1-pasos__rectangle-2" />
          <div className="r1-pasos__paso-3">
            <div className="r1-pasos__numero-3">
              <p className="r1-pasos__n3">3</p>
            </div>
            <p className="r1-pasos__horario">Horario</p>
          </div>
          <div className="r1-pasos__rectangle-3" />
          <div className="r1-pasos__paso-4">
            <div className="r1-pasos__numero-4">
              <p className="r1-pasos__n4">4</p>
            </div>
            <p className="r1-pasos__datos-y-sena">Datos y seña</p>
          </div>
        </div>
        <p className="r1-pasos__reserva-sin-cuenta">RESERVA SIN CUENTA</p>
        <div className="r1-pasos__t">
          <p className="r1-pasos__volver-2">← Inicio</p>
          <p className="r1-pasos__paso-1-de-4-que-necesitas">PASO 1 DE 4</p>
        </div>
        <div className="r1-pasos__progreso">
          <div className="r1-pasos__rectangle-4" />
          <div className="r1-pasos__rectangle-5" />
          <div className="r1-pasos__rectangle-6" />
          <div className="r1-pasos__rectangle-7" />
        </div>
      </section>
      <section className="r1-cuerpo">
        <div className="r1-cuerpo__principal">
          <div className="r1-cuerpo__encabezado">
            <p className="r1-cuerpo__que-necesitas">¿Qué necesitás?</p>
            <p className="r1-cuerpo__elegi-el-nivel-y-para-que-es-l">Elegí el nivel y para qué es la clase. Después vemos materia, modalidad y horario.</p>
          </div>
          <div className="r1-cuerpo__nivel">
            <div className="r1-cuerpo__t">
              <p className="r1-cuerpo__nivel-2">Nivel</p>
            </div>
            <div className="r1-cuerpo__opciones">
              <div className="r1-cuerpo__opcion">
                <div className="r1-cuerpo__marca" />
                <div className="r1-cuerpo__textos">
                  <p className="r1-cuerpo__secundaria">Primaria</p>
                  <p className="r1-cuerpo__n1-a-6-ano">1.º a 6.º grado</p>
                </div>
              </div>
              <div className="r1-cuerpo__opcion-2">
                <div className="r1-cuerpo__marca-2">
                  <p className="r1-cuerpo__x">✓</p>
                </div>
                <div className="r1-cuerpo__textos-2">
                  <p className="r1-cuerpo__secundaria-2">Secundaria</p>
                  <p className="r1-cuerpo__n1-a-6-ano-2">1.º a 6.º año</p>
                </div>
              </div>
              <div className="r1-cuerpo__opcion-3">
                <div className="r1-cuerpo__marca-3" />
                <div className="r1-cuerpo__textos-3">
                  <p className="r1-cuerpo__secundaria-3">Terciario e ingreso</p>
                  <p className="r1-cuerpo__n1-a-6-ano-3">Carreras e ingreso</p>
                </div>
              </div>
            </div>
          </div>
          <div className="r1-cuerpo__para-que-es">
            <div className="r1-cuerpo__t-2">
              <p className="r1-cuerpo__para-que-es-2">¿Para qué es?</p>
              <p className="r1-cuerpo__podes-elegir-uno">Podés elegir uno</p>
            </div>
            <div className="r1-cuerpo__opciones-2">
              <div className="r1-cuerpo__opcion-4">
                <div className="r1-cuerpo__marca-4">
                  <p className="r1-cuerpo__x-2">✓</p>
                </div>
                <div className="r1-cuerpo__textos-4">
                  <p className="r1-cuerpo__secundaria-4">Una materia del año</p>
                  <p className="r1-cuerpo__n1-a-6-ano-4">Seguimiento semanal o clases sueltas</p>
                </div>
              </div>
              <div className="r1-cuerpo__opcion-5">
                <div className="r1-cuerpo__marca-5" />
                <div className="r1-cuerpo__textos-5">
                  <p className="r1-cuerpo__secundaria-5">Un examen o una previa</p>
                  <p className="r1-cuerpo__n1-a-6-ano-5">Mesas, recuperatorios y pruebas</p>
                </div>
              </div>
              <div className="r1-cuerpo__opcion-6">
                <div className="r1-cuerpo__marca-6" />
                <div className="r1-cuerpo__textos-6">
                  <p className="r1-cuerpo__secundaria-6">Un trabajo práctico</p>
                  <p className="r1-cuerpo__n1-a-6-ano-6">Para entregar o defender</p>
                </div>
              </div>
              <div className="r1-cuerpo__opcion-7">
                <div className="r1-cuerpo__marca-7" />
                <div className="r1-cuerpo__textos-7">
                  <p className="r1-cuerpo__secundaria-7">Técnicas de estudio</p>
                  <p className="r1-cuerpo__n1-a-6-ano-7">Organizarse y estudiar mejor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="r1-cuerpo__acciones">
            <Boton tipo="primario" className="r1-cuerpo__boton" href="/reservar/materia">Seguir: materia y modalidad</Boton>
            <EnlaceFlecha className="r1-cuerpo__enlace-con-flecha" href="/contacto">¿Algo más específico? Escribí a secretaría</EnlaceFlecha>
          </div>
        </div>
        <div className="r1-cuerpo__lateral">
          <div className="r1-cuerpo__tu-busqueda">
            <p className="r1-cuerpo__tu-busqueda-2">TU BÚSQUEDA</p>
            <div className="r1-cuerpo__nivel-3">
              <p className="r1-cuerpo__nivel-4">Nivel</p>
              <p className="r1-cuerpo__secundaria-8">Secundaria</p>
            </div>
            <div className="r1-cuerpo__para">
              <p className="r1-cuerpo__para-2">Para</p>
              <p className="r1-cuerpo__una-materia-del-ano">Una materia del año</p>
            </div>
            <div className="r1-cuerpo__materia">
              <p className="r1-cuerpo__materia-2">Materia</p>
              <p className="r1-cuerpo__x-3">—</p>
            </div>
            <div className="r1-cuerpo__horario">
              <p className="r1-cuerpo__horario-2">Horario</p>
              <p className="r1-cuerpo__x-4">—</p>
            </div>
            <p className="r1-cuerpo__podes-cambiarlo-despues">podés cambiarlo después</p>
          </div>
        </div>
        <p className="r1-cuerpo__que-necesitas-2">¿Qué necesitás?</p>
        <p className="r1-cuerpo__elegi-el-nivel-y-para-que-es-l-2">Elegí el nivel y para qué es la clase.</p>
        <div className="r1-cuerpo__nivel-5">
          <p className="r1-cuerpo__nivel-6">Nivel</p>
          <div className="r1-cuerpo__opcion-8">
            <div className="r1-cuerpo__marca-8" />
            <div className="r1-cuerpo__textos-8">
              <p className="r1-cuerpo__secundaria-9">Primaria</p>
              <p className="r1-cuerpo__n1-a-6-ano-8">1.º a 6.º grado</p>
            </div>
          </div>
          <div className="r1-cuerpo__opcion-9">
            <div className="r1-cuerpo__marca-9">
              <p className="r1-cuerpo__x-5">✓</p>
            </div>
            <div className="r1-cuerpo__textos-9">
              <p className="r1-cuerpo__secundaria-10">Secundaria</p>
              <p className="r1-cuerpo__n1-a-6-ano-9">1.º a 6.º año</p>
            </div>
          </div>
          <div className="r1-cuerpo__opcion-10">
            <div className="r1-cuerpo__marca-10" />
            <div className="r1-cuerpo__textos-10">
              <p className="r1-cuerpo__secundaria-11">Terciario e ingreso</p>
              <p className="r1-cuerpo__n1-a-6-ano-10">Carreras e ingreso</p>
            </div>
          </div>
        </div>
        <div className="r1-cuerpo__para-que-es-3">
          <p className="r1-cuerpo__para-que-es-4">¿Para qué es?</p>
          <div className="r1-cuerpo__opcion-11">
            <div className="r1-cuerpo__marca-11">
              <p className="r1-cuerpo__x-6">✓</p>
            </div>
            <div className="r1-cuerpo__textos-11">
              <p className="r1-cuerpo__secundaria-12">Una materia del año</p>
              <p className="r1-cuerpo__n1-a-6-ano-11">Seguimiento semanal o clases sueltas</p>
            </div>
          </div>
          <div className="r1-cuerpo__opcion-12">
            <div className="r1-cuerpo__marca-12" />
            <div className="r1-cuerpo__textos-12">
              <p className="r1-cuerpo__secundaria-13">Un examen o una previa</p>
              <p className="r1-cuerpo__n1-a-6-ano-12">Mesas, recuperatorios y pruebas</p>
            </div>
          </div>
          <div className="r1-cuerpo__opcion-13">
            <div className="r1-cuerpo__marca-13" />
            <div className="r1-cuerpo__textos-13">
              <p className="r1-cuerpo__secundaria-14">Un trabajo práctico</p>
              <p className="r1-cuerpo__n1-a-6-ano-13">Para entregar o defender</p>
            </div>
          </div>
          <div className="r1-cuerpo__opcion-14">
            <div className="r1-cuerpo__marca-14" />
            <div className="r1-cuerpo__textos-14">
              <p className="r1-cuerpo__secundaria-15">Técnicas de estudio</p>
              <p className="r1-cuerpo__n1-a-6-ano-14">Organizarse y estudiar mejor</p>
            </div>
          </div>
        </div>
        <EnlaceFlecha className="r1-cuerpo__enlace-con-flecha-2" href="/contacto">¿Algo más específico? Secretaría</EnlaceFlecha>
      </section>
      <section className="r1-barra-inferior">
        <div className="r1-barra-inferior__info">
          <p className="r1-barra-inferior__secundaria-una-materia">Secundaria · una materia</p>
          <p className="r1-barra-inferior__n1-de-4">1 de 4</p>
        </div>
        <Boton tipo="primario" className="r1-barra-inferior__siguiente" href="/reservar/materia">Seguir</Boton>
      </section>
    </>
  );
}
