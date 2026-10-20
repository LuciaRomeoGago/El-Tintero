import A from "./A.jsx";

// Botón del sistema de diseño. tipo: primario | secundario | resaltador | oscuro
export default function Boton({ tipo = "primario", href, className = "", children, ...resto }) {
  const cls = `boton boton--${tipo} ${className}`;
  if (href) return <A href={href} className={cls} {...resto}>{children}</A>;
  return <button type="button" className={cls} {...resto}>{children}</button>;
}
