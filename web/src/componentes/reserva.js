// Reserva simulada (sin base de datos): las pantallas salen de Figma y acá se les da vida.
// - Opciones, chips, días y horarios: se elige uno por grupo (toma el aspecto "elegido" de Figma).
// - Campos: los valores de ejemplo pasan a ser inputs editables.
// - Lugar guardado: cuenta regresiva de 20 minutos (se guarda en la sesión del navegador).

const base = (c) => c.split(" ")[0].replace(/-\d+$/, "");
const CERRADO = /Completo|Sin clases/i;

// El elegido es el que tiene el fondo más "marcado" (lima o tinta) y es único en su grupo.
function fondo(el) {
  const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g) || [255, 255, 255, 0];
  const [r, g, b, a = 1] = m.map(Number);
  return a === 0 ? "transparente" : `${r},${g},${b}`;
}
const peso = (f) => (f === "transparente" ? 0 : f.split(",").reduce((s, v) => s + (255 - Number(v)), 0));

// Pasa el aspecto de "elegido" de a hacia b: cambia las clases nodo a nodo; lo que sobra (la marca ✓) se muda.
const adorno = (n) => n.nodeType === 1 && /^\s*✓?\s*$/.test(n.textContent);
function cambiar(a, b) {
  const c = a.className; a.className = b.className; b.className = c;
  const da = [...a.children].filter(adorno), db = [...b.children].filter(adorno);
  const na = [...a.children].filter((x) => !adorno(x)), nb = [...b.children].filter((x) => !adorno(x));
  // la marca (✓ o el círculo vacío) se muda o se cambia; los textos se quedan donde están
  if (da.length === db.length) da.forEach((x, i) => cambiar(x, db[i]));
  else { const [menos, sobra] = da.length > db.length ? [b, da] : [a, db]; menos.prepend(...sobra.slice(0, Math.abs(da.length - db.length))); }
  if (na.length === nb.length) na.forEach((x, i) => cambiar(x, nb[i]));
}
function pasar(a, b) {
  cambiar(a, b);
  // textos que son del estado y no de la opción: "✓ " en los chips y "Elegido" en los horarios
  const p = [...a.querySelectorAll("p")].find((x) => /^✓\s/.test(x.textContent));
  const q = b.querySelector("p");
  if (p && q) { p.textContent = p.textContent.replace(/^✓\s/, ""); q.textContent = `✓ ${q.textContent}`; }
  const ea = [...a.querySelectorAll("p")].find((x) => x.textContent.trim() === "Elegido");
  const pb = [...b.querySelectorAll("p")];
  if (ea && pb.length > 1) { const t = pb[pb.length - 1].textContent; pb[pb.length - 1].textContent = "Elegido"; ea.textContent = t; }
}

function opciones(raiz, limpiar) {
  const padres = new Set([...raiz.querySelectorAll("section [class]")].map((e) => e.parentElement));
  padres.forEach((p) => {
    // los ítems son los hermanos con la misma capa base (en celular el título del grupo va adentro) y con texto
    const cuenta = {};
    [...p.children].forEach((h) => { const k = base(h.className); cuenta[k] = (cuenta[k] || 0) + 1; });
    const comun = Object.keys(cuenta).reduce((x, y) => (cuenta[y] > (cuenta[x] || 0) ? y : x), "");
    let hijos = [...p.children].filter((h) => base(h.className) === comun && h.textContent.trim());
    if (hijos.length < 2) {
      // días de la semana: capas con nombres distintos pero todas del mismo tamaño
      const r = (h) => h.getBoundingClientRect();
      const t = [...p.children].filter((h) => h.textContent.trim() && fondo(h) !== "transparente");
      if (t.length < 3 || !t.every((h) => Math.abs(r(h).width - r(t[0]).width) < 2 && Math.abs(r(h).height - r(t[0]).height) < 2)) return;
      hijos = t;
    }
    // fuera: títulos sin fondo, insignias chicas y lo que está cerrado (Completo, Sin clases)
    const abiertos = hijos.filter((h) => !CERRADO.test(h.textContent) && fondo(h) !== "transparente" && h.getBoundingClientRect().height >= 28);
    const fondos = abiertos.map(fondo);
    if (abiertos.length < 2 || new Set(fondos).size < 2) return;
    const max = fondos.reduce((a, f) => (peso(f) > peso(a) ? f : a));
    if (fondos.filter((f) => f === max).length !== 1) return;
    let actual = abiertos[fondos.indexOf(max)];
    hijos.forEach((h) => {
      if (CERRADO.test(h.textContent)) { h.setAttribute("aria-disabled", "true"); return; }
      if (!abiertos.includes(h)) return;
      h.setAttribute("role", "radio"); h.tabIndex = 0; h.classList.add("opcion-elegible");
      h.setAttribute("aria-checked", h === actual);
      const elegir = () => {
        if (h === actual) return;
        pasar(actual, h);
        abiertos.forEach((o) => o.setAttribute("aria-checked", o === h));
        actual = h;
      };
      const tecla = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); elegir(); } };
      h.addEventListener("click", elegir); h.addEventListener("keydown", tecla);
      limpiar.push(() => { h.removeEventListener("click", elegir); h.removeEventListener("keydown", tecla); });
    });
    p.setAttribute("role", "radiogroup");
  });
}

