// Generado desde Figma (t7). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import A from "../componentes/A.jsx";
import Boton from "../componentes/Boton.jsx";
import EnlaceFlecha from "../componentes/EnlaceFlecha.jsx";
import "./SinClases.css";

export default function SinClases() {
  return (
    <>
      <section className="t7-renglones" />
      <section className="t7-pasos">
        <div className="t7-pasos__t">
          <A href="/reservar/materia" className="t7-pasos__volver">← Volver</A>
          <p className="t7-pasos__paso-3-de-4-horario">PASO 3 DE 4</p>
        </div>
        <div className="t7-pasos__progreso">
          <div className="t7-pasos__rectangle" />
          <div className="t7-pasos__rectangle-2" />
          <div className="t7-pasos__rectangle-3" />
          <div className="t7-pasos__rectangle-4" />
        </div>
      </section>
      <section className="t7-cuerpo">
        <p className="t7-cuerpo__elegi-un-horario">Elegí un horario</p>
        <p className="t7-cuerpo__matematica-presencial-en-g">Matemática · presencial · en grupo.</p>
        <div className="t7-cuerpo__semana">
          <div className="t7-cuerpo__lun">
            <p className="t7-cuerpo__lun-2">LUN</p>
            <p className="t7-cuerpo__n13">13</p>
          </div>
          <div className="t7-cuerpo__mar">
            <p className="t7-cuerpo__mar-2">MAR</p>
            <p className="t7-cuerpo__n14">14</p>
          </div>
          <div className="t7-cuerpo__mie">
            <p className="t7-cuerpo__mie-2">MIÉ</p>
            <p className="t7-cuerpo__n15">15</p>
          </div>
          <div className="t7-cuerpo__jue">
            <p className="t7-cuerpo__jue-2">JUE</p>
            <p className="t7-cuerpo__n16">16</p>
          </div>
          <div className="t7-cuerpo__vie">
            <p className="t7-cuerpo__vie-2">VIE</p>
            <p className="t7-cuerpo__n17">17</p>
          </div>
        </div>
        <p className="t7-cuerpo__martes-14-de-octubre">Semana del 13 al 17 de octubre</p>
        <div className="t7-cuerpo__sin-clases">
          <p className="t7-cuerpo__matematica-presencial-en-g-2">Esta semana no hay clases con lugar.</p>
          <p className="t7-cuerpo__matematica-presencial-en-g-3">Probá con la semana que viene o pedí un horario por WhatsApp: secretaría arma uno con el docente.</p>
          <Boton tipo="secundario" className="t7-cuerpo__boton" href="/reservar/horario">Ver la semana que viene</Boton>
        </div>
        <EnlaceFlecha className="t7-cuerpo__enlace-con-flecha" href="/contacto">Pedí un horario por WhatsApp</EnlaceFlecha>
      </section>
      <section className="t7-barra-inferior">
        <div className="t7-barra-inferior__info">
          <p className="t7-barra-inferior__mar-14-oct-17-00">Sin horario elegido</p>
          <p className="t7-barra-inferior__n3-de-4">3 de 4</p>
        </div>
        <Boton tipo="primario" className="t7-barra-inferior__siguiente" href="/reservar/datos">Seguir: tus datos</Boton>
      </section>
    </>
  );
}
