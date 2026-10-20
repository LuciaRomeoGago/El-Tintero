// Generado desde Figma (a6). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import A from "../componentes/A.jsx";
import Boton from "../componentes/Boton.jsx";
import Logo from "../componentes/Logo.jsx";
import "./PanelDetalleReserva.css";

export default function PanelDetalleReserva() {
  return (
    <>
      <section className="a6-pantalla">
        <div className="a6-pantalla__lugar-del-menu" />
        <div className="a6-pantalla__contenido">
          <A href="/panel/reservas" className="a6-pantalla__reservas">← Reservas</A>
          <div className="a6-pantalla__cabecera">
            <div className="a6-pantalla__t">
              <p className="a6-pantalla__reserva-0417">RESERVA #0417</p>
              <p className="a6-pantalla__juli-rios">Juli Ríos</p>
              <div className="a6-pantalla__insignia">
                <div className="a6-pantalla__punto" />
                <p className="a6-pantalla__confirmada">Confirmada</p>
              </div>
            </div>
            <div className="a6-pantalla__acciones">
              <Boton tipo="secundario" className="a6-pantalla__boton" href="/panel/reservas">Cancelar reserva</Boton>
            </div>
          </div>
          <div className="a6-pantalla__columnas">
            <div className="a6-pantalla__izquierda">
              <div className="a6-pantalla__datos">
                <div className="a6-pantalla__dato-clase">
                  <p className="a6-pantalla__clase">CLASE</p>
                  <p className="a6-pantalla__matematica-2-ano-grupo-reducido">Matemática · 2.º año · Grupo reducido</p>
                </div>
                <div className="a6-pantalla__dato-cuando">
                  <p className="a6-pantalla__cuando">CUÁNDO</p>
                  <p className="a6-pantalla__martes-14-10-17-00-a-18-00-presencial">Martes 14/10 · 17:00 a 18:00 · Presencial</p>
                </div>
                <div className="a6-pantalla__dato-docente">
                  <p className="a6-pantalla__docente">DOCENTE</p>
                  <p className="a6-pantalla__carolina-t">Carolina T.</p>
                </div>
                <div className="a6-pantalla__dato-responsable">
                  <p className="a6-pantalla__responsable">RESPONSABLE</p>
                  <p className="a6-pantalla__ana-rios-whatsapp-249-412-3456">Ana Ríos · WhatsApp 249 412 3456</p>
                </div>
                <div className="a6-pantalla__dato-notas">
                  <p className="a6-pantalla__notas">NOTAS</p>
                  <p className="a6-pantalla__prepara-la-prueba-de-funciones-lineales">Prepara la prueba de funciones lineales.</p>
                </div>
              </div>
              <div className="a6-pantalla__historial">
                <p className="a6-pantalla__historial-2">Historial</p>
                <div className="a6-pantalla__evento">
                  <p className="a6-pantalla__n11-10-10-42">11/10 · 10:42</p>
                  <p className="a6-pantalla__reserva-creada-lugar-retenido-20-minutos">Reserva creada · lugar retenido 20 minutos</p>
                </div>
                <div className="a6-pantalla__evento-2">
                  <p className="a6-pantalla__n11-10-10-47">11/10 · 10:47</p>
                  <p className="a6-pantalla__mercado-pago-aviso-pago-aprobado-reserva-confirmada">Mercado Pago avisó pago aprobado · reserva confirmada</p>
                </div>
                <div className="a6-pantalla__evento-3">
                  <p className="a6-pantalla__n11-10-10-47-2">11/10 · 10:47</p>
                  <p className="a6-pantalla__whatsapp-de-confirmacion-enviado-a-ana-rios">WhatsApp de confirmación enviado a Ana Ríos</p>
                </div>
              </div>
              <div className="a6-pantalla__tarjeta-de-mensajes">
                <div className="a6-pantalla__cabecera-2">
                  <p className="a6-pantalla__mensajes-por-whatsapp">Mensajes por WhatsApp</p>
                  <p className="a6-pantalla__a-ana-rios-249-412-3456">a Ana Ríos · 249 412 3456</p>
                </div>
                <div className="a6-pantalla__mensaje-confirmacion">
                  <div className="a6-pantalla__datos-2">
                    <p className="a6-pantalla__confirmacion">Confirmación</p>
                    <p className="a6-pantalla__n11-10-10-47-3">11/10 · 10:47</p>
                    <div className="a6-pantalla__estado-entregado">
                      <p className="a6-pantalla__entregado">Entregado</p>
                    </div>
                  </div>
                  <div className="a6-pantalla__texto-enviado">
                    <p className="a6-pantalla__hola-ana-la-reserva-de-juli-esta-confirmada-matematica-2-ano-grupo-martes-14-de-octubre-17-00-a-18-00-chacabuco-1180-tandil-docente-carolina-t-sena-pagada-20-000-saldo-el-dia-de-la-clase-20-000-si-cancelas-hasta-el-domingo-12-a-las-17-00-te-devolvemos-la-sena-tu-reserva-enlace">¡Hola, Ana! La reserva de Juli está confirmada.<br />Matemática · 2.º año · grupo<br />Martes 14 de octubre, 17:00 a 18:00 · Chacabuco 1180, Tandil<br />Docente: Carolina T.<br />Seña pagada: $ 20.000 · Saldo el día de la clase: $ 20.000<br />Si cancelás hasta el domingo 12 a las 17:00, te devolvemos la seña. Tu reserva: [enlace]</p>
                  </div>
                </div>
                <div className="a6-pantalla__acciones-2">
                  <p className="a6-pantalla__asi-le-llego-el-mensaje-a-la-familia-si-un-envio-falla-o-quedo-en-modo-simulado-se-puede-reenviar-desde-aca">Así le llegó el mensaje a la familia. Si un envío falla o quedó en modo simulado, se puede reenviar desde acá.</p>
                  <Boton tipo="secundario" className="a6-pantalla__boton-2">Reenviar</Boton>
                </div>
              </div>
            </div>
            <div className="a6-pantalla__pagos">
              <p className="a6-pantalla__pagos-2">Pagos</p>
              <div className="a6-pantalla__pago-precio">
                <div className="a6-pantalla__l">
                  <p className="a6-pantalla__precio">Precio</p>
                </div>
                <p className="a6-pantalla__n40-000">$ 40.000</p>
              </div>
              <div className="a6-pantalla__pago-sena-mercado-pago">
                <div className="a6-pantalla__l-2">
                  <p className="a6-pantalla__sena-mercado-pago">Seña · Mercado Pago</p>
                  <p className="a6-pantalla__operacion-1234567890-aprobada-11-10-10-47">Operación 1234567890 · aprobada 11/10 10:47</p>
                </div>
                <p className="a6-pantalla__n20-000">$ 20.000</p>
              </div>
              <div className="a6-pantalla__pago-saldo">
                <div className="a6-pantalla__l-3">
                  <p className="a6-pantalla__saldo">Saldo</p>
                  <p className="a6-pantalla__por-cobrar-el-dia-de-la-clase">Por cobrar el día de la clase</p>
                </div>
                <p className="a6-pantalla__n20-000-2">$ 20.000</p>
              </div>
              <Boton tipo="primario" className="a6-pantalla__boton-3">Cobrado en efectivo</Boton>
              <Boton tipo="secundario" className="a6-pantalla__boton-4">Cobrado por transferencia</Boton>
              <p className="a6-pantalla__si-cancela-ahora-faltan-menos-de-48-h-la-sena-queda-para-el-instituto">Si cancela ahora (faltan menos de 48 h), la seña queda para el instituto.</p>
            </div>
          </div>
        </div>
        <div className="a6-pantalla__menu">
          <div className="a6-pantalla__marca">
            <Logo className="a6-pantalla__marca-logo" />
            <div className="a6-pantalla__t-2">
              <p className="a6-pantalla__el-tintero">El Tintero</p>
              <p className="a6-pantalla__panel">PANEL</p>
            </div>
          </div>
          <A className="a6-pantalla__item-agenda" href="/panel/agenda">
            <p className="a6-pantalla__agenda">Agenda</p>
          </A>
          <A className="a6-pantalla__item-clases" href="/panel/clases">
            <p className="a6-pantalla__clases">Clases</p>
          </A>
          <A className="a6-pantalla__item-reservas" href="/panel/reservas">
            <p className="a6-pantalla__reservas-2">Reservas</p>
            <div className="a6-pantalla__estado-2">
              <p className="a6-pantalla__n2">2</p>
            </div>
          </A>
          <A className="a6-pantalla__item-docentes" href="/panel/docentes">
            <p className="a6-pantalla__docentes">Docentes</p>
          </A>
          <div className="a6-pantalla__espacio" />
          <div className="a6-pantalla__usuario">
            <p className="a6-pantalla__sandra-gago">Sandra Gago</p>
            <p className="a6-pantalla__administracion">Administración</p>
            <A href="/panel" className="a6-pantalla__salir">Salir</A>
          </div>
        </div>
      </section>
    </>
  );
}
