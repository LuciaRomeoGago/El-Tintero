// Generado desde Figma (r8). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import "./ReservaRechazada.css";

export default function ReservaRechazada() {
  return (
    <>
      <section className="r8-renglones" />
      <section className="r8-margen" />
      <section className="r8-cuerpo">
        <div className="r8-cuerpo__texto">
          <p className="r8-cuerpo__pago-rechazado">PAGO RECHAZADO</p>
          <p className="r8-cuerpo__el-pago-no-se-pudo-hacer">El pago no se pudo hacer.</p>
          <p className="r8-cuerpo__no-se-cobro-nada-podes-intent">No se cobró nada. Podés intentar de nuevo con otro medio de pago: el lugar de Juli sigue guardado unos minutos más.</p>
          <div className="r8-cuerpo__aviso">
            <div className="r8-cuerpo__icono">
              <p className="r8-cuerpo__x">×</p>
            </div>
            <div className="r8-cuerpo__textos">
              <p className="r8-cuerpo__el-pago-fue-rechazado">Lugar guardado por 12:30 minutos.</p>
              <p className="r8-cuerpo__no-se-cobro-nada-podes-intent-2">Después se libera para otra persona.</p>
            </div>
          </div>
          <div className="r8-cuerpo__botones">
            <Boton tipo="resaltador" className="r8-cuerpo__intentar-de-nuevo" href="/reservar/pago">Intentar de nuevo</Boton>
            <Boton tipo="secundario" className="r8-cuerpo__cambiar-el-horario" href="/reservar/horario">Cambiar el horario</Boton>
          </div>
        </div>
        <div className="r8-cuerpo__resumen">
          <div className="r8-cuerpo__resumen-de-la-reserva">
            <div className="r8-cuerpo__arriba">
              <p className="r8-cuerpo__tu-reserva">TU RESERVA</p>
            </div>
            <div className="r8-cuerpo__clase">
              <p className="r8-cuerpo__matematica-2-ano">Matemática · 2.º año</p>
              <p className="r8-cuerpo__mar-14-oct-17-00-presencia">MAR 14 OCT · 17:00 · PRESENCIAL · CAROLINA T.</p>
            </div>
            <div className="r8-cuerpo__rectangle" />
            <div className="r8-cuerpo__montos">
              <div className="r8-cuerpo__precio-de-la-clase">
                <p className="r8-cuerpo__precio-de-la-clase-2">Precio de la clase</p>
                <p className="r8-cuerpo__n8-000">$ 40.000</p>
              </div>
              <div className="r8-cuerpo__sena-online-50">
                <p className="r8-cuerpo__sena-online-50-2">Seña online (50%)</p>
                <p className="r8-cuerpo__n4-000">$ 20.000</p>
              </div>
              <div className="r8-cuerpo__saldo-en-el-instituto">
                <p className="r8-cuerpo__saldo-en-el-instituto-2">Saldo en el instituto</p>
                <p className="r8-cuerpo__n4-000-2">$ 20.000</p>
              </div>
            </div>
            <Boton tipo="resaltador" className="r8-cuerpo__boton" href="/reservar/pago">Pagar seña de $ 20.000</Boton>
            <p className="r8-cuerpo__te-guardamos-el-lugar-15-minut">Te guardamos el lugar 20 minutos mientras pagás.</p>
          </div>
        </div>
        <p className="r8-cuerpo__pago-rechazado-2">PAGO RECHAZADO</p>
        <p className="r8-cuerpo__el-pago-no-se-pudo-hacer-2">El pago no se pudo hacer.</p>
        <p className="r8-cuerpo__no-se-cobro-nada-podes-intent-3">No se cobró nada. Podés intentar de nuevo con otro medio de pago.</p>
        <div className="r8-cuerpo__aviso-2">
          <div className="r8-cuerpo__icono-2">
            <p className="r8-cuerpo__x-2">×</p>
          </div>
          <div className="r8-cuerpo__textos-2">
            <p className="r8-cuerpo__el-pago-fue-rechazado-2">Lugar guardado por 12:30 minutos.</p>
            <p className="r8-cuerpo__no-se-cobro-nada-podes-intent-4">Después se libera para otra persona.</p>
          </div>
        </div>
        <Boton tipo="resaltador" className="r8-cuerpo__intentar-de-nuevo-2" href="/reservar/pago">Intentar de nuevo</Boton>
        <Boton tipo="secundario" className="r8-cuerpo__cambiar-el-horario-2" href="/reservar/horario">Cambiar el horario</Boton>
      </section>
    </>
  );
}
