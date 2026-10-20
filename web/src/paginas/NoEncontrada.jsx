// Generado desde Figma (t6). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import "./NoEncontrada.css";

export default function NoEncontrada() {
  return (
    <>
      <section className="t6-renglones" />
      <section className="t6-margen" />
      <section className="t6-cuerpo">
        <div className="t6-cuerpo__texto">
          <div className="t6-cuerpo__listo">
            <p className="t6-cuerpo__listo-ana">Uy</p>
          </div>
          <h1 className="t6-cuerpo__titulo">
            <span className="t6-cuerpo__el-lugar-de-juli-esta">Esta página quedó en el</span>
            <span className="t6-cuerpo__resaltador">
              <span className="t6-cuerpo__confirmado">tintero.</span>
            </span>
          </h1>
          <p className="t6-cuerpo__te-mandamos-el-detalle-por-wha">La dirección no existe o cambió. Desde el inicio llegás a todo.</p>
          <div className="t6-cuerpo__botones">
            <Boton tipo="primario" className="t6-cuerpo__volver-al-inicio" href="/">Volver al inicio</Boton>
            <Boton tipo="secundario" className="t6-cuerpo__boton">Reservar una clase</Boton>
          </div>
        </div>
        <div className="t6-cuerpo__listo-2">
          <p className="t6-cuerpo__listo-ana-2">Uy</p>
        </div>
        <p className="t6-cuerpo__el-lugar-de-juli-esta-confirma">Esta página quedó en el tintero.</p>
        <p className="t6-cuerpo__te-mandamos-el-detalle-por-wha-2">La dirección no existe o cambió. Desde el inicio llegás a todo.</p>
        <Boton tipo="primario" className="t6-cuerpo__volver-al-inicio-2" href="/">Volver al inicio</Boton>
        <Boton tipo="secundario" className="t6-cuerpo__boton-2" href="/reservar">Reservar una clase</Boton>
      </section>
    </>
  );
}
