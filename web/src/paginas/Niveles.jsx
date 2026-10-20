// Niveles: el hero con las pestañas y la hoja del nivel elegido (cada una sale de su pantalla de Figma).
import { useEffect, useRef, useState } from "react";
import NivelesHero from "./NivelesHero.jsx";
import NivelPrimaria from "./NivelPrimaria.jsx";
import NivelSecundario from "./NivelSecundario.jsx";
import NivelTerciario from "./NivelTerciario.jsx";
import { activarMovimiento } from "../componentes/movimiento.js";
import "./NivelesSelector.css";

const HOJAS = [NivelPrimaria, NivelSecundario, NivelTerciario];
const ANCLAS = ["#primaria", "#secundaria", "#terciario"];

export default function Niveles() {
  const [nivel, setNivel] = useState(0);
  const elegido = useRef(false);
  const Hoja = HOJAS[nivel];

  // /niveles#secundaria abre directo en ese nivel
  useEffect(() => {
    const i = ANCLAS.indexOf(window.location.hash);
    if (i > 0) { elegido.current = true; setNivel(i); }
  }, []);

  // el fondo oscuro se desliza hasta la pestaña elegida
  useEffect(() => {
    const pest = document.querySelector(".p2-hero__pestanas");
    const act = pest && pest.querySelector(".pestana--activa");
    const ind = pest && pest.querySelector(".pestanas__indicador");
    if (!act || !ind) return undefined;
    const ubicar = () => {
      Object.assign(ind.style, { left: `${act.offsetLeft}px`, top: `${act.offsetTop}px`, width: `${act.offsetWidth}px`, height: `${act.offsetHeight}px` });
      pest.classList.add("medido");
    };
    ubicar();
    window.addEventListener("resize", ubicar);
    return () => { window.removeEventListener("resize", ubicar); };
  }, [nivel]);

  // la hoja nueva se arma con el mismo movimiento que el resto de la página
  useEffect(() => {
    if (!elegido.current) return undefined;
    const fin = activarMovimiento(document.querySelector(".pagina main > section:last-child"));
    return () => { if (typeof fin === "function") fin(); };
  }, [nivel]);

  const elegir = (i) => {
    elegido.current = true;
    setNivel(i);
    window.history.replaceState(null, "", ANCLAS[i]);
  };

  return (
    <>
      <NivelesHero nivel={nivel} elegir={elegir} />
      <Hoja key={nivel} />
    </>
  );
}
