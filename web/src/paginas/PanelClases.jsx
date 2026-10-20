// Generado desde Figma (a3). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import A from "../componentes/A.jsx";
import Boton from "../componentes/Boton.jsx";
import Logo from "../componentes/Logo.jsx";
import "./PanelClases.css";

export default function PanelClases() {
  return (
    <>
      <section className="a3-pantalla">
        <div className="a3-pantalla__lugar-del-menu" />
        <div className="a3-pantalla__contenido">
          <div className="a3-pantalla__cabecera">
            <div className="a3-pantalla__t">
              <p className="a3-pantalla__clases">Clases</p>
            </div>
            <Boton tipo="primario" className="a3-pantalla__boton" href="/panel/clases/nueva">Crear clase</Boton>
          </div>
          <div className="a3-pantalla__filtros">
            <div className="a3-pantalla__filtro-esta-semana">
              <p className="a3-pantalla__esta-semana">Esta semana</p>
            </div>
            <div className="a3-pantalla__filtro-publicadas">
              <p className="a3-pantalla__publicadas">Publicadas</p>
            </div>
            <div className="a3-pantalla__filtro-borradores">
              <p className="a3-pantalla__borradores">Borradores</p>
            </div>
            <div className="a3-pantalla__filtro-completas">
              <p className="a3-pantalla__completas">Completas</p>
            </div>
            <div className="a3-pantalla__filtro-canceladas">
              <p className="a3-pantalla__canceladas">Canceladas</p>
            </div>
            <div className="a3-pantalla__espacio" />
            <div className="a3-pantalla__buscar">
              <p className="a3-pantalla__buscar-materia-o-docente">Buscar materia o docente</p>
            </div>
          </div>
          <div className="a3-pantalla__tabla">
            <div className="a3-pantalla__encabezado-de-tabla">
              <div className="a3-pantalla__celda">
                <p className="a3-pantalla__fecha">FECHA</p>
              </div>
              <div className="a3-pantalla__celda-2">
                <p className="a3-pantalla__clase">CLASE</p>
              </div>
              <div className="a3-pantalla__celda-3">
                <p className="a3-pantalla__docente">DOCENTE</p>
              </div>
              <div className="a3-pantalla__celda-4">
                <p className="a3-pantalla__modalidad">MODALIDAD</p>
              </div>
              <div className="a3-pantalla__celda-5">
                <p className="a3-pantalla__lugares">LUGARES</p>
              </div>
              <div className="a3-pantalla__celda-6">
                <p className="a3-pantalla__precio">PRECIO</p>
              </div>
              <div className="a3-pantalla__celda-7">
                <p className="a3-pantalla__estado">ESTADO</p>
              </div>
              <div className="a3-pantalla__celda-8" />
            </div>
            <div className="a3-pantalla__fila">
              <div className="a3-pantalla__celda-9">
                <p className="a3-pantalla__mar-14-10">Mar 14/10</p>
                <p className="a3-pantalla__n17-00">17:00</p>
              </div>
              <div className="a3-pantalla__celda-10">
                <p className="a3-pantalla__matematica">Matemática</p>
                <p className="a3-pantalla__n2-ano-grupo">2.º año · Grupo</p>
              </div>
              <div className="a3-pantalla__celda-11">
                <p className="a3-pantalla__carolina-t">Carolina T.</p>
              </div>
              <div className="a3-pantalla__celda-12">
                <div className="a3-pantalla__insignia">
                  <div className="a3-pantalla__punto" />
                  <p className="a3-pantalla__presencial">Presencial</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-13">
                <p className="a3-pantalla__n3-de-6">3 de 6</p>
              </div>
              <div className="a3-pantalla__celda-14">
                <p className="a3-pantalla__n40-000">$ 40.000</p>
              </div>
              <div className="a3-pantalla__celda-15">
                <div className="a3-pantalla__estado-publicada">
                  <p className="a3-pantalla__publicada">Publicada</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-16">
                <A href="/panel/clases/nueva" className="a3-pantalla__editar">Editar</A>
              </div>
            </div>
            <div className="a3-pantalla__fila-2">
              <div className="a3-pantalla__celda-17">
                <p className="a3-pantalla__mar-14-10-2">Mar 14/10</p>
                <p className="a3-pantalla__n18-30">18:30</p>
              </div>
              <div className="a3-pantalla__celda-18">
                <p className="a3-pantalla__fisica">Física</p>
                <p className="a3-pantalla__n5-ano-individual">5.º año · Individual</p>
              </div>
              <div className="a3-pantalla__celda-19">
                <p className="a3-pantalla__carolina-t-2">Carolina T.</p>
              </div>
              <div className="a3-pantalla__celda-20">
                <div className="a3-pantalla__insignia-2">
                  <div className="a3-pantalla__punto-2" />
                  <p className="a3-pantalla__online">Online</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-21">
                <p className="a3-pantalla__n1-de-1">1 de 1</p>
              </div>
              <div className="a3-pantalla__celda-22">
                <p className="a3-pantalla__n40-000-2">$ 40.000</p>
              </div>
              <div className="a3-pantalla__celda-23">
                <div className="a3-pantalla__estado-completa">
                  <p className="a3-pantalla__completa">Completa</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-24">
                <p className="a3-pantalla__editar-2">Editar</p>
              </div>
            </div>
            <div className="a3-pantalla__fila-3">
              <div className="a3-pantalla__celda-25">
                <p className="a3-pantalla__mie-15-10">Mié 15/10</p>
                <p className="a3-pantalla__n16-00">16:00</p>
              </div>
              <div className="a3-pantalla__celda-26">
                <p className="a3-pantalla__practicas-del-lenguaje">Prácticas del lenguaje</p>
                <p className="a3-pantalla__n5-grado-grupo">5.º grado · Grupo</p>
              </div>
              <div className="a3-pantalla__celda-27">
                <p className="a3-pantalla__laura-m">Laura M.</p>
              </div>
              <div className="a3-pantalla__celda-28">
                <div className="a3-pantalla__insignia-3">
                  <div className="a3-pantalla__punto-3" />
                  <p className="a3-pantalla__presencial-2">Presencial</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-29">
                <p className="a3-pantalla__n2-de-4">2 de 4</p>
              </div>
              <div className="a3-pantalla__celda-30">
                <p className="a3-pantalla__n40-000-3">$ 40.000</p>
              </div>
              <div className="a3-pantalla__celda-31">
                <div className="a3-pantalla__estado-publicada-2">
                  <p className="a3-pantalla__publicada-2">Publicada</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-32">
                <p className="a3-pantalla__editar-3">Editar</p>
              </div>
            </div>
            <div className="a3-pantalla__fila-4">
              <div className="a3-pantalla__celda-33">
                <p className="a3-pantalla__jue-16-10">Jue 16/10</p>
                <p className="a3-pantalla__n18-30-2">18:30</p>
              </div>
              <div className="a3-pantalla__celda-34">
                <p className="a3-pantalla__biologia">Biología</p>
                <p className="a3-pantalla__ingreso-a-veterinaria-individual-90-min">Ingreso a Veterinaria · Individual · 90 min</p>
              </div>
              <div className="a3-pantalla__celda-35">
                <p className="a3-pantalla__pollo-s">“Pollo” S.</p>
              </div>
              <div className="a3-pantalla__celda-36">
                <div className="a3-pantalla__insignia-4">
                  <div className="a3-pantalla__punto-4" />
                  <p className="a3-pantalla__online-2">Online</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-37">
                <p className="a3-pantalla__n0-de-1">0 de 1</p>
              </div>
              <div className="a3-pantalla__celda-38">
                <p className="a3-pantalla__n60-000">$ 60.000</p>
              </div>
              <div className="a3-pantalla__celda-39">
                <div className="a3-pantalla__estado-publicada-3">
                  <p className="a3-pantalla__publicada-3">Publicada</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-40">
                <p className="a3-pantalla__editar-4">Editar</p>
              </div>
            </div>
            <div className="a3-pantalla__fila-5">
              <div className="a3-pantalla__celda-41">
                <p className="a3-pantalla__vie-17-10">Vie 17/10</p>
                <p className="a3-pantalla__n17-30">17:30</p>
              </div>
              <div className="a3-pantalla__celda-42">
                <p className="a3-pantalla__quimica">Química</p>
                <p className="a3-pantalla__n4-ano-grupo">4.º año · Grupo</p>
              </div>
              <div className="a3-pantalla__celda-43">
                <p className="a3-pantalla__pollo-s-2">“Pollo” S.</p>
              </div>
              <div className="a3-pantalla__celda-44">
                <div className="a3-pantalla__insignia-5">
                  <div className="a3-pantalla__punto-5" />
                  <p className="a3-pantalla__presencial-3">Presencial</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-45">
                <p className="a3-pantalla__n6-de-6">6 de 6</p>
              </div>
              <div className="a3-pantalla__celda-46">
                <p className="a3-pantalla__n40-000-4">$ 40.000</p>
              </div>
              <div className="a3-pantalla__celda-47">
                <div className="a3-pantalla__estado-completa-2">
                  <p className="a3-pantalla__completa-2">Completa</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-48">
                <p className="a3-pantalla__editar-5">Editar</p>
              </div>
            </div>
            <div className="a3-pantalla__fila-6">
              <div className="a3-pantalla__celda-49">
                <p className="a3-pantalla__vie-17-10-2">Vie 17/10</p>
                <p className="a3-pantalla__n18-00">18:00</p>
              </div>
              <div className="a3-pantalla__celda-50">
                <p className="a3-pantalla__matematica-2">Matemática</p>
                <p className="a3-pantalla__ingreso-grupo">Ingreso · Grupo</p>
              </div>
              <div className="a3-pantalla__celda-51">
                <p className="a3-pantalla__carolina-t-3">Carolina T.</p>
              </div>
              <div className="a3-pantalla__celda-52">
                <div className="a3-pantalla__insignia-6">
                  <div className="a3-pantalla__punto-6" />
                  <p className="a3-pantalla__online-3">Online</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-53">
                <p className="a3-pantalla__n0-de-6">0 de 6</p>
              </div>
              <div className="a3-pantalla__celda-54">
                <p className="a3-pantalla__n40-000-5">$ 40.000</p>
              </div>
              <div className="a3-pantalla__celda-55">
                <div className="a3-pantalla__estado-borrador">
                  <p className="a3-pantalla__borrador">Borrador</p>
                </div>
              </div>
              <div className="a3-pantalla__celda-56">
                <p className="a3-pantalla__editar-6">Editar</p>
              </div>
            </div>
          </div>
          <p className="a3-pantalla__una-clase-con-reservas-confirmadas-no-puede-cambiar-de-fecha-ni-de-precio-hay-que-cancelarla-y-avisar-por-whatsapp">Una clase con reservas confirmadas no puede cambiar de fecha ni de precio: hay que cancelarla y avisar por WhatsApp.</p>
        </div>
        <div className="a3-pantalla__menu">
          <div className="a3-pantalla__marca">
            <Logo className="a3-pantalla__marca-logo" />
            <div className="a3-pantalla__t-2">
              <p className="a3-pantalla__el-tintero">El Tintero</p>
              <p className="a3-pantalla__panel">PANEL</p>
            </div>
          </div>
          <A className="a3-pantalla__item-agenda" href="/panel/agenda">
            <p className="a3-pantalla__agenda">Agenda</p>
          </A>
          <div className="a3-pantalla__item-clases">
            <p className="a3-pantalla__clases-2">Clases</p>
          </div>
          <A className="a3-pantalla__item-reservas" href="/panel/reservas">
            <p className="a3-pantalla__reservas">Reservas</p>
            <div className="a3-pantalla__estado-2">
              <p className="a3-pantalla__n2">2</p>
            </div>
          </A>
          <A className="a3-pantalla__item-docentes" href="/panel/docentes">
            <p className="a3-pantalla__docentes">Docentes</p>
          </A>
          <div className="a3-pantalla__espacio-2" />
          <div className="a3-pantalla__usuario">
            <p className="a3-pantalla__sandra-gago">Sandra Gago</p>
            <p className="a3-pantalla__administracion">Administración</p>
            <A href="/panel" className="a3-pantalla__salir">Salir</A>
          </div>
        </div>
      </section>
    </>
  );
}
