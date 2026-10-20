import { NavLink } from "react-router-dom";

// Enlace: adentro del sitio navega sin recargar; afuera abre en otra pestaña.
export default function A({ href, children, ...resto }) {
  if (href && href.startsWith("/")) return <NavLink to={href} end {...resto}>{children}</NavLink>;
  return <a href={href} target="_blank" rel="noreferrer" {...resto}>{children}</a>;
}
