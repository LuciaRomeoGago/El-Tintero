import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import { activarMovimiento } from "./componentes/movimiento.js";
import Marco from "./componentes/Marco.jsx";

// Cada página se carga aparte (su HTML ya viene pre-renderizado), lleva su título y activa el movimiento
// recién cuando su contenido está en pantalla.
const pagina = (cargar, titulo, privada = false) => async () => {
  const { default: Pagina } = await cargar();
  const Component = () => {
    useEffect(() => { const fin = activarMovimiento(document.querySelector(".pagina")); return () => { if (typeof fin === "function") fin(); }; }, []);
    return <><Head><title>{titulo}</title>{privada && <meta name="robots" content="noindex, nofollow" />}</Head><Pagina /></>;
  };
  return { Component };
};

export const rutas = [
  {
    path: "/",
    element: <Marco />,
    children: [
      { index: true, lazy: pagina(() => import("./paginas/Inicio.jsx"), "El Tintero · Apoyo escolar en Tandil") },
      { path: "que-ofrecemos", lazy: pagina(() => import("./paginas/QueOfrecemos.jsx"), "Qué ofrecemos · El Tintero") },
      { path: "niveles", lazy: pagina(() => import("./paginas/Niveles.jsx"), "Niveles · El Tintero") },
      { path: "modalidades", lazy: pagina(() => import("./paginas/Modalidades.jsx"), "Modalidades · El Tintero") },
      { path: "sobre-el-tintero", lazy: pagina(() => import("./paginas/SobreElTintero.jsx"), "Sobre El Tintero · El Tintero") },
      { path: "profesores", lazy: pagina(() => import("./paginas/Profesores.jsx"), "Profesores · El Tintero") },
      { path: "contacto", lazy: pagina(() => import("./paginas/Contacto.jsx"), "Contacto y preguntas · El Tintero") },
      // Reserva (simulada en el navegador, sin base de datos): una página por pantalla de Figma
      { path: "reservar", lazy: pagina(() => import("./paginas/ReservaPaso1.jsx"), "Reservar · Qué necesitás · El Tintero") },
      { path: "reservar/materia", lazy: pagina(() => import("./paginas/ReservaPaso2.jsx"), "Reservar · Materia y modalidad · El Tintero") },
      { path: "reservar/horario", lazy: pagina(() => import("./paginas/ReservaPaso3.jsx"), "Reservar · Horario · El Tintero") },
      { path: "reservar/sin-clases", lazy: pagina(() => import("./paginas/SinClases.jsx"), "Reservar · Sin clases · El Tintero") },
      { path: "reservar/datos", lazy: pagina(() => import("./paginas/ReservaPaso4.jsx"), "Reservar · Tus datos · El Tintero") },
      { path: "reservar/pago", lazy: pagina(() => import("./paginas/ReservaPago.jsx"), "Reservar · Pago · El Tintero") },
      { path: "reservar/confirmada", lazy: pagina(() => import("./paginas/ReservaConfirmada.jsx"), "Reserva confirmada · El Tintero") },
      { path: "reservar/pendiente", lazy: pagina(() => import("./paginas/ReservaPendiente.jsx"), "Pago pendiente · El Tintero") },
      { path: "reservar/rechazada", lazy: pagina(() => import("./paginas/ReservaRechazada.jsx"), "Pago rechazado · El Tintero") },
      { path: "tu-reserva", lazy: pagina(() => import("./paginas/TuReserva.jsx"), "Tu reserva · El Tintero") },
      { path: "tu-reserva/cancelar", lazy: pagina(() => import("./paginas/CancelarReserva.jsx"), "Cancelar la reserva · El Tintero") },
      { path: "tu-reserva/cancelada", lazy: pagina(() => import("./paginas/ReservaCancelada.jsx"), "Reserva cancelada · El Tintero") },
      // Panel y agenda docente: sin enlaces desde el sitio, se entra escribiendo la dirección (demo, sin contraseña real)
      { path: "panel", lazy: pagina(() => import("./paginas/PanelIngreso.jsx"), "Panel · El Tintero", true) },
      { path: "panel/agenda", lazy: pagina(() => import("./paginas/PanelAgenda.jsx"), "Agenda · Panel · El Tintero", true) },
      { path: "panel/clases", lazy: pagina(() => import("./paginas/PanelClases.jsx"), "Clases · Panel · El Tintero", true) },
      { path: "panel/clases/nueva", lazy: pagina(() => import("./paginas/PanelCrearClase.jsx"), "Crear clase · Panel · El Tintero", true) },
      { path: "panel/reservas", lazy: pagina(() => import("./paginas/PanelReservas.jsx"), "Reservas · Panel · El Tintero", true) },
      { path: "panel/reservas/dia", lazy: pagina(() => import("./paginas/PanelReservasDia.jsx"), "Reservas del día · Panel · El Tintero", true) },
      { path: "panel/reservas/detalle", lazy: pagina(() => import("./paginas/PanelDetalleReserva.jsx"), "Detalle de reserva · Panel · El Tintero", true) },
      { path: "panel/docentes/nuevo", lazy: pagina(() => import("./paginas/PanelAgregarDocente.jsx"), "Agregar docente · Panel · El Tintero", true) },
      { path: "panel/docentes", lazy: pagina(() => import("./paginas/PanelDocentes.jsx"), "Docentes · Panel · El Tintero", true) },
      { path: "docente", lazy: pagina(() => import("./paginas/AgendaDocente.jsx"), "Mi agenda · El Tintero", true) },
      { path: "404", lazy: pagina(() => import("./paginas/NoEncontrada.jsx"), "Página no encontrada · El Tintero") },
      { path: "*", lazy: pagina(() => import("./paginas/NoEncontrada.jsx"), "Página no encontrada · El Tintero") },
    ],
  },
];
