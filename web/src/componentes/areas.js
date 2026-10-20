// Áreas de la Home: tocar un área muestra sus materias (como la abierta en Figma) y cierra la anterior.
const MATERIAS = {
  "lengua y escritura": ["Prácticas del lenguaje", "Lengua y Literatura", "Comprensión de textos", "Escritura y redacción", "Ortografía"],
  "inglés y otros idiomas": ["Inglés", "Portugués", "Italiano"],
  "ciencias naturales": ["Biología", "Química", "Fisicoquímica", "Ciencias naturales"],
  "ciencias sociales": ["Historia", "Geografía", "Construcción de la ciudadanía", "Economía", "Introducción al Derecho", "Ciencia Política"],
  "técnicas de estudio": ["Organización de la carpeta", "Resúmenes y mapas", "Preparación de exámenes", "Lectura comprensiva"],
};

export function activarAreas(raiz, limpiar) {
  raiz.querySelectorAll("section[class$='-areas']").forEach((sec) => {
    // la flecha escrita "↓" (abierta en celular) pasa a ser la flecha roja dibujada como las demás
    const roja = sec.querySelector(".trazo");
    sec.querySelectorAll("p").forEach((p) => {
      if (roja && p.textContent.trim() === "↓") { const t = roja.cloneNode(true); t.className = `${roja.className} ${p.className}`; p.replaceWith(t); }
    });
    // cada tarjeta es el hijo directo de la grilla/lista que lleva una flecha
    const grupos = new Map();
    sec.querySelectorAll(".trazo").forEach((t) => {
      let c = t;
      while (c.parentElement && c.parentElement !== sec) {
        const p = c.parentElement;
        if ([...p.children].filter((h) => h.querySelector(".trazo")).length >= 5) break;
        c = p;
      }
      if (c.parentElement && c.parentElement !== sec) {
        if (!grupos.has(c.parentElement)) grupos.set(c.parentElement, []);
        grupos.get(c.parentElement).push(c);
      }
    });
    grupos.forEach((tarjetas) => {
      const abierta0 = tarjetas.find((t) => t.querySelector("[class*='__chips']"));
      if (!abierta0) return;
      const molde = abierta0.querySelector("[class*='__chips']");
      const fondoCerrada = getComputedStyle(tarjetas.find((t) => t !== abierta0)).backgroundColor;
      const titulo = (t) => [...t.querySelectorAll("p")].map((p) => p.textContent.trim()).find((x) => x.length > 3 && !/^(VER MATERIAS|OCULTAR|\d)/i.test(x)) || "";
      const chips = new Map([[abierta0, molde]]);
      const otra = tarjetas.find((t) => t !== abierta0).querySelector(".trazo");
      let abierta = abierta0;
      const estado = (t, abrir) => {
        t.setAttribute("aria-expanded", abrir);
        const ver = [...t.querySelectorAll("p")].find((p) => /^(VER MATERIAS|OCULTAR)$/.test(p.textContent.trim()));
        if (ver) ver.textContent = abrir ? "OCULTAR" : "VER MATERIAS";
        const flecha = t.querySelector(".trazo");
        if (flecha) {
          flecha.style.transform = abrir ? "rotate(90deg)" : "none";
          // la de la tarjeta abierta en Figma es más grande: cerrada toma el tamaño de las demás
          if (t === abierta0 && otra) { flecha.style.width = abrir ? "" : `${otra.offsetWidth}px`; flecha.style.height = abrir ? "" : `${otra.offsetHeight}px`; }
        }
        if (t === abierta0) {
          t.style.backgroundColor = abrir ? "" : fondoCerrada;
          t.style.borderColor = abrir ? "" : "transparent";
        } else {
          t.style.backgroundColor = abrir ? getComputedStyle(abierta0).backgroundColor : "";
          t.style.border = abrir ? "1px solid var(--base-tinta)" : "";
        }
        if (abrir && !chips.has(t)) {
          const lista = MATERIAS[titulo(t).toLowerCase()] || [];
          const c = molde.cloneNode(true);
          const m = c.firstElementChild;
          c.replaceChildren(...lista.map((n) => { const x = m.cloneNode(true); x.querySelector("p").textContent = n; return x; }));
          chips.set(t, c);
        }
        const c = chips.get(t);
        if (c) { if (abrir) t.appendChild(c); else c.remove(); }
      };
      tarjetas.forEach((t) => {
        t.setAttribute("role", "button"); t.tabIndex = 0; t.style.cursor = "pointer";
        estado(t, t === abierta);
        const tocar = () => {
          if (abierta === t) { estado(t, false); abierta = null; return; }
          if (abierta) estado(abierta, false);
          estado(t, true); abierta = t;
        };
        const tecla = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tocar(); } };
        t.addEventListener("click", tocar); t.addEventListener("keydown", tecla);
        limpiar.push(() => { t.removeEventListener("click", tocar); t.removeEventListener("keydown", tecla); });
      });
    });
  });
}
