// Generado desde Figma (t3). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import Trazo from "../componentes/Trazo.jsx";
import "./ReservaCancelada.css";

export default function ReservaCancelada() {
  return (
    <>
      <section className="t3-renglones" />
      <section className="t3-margen" />
      <section className="t3-cuerpo">
        <div className="t3-cuerpo__listo">
          <p className="t3-cuerpo__listo-ana">Listo, Ana</p>
          <Trazo forma="tilde" className="t3-cuerpo__trazo" />
        </div>
        <p className="t3-cuerpo__el-lugar-de-juli-esta-confirma">La reserva de Juli quedó cancelada.</p>
        <p className="t3-cuerpo__te-mandamos-el-detalle-por-wha">Te devolvemos los $ 20.000 por Mercado Pago en los próximos días. Te mandamos el comprobante por WhatsApp.</p>
        <div className="t3-cuerpo__linea-de-tiempo">
          <p className="t3-cuerpo__la-devolucion">LA DEVOLUCIÓN</p>
          <div className="t3-cuerpo__esp" />
          <div className="t3-cuerpo__paso-reservaste-el-lugar">
            <div className="t3-cuerpo__marca">
              <div className="t3-cuerpo__ellipse" />
              <div className="t3-cuerpo__rectangle" />
            </div>
            <div className="t3-cuerpo__t">
              <p className="t3-cuerpo__reservaste-el-lugar">Reservaste el lugar</p>
              <p className="t3-cuerpo__sab-11-10-10-42">Sáb 11/10 · 10:42</p>
            </div>
          </div>
          <div className="t3-cuerpo__paso-sena-aprobada-20-000">
            <div className="t3-cuerpo__marca-2">
              <div className="t3-cuerpo__ellipse-2" />
              <div className="t3-cuerpo__rectangle-2" />
            </div>
            <div className="t3-cuerpo__t-2">
              <p className="t3-cuerpo__sena-aprobada-20-000">Seña aprobada · $ 20.000</p>
              <p className="t3-cuerpo__sab-11-10-10-47">Sáb 11/10 · 10:47</p>
            </div>
          </div>
          <div className="t3-cuerpo__paso-cancelaste-la-reserva">
            <div className="t3-cuerpo__marca-3">
              <div className="t3-cuerpo__ellipse-3" />
              <div className="t3-cuerpo__rectangle-3" />
            </div>
            <div className="t3-cuerpo__t-3">
              <p className="t3-cuerpo__cancelaste-la-reserva">Cancelaste la reserva</p>
              <p className="t3-cuerpo__sab-11-10-18-20-faltaban-70-h">Sáb 11/10 · 18:20 · faltaban 70 h</p>
            </div>
          </div>
          <div className="t3-cuerpo__paso-devolucion-pedida-a-mercado-pago">
            <div className="t3-cuerpo__marca-4">
              <div className="t3-cuerpo__ellipse-4" />
              <div className="t3-cuerpo__rectangle-4" />
            </div>
            <div className="t3-cuerpo__t-4">
              <p className="t3-cuerpo__devolucion-pedida-a-mercado-pago">Devolución pedida a Mercado Pago</p>
              <p className="t3-cuerpo__sab-11-10-18-20">Sáb 11/10 · 18:20</p>
            </div>
          </div>
          <div className="t3-cuerpo__paso-devolucion-acreditada">
            <div className="t3-cuerpo__marca-5">
              <div className="t3-cuerpo__ellipse-5" />
            </div>
            <div className="t3-cuerpo__t-5">
              <p className="t3-cuerpo__devolucion-acreditada">Devolución acreditada</p>
              <p className="t3-cuerpo__te-avisamos-por-whatsapp">Te avisamos por WhatsApp</p>
            </div>
          </div>
        </div>
        <Boton tipo="primario" className="t3-cuerpo__volver-al-inicio" href="/reservar">Reservar otra clase</Boton>
        <Boton tipo="secundario" className="t3-cuerpo__boton" href="/">Volver al inicio</Boton>
      </section>
    </>
  );
}
