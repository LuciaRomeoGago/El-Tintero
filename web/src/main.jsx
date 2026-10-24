import { ViteReactSSG } from "vite-react-ssg";
import "./fuentes.css";
import "./tokens.css";
import "./componentes/comunes.css";
import { rutas } from "./rutas.jsx";

// Cada página se pre-renderiza a HTML al compilar (npm run build) y después se vuelve interactiva.
export const createRoot = ViteReactSSG({ routes: rutas });
