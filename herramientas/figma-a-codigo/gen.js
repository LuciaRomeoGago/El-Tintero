// Generador Figma → JSX + CSS. Se pega en la pestaña de Figma (API de plugins). Define window.GEN.
(() => {
const S = v => typeof v === 'symbol' ? null : v;
const VARS = (window.GEN && window.GEN.VARS) || {};
const ASSETS = (window.GEN && window.GEN.ASSETS) || {};
const slug = s => { let t = s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); if (!t) t = 'x'; if (/^\d/.test(t)) t = 'n' + t; return t; };
const px = v => `${Math.round(v * 100) / 100}px`;
const num = v => Math.round(v * 1000) / 1000;
const rgba = (c, a = 1) => { const r = Math.round(c.r * 255), g = Math.round(c.g * 255), b = Math.round(c.b * 255); return a >= 0.999 ? '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase() : `rgb(${r} ${g} ${b} / ${num(a)})`; };
const colorOf = (p) => { const a = (p.opacity ?? 1) * (p.color.a ?? 1); const v = p.boundVariables && p.boundVariables.color && VARS[p.boundVariables.color.id]; if (v) return a < 0.999 ? `color-mix(in srgb, var(${v}) ${Math.round(a * 100)}%, transparent)` : `var(${v})`; return rgba(p.color, a); };
const inv = m => { const [[a, b, c], [d, e, f]] = m; const det = a * e - b * d; return [[e / det, -b / det, (b * f - c * e) / det], [-d / det, a / det, (c * d - a * f) / det]]; };
const ap = (m, x, y) => [m[0][0] * x + m[0][1] * y + m[0][2], m[1][0] * x + m[1][1] * y + m[1][2]];
const gradient = (p, w, h) => { const mi = inv(p.gradientTransform); const [x0, y0] = ap(mi, 0, 0.5), [x1, y1] = ap(mi, 1, 0.5); const ang = Math.round(Math.atan2((x1 - x0) * w, -(y1 - y0) * h) * 180 / Math.PI); const stops = p.gradientStops.map(s => `${rgba(s.color, s.color.a * (p.opacity ?? 1))} ${Math.round(s.position * 100)}%`).join(', '); return p.type === 'GRADIENT_RADIAL' ? `radial-gradient(${stops})` : `linear-gradient(${ang}deg, ${stops})`; };
const cropCss = t => { const a = t[0][0], d = t[1][1], tx = t[0][2], ty = t[1][2]; const x = a >= 0.999 ? 0 : tx / (1 - a) * 100, y = d >= 0.999 ? 0 : ty / (1 - d) * 100; return [`${num(100 / a)}% ${num(100 / d)}%`, `${num(x)}% ${num(y)}%`]; };
async function bgOf(n) {
  if (!('fills' in n) || n.fills === figma.mixed) return null;
  const layers = [];
  for (const p of n.fills.filter(f => f.visible !== false).reverse()) {
    if (p.type === 'SOLID') { layers.push({ c: colorOf(p) }); if ((p.opacity ?? 1) >= 0.999 && !(p.blendMode && p.blendMode !== 'NORMAL' && p.blendMode !== 'PASS_THROUGH')) break; } // un color opaco tapa lo de abajo
    else if (p.type.startsWith('GRADIENT')) layers.push({ img: gradient(p, n.width, n.height) });
    else if (p.type === 'IMAGE' && p.imageHash) {
      const key = p.imageHash; if (!ASSETS[key]) { let sz; try { sz = await figma.getImageByHash(key).getSizeAsync(); } catch (e) { sz = { width: 0, height: 0 }; } ASSETS[key] = { hash: key, tile: p.scaleMode === 'TILE', archivo: `img-${key.slice(0, 10)}.${p.scaleMode === 'TILE' ? 'png' : 'jpg'}`, w: sz.width, h: sz.height, maxW: 0 }; }
      ASSETS[key].maxW = Math.max(ASSETS[key].maxW, n.width);
      const a = ASSETS[key]; const url = `url(/img/${a.archivo})`;
      if (p.scaleMode === 'TILE') layers.push({ img: url, size: `TILE:${a.archivo}`, rep: true });
      else if (p.scaleMode === 'CROP' && p.imageTransform) { const [sz, pos] = cropCss(p.imageTransform); layers.push({ img: url, size: sz, pos }); }
      else layers.push({ img: url, size: p.scaleMode === 'FIT' ? 'contain' : 'cover', pos: 'center' });
    }
  }
  return layers;
}
const fontW = st => ({ Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 })[st.replace(' Italic', '').replace('Italic', 'Regular')] || 400;
const textCss = (f, size, lh, ls, fills, deco) => { const o = {}; o['font-family'] = `"${f.family}"`; o['font-weight'] = fontW(f.style); if (/Italic/.test(f.style)) o['font-style'] = 'italic'; o['font-size'] = px(size);
  if (lh) o['line-height'] = lh.unit === 'PIXELS' ? px(lh.value) : lh.unit === 'PERCENT' ? num(lh.value / 100) : 'normal';
  if (ls && ls.value) o['letter-spacing'] = ls.unit === 'PERCENT' ? `${num(ls.value / 100)}em` : px(ls.value);
  if (fills && fills.length && fills[0].type === 'SOLID') o.color = colorOf(fills[0]);
  if (deco === 'UNDERLINE') o['text-decoration'] = 'underline'; else if (deco === 'STRIKETHROUGH') o['text-decoration'] = 'line-through';
  return o; };
const isAL = n => n.layoutMode && n.layoutMode !== 'NONE';
const JUST = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end', SPACE_BETWEEN: 'space-between' };
const ALIGN = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end', BASELINE: 'baseline' };
const unaLinea = n => { const seg = n.getStyledTextSegments(['fontSize', 'lineHeight']); const fs = Math.max(...seg.map(s => s.fontSize)); const lh = seg[0].lineHeight; const l = lh.unit === 'PIXELS' ? lh.value : lh.unit === 'PERCENT' ? lh.value / 100 * fs : fs * 1.25; return n.height < l * 1.5 && !n.characters.includes('\n') && n.width <= 480; };
async function cssFor(n, { root, mobile, hClamp }) {
  const o = {}; const par = n.parent; const parAL = par && isAL(par) && n.layoutPositioning !== 'ABSOLUTE';
  if (root) { o.position = 'relative'; o.width = '100%'; }
  else if (!parAL) {
    o.position = 'absolute'; const c = n.constraints || { horizontal: 'MIN', vertical: 'MIN' }; const W = par.width, H = par.height;
    if (c.horizontal === 'MAX') o.right = px(W - n.x - n.width); else if (c.horizontal === 'STRETCH' || c.horizontal === 'SCALE') { o.left = px(n.x); o.right = px(W - n.x - n.width); } else if (c.horizontal === 'CENTER') { o.left = `calc(50% + ${px(n.x + n.width / 2 - W / 2)})`; o['margin-left'] = px(-n.width / 2); } else o.left = px(n.x);
    if (c.vertical === 'MAX') o.bottom = px(H - n.y - n.height); else if (c.vertical === 'STRETCH' || c.vertical === 'SCALE') { o.top = px(n.y); o.bottom = px(H - n.y - n.height); } else if (c.vertical === 'CENTER') { o.top = `calc(50% + ${px(n.y + n.height / 2 - H / 2)})`; o['margin-top'] = px(-n.height / 2); } else o.top = px(n.y);
    if (!(c.horizontal === 'STRETCH' || c.horizontal === 'SCALE')) o.width = px(n.width);
    if (!(c.vertical === 'STRETCH' || c.vertical === 'SCALE')) o.height = px(n.height);
    if (n.type === 'TEXT' && n.textAutoResize !== 'NONE') delete o.height;
    if (n.type === 'TEXT' && n.textAutoResize === 'WIDTH_AND_HEIGHT') { delete o.width; o['white-space'] = 'nowrap'; }
  } else {
    const row = par.layoutMode === 'HORIZONTAL'; const sh = n.layoutSizingHorizontal, sv = n.layoutSizingVertical;
    const prim = row ? sh : sv, cross = row ? sv : sh;
    if (prim === 'FILL') { o.flex = '1 1 0'; o[row ? 'min-width' : 'min-height'] = '0'; }
    else if (prim === 'FIXED') { o[row ? 'width' : 'height'] = px(row ? n.width : n.height); if (row) o['flex-shrink'] = n.type === 'TEXT' || n.width > 200 ? '1' : '0'; else o['flex-shrink'] = '0'; if (row) o['min-width'] = '0'; }
    if (cross === 'FILL') o['align-self'] = 'stretch';
    else if (cross === 'FIXED') { o[row ? 'height' : 'width'] = px(row ? n.height : n.width); if (!row) o['max-width'] = '100%'; }
    if (n.type === 'TEXT' && n.textAutoResize === 'WIDTH_AND_HEIGHT' && prim !== 'FILL') { delete o.width; o['white-space'] = 'nowrap'; }
    if (n.type === 'TEXT' && n.textAutoResize !== 'NONE') delete o.height;
    const vacio = !('children' in n) || !n.children.some(c => c.visible && c.layoutPositioning !== 'ABSOLUTE');
    if (n.type !== 'TEXT' && vacio) { if (prim === 'HUG') o[row ? 'width' : 'height'] = px(row ? n.width : n.height); if (cross === 'HUG') o[row ? 'height' : 'width'] = px(row ? n.height : n.width); }
  }
  if (isAL(n)) {
    o.display = 'flex'; if (n.layoutMode === 'VERTICAL') o['flex-direction'] = 'column';
    if (n.layoutWrap === 'WRAP') { o['flex-wrap'] = 'wrap'; o['row-gap'] = px(n.counterAxisSpacing || 0); o['column-gap'] = px(n.itemSpacing); }
    else if (n.itemSpacing) { if (n.itemSpacing < 0) o['--solape'] = px(n.itemSpacing); else o.gap = px(n.itemSpacing); }
    const pad = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft];
    if (pad.some(v => v)) { if (hClamp && !mobile && pad[1] >= 64) { o.padding = `${px(pad[0])} clamp(20px, ${num(pad[1] / 14.4)}vw, ${px(pad[1])}) ${px(pad[2])} clamp(20px, ${num(pad[3] / 14.4)}vw, ${px(pad[3])})`; } else o.padding = pad.map(px).join(' '); }
    if (n.primaryAxisAlignItems !== 'MIN') o['justify-content'] = JUST[n.primaryAxisAlignItems];
    o['align-items'] = ALIGN[n.counterAxisAlignItems] || 'flex-start';
    if (n.children.some(c => c.layoutPositioning === 'ABSOLUTE') && !o.position) o.position = 'relative';
  } else if ('children' in n) {
    if (n.children.length && !o.position) o.position = 'relative';
    if (parAL || root) { if (!o.height && !o['min-height']) o.height = px(n.height); if (!o.width && !o.flex && o['align-self'] !== 'stretch') o.width = px(n.width); }
  }
  if (n.type !== 'TEXT') o['box-sizing'] = 'border-box';
  const bg = await bgOf(n);
  if (bg && bg.length && n.type !== 'TEXT' && n.type !== 'VECTOR') {
    const colors = bg.filter(l => l.c), imgs = bg.filter(l => l.img);
    if (imgs.length) { o['background-image'] = imgs.map(l => l.img).join(', '); const f = imgs[0]; if (f.rep) o['background-repeat'] = 'repeat'; else if (f.size) o['background-repeat'] = 'no-repeat'; if (f.size) o['background-size'] = f.size; if (f.pos) o['background-position'] = f.pos; }
    if (colors.length) o['background-color'] = colors[colors.length - 1].c; // el más de abajo que quedó visible
  }
  if (n.strokes && n.strokes.length && n.type !== 'TEXT' && n.type !== 'VECTOR') { const s = n.strokes.find(x => x.visible !== false); if (s && s.type === 'SOLID') { const col = colorOf(s); const st = n.dashPattern && n.dashPattern.length ? 'dashed' : 'solid'; const w = S(n.strokeWeight); if (w != null && !('strokeTopWeight' in n && (n.strokeTopWeight !== w || n.strokeBottomWeight !== w || n.strokeLeftWeight !== w || n.strokeRightWeight !== w))) o.border = `${px(w)} ${st} ${col}`; else { for (const [k, v] of [['top', n.strokeTopWeight], ['right', n.strokeRightWeight], ['bottom', n.strokeBottomWeight], ['left', n.strokeLeftWeight]]) if (v) o[`border-${k}`] = `${px(v)} ${st} ${col}`; } } }
  const r = S(n.cornerRadius); if (r === null && 'topLeftRadius' in n) o['border-radius'] = [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius].map(px).join(' '); else if (r) o['border-radius'] = px(r);
  if (n.effects && n.effects.length) { const sh = n.effects.filter(e => e.visible !== false && (e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW')).map(e => `${e.type === 'INNER_SHADOW' ? 'inset ' : ''}${px(e.offset.x)} ${px(e.offset.y)} ${px(e.radius)} ${px(e.spread || 0)} ${rgba(e.color, e.color.a)}`); if (sh.length) o['box-shadow'] = sh.join(', '); const bl = n.effects.find(e => e.type === 'BACKGROUND_BLUR' && e.visible !== false); if (bl) o['backdrop-filter'] = `blur(${px(bl.radius / 2)})`; const lb = n.effects.find(e => e.type === 'LAYER_BLUR' && e.visible !== false); if (lb) o.filter = `blur(${px(lb.radius / 2)})`; }
  if (n.opacity < 1) o.opacity = num(n.opacity);
  if (n.clipsContent) o.overflow = 'hidden';
  if (n.rotation && Math.abs(n.rotation) > 0.05) { o.transform = `rotate(${num(-n.rotation)}deg)`; if (!parAL && !root) o['transform-origin'] = '0 0'; }
  if (n.type === 'TEXT') {
    const f = S(n.fontName); if (f) Object.assign(o, textCss(f, S(n.fontSize), S(n.lineHeight), S(n.letterSpacing), S(n.fills), S(n.textDecoration)));
    else { const seg = n.getStyledTextSegments(['fontName', 'fontSize', 'lineHeight', 'letterSpacing', 'fills'])[0]; Object.assign(o, textCss(seg.fontName, seg.fontSize, seg.lineHeight, seg.letterSpacing, seg.fills)); }
    if (S(n.textCase) === 'UPPER') o['text-transform'] = 'uppercase';
    if (n.textAlignHorizontal === 'CENTER') o['text-align'] = 'center'; else if (n.textAlignHorizontal === 'RIGHT') o['text-align'] = 'right';
    o.margin = '0';
    if (!o['white-space'] && unaLinea(n)) o['white-space'] = 'nowrap';
    if (n.textAutoResize === 'NONE' && n.textAlignVertical === 'BOTTOM') { o.display = 'flex'; o['flex-direction'] = 'column'; o['justify-content'] = 'flex-end'; }
  }
  if (n.type === 'ELLIPSE') o['border-radius'] = '50%';
  if (n.type === 'LINE') { o.height = '0'; const s = n.strokes[0]; if (s) o['border-top'] = `${px(S(n.strokeWeight) || 1)} solid ${colorOf(s)}`; }
  for (const k of Object.keys(o)) if (o[k] === undefined) delete o[k];
  // sección con alto fijo en Figma: mismo alto
  if (root && n.layoutSizingVertical === 'FIXED') o.height = px(n.height);
  // contenedor GRID de Figma: el escritorio mide siempre 1440 (y el celular 390), así que los hijos van en su lugar exacto
  if (n.layoutMode === 'GRID') { for (const k of ['display', 'flex-direction', 'gap', 'row-gap', 'column-gap', 'flex-wrap', 'justify-content', 'align-items', 'padding']) delete o[k]; if (!o.position) o.position = 'relative'; if (!o.height) o.height = px(n.height); }
  if (!root && par && par.layoutMode === 'GRID' && n.layoutPositioning !== 'ABSOLUTE') {
    for (const k of ['flex', 'flex-shrink', 'min-width', 'min-height', 'align-self', 'max-width', 'order']) delete o[k];
    o.position = 'absolute'; o.left = px(n.x); o.top = px(n.y); o.width = px(n.width); o.height = px(n.height);
    if (n.type === 'TEXT') delete o.height;
    if (o.transform) o['transform-origin'] = '0 0';
  }
  for (const f of (window.GEN_PARCHES || [])) f(o, n, { root, mobile, parAL, par });
  return o;
}
const COMPS = { 'Botón': 'Boton', 'Botón sobre oscuro': 'Boton', 'Enlace con flecha': 'EnlaceFlecha', 'Trazo': 'Trazo', 'Marca/Logo': 'Logo' };
async function mainName(n) { const m = await n.getMainComponentAsync(); if (!m) return null; return m.parent && m.parent.type === 'COMPONENT_SET' ? { set: m.parent.name, variant: m.name } : { set: m.name, variant: '' }; }
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/{/g, '&#123;').replace(/}/g, '&#125;');
const LS = String.fromCharCode(8232); // separador de línea de Figma (Mayús+Enter)
const textJsx = s => esc(s).split(LS).join('\n').split('\n').join('<br />');
async function gen(rootD, rootM, opts = {}) {
  const prefix = opts.prefix || slug(rootD.name);
  const used = {}; const rules = []; const mrules = []; const imports = new Set(); const rutas = opts.rutas || {};
  const clsName = n => { const b = slug(n.name); used[b] = (used[b] || 0) + 1; return `${prefix}__${used[b] > 1 ? b + '-' + used[b] : b}`; };
  const diff = (a, b) => { const out = {}; for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) if (a[k] !== b[k]) out[k] = b[k] === undefined ? 'unset' : b[k]; return out; };
  const decl = o => Object.entries(o).map(([k, v]) => `  ${k}: ${v};`).join('\n');
  const href = n => { for (const r of n.reactions || []) for (const a of (r.actions || [r.action])) { if (a && a.type === 'URL') return a.url; if (a && a.type === 'NODE' && rutas[a.destinationId]) return rutas[a.destinationId]; } return null; };
  const POS = /^(position|left|right|top|bottom|width|height|flex|flex-shrink|min-width|align-self|max-width|transform|transform-origin|margin|opacity|display|order)/;
  async function walk(d, m, depth, ctx) {
    const node = d || m; const cls = depth === 0 ? prefix : clsName(node);
    const cssD = d ? await cssFor(d, { root: depth === 0, mobile: false, hClamp: depth <= 1 }) : { display: 'none' };
    let cssM = null;
    if (d && m) cssM = await cssFor(m, { root: depth === 0, mobile: true, hClamp: false });
    else if (d && ctx.hasM) cssM = { display: 'none' };
    else if (!d && m) { const mm = await cssFor(m, { root: depth === 0, mobile: true }); cssM = { ...mm, display: mm.display || 'block' }; }
    if (cssM && ctx.orden != null && cssM.display !== 'none') cssM.order = String(ctx.orden);
    const ind = '  '.repeat(depth + (opts.baseIndent || 2));
    if (node.type === 'INSTANCE') {
      const mn = await mainName(node); const comp = mn && COMPS[mn.set];
      if (comp) {
        imports.add(comp); rules.push(`.${cls} {\n${decl(Object.fromEntries(Object.entries(cssD).filter(([k]) => POS.test(k))))}\n}`);
        if (cssM) { const dd = diff(cssD, cssM); const keep = Object.fromEntries(Object.entries(dd).filter(([k]) => POS.test(k))); if (Object.keys(keep).length) mrules.push(`.${cls} {\n${decl(keep)}\n}`); }
        const txt = node.findAll(x => x.type === 'TEXT').map(t => t.characters);
        const h = href(node);
        if (comp === 'Boton') { const tipo = mn.set === 'Botón sobre oscuro' ? 'oscuro' : (mn.variant.match(/Tipo=([^,]+)/) || [, 'Primario'])[1].toLowerCase(); return `${ind}<Boton tipo="${slug(tipo)}" className="${cls}"${h ? ` href="${h}"` : ''}>${textJsx(txt[0] || '')}</Boton>`; }
        if (comp === 'EnlaceFlecha') return `${ind}<EnlaceFlecha className="${cls}"${h ? ` href="${h}"` : ''}>${textJsx((txt[0] || '').replace(/\s*→\s*$/, ''))}</EnlaceFlecha>`;
        if (comp === 'Trazo') return `${ind}<Trazo forma="${slug(mn.variant.split('=')[1] || 'subrayado')}" className="${cls}" />`;
        if (comp === 'Logo') return `${ind}<Logo className="${cls}" />`;
      }
    }
    rules.push(`.${cls} {\n${decl(cssD)}\n}`);
    if (cssM) { const dd = diff(cssD, cssM); if (Object.keys(dd).length) mrules.push(`.${cls} {\n${decl(dd)}\n}`); }
    const inHeading = ctx.heading;
    if (node.type === 'TEXT') {
      const tag = inHeading ? 'span' : 'p'; const h = href(node);
      const interior = (tn, sufijo) => {
        const segs = tn.getStyledTextSegments(['fontName', 'fontSize', 'fills', 'textDecoration']);
        if (segs.length < 2) return textJsx(tn.characters);
        return segs.map((g, i) => { const base = segs[0]; const o = {}; if (g.fontName.style !== base.fontName.style || g.fontName.family !== base.fontName.family) { o['font-family'] = `"${g.fontName.family}"`; o['font-weight'] = fontW(g.fontName.style); o['font-style'] = /Italic/.test(g.fontName.style) ? 'italic' : 'normal'; } if (g.fontSize !== base.fontSize) o['font-size'] = px(g.fontSize); if (g.fills[0] && base.fills[0] && JSON.stringify(g.fills[0].color) !== JSON.stringify(base.fills[0].color)) o.color = colorOf(g.fills[0]); if (g.textDecoration !== base.textDecoration) o['text-decoration'] = g.textDecoration === 'UNDERLINE' ? 'underline' : g.textDecoration === 'STRIKETHROUGH' ? 'line-through' : 'none'; if (!Object.keys(o).length) return textJsx(g.characters); const sc = `${cls}-s${sufijo}${i}`; rules.push(`.${sc} {\n${decl(o)}\n}`); return `<span className="${sc}">${textJsx(g.characters)}</span>`; }).join('');
      };
      // si en celular el texto cambia (otros cortes de línea u otras palabras), van los dos y se muestra uno
      let inner = interior(node, '');
      if (d && m && m.type === 'TEXT' && m.characters !== d.characters) inner = `<span className="solo-escritorio">${inner}</span><span className="solo-celular">${interior(m, 'm')}</span>`;
      if (h) return `${ind}<a href="${h}" className="${cls}">${inner}</a>`;
      return `${ind}<${tag} className="${cls}">${inner}</${tag}>`;
    }
    if (['VECTOR', 'BOOLEAN_OPERATION', 'STAR', 'POLYGON'].includes(node.type)) {
      const key = 'vec-' + node.id; ASSETS[key] = { id: node.id, archivo: `${prefix}-${slug(node.name)}-${node.id.replace(/[:;]/g, '-')}.svg`, svg: true };
      return `${ind}<img className="${cls}" src="/img/${ASSETS[key].archivo}" alt="" />`;
    }
    const kidsD = d && 'children' in d ? d.children.filter(c => c.visible) : [];
    const kidsM = m && 'children' in m ? m.children.filter(c => c.visible) : [];
    const pairs = []; const usedM = new Set();
    for (const c of kidsD) { const j = kidsM.findIndex((x, i) => !usedM.has(i) && x.name === c.name && x.type === c.type); if (j >= 0) { usedM.add(j); pairs.push([c, kidsM[j], j]); } else pairs.push([c, null, null]); }
    // lo que solo está en celular va en su lugar (importa para el orden de pintado de lo que va encima)
    kidsM.forEach((x, i) => { if (usedM.has(i)) return; const k = pairs.findIndex(p => p[2] != null && p[2] > i); if (k < 0) pairs.push([null, x, i]); else pairs.splice(k, 0, [null, x, i]); });
    // ¿el celular cambia el orden de los hijos en el flujo?
    const flujo = pairs.filter(([a, b]) => b && b.layoutPositioning !== 'ABSOLUTE').map(p => p[2]);
    const reordena = m && isAL(m) && flujo.some((j, i) => i && j < flujo[i - 1]);
    const isTitle = /^T[ií]tulo$/.test(node.name) && !inHeading;
    let tag = inHeading ? 'span' : 'div';
    if (depth === 0) tag = 'section';
    if (isTitle) { tag = opts.h1 ? 'h1' : 'h2'; ctx = { ...ctx, heading: true }; if (tag === 'h1') opts.h1 = false; rules[rules.length - 1] = rules[rules.length - 1].replace(/\n}$/, '\n  margin: 0;\n  font-weight: inherit;\n}'); }
    const h = href(node); if (h && !inHeading) tag = 'a';
    const kids = []; for (const [a, b, j] of pairs) kids.push(await walk(a, b, depth + 1, { ...ctx, hasM: !!rootM, orden: reordena && b ? j : null }));
    const attrs = `className="${cls}"${tag === 'a' ? ` href="${h}"` : ''}`;
    return kids.length ? `${ind}<${tag} ${attrs}>\n${kids.join('\n')}\n${ind}</${tag}>` : `${ind}<${tag} ${attrs} />`;
  }
  const jsx = await walk(rootD, rootM, 0, { hasM: !!rootM });
  const css = rules.join('\n\n') + (mrules.length ? `\n\n@media (max-width: 767px) {\n${mrules.map(r => r.replace(/^/gm, '  ')).join('\n\n')}\n}` : '');
  return { jsx, css, imports: [...imports] };
}
window.GEN = { gen, ASSETS, VARS, slug, async init() { const vs = await figma.variables.getLocalVariablesAsync(); for (const v of vs) VARS[v.id] = '--' + slug(v.name); return Object.keys(VARS).length; } };
})();

