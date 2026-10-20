// Activa el movimiento de 06 · Movimiento. Las piezas se reconocen por el nombre de su capa en Figma.
import { activarReserva } from "./reserva.js";
import { activarAreas } from "./areas.js";
// Sin JavaScript o con "reducir movimiento" todo se ve quieto y completo.
import { respuesta } from "./respuestas.js";

const q = (raiz, sel) => [...raiz.querySelectorAll(sel)];
const texto = (p) => { const e = p.querySelector(".solo-escritorio") || p; return [...e.childNodes].map((n) => (n.nodeName === "BR" ? " " : n.textContent)).join("").trim(); };

// Lo que hace funcionar la página (no es movimiento): corre también con "reducir movimiento".
function funciones(raiz, limpiar) {
  // Preguntas frecuentes que se abren y cierran
  acordeones(raiz, limpiar);
  // Reserva simulada: opciones, campos y lugar guardado
  activarReserva(raiz, limpiar);
  // Áreas de la Home: ver / ocultar materias
  activarAreas(raiz, limpiar);
  // Carruseles (Quiénes enseñan): la fila se desliza con las flechas rojas
  q(raiz, "[class*='__anterior']").forEach((ant) => {
    const sec = ant.closest("section");
    const sig = sec && sec.querySelector("[class*='__siguiente']");
    const fila = sec && sec.querySelector("[class*='__grilla']");
    if (!sig || !fila || fila.dataset.carrusel) return;
    fila.dataset.carrusel = "1";
    fila.classList.add("carrusel");
    const estado = () => {
      ant.setAttribute("aria-disabled", fila.scrollLeft <= 2);
      sig.setAttribute("aria-disabled", fila.scrollLeft + fila.clientWidth >= fila.scrollWidth - 2);
    };
    [[ant, -1, "Ver anteriores"], [sig, 1, "Ver siguientes"]].forEach(([b, dir, txt]) => {
      b.tabIndex = 0;
      b.setAttribute("role", "button"); b.setAttribute("aria-label", txt); b.classList.add("carrusel__boton");
      const mover = () => fila.scrollBy({ left: dir * fila.clientWidth * 0.75 });
      const tecla = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); mover(); } };
      b.addEventListener("click", mover); b.addEventListener("keydown", tecla);
      limpiar.push(() => { b.removeEventListener("click", mover); b.removeEventListener("keydown", tecla); });
    });
    fila.addEventListener("scroll", estado, { passive: true });
    limpiar.push(() => fila.removeEventListener("scroll", estado));
    estado();
  });

}

