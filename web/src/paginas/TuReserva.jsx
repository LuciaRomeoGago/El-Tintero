// Generado desde Figma (t1). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import Trazo from "../componentes/Trazo.jsx";
import "./TuReserva.css";

export default function TuReserva() {
  return (
    <>
      <section className="t1-renglones" />
      <section className="t1-margen" />
      <section className="t1-cuerpo">
        <div className="t1-cuerpo__texto">
          <div className="t1-cuerpo__listo">
            <p className="t1-cuerpo__listo-ana">Hola, Ana</p>
            <Trazo forma="tilde" className="t1-cuerpo__trazo" />
          </div>
          <h1 className="t1-cuerpo__titulo">
            <span className="t1-cuerpo__el-lugar-de-juli-esta">Te esperamos el</span>
            <span className="t1-cuerpo__resaltador">
              <span className="t1-cuerpo__confirmado">martes 14.</span>
            </span>
          </h1>
          <p className="t1-cuerpo__te-mandamos-el-detalle-por-wha">La clase de Juli está confirmada. <br />El saldo de $ 20.000 se paga en el instituto el día de la clase. Si cancelás hasta el domingo 12 a las 17:00 (48 horas antes), te devolvemos la seña; después, queda para el instituto.</p>
          <div className="t1-cuerpo__linea-de-tiempo">
            <p className="t1-cuerpo__en-que-esta-tu-reserva">EN QUÉ ESTÁ TU RESERVA</p>
            <div className="t1-cuerpo__esp" />
            <div className="t1-cuerpo__paso-reservaste-el-lugar">
              <div className="t1-cuerpo__marca">
                <div className="t1-cuerpo__ellipse" />
                <div className="t1-cuerpo__rectangle" />
              </div>
              <div className="t1-cuerpo__t">
                <p className="t1-cuerpo__reservaste-el-lugar">Reservaste el lugar</p>
                <p className="t1-cuerpo__sab-11-10-10-42">Sáb 11/10 · 10:42</p>
              </div>
            </div>
            <div className="t1-cuerpo__paso-sena-aprobada-20-000">
              <div className="t1-cuerpo__marca-2">
                <div className="t1-cuerpo__ellipse-2" />
                <div className="t1-cuerpo__rectangle-2" />
              </div>
              <div className="t1-cuerpo__t-2">
                <p className="t1-cuerpo__sena-aprobada-20-000">Seña aprobada · $ 20.000</p>
                <p className="t1-cuerpo__sab-11-10-10-47">Sáb 11/10 · 10:47</p>
              </div>
            </div>
            <div className="t1-cuerpo__paso-clase-de-matematica">
              <div className="t1-cuerpo__marca-3">
                <div className="t1-cuerpo__ellipse-3" />
                <div className="t1-cuerpo__rectangle-3" />
              </div>
              <div className="t1-cuerpo__t-3">
                <p className="t1-cuerpo__clase-de-matematica">Clase de Matemática</p>
                <p className="t1-cuerpo__mar-14-10-17-00">Mar 14/10 · 17:00</p>
              </div>
            </div>
            <div className="t1-cuerpo__paso-saldo-cobrado-20-000">
              <div className="t1-cuerpo__marca-4">
                <div className="t1-cuerpo__ellipse-4" />
              </div>
              <div className="t1-cuerpo__t-4">
                <p className="t1-cuerpo__saldo-cobrado-20-000">Saldo cobrado · $ 20.000</p>
                <p className="t1-cuerpo__en-la-sede-al-terminar-la-clase">En la sede, al terminar la clase</p>
              </div>
            </div>
          </div>
          <div className="t1-cuerpo__botones">
            <Boton tipo="primario" className="t1-cuerpo__volver-al-inicio">Agregar al calendario</Boton>
            <Boton tipo="secundario" className="t1-cuerpo__boton">Cancelar la reserva</Boton>
          </div>
        </div>
        <div className="t1-cuerpo__ficha">
          <div className="t1-cuerpo__resumen-de-la-reserva">
            <div className="t1-cuerpo__arriba">
              <p className="t1-cuerpo__tu-reserva">TU RESERVA</p>
              <div className="t1-cuerpo__insignia">
                <div className="t1-cuerpo__punto" />
                <p className="t1-cuerpo__confirmada">Confirmada</p>
              </div>
            </div>
            <div className="t1-cuerpo__clase">
              <p className="t1-cuerpo__matematica-2-ano">Matemática · 2.º año</p>
              <p className="t1-cuerpo__mar-14-oct-17-00-presencia">MAR 14 OCT · 17:00 · PRESENCIAL · CAROLINA T.</p>
            </div>
            <div className="t1-cuerpo__rectangle-4" />
            <div className="t1-cuerpo__montos">
              <div className="t1-cuerpo__precio-de-la-clase">
                <p className="t1-cuerpo__precio-de-la-clase-2">Precio de la clase</p>
                <p className="t1-cuerpo__n8-000">$ 40.000</p>
              </div>
              <div className="t1-cuerpo__sena-online-50">
                <p className="t1-cuerpo__sena-online-50-2">Seña online (50%)</p>
                <p className="t1-cuerpo__n4-000-pagado">$ 20.000 ✓</p>
              </div>
              <div className="t1-cuerpo__saldo-en-el-instituto">
                <p className="t1-cuerpo__saldo-en-el-instituto-2">Saldo en el instituto</p>
                <p className="t1-cuerpo__n4-000">$ 20.000</p>
              </div>
            </div>
            <p className="t1-cuerpo__te-mandamos-la-confirmacion-po">Te mandamos la confirmación por WhatsApp. El saldo se paga en el instituto el día de la clase.</p>
          </div>
          <div className="t1-cuerpo__nota-adhesiva">
            <p className="t1-cuerpo__texto-2">Primera clase: traé la carpeta y la última evaluación.</p>
            <div className="t1-cuerpo__pie">
              <p className="t1-cuerpo__aviso-nov">PARA EL MARTES</p>
              <p className="t1-cuerpo__reserva">✓</p>
            </div>
            <div className="t1-cuerpo__chinche" />
          </div>
        </div>
        <div className="t1-cuerpo__listo-2">
          <p className="t1-cuerpo__listo-ana-2">Hola, Ana</p>
          <Trazo forma="tilde" className="t1-cuerpo__trazo-2" />
        </div>
        <p className="t1-cuerpo__el-lugar-de-juli-esta-confirma">Te esperamos el martes 14.</p>
        <p className="t1-cuerpo__te-mandamos-el-detalle-por-wha-2">La clase de Juli está confirmada. El saldo de $ 20.000 se paga en el instituto el día de la clase.</p>
        <div className="t1-cuerpo__resumen-de-la-reserva-2">
          <div className="t1-cuerpo__arriba-2">
            <p className="t1-cuerpo__tu-reserva-2">TU RESERVA</p>
            <div className="t1-cuerpo__insignia-2">
              <div className="t1-cuerpo__punto-2" />
              <p className="t1-cuerpo__confirmada-2">Confirmada</p>
            </div>
          </div>
          <div className="t1-cuerpo__clase-2">
            <p className="t1-cuerpo__matematica-2-ano-2">Matemática · 2.º año</p>
            <p className="t1-cuerpo__mar-14-oct-17-00-presencia-2">MAR 14 OCT · 17:00 · PRESENCIAL · CAROLINA T.</p>
          </div>
          <div className="t1-cuerpo__rectangle-5" />
          <div className="t1-cuerpo__montos-2">
            <div className="t1-cuerpo__precio-de-la-clase-3">
              <p className="t1-cuerpo__precio-de-la-clase-4">Precio de la clase</p>
              <p className="t1-cuerpo__n8-000-2">$ 40.000</p>
            </div>
            <div className="t1-cuerpo__sena-online-50-3">
              <p className="t1-cuerpo__sena-online-50-4">Seña online (50%)</p>
              <p className="t1-cuerpo__n4-000-pagado-2">$ 20.000 ✓</p>
            </div>
            <div className="t1-cuerpo__saldo-en-el-instituto-3">
              <p className="t1-cuerpo__saldo-en-el-instituto-4">Saldo en el instituto</p>
              <p className="t1-cuerpo__n4-000-2">$ 20.000</p>
            </div>
          </div>
          <p className="t1-cuerpo__te-mandamos-la-confirmacion-po-2">Si cancelás hasta el domingo 12 a las 17:00 (48 horas antes), te devolvemos la seña. Después, queda para el instituto.</p>
        </div>
        <div className="t1-cuerpo__linea-de-tiempo-2">
          <p className="t1-cuerpo__en-que-esta-tu-reserva-2">EN QUÉ ESTÁ TU RESERVA</p>
          <div className="t1-cuerpo__esp-2" />
          <div className="t1-cuerpo__paso-reservaste-el-lugar-2">
            <div className="t1-cuerpo__marca-5">
              <div className="t1-cuerpo__ellipse-5" />
              <div className="t1-cuerpo__rectangle-6" />
            </div>
            <div className="t1-cuerpo__t-5">
              <p className="t1-cuerpo__reservaste-el-lugar-2">Reservaste el lugar</p>
              <p className="t1-cuerpo__sab-11-10-10-42-2">Sáb 11/10 · 10:42</p>
            </div>
          </div>
          <div className="t1-cuerpo__paso-sena-aprobada-20-000-2">
            <div className="t1-cuerpo__marca-6">
              <div className="t1-cuerpo__ellipse-6" />
              <div className="t1-cuerpo__rectangle-7" />
            </div>
            <div className="t1-cuerpo__t-6">
              <p className="t1-cuerpo__sena-aprobada-20-000-2">Seña aprobada · $ 20.000</p>
              <p className="t1-cuerpo__sab-11-10-10-47-2">Sáb 11/10 · 10:47</p>
            </div>
          </div>
          <div className="t1-cuerpo__paso-clase-de-matematica-2">
            <div className="t1-cuerpo__marca-7">
              <div className="t1-cuerpo__ellipse-7" />
              <div className="t1-cuerpo__rectangle-8" />
            </div>
            <div className="t1-cuerpo__t-7">
              <p className="t1-cuerpo__clase-de-matematica-2">Clase de Matemática</p>
              <p className="t1-cuerpo__mar-14-10-17-00-2">Mar 14/10 · 17:00</p>
            </div>
          </div>
          <div className="t1-cuerpo__paso-saldo-cobrado-20-000-2">
            <div className="t1-cuerpo__marca-8">
              <div className="t1-cuerpo__ellipse-8" />
            </div>
            <div className="t1-cuerpo__t-8">
              <p className="t1-cuerpo__saldo-cobrado-20-000-2">Saldo cobrado · $ 20.000</p>
              <p className="t1-cuerpo__en-la-sede-al-terminar-la-clase-2">En la sede, al terminar la clase</p>
            </div>
          </div>
        </div>
        <Boton tipo="primario" className="t1-cuerpo__volver-al-inicio-2">Agregar al calendario</Boton>
        <Boton tipo="secundario" className="t1-cuerpo__boton-2" href="/tu-reserva/cancelar">Cancelar la reserva</Boton>
      </section>
    </>
  );
}
