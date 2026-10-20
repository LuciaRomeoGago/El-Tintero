// genPagina2: arma una página (escritorio + celular) a partir de dos frames de Figma. Se pega en la consola de Figma junto con gen.js.
window.RUTAS = {
 "44:2925": "/",
 "4:4144": "/que-ofrecemos",
 "4:4406": "/niveles",
 "4:4609": "/sobre-el-tintero",
 "22:1662": "/modalidades",
 "22:2032": "/profesores",
 "59:5043": "/contacto",
 "59:4841": "/contacto",
 "4:2662": "/reservar",
 "4:2772": "/reservar/materia",
 "4:2892": "/reservar/horario",
 "4:3029": "/reservar/datos",
 "4:3441": "/reservar",
 "35:2221": "/que-ofrecemos",
 "55:3078": "/niveles",
 "55:3308": "/sobre-el-tintero",
 "24:2534": "/modalidades",
 "24:2924": "/profesores",
 "44:1933": "/",
 "4:3514": "/reservar/materia",
 "4:3590": "/reservar/horario",
 "4:3667": "/reservar/datos",
 "4:3145": "/reservar/pago",
 "4:3749": "/reservar/pago",
 "4:3206": "/reservar/confirmada",
 "4:3799": "/reservar/confirmada",
 "4:3265": "/reservar/pendiente",
 "4:3843": "/reservar/pendiente",
 "4:3319": "/reservar/rechazada",
 "4:3888": "/reservar/rechazada",
 "59:5281": "/tu-reserva",
 "59:4350": "/tu-reserva",
 "59:4424": "/tu-reserva/cancelar",
 "59:4498": "/tu-reserva/cancelar",
 "59:4572": "/tu-reserva/cancelada",
 "59:4720": "/reservar/sin-clases",
 "59:4824": "/tu-reserva"
};

window.genPagina2 = async (idD, idM, pag) => {
  const D = await figma.getNodeByIdAsync(idD), M = await figma.getNodeByIdAsync(idM);
  const skip = /^(Aviso superior|Encabezado|Pie)$/;
  const t = n => { const x = n.type === 'TEXT' ? n : !n.findOne ? null : n.findOne(x => x.type === 'TEXT' && x.characters.trim().length > 3); return x ? x.characters.trim().slice(0, 40).toLowerCase() : ''; };
  const dk = D.children.filter(c => c.visible && !skip.test(c.name));
  const mk = M.children.filter(c => c.visible && !skip.test(c.name)).sort((a, b) => a.y - b.y);
  const par = new Array(dk.length).fill(-1), usado = new Set();
  dk.forEach((c, i) => { const j = mk.findIndex((x, k) => !usado.has(k) && t(x) === t(c)); if (j >= 0) { par[i] = j; usado.add(j); } });
  dk.forEach((c, i) => { if (par[i] >= 0) return; const lo = Math.max(-1, ...par.slice(0, i).filter(v => v >= 0)); const hiArr = par.slice(i + 1).filter(v => v >= 0); const hi = hiArr.length ? Math.min(...hiArr) : mk.length; const j = mk.findIndex((x, k) => !usado.has(k) && k > lo && k < hi && x.name === c.name); if (j >= 0) { par[i] = j; usado.add(j); } });
  const vistos = {}; const nombre = n => { const b = GEN.slug(n.name); vistos[b] = (vistos[b] || 0) + 1; return vistos[b] > 1 ? `${b}-${vistos[b]}` : b; };
  const secs = []; let h1 = true;
  const agregar = async (d, m, ordenM) => { const k = nombre(d || m); const r = await GEN.gen(d, m, { prefix: `${pag}-${k}`, rutas: RUTAS, h1, baseIndent: 3 }); if (r.jsx.includes('<h1')) h1 = false; let css = r.css;
    if (m) { const i = mk.indexOf(m); const prev = mk[i - 1]; const sep = prev && M.layoutMode !== 'VERTICAL' ? Math.round(m.y - (prev.y + prev.height)) : 0; css += `\n\n@media (max-width: 767px) {\n  .${pag}-${k} {\n    order: ${ordenM};${sep ? `\n    margin-top: ${sep}px;` : ''}\n  }\n}`; }
    secs.push({ k, jsx: r.jsx, css, imports: r.imports, ordenM }); };
  for (let i = 0; i < dk.length; i++) await agregar(dk[i], par[i] >= 0 ? mk[par[i]] : null, par[i]);
  for (let j = 0; j < mk.length; j++) if (!usado.has(j)) await agregar(null, mk[j], j);
  const files = {}; for (const s of secs) for (const [ext, v] of [['jsx', s.jsx], ['css', s.css], ['json', JSON.stringify({ imports: s.imports })]]) files[`gen/${pag}/${s.k}.${ext}`] = btoa(unescape(encodeURIComponent(v)));
  files[`gen/${pag}/orden.json`] = btoa(JSON.stringify(secs.map(s => s.k)));
  return { files, mapa: secs.map(s => s.k + '→' + s.ordenM), alturas: { d: dk.map(c => Math.round(c.height)), m: mk.map(c => Math.round(c.height)) } };
};

Object.assign(window.RUTAS, {
 "59:6240": "/panel",
 "68:4741": "/panel/agenda",
 "59:5584": "/panel/clases",
 "59:6024": "/panel/clases/nueva",
 "59:5778": "/panel/reservas",
 "76:7179": "/panel/reservas/dia",
 "59:6155": "/panel/reservas/detalle",
 "59:5942": "/panel/docentes",
 "68:5203": "/docente",
 "68:6240": "/docente"
});

// genFrame: una pantalla entera como una sola sección (el panel es menú lateral + contenido, lado a lado)
window.genFrame = async (idD, idM, pag) => {
  const D = await figma.getNodeByIdAsync(idD), M = await figma.getNodeByIdAsync(idM);
  const r = await GEN.gen(D, M, { prefix: `${pag}-pantalla`, rutas: RUTAS, h1: true, baseIndent: 3 });
  const k = 'pantalla', files = {};
  for (const [ext, v] of [['jsx', r.jsx], ['css', r.css], ['json', JSON.stringify({ imports: r.imports })]]) files[`gen/${pag}/${k}.${ext}`] = btoa(unescape(encodeURIComponent(v)));
  files[`gen/${pag}/orden.json`] = btoa(JSON.stringify([k]));
  return { files };
};
