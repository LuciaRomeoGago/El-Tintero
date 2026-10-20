// Generado desde Figma (a4). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import A from "../componentes/A.jsx";
import Boton from "../componentes/Boton.jsx";
import Logo from "../componentes/Logo.jsx";
import "./PanelCrearClase.css";

export default function PanelCrearClase() {
  return (
    <>
      <section className="a4-pantalla">
        <div className="a4-pantalla__lugar-del-menu" />
        <div className="a4-pantalla__contenido">
          <A href="/panel/clases" className="a4-pantalla__clases">← Clases</A>
          <div className="a4-pantalla__cabecera">
            <div className="a4-pantalla__t">
              <p className="a4-pantalla__crear-clase">Crear clase</p>
            </div>
          </div>
          <div className="a4-pantalla__columnas">
            <div className="a4-pantalla__formulario">
              <div className="a4-pantalla__fila">
                <div className="a4-pantalla__campo">
                  <p className="a4-pantalla__nombre-del-estudiante">Nivel</p>
                  <div className="a4-pantalla__caja">
                    <p className="a4-pantalla__valor">Secundaria ▾</p>
                  </div>
                </div>
                <div className="a4-pantalla__campo-2">
                  <p className="a4-pantalla__nombre-del-estudiante-2">Materia</p>
                  <div className="a4-pantalla__caja-2">
                    <p className="a4-pantalla__valor-2">Matemática ▾</p>
                  </div>
                </div>
              </div>
              <div className="a4-pantalla__fila-2">
                <div className="a4-pantalla__campo-3">
                  <p className="a4-pantalla__nombre-del-estudiante-3">Modalidad</p>
                  <div className="a4-pantalla__caja-3">
                    <p className="a4-pantalla__valor-3">Presencial ▾</p>
                  </div>
                </div>
                <div className="a4-pantalla__campo-4">
                  <p className="a4-pantalla__nombre-del-estudiante-4">Docente</p>
                  <div className="a4-pantalla__caja-4">
                    <p className="a4-pantalla__valor-4">Carolina T. ▾</p>
                  </div>
                </div>
              </div>
              <div className="a4-pantalla__fila-3">
                <div className="a4-pantalla__campo-5">
                  <p className="a4-pantalla__nombre-del-estudiante-5">Fecha</p>
                  <div className="a4-pantalla__caja-5">
                    <p className="a4-pantalla__valor-5">14/10/2026</p>
                  </div>
                </div>
                <div className="a4-pantalla__campo-6">
                  <p className="a4-pantalla__nombre-del-estudiante-6">Hora</p>
                  <div className="a4-pantalla__caja-6">
                    <p className="a4-pantalla__valor-6">17:00</p>
                  </div>
                </div>
              </div>
              <div className="a4-pantalla__fila-4">
                <div className="a4-pantalla__campo-7">
                  <p className="a4-pantalla__nombre-del-estudiante-7">Duración</p>
                  <div className="a4-pantalla__caja-7">
                    <p className="a4-pantalla__valor-7">60 minutos ▾</p>
                  </div>
                </div>
                <div className="a4-pantalla__campo-8">
                  <p className="a4-pantalla__nombre-del-estudiante-8">Formato</p>
                  <div className="a4-pantalla__caja-8">
                    <p className="a4-pantalla__valor-8">Grupo reducido ▾</p>
                  </div>
                </div>
              </div>
              <div className="a4-pantalla__fila-5">
                <div className="a4-pantalla__campo-9">
                  <p className="a4-pantalla__nombre-del-estudiante-9">Cupo máximo</p>
                  <div className="a4-pantalla__caja-9">
                    <p className="a4-pantalla__valor-9">6</p>
                  </div>
                </div>
                <div className="a4-pantalla__espacio" />
              </div>
              <div className="a4-pantalla__fila-precio">
                <div className="a4-pantalla__campo-10">
                  <p className="a4-pantalla__nombre-del-estudiante-10">Precio total</p>
                  <div className="a4-pantalla__caja-10">
                    <p className="a4-pantalla__valor-10">$ 40.000</p>
                  </div>
                </div>
                <div className="a4-pantalla__campo-11">
                  <p className="a4-pantalla__nombre-del-estudiante-11">Seña online (50%)</p>
                  <div className="a4-pantalla__caja-11">
                    <p className="a4-pantalla__valor-11">$ 20.000</p>
                  </div>
                </div>
              </div>
              <p className="a4-pantalla__el-precio-sale-de-la-duracion-40-000-la-hora-y-la-sena-se-calcula-sola">El precio sale de la duración ($ 40.000 la hora) y la seña se calcula sola.</p>
              <div className="a4-pantalla__aviso">
                <div className="a4-pantalla__icono">
                  <p className="a4-pantalla__i">i</p>
                </div>
                <div className="a4-pantalla__textos">
                  <p className="a4-pantalla__la-modalidad-presencial-empiez">Carolina ya tiene una clase el martes a las 18:30.</p>
                  <p className="a4-pantalla__mientras-tanto-todas-las-clas">Esta termina a las 18:00, así que no se superponen.</p>
                </div>
              </div>
              <div className="a4-pantalla__botones">
                <Boton tipo="secundario" className="a4-pantalla__boton" href="/panel/clases">Guardar borrador</Boton>
                <Boton tipo="primario" className="a4-pantalla__boton-2" href="/panel/clases">Publicar clase</Boton>
              </div>
            </div>
            <div className="a4-pantalla__vista-previa">
              <p className="a4-pantalla__asi-la-ve-una-familia">ASÍ LA VE UNA FAMILIA</p>
              <div className="a4-pantalla__tarjeta-de-clase">
                <div className="a4-pantalla__arriba">
                  <p className="a4-pantalla__secundaria">SECUNDARIA</p>
                  <div className="a4-pantalla__insignia">
                    <div className="a4-pantalla__punto" />
                    <p className="a4-pantalla__hay-lugar">Hay lugar</p>
                  </div>
                </div>
                <h1 className="a4-pantalla__titulo">
                  <span className="a4-pantalla__matematica-2-ano">Matemática · 2.º año</span>
                  <span className="a4-pantalla__mar-14-oct-17-00-60-min">MAR 14 OCT · 17:00 · 60 MIN</span>
                </h1>
                <div className="a4-pantalla__detalle">
                  <div className="a4-pantalla__docente">
                    <p className="a4-pantalla__docente-2">Docente</p>
                    <p className="a4-pantalla__laura-m">Carolina T.</p>
                  </div>
                  <div className="a4-pantalla__modalidad">
                    <p className="a4-pantalla__modalidad-2">Modalidad</p>
                    <p className="a4-pantalla__presencial">Presencial</p>
                  </div>
                  <div className="a4-pantalla__clase">
                    <p className="a4-pantalla__clase-2">Clase</p>
                    <p className="a4-pantalla__grupal-hasta-6">Grupal · hasta 6</p>
                  </div>
                </div>
                <div className="a4-pantalla__lugares">
                  <div className="a4-pantalla__rectangle" />
                  <div className="a4-pantalla__rectangle-2" />
                  <div className="a4-pantalla__rectangle-3" />
                  <div className="a4-pantalla__rectangle-4" />
                  <div className="a4-pantalla__rectangle-5" />
                  <div className="a4-pantalla__rectangle-6" />
                </div>
                <div className="a4-pantalla__rectangle-7" />
                <div className="a4-pantalla__precio">
                  <div className="a4-pantalla__valor-12">
                    <p className="a4-pantalla__n8-000">$ 40.000</p>
                    <p className="a4-pantalla__por-clase">por clase</p>
                  </div>
                  <div className="a4-pantalla__sena">
                    <p className="a4-pantalla__sena-online">Seña online</p>
                    <p className="a4-pantalla__n4-000">$ 20.000</p>
                  </div>
                </div>
                <Boton tipo="primario" className="a4-pantalla__boton-3" href="/reservar/datos">Reservar este horario</Boton>
              </div>
            </div>
          </div>
        </div>
        <div className="a4-pantalla__menu">
          <div className="a4-pantalla__marca">
            <Logo className="a4-pantalla__marca-logo" />
            <div className="a4-pantalla__t-2">
              <p className="a4-pantalla__el-tintero">El Tintero</p>
              <p className="a4-pantalla__panel">PANEL</p>
            </div>
          </div>
          <A className="a4-pantalla__item-agenda" href="/panel/agenda">
            <p className="a4-pantalla__agenda">Agenda</p>
          </A>
          <A className="a4-pantalla__item-clases" href="/panel/clases">
            <p className="a4-pantalla__clases-2">Clases</p>
          </A>
          <A className="a4-pantalla__item-reservas" href="/panel/reservas">
            <p className="a4-pantalla__reservas">Reservas</p>
            <div className="a4-pantalla__estado-2">
              <p className="a4-pantalla__n2">2</p>
            </div>
          </A>
          <A className="a4-pantalla__item-docentes" href="/panel/docentes">
            <p className="a4-pantalla__docentes">Docentes</p>
          </A>
          <div className="a4-pantalla__espacio-2" />
          <div className="a4-pantalla__usuario">
            <p className="a4-pantalla__sandra-gago">Sandra Gago</p>
            <p className="a4-pantalla__administracion">Administración</p>
            <A href="/panel" className="a4-pantalla__salir">Salir</A>
          </div>
        </div>
      </section>
    </>
  );
}