// Listas de los formularios del panel (lo que en Figma es "valor ▾")
const OPCIONES = {
  nivel: ["Primaria", "Secundaria", "Terciario e ingreso"],
  niveles: ["Primaria", "Secundaria", "Terciario e ingreso", "Secundaria y terciario", "Todos los niveles"],
  materia: ["Matemática", "Física", "Química", "Biología", "Lengua y Literatura", "Prácticas del lenguaje", "Historia", "Geografía", "Inglés", "Construcción de la ciudadanía", "Programación", "Ciencia Política"],
  modalidad: ["Presencial", "Online", "Presencial · Online"],
  docente: ["Laura M.", "Fausto I.", "Carolina T.", "“Pollo” S.", "Almendra S.", "“Chico” P."],
  duracion: ["60 minutos", "90 minutos", "120 minutos"],
  formato: ["Grupo reducido", "Individual"],
  estado: ["Activo", "Borrador"],
};
const clave = (t) => t.toLowerCase().normalize("NFD").replace(/[^a-z]/g, "");
const precio = (n) => `$ ${n.toLocaleString("es-AR")}`;

function campos(raiz) {
  raiz.querySelectorAll("[class*='__caja'] > p[class*='__valor']").forEach((p) => {
    const etiqueta = (p.parentElement.previousElementSibling || {}).textContent || "Dato";
    const texto = p.textContent.trim();
    let el;
    if (/▾$/.test(texto)) {
      el = document.createElement("select");
      const actual = texto.replace(/\s*▾$/, "");
      const lista = OPCIONES[clave(etiqueta)] || [actual];
      (lista.includes(actual) ? lista : [actual, ...lista]).forEach((o) => el.add(new Option(o, o, false, o === actual)));
    } else {
      el = document.createElement("input");
      if (/^•+$/.test(texto)) { el.type = "password"; el.placeholder = texto; el.autocomplete = "off"; }
      else if (/@/.test(texto)) { el.type = "email"; el.placeholder = texto; }
      else el.value = texto;
      if (/whatsapp/i.test(etiqueta)) el.type = "tel";
      if (/^foto/i.test(etiqueta)) { el.type = "file"; el.accept = "image/*"; } // demo: no se sube a ningún lado
      if (/^(precio|seña)/i.test(etiqueta)) el.readOnly = true;
    }
    el.className = `${p.className} campo-real`;
    el.setAttribute("aria-label", etiqueta);
    p.replaceWith(el);
  });
  // Crear clase: el precio sale de la duración ($ 40.000 la hora) y la seña es la mitad
  const dur = [...raiz.querySelectorAll("select.campo-real")].find((s) => /duraci/i.test(s.getAttribute("aria-label")));
  const total = [...raiz.querySelectorAll("input.campo-real")].find((i) => /^precio/i.test(i.getAttribute("aria-label")));
  const sena = [...raiz.querySelectorAll("input.campo-real")].find((i) => /^seña/i.test(i.getAttribute("aria-label")));
  if (dur && total) dur.addEventListener("change", () => { const t = (parseInt(dur.value, 10) / 60) * 40000; total.value = precio(t); if (sena) sena.value = precio(t / 2); });
}

function cuentaRegresiva(raiz, limpiar) {
  const nodos = [];
  const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) if (/Quedan \d+:\d\d|hasta las \d\d:\d\d/.test(n.nodeValue)) nodos.push([n, n.nodeValue]);
  if (!nodos.length) return;
  let inicio;
  try { inicio = Number(sessionStorage.getItem("tintero-lugar")) || 0; } catch { inicio = 0; }
  if (!inicio || Date.now() - inicio > 20 * 60000) { inicio = Date.now(); try { sessionStorage.setItem("tintero-lugar", String(inicio)); } catch { /* sin sesión: igual cuenta */ } }
  const fin = new Date(inicio + 20 * 60000);
  const hora = `${String(fin.getHours()).padStart(2, "0")}:${String(fin.getMinutes()).padStart(2, "0")}`;
  const pintar = () => {
    const s = Math.max(0, Math.round((fin - Date.now()) / 1000));
    const quedan = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    nodos.forEach(([n, t]) => { n.nodeValue = t.replace(/Quedan \d+:\d\d/, `Quedan ${quedan}`).replace(/hasta las \d\d:\d\d/, `hasta las ${hora}`); });
  };
  pintar();
  const id = setInterval(pintar, 1000);
  limpiar.push(() => clearInterval(id));
}

export function activarReserva(raiz, limpiar) {
  if (/^\/panel/.test(window.location.pathname)) { campos(raiz); return; }
  if (!/^\/reservar/.test(window.location.pathname)) return;
  opciones(raiz, limpiar);
  campos(raiz);
  cuentaRegresiva(raiz, limpiar);
}