export function activarMovimiento(raiz) {
  if (typeof window === "undefined" || !raiz || !("IntersectionObserver" in window)) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const l = []; funciones(raiz, l); return () => l.forEach((f) => f());
  }
  const limpiar = [];
  const alto = window.innerHeight;
  const io = new IntersectionObserver((entradas) => {
    for (const e of entradas) if (e.isIntersecting) { e.target.classList.add("visto"); e.target.dispatchEvent(new Event("visto")); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px" });
  limpiar.push(() => io.disconnect());
  const visible = (el) => el.offsetParent !== null;
  const observar = (el, cls, esconderArriba = true) => {
    if (!visible(el)) return;
    if (esconderArriba === false || el.getBoundingClientRect().top > alto * 0.92) { el.classList.add(cls); io.observe(el); }
  };

  // Entrada de contenido: sube 18 px y aparece (solo lo que está más abajo de la primera pantalla)
  q(raiz, "main > section > *").forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.position !== "absolute" && cs.display !== "none" && !/__pista/.test(el.className)) observar(el, "mov-entra");
  });
  // Trazos rojos que se dibujan solos
  q(raiz, ".trazo").forEach((el) => observar(el, "mov-trazo", false));
  // Resaltador
  q(raiz, "[class*='__resaltador']").forEach((el) => observar(el, "mov-resaltador", false));

  // Cinta de materias: se duplica el contenido para que la vuelta no tenga corte
  q(raiz, "[class*='__pista']").forEach((pista) => {
    if (pista.dataset.mov) return;
    pista.dataset.mov = "1";
    [...pista.children].forEach((c) => { const d = c.cloneNode(true); d.setAttribute("aria-hidden", "true"); pista.appendChild(d); });
    pista.classList.add("mov-pista");
  });

  // Gotas de tinta del hero
  q(raiz, "[class*='__gota']").filter(visible).forEach((g, i) => { g.classList.add("mov-gota"); g.style.animationDelay = `${i * 0.12}s`; });

  // Fichas: entran giradas; después solo ellas siguen suave al mouse (el logo queda quieto)
  // (en las otras páginas, las polaroids y fotos del hero hacen de papelitos)
  const fichas = q(raiz, "[class*='__ficha'], main > section:first-child [class*='__polaroid'], main > section:first-child [class*='__figure']").filter((e) => visible(e) && !e.parentElement.closest("[class*='__polaroid'], [class*='__figure']"));
  fichas.forEach((f, i) => { f.classList.add("mov-ficha"); f.style.animationDelay = `${0.6 + i * 0.12}s`; });
  if (fichas.length) {
    const mover = (e) => {
      const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      fichas.forEach((f, i) => { const k = 10 + (i % 3) * 6; f.style.translate = `${(x * k).toFixed(1)}px ${(y * k).toFixed(1)}px`; });
    };
    window.addEventListener("mousemove", mover, { passive: true });
    limpiar.push(() => window.removeEventListener("mousemove", mover));
  }

  // Notas de la cartelera, escalonadas
  q(raiz, "[class*='__notas']").forEach((grupo) => {
    const notas = q(grupo, ":scope > [class*='__nota-adhesiva']").filter(visible);
    notas.forEach((n, i) => { n.style.transitionDelay = `${i * 0.08}s, ${i * 0.08}s, 0s`; n.classList.add("mov-nota"); });
    if (!notas.length) return;
    const g = new IntersectionObserver(([e]) => { if (e.isIntersecting) { notas.forEach((n) => n.classList.add("visto")); g.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    g.observe(grupo); limpiar.push(() => g.disconnect());
  });

  // Puntito que late (insignias de "hay lugar")
  q(raiz, "[class*='__insignia'] [class*='__punto'], [class*='__hay-lugares'] [class*='__punto']").forEach((p) => p.classList.add("mov-late"));

  // Tarjetas que se levantan
  q(raiz, "[class*='__tarjeta-de-clase'], [class*='__polaroid-']").forEach((t) => { if (getComputedStyle(t).position !== "absolute") t.classList.add("mov-levanta"); });

  // Números que cuentan (1,2 s)
  q(raiz, "[class*='numeros'] p, main > section:first-child p").forEach((p) => {
    const m = p.textContent.trim().match(/^(\d+)(%?)$/);
    if (!m || !visible(p)) return;
    const fin = +m[1], suf = m[2];
    p.addEventListener("visto", () => {
      const t0 = performance.now();
      const paso = (t) => { const k = Math.min(1, (t - t0) / 1200); const e = 1 - Math.pow(1 - k, 3); p.textContent = Math.round(fin * e) + suf; if (k < 1) requestAnimationFrame(paso); };
      requestAnimationFrame(paso);
    }, { once: true });
    io.observe(p);
  });

  // Mazo de clases: cada 4 s la de adelante pasa al fondo del mazo (queda detrás enseguida, sin transparencias) y las otras avanzan
  q(raiz, "[class*='__visual']").forEach((v) => {
    const cartas = q(v, ":scope > [class*='__tarjeta-de-clase']");
    if (cartas.length < 3 || !visible(v)) return;
    // cada lugar del mazo tiene su posición, tamaño y transparencia (las de atrás asoman apenas): la carta toma los del lugar al que va
    const props = ["left", "top", "width", "height", "opacity", "transform", "boxShadow"];
    const lugares = cartas.map((c) => { const cs = getComputedStyle(c); return Object.fromEntries(props.map((p) => [p, cs[p]])); });
    v.classList.add("mov-mazo");
    const n = cartas.length; let k = 0;
    const rotar = () => {
      k = (k + 1) % n;
      cartas.forEach((c, j) => { const l = (j + k) % n; c.style.zIndex = l; Object.assign(c.style, lugares[l]); });
    };
    const id = setInterval(rotar, 4000); limpiar.push(() => clearInterval(id));
  });

  // Hojas apiladas: en escritorio cada hoja queda pegada abajo del encabezado mientras pasa la siguiente
  if (window.matchMedia("(min-width: 1024px)").matches) {
    const fondo = getComputedStyle(document.body).backgroundColor;
    const hojas = q(raiz, "main > section[class*='pila'] > *").filter((h) => getComputedStyle(h).position !== "absolute");
    hojas.forEach((h) => {
      h.style.position = "sticky";
      // la hoja de abajo queda tapada entera: si el degradé de Figma es translúcido, se le pone el papel detrás
      if (getComputedStyle(h).backgroundColor === "rgba(0, 0, 0, 0)") h.style.backgroundColor = fondo;
    });
    // una hoja más alta que la pantalla se pega recién cuando se ve su borde de abajo (si no, la siguiente la tapa antes)
    const pegar = () => {
      const e = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--escala")) || 1;
      hojas.forEach((h) => { h.style.top = Math.min(78, (innerHeight - h.getBoundingClientRect().height) / e) + "px"; });
    };
    pegar(); window.addEventListener("resize", pegar);
    limpiar.push(() => window.removeEventListener("resize", pegar));
  }

  funciones(raiz, limpiar);

  return () => limpiar.forEach((f) => f());
}

// Acordeón de preguntas: en Figma está abierta la primera y las demás cerradas, con su signo + / −.
function acordeones(raiz, limpiar) {
  const signos = q(raiz, "p").filter((p) => /^[+−–]$/.test(p.textContent.trim()));
  const grupos = new Map();
  for (const p of signos) {
    const signo = p.parentElement.children.length === 1 ? p.parentElement : p; // a veces el signo va suelto, sin círculo
    const fila = signo.parentElement, item = fila.parentElement;
    if (!fila.querySelector("p") || !texto(fila.querySelector("p")).endsWith("?")) continue;
    const lista = grupos.get(item.parentElement) || []; lista.push({ item, fila, signo, abierta: p.textContent.trim() !== "+" }); grupos.set(item.parentElement, lista);
  }
  // Los estilos de abierta/cerrada se copian del ejemplo más cercano (a veces Figma separa las preguntas en dos contenedores)
  const todos = [...grupos.values()].flat();
  const cercano = (cont, cond) => { for (let a = cont; a && a !== raiz; a = a.parentElement) { const x = todos.find((i) => cond(i) && a.contains(i.item)); if (x) return x; } return null; };
  let n = 0;
  for (const [cont, items] of grupos) {
    const modelo = cercano(cont, (i) => i.abierta && i.item.children.length > 1), cerrado = cercano(cont, (i) => !i.abierta && i.signo.tagName !== "P");
    if (!modelo || !cerrado) continue;
    const respModelo = modelo.item.querySelector(":scope > .acordeon__caja .acordeon__interior > *") || [...modelo.item.children].find((c) => c !== modelo.fila);
    if (!respModelo) continue;
    const clases = { abierta: [modelo.signo.className, modelo.signo.firstElementChild.className], cerrada: [cerrado.signo.className, cerrado.signo.firstElementChild.className] };
    for (const it of items) {
      if (it.item.dataset.acordeon) continue;
      let resp = [...it.item.children].find((c) => c !== it.fila);
      if (!resp) {
        const txt = respuesta(texto(it.fila.querySelector("p")));
        if (!txt) continue; // sin respuesta conocida: queda como en Figma
        resp = respModelo.cloneNode(true);
        (resp.tagName === "P" ? resp : resp.querySelector("p")).textContent = txt;
        it.item.appendChild(resp);
      }
      it.item.dataset.acordeon = "1";
      const caja = document.createElement("div"); caja.className = "acordeon__caja"; caja.id = `acordeon-${++n}`;
      const interior = document.createElement("div"); interior.className = "acordeon__interior";
      resp.replaceWith(caja); interior.appendChild(resp); caja.appendChild(interior);
      const hueco = parseFloat(getComputedStyle(it.item).rowGap) || 0; // cerrada, la pregunta no deja el espacio de la respuesta
      const poner = (abierta) => {
        it.abierta = abierta; caja.classList.toggle("acordeon__caja--abierta", abierta); caja.style.marginTop = abierta ? "0px" : `-${hueco}px`;
        const menos = (modelo.signo.tagName === "P" ? modelo.signo : modelo.signo.firstElementChild).textContent.trim(); // el guion que usó Figma
        if (it.signo.tagName === "P") it.signo.textContent = abierta ? menos : "+";
        else { const [cs, cp] = abierta ? clases.abierta : clases.cerrada; it.signo.className = cs; it.signo.firstElementChild.className = cp; it.signo.firstElementChild.textContent = abierta ? menos : "+"; }
        it.fila.setAttribute("aria-expanded", String(abierta));
      };
      Object.assign(it.fila, { role: "button", tabIndex: 0 }); it.fila.setAttribute("role", "button"); it.fila.setAttribute("aria-controls", caja.id); it.fila.style.cursor = "pointer";
      const alternar = () => poner(!it.abierta);
      const tecla = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); alternar(); } };
      it.fila.addEventListener("click", alternar); it.fila.addEventListener("keydown", tecla);
      limpiar.push(() => { it.fila.removeEventListener("click", alternar); it.fila.removeEventListener("keydown", tecla); });
      poner(it.abierta);
    }
  }
}
