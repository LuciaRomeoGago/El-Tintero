import A from "./A.jsx";
import Logo from "./Logo.jsx";
import "./Pie.css";

export default function Pie() {
  return (
    <footer className="pie">
      <div className="pie__grilla">
        <div className="pie__marca">
          <div className="pie__logo">
            <Logo className="pie__marca-logo" />
            <p className="pie__el-tintero">El Tintero</p>
          </div>
          <p className="pie__apoyo-escolar-en-tandil-desde">Apoyo escolar en Tandil desde 2001. Primaria, secundaria, terciario e ingreso, presencial y online.</p>
          <p className="pie__no-te-lleves-materias">¡Que no te quede nada en el tintero!</p>
        </div>
        <div className="pie__propuesta">
          <p className="pie__propuesta-2">PROPUESTA</p>
          <A href="/niveles" className="pie__niveles">Niveles</A>
          <A href="/que-ofrecemos" className="pie__materias">Materias</A>
          <A href="/modalidades" className="pie__modalidades">Modalidades</A>
          <p className="pie__clases-con-lugar">Clases con lugar</p>
        </div>
        <div className="pie__instituto">
          <p className="pie__instituto-2">INSTITUTO</p>
          <A href="/sobre-el-tintero" className="pie__historia">Historia</A>
          <A href="/profesores" className="pie__equipo">Equipo</A>
          <p className="pie__avisos">Avisos</p>
          <A href="/contacto" className="pie__preguntas">Preguntas</A>
        </div>
        <div className="pie__contacto">
          <p className="pie__contacto-2">CONTACTO</p>
          <A href="/contacto" className="pie__whatsapp">WhatsApp</A>
          <A href="https://www.instagram.com/eltintero.apoyoescolar/" className="pie__instagram">Instagram</A>
          <p className="pie__facebook">Facebook</p>
          <p className="pie__tandil-buenos-aires">Tandil, Buenos Aires</p>
        </div>
      </div>
      <div className="pie__marca-2">
        <div className="pie__logo-2">
          <Logo className="pie__marca-logo-2" />
          <p className="pie__el-tintero-2">El Tintero</p>
        </div>
        <p className="pie__apoyo-escolar-en-tandil-desde-2">Apoyo escolar en Tandil desde 2001. Primaria, secundaria, terciario e ingreso, presencial y online.</p>
        <p className="pie__no-te-lleves-materias-2">¡Que no te quede nada en el tintero!</p>
      </div>
      <div className="pie__columnas">
        <div className="pie__propuesta-3">
          <p className="pie__propuesta-4">PROPUESTA</p>
          <A href="/niveles" className="pie__niveles-2">Niveles</A>
          <A href="/que-ofrecemos" className="pie__materias-2">Materias</A>
          <A href="/modalidades" className="pie__modalidades-2">Modalidades</A>
          <p className="pie__clases-con-lugar-2">Clases con lugar</p>
        </div>
        <div className="pie__instituto-3">
          <p className="pie__instituto-4">INSTITUTO</p>
          <A href="/sobre-el-tintero" className="pie__historia-2">Historia</A>
          <A href="/profesores" className="pie__equipo-2">Equipo</A>
          <p className="pie__avisos-2">Avisos</p>
          <A href="/contacto" className="pie__preguntas-2">Preguntas</A>
        </div>
        <div className="pie__contacto-3">
          <p className="pie__contacto-4">CONTACTO</p>
          <A href="/contacto" className="pie__whatsapp-2">WhatsApp</A>
          <A href="https://www.instagram.com/eltintero.apoyoescolar/" className="pie__instagram-2">Instagram</A>
          <p className="pie__facebook-2">Facebook</p>
          <p className="pie__tandil-buenos-aires-2">Tandil, Buenos Aires</p>
        </div>
      </div>
      <div className="pie__legal">
        <p className="pie__n2026-el-tintero-tandil-bu">© 2026 El Tintero · Tandil, Buenos Aires</p>
        <p className="pie__diseno-y-desarrollo-lucia-rom">Diseño y desarrollo: Lucía Romeo Gago</p>
      </div>
    </footer>
  );
}
