import circulo from "../assets/trazo-circulo.svg?raw";
import tilde from "../assets/trazo-tilde.svg?raw";
import flecha from "../assets/trazo-flecha.svg?raw";
import subrayado from "../assets/trazo-subrayado.svg?raw";
import tachado from "../assets/trazo-tachado.svg?raw";
import llave from "../assets/trazo-llave.svg?raw";
import raya from "../assets/trazo-raya.svg?raw";
import flechita from "../assets/trazo-flechita.svg?raw";
import punto from "../assets/trazo-punto.svg?raw";

// Los trazos rojos van en línea para poder dibujarse solos (06 · Movimiento).
const preparar = (svg) => svg
  .replace("<svg ", '<svg preserveAspectRatio="none" ')
  .replaceAll("<path ", '<path pathLength="1" vector-effect="non-scaling-stroke" ');
const FORMAS = Object.fromEntries(Object.entries({ circulo, tilde, flecha, subrayado, tachado, llave, raya, flechita, punto }).map(([k, v]) => [k, preparar(v)]));

export default function Trazo({ forma, className = "" }) {
  return <span className={`trazo ${className}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: FORMAS[forma] }} />;
}
