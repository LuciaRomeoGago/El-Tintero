import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AvisoSuperior from "./AvisoSuperior.jsx";
import Encabezado from "./Encabezado.jsx";
import Pie from "./Pie.jsx";

// Páginas que en Figma llevan el aviso superior arriba del encabezado.
const CON_AVISO = new Set(["/"]);
// Panel y agenda docente: pantallas propias (menú lateral), sin encabezado ni pie del sitio.
const INTERNA = /^\/(panel|docente)(\/|$)/;

export default function Marco() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  if (INTERNA.test(pathname)) {
    return (
      <div className={pathname.startsWith("/panel") ? "pagina pagina--panel" : "pagina"}>
        <main><Outlet /></main>
      </div>
    );
  }
  return (
    <div className="pagina">
      {CON_AVISO.has(pathname) && <AvisoSuperior />}
      <Encabezado />
      <main>
        <Outlet />
      </main>
      <Pie />
    </div>
  );
}
