import Trazo from "./Trazo.jsx";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import A from "./A.jsx";
import Boton from "./Boton.jsx";
import Logo from "./Logo.jsx";
import "./Encabezado.css";

const EN_RESERVA = /^\/reservar(\/(materia|horario|datos|pago|sin-clases))?\/?$/;

const ENLACES = [["/que-ofrecemos", "Qué ofrecemos"], ["/niveles", "Niveles"], ["/modalidades", "Modalidades"], ["/sobre-el-tintero", "Sobre El Tintero"]];

// Encabezado de Figma. En celular, el menú abierto es la pantalla "Menú abierto · celular".
export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [tope, setTope] = useState(64);
  const cabecera = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => { setAbierto(false); }, [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("sin-scroll", abierto);
    if (!abierto) return;
    setTope(cabecera.current.getBoundingClientRect().bottom); // el panel arranca justo debajo del encabezado
    const esc = (e) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [abierto]);
  return (
    <>
    <header ref={cabecera} className={`encabezado${abierto ? " encabezado--abierto" : ""}`}>
      <A href="/" className="encabezado__marca" aria-label="El Tintero, inicio">
        <Logo className="encabezado__marca-logo" />
        <p className="encabezado__el-tintero">El Tintero</p>
      </A>
      <nav className="encabezado__navegacion" aria-label="Principal">
        <A href="/que-ofrecemos" className="encabezado__que-ofrecemos">Qué ofrecemos</A>
        <A href="/niveles" className="encabezado__niveles">Niveles</A>
        <A href="/modalidades" className="encabezado__modalidades">Modalidades</A>
        <A href="/sobre-el-tintero" className="encabezado__sobre-el-tintero">Sobre El Tintero</A>
      </nav>
      {EN_RESERVA.test(pathname) ? <Boton tipo="primario" className="encabezado__boton" href="/contacto">¿Dudas? Escribinos</Boton> : <Boton tipo="primario" className="encabezado__boton" href="/reservar">Reservar una clase</Boton>}
      <button type="button" className="encabezado__menu" aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={abierto} aria-controls="menu-celular" onClick={() => setAbierto(!abierto)}>
        <span className="encabezado__rectangle" />
        <span className="encabezado__rectangle-2" />
        <span className="encabezado__rectangle-3" />
      </button>
    </header>
      <div id="menu-celular" className="menu-celular" hidden={!abierto} style={{ top: tope }}>
        <nav className="menu-celular__navegacion" aria-label="Principal">
          {ENLACES.map(([href, texto]) => (
            <A key={href} href={href} className="menu-celular__enlace"><span>{texto}</span><Trazo forma="flechita" /></A>
          ))}
        </nav>
        <Boton tipo="primario" href="/reservar" className="menu-celular__boton">Reservar una clase</Boton>
        <div className="menu-celular__contacto">
          <p className="menu-celular__frase">¡Que no te quede nada en el tintero!</p>
          <p className="menu-celular__datos">WhatsApp · Instagram · Tandil</p>
        </div>
      </div>
    </>
  );
}
