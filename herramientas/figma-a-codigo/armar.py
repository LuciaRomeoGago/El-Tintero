#!/usr/bin/env python3
"""Arma páginas React con lo que exporta el generador de Figma (gen.js).
  armar.py pagina <carpeta-gen> <Componente>   → src/paginas/<Componente>.jsx/.css
  armar.py css <archivo.css>                  → imprime el CSS limpio (para las piezas comunes)"""
import json, os, re, struct, sys

GEN = '/tmp/claude-0/gen-out'
CORTE = 1023  # hasta acá se usa el diseño de celular
WEB = os.environ.get('WEB', '/tmp/claude-0/web')


def png_size(p):
    with open(p, 'rb') as f:
        f.read(16)
        return struct.unpack('>II', f.read(8))


def parse(css):
    # el generador puede dejar varios bloques @media de celular: se juntan en uno
    base, med, i = '', '', 0
    for mt in re.finditer(r'@media \(max-width: 767px\) \{', css):
        base += css[i:mt.start()]
        prof, j = 1, mt.end()
        while prof:
            prof += {'{': 1, '}': -1}.get(css[j], 0); j += 1
        med += css[mt.end():j - 1]; i = j
    base += css[i:]
    rx = re.compile(r'([^{}]+)\{([^{}]*)\}')
    def rules(t):
        out = []
        for sel, body in rx.findall(t):
            props = {}
            for line in body.split(';'):
                if ':' in line:
                    k, v = line.split(':', 1)
                    props[k.strip()] = v.strip()
            out.append((sel.strip(), props))
        return out
    return rules(base), rules(med)


def fmt(rules, ind=''):
    return '\n\n'.join(f'{ind}{s} {{\n' + '\n'.join(f'{ind}  {k}: {v};' for k, v in p.items()) + f'\n{ind}}}' for s, p in rules)


def mosaico(p):
    bs = p.get('background-size', '')
    if bs.startswith('TILE:'):
        w, h = png_size(f'{GEN}/img/{bs[5:]}')
        p['background-size'] = f'{w}px {h}px'


def procesar(css):
    d, m = parse(css)
    for _, p in d:
        mosaico(p)
        if 'padding' in p:  # el escritorio siempre se arma a 1440 y se escala entero
            p['padding'] = re.sub(r'clamp\([^,]+,[^,]+,\s*([0-9.]+px)\)', r'\1', p['padding'])
    junt = {}
    for sel, p in m:
        junt.setdefault(sel, {}).update(p)
    out_m = []
    for s, p in junt.items():
        mosaico(p)
        if p.get('display') == 'none':
            p = {'display': 'none'}  # lo que no está en celular: alcanza con ocultarlo
        p = {k: v for k, v in p.items() if not (k == 'box-sizing' and v == 'unset')}
        if p:
            out_m.append((s, p))
    # espaciado negativo de Figma (hojas que se pisan): cada hijo sube sobre el anterior
    extra = []
    for sel, p in d:
        if '--solape' in p:
            lado = 'top' if p.get('flex-direction') == 'column' else 'left'
            extra.append((f'{sel} > * + *', {f'margin-{lado}': 'var(--solape)'}))
    res = fmt(d + extra)
    if out_m:
        res += f'\n\n@media (max-width: {CORTE}px) {{\n' + fmt(out_m, '  ') + '\n}\n'
    return res


def enlaces(jsx):
    return jsx.replace('<a ', '<A ').replace('</a>', '</A>')


if sys.argv[1] == 'css':
    print(procesar(open(sys.argv[2]).read()))
    sys.exit()

_, carpeta, comp = sys.argv[1:4]
orden = json.load(open(f'{GEN}/gen/{carpeta}/orden.json'))
imports, jsx, css = set(), [], []
for k in orden:
    imports.update(json.load(open(f'{GEN}/gen/{carpeta}/{k}.json'))['imports'])
    jsx.append(enlaces(open(f'{GEN}/gen/{carpeta}/{k}.jsx').read()))
    css.append(f'/* {k} */\n' + procesar(open(f'{GEN}/gen/{carpeta}/{k}.css').read()))
body = '\n'.join(jsx)
if '<A ' in body:
    imports.add('A')
imp = ''.join(f'import {c} from "../componentes/{c}.jsx";\n' for c in sorted(imports))
src = f'''// Generado desde Figma ({carpeta}). Los cambios de diseño se hacen en Figma y se vuelve a generar.
{imp}import "./{comp}.css";

export default function {comp}() {{
  return (
    <>
{body}
    </>
  );
}}
'''
os.makedirs(f'{WEB}/src/paginas', exist_ok=True)
open(f'{WEB}/src/paginas/{comp}.jsx', 'w').write(src)
open(f'{WEB}/src/paginas/{comp}.css', 'w').write('\n\n'.join(css))
print(comp, len(src), sum(len(c) for c in css))
