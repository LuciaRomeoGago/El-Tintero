// Generado desde Figma (contacto). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import "./Contacto.css";

export default function Contacto() {
  return (
    <>
      <section className="contacto-pila">
        <div className="contacto-pila__hero">
          <div className="contacto-pila__renglones" />
          <div className="contacto-pila__margen" />
          <p className="contacto-pila__niveles">CONTACTO</p>
          <div className="contacto-pila__t">
            <p className="contacto-pila__de-la-primera-tabla">Escribinos,</p>
          </div>
          <div className="contacto-pila__t2">
            <p className="contacto-pila__al">te</p>
            <div className="contacto-pila__resaltador">
              <p className="contacto-pila__ingreso">respondemos.</p>
            </div>
          </div>
          <p className="contacto-pila__tres-niveles-con-la-misma-form">Secretaría responde por WhatsApp de lunes a viernes, de 14 a 20. Si preferís, pasá por la sede.</p>
          <div className="contacto-pila__contacto">
            <div className="contacto-pila__botones">
              <Boton tipo="primario" className="contacto-pila__boton">Escribir por WhatsApp</Boton>
              <Boton tipo="secundario" className="contacto-pila__boton-2" href="https://www.instagram.com/eltintero.apoyoescolar/">Ver en Instagram</Boton>
            </div>
            <p className="contacto-pila__pasa-por-la-sede">Pasá por la sede</p>
            <p className="contacto-pila__chacabuco-1180-tandil-lun-a-vie-14-a-20-eltintero-apoyoescolar">CHACABUCO 1180 · TANDIL · LUN A VIE 14 A 20 · @ELTINTERO.APOYOESCOLAR</p>
          </div>
        </div>
        <div className="contacto-pila__preguntas">
          <div className="contacto-pila__renglones-2" />
          <div className="contacto-pila__margen-2" />
          <div className="contacto-pila__texto">
            <p className="contacto-pila__preguntas-2">PREGUNTAS</p>
            <p className="contacto-pila__lo-que-siempre-nos-preguntan">Lo que siempre nos preguntan.</p>
            <p className="contacto-pila__te-queda-otra-duda-escribino">¿Te queda otra duda? Escribinos por WhatsApp y te responde secretaría.</p>
            <Boton tipo="secundario" className="contacto-pila__boton-3">Escribir por WhatsApp</Boton>
          </div>
          <p className="contacto-pila__preguntas-3">PREGUNTAS</p>
          <p className="contacto-pila__lo-que-siempre-nos-preguntan-2">Lo que siempre nos preguntan.</p>
          <div className="contacto-pila__acordeon">
            <div className="contacto-pila__pregunta">
              <div className="contacto-pila__fila">
                <p className="contacto-pila__tengo-que-crear-una-cuenta-pa">¿Tengo que crear una cuenta para reservar?</p>
                <div className="contacto-pila__signo">
                  <p className="contacto-pila__x">−</p>
                </div>
              </div>
              <p className="contacto-pila__no-elegis-la-clase-dejas-un">No. Elegís la clase, dejás un nombre y un teléfono, y pagás la seña del 50%. Con el pago aprobado, el lugar queda confirmado y te llega el detalle por WhatsApp.</p>
            </div>
            <div className="contacto-pila__pregunta-2">
              <div className="contacto-pila__fila-2">
                <p className="contacto-pila__puedo-reservar-para-otra-pers">¿Puedo reservar para otra persona?</p>
                <div className="contacto-pila__signo-2">
                  <p className="contacto-pila__x-2">+</p>
                </div>
              </div>
            </div>
            <div className="contacto-pila__pregunta-3">
              <div className="contacto-pila__fila-3">
                <p className="contacto-pila__como-son-las-clases-online">¿Cómo son las clases online?</p>
                <div className="contacto-pila__signo-3">
                  <p className="contacto-pila__x-3">+</p>
                </div>
              </div>
            </div>
            <div className="contacto-pila__pregunta-4">
              <div className="contacto-pila__fila-4">
                <p className="contacto-pila__que-pasa-si-mi-materia-no-apa">¿Qué pasa si mi materia no aparece?</p>
                <div className="contacto-pila__signo-4">
                  <p className="contacto-pila__x-4">+</p>
                </div>
              </div>
            </div>
            <div className="contacto-pila__pregunta-5">
              <div className="contacto-pila__fila-5">
                <p className="contacto-pila__y-si-tengo-que-cancelar">¿Y si tengo que cancelar?</p>
                <div className="contacto-pila__signo-5">
                  <p className="contacto-pila__x-5">+</p>
                </div>
              </div>
            </div>
            <div className="contacto-pila__pregunta-6">
              <div className="contacto-pila__fila-6">
                <p className="contacto-pila__cuando-se-paga-el-resto">¿Cuándo se paga el resto?</p>
                <div className="contacto-pila__signo-6">
                  <p className="contacto-pila__x-6">+</p>
                </div>
              </div>
            </div>
          </div>
          <Boton tipo="secundario" className="contacto-pila__boton-4">Escribir por WhatsApp</Boton>
        </div>
      </section>
    </>
  );
}
