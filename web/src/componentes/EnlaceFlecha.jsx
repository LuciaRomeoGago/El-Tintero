import A from "./A.jsx";
import Trazo from "./Trazo.jsx";

export default function EnlaceFlecha({ href, className = "", children }) {
  const contenido = (<><span>{children}</span><Trazo forma="flechita" /></>);
  if (href) return <A href={href} className={`enlace-flecha ${className}`}>{contenido}</A>;
  return <span className={`enlace-flecha ${className}`}>{contenido}</span>;
}
