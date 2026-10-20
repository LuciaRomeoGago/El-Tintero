// Generado desde Figma (t2). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import "./CancelarReserva.css";

export default function CancelarReserva() {
  return (
    <>
      <section className="t2-renglones" />
      <section className="t2-margen" />
      <section className="t2-cuerpo">
        <div className="t2-cuerpo__listo">
          <p className="t2-cuerpo__listo-ana">Sin problema</p>
        </div>
        <p className="t2-cuerpo__el-lugar-de-juli-esta-confirma">¿Cancelás la clase de Juli?</p>
        <p className="t2-cuerpo__te-mandamos-el-detalle-por-wha">Faltan más de 48 horas, así que te devolvemos la seña de $ 20.000 por Mercado Pago.</p>
        <div className="t2-cuerpo__resumen-de-la-reserva">
          <div className="t2-cuerpo__arriba">
            <p className="t2-cuerpo__tu-reserva">TU RESERVA</p>
            <div className="t2-cuerpo__insignia">
              <div className="t2-cuerpo__punto" />
              <p className="t2-cuerpo__confirmada">Confirmada</p>
            </div>
          </div>
          <div className="t2-cuerpo__clase">
            <p className="t2-cuerpo__matematica-2-ano">Matemática · 2.º año</p>
            <p className="t2-cuerpo__mar-14-oct-17-00-presencia">MAR 14 OCT · 17:00 · PRESENCIAL · CAROLINA T.</p>
          </div>
          <div className="t2-cuerpo__rectangle" />
          <div className="t2-cuerpo__montos">
            <div className="t2-cuerpo__precio-de-la-clase">
              <p className="t2-cuerpo__precio-de-la-clase-2">Precio de la clase</p>
              <p className="t2-cuerpo__n8-000">$ 40.000</p>
            </div>
            <div className="t2-cuerpo__sena-online-50">
              <p className="t2-cuerpo__sena-online-50-2">Seña online (50%)</p>
              <p className="t2-cuerpo__n4-000-pagado">$ 20.000 ✓</p>
            </div>
            <div className="t2-cuerpo__saldo-en-el-instituto">
              <p className="t2-cuerpo__saldo-en-el-instituto-2">Saldo en el instituto</p>
              <p className="t2-cuerpo__n4-000">$ 20.000</p>
            </div>
          </div>
          <p className="t2-cuerpo__te-mandamos-la-confirmacion-po">Al cancelar, el lugar queda libre para otra persona.</p>
        </div>
        <Boton tipo="primario" className="t2-cuerpo__volver-al-inicio" href="/tu-reserva/cancelada">Sí, cancelar la reserva</Boton>
        <Boton tipo="secundario" className="t2-cuerpo__boton" href="/tu-reserva">Volver a mi reserva</Boton>
      </section>
    </>
  );
}