// Ajustes de traducción Figma → CSS que corren al final de cada nodo (cssFor).
window.GEN_PARCHES = [
  // Un relleno opaco arriba tapa todo lo de abajo
  (o, n) => {
    if (!('fills' in n) || !Array.isArray(n.fills) || n.type === 'TEXT') return;
    const vis = n.fills.filter(f => f.visible !== false).reverse();
    const i = vis.findIndex(f => f.type === 'SOLID' && (f.opacity ?? 1) >= 0.999);
    if (i < 0 || i === vis.length - 1) return;
    const tope = vis[i]; const v = tope.boundVariables && tope.boundVariables.color && GEN.VARS[tope.boundVariables.color.id];
    const c = tope.color; o['background-color'] = v ? `var(${v})` : '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
    if (!vis.slice(0, i).some(f => f.type !== 'SOLID')) for (const k of ['background-image', 'background-size', 'background-repeat', 'background-position']) delete o[k];
  },
  // Trazos: adentro = borde (si ocupa lugar) o sombra interna; afuera/centro = contorno, que no achica el contenido
  (o, n) => {
    if (n.type === 'TEXT' || n.type === 'VECTOR' || n.type === 'LINE') return;
    const ks = Object.keys(o).filter(k => /^border(-top|-right|-bottom|-left)?$/.test(k)); if (!ks.length) return;
    if (ks.some(k => / dashed /.test(o[k]))) return;
    const parse = v => { const m = v.match(/^([0-9.]+)px solid (.+)$/); return m ? [+m[1], m[2]] : null; };
    const al = n.strokeAlign;
    if (o.border && (al === 'OUTSIDE' || al === 'CENTER')) { const [w, c] = parse(o.border); delete o.border; o.outline = `${w}px solid ${c}`; if (al === 'CENTER') o['outline-offset'] = `${-w / 2}px`; return; }
    if (n.strokesIncludedInLayout) return;
    const sombras = [];
    if (o.border) { const [w, c] = parse(o.border); sombras.push(`inset 0 0 0 ${w}px ${c}`); }
    else for (const k of ks) { const [w, c] = parse(o[k]); sombras.push({ top: `inset 0 ${w}px 0 0 ${c}`, bottom: `inset 0 -${w}px 0 0 ${c}`, left: `inset ${w}px 0 0 0 ${c}`, right: `inset -${w}px 0 0 0 ${c}` }[k.split('-')[1]]); }
    for (const k of ks) delete o[k];
    o['box-shadow'] = [o['box-shadow'], ...sombras].filter(Boolean).join(', ');
  },
  // En auto layout Figma acomoda la caja girada; CSS no: el sobrante va como margen
  (o, n, { parAL, root }) => {
    if (root || !parAL || !n.rotation || Math.abs(n.rotation) < 0.05) return;
    const a = Math.abs(n.rotation) * Math.PI / 180, w = n.width, h = n.height, r = v => `${Math.round(v * 100) / 100}px`;
    o.margin = `${r(((w * Math.sin(a) + h * Math.cos(a)) - h) / 2)} ${r(((w * Math.cos(a) + h * Math.sin(a)) - w) / 2)}`;
  },
  // "Llenar" dentro de un padre que abraza: en Figma se comporta como "abrazar"
  (o, n, { parAL, par }) => {
    if (!parAL || o.flex !== '1 1 0' || par.primaryAxisSizingMode !== 'AUTO') return;
    delete o.flex; delete o['min-width']; delete o['min-height']; o['flex-shrink'] = '0';
  },
  // Hermanos en flujo de una capa absoluta: con position relative se pintan en el orden de capas de Figma
  (o, n, { parAL, par }) => {
    if (parAL && !o.position && par.children.some(c => c.visible && c.layoutPositioning === 'ABSOLUTE')) o.position = 'relative';
  },
];
