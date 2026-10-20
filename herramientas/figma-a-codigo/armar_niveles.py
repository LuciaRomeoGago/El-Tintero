#!/usr/bin/env python3
"""Arma Niveles a partir de las tres pantallas de Figma (P2 Primaria / Secundario / Terciario):
NivelesHero (con las pestañas como botones) + NivelPrimaria / NivelSecundario / NivelTerciario (una hoja cada uno).
Niveles.jsx (a mano) elige cuál se muestra."""
import json, os, re, shutil, subprocess
GEN = '/tmp/claude-0/gen-out/gen'
WEB = os.environ.get('WEB', '/tmp/claude-0/web')
ARMAR = '/home/claude/tintero/armar.py'

def parte(carpeta, seccion, comp):
    tmp = f'{GEN}/_{comp}'
    shutil.rmtree(tmp, ignore_errors=True); os.makedirs(tmp)
    for ext in ('jsx', 'css', 'json'):
        shutil.copy(f'{GEN}/{carpeta}/{seccion}.{ext}', f'{tmp}/{seccion}.{ext}')
    json.dump([seccion], open(f'{tmp}/orden.json', 'w'))
    subprocess.run(['python3', ARMAR, 'pagina', f'_{comp}', comp], check=True)
    shutil.rmtree(tmp)

parte('p2', 'hero', 'NivelesHero')
parte('p2', 'pila', 'NivelPrimaria')
parte('p2s', 'pila', 'NivelSecundario')
parte('p2t', 'pila', 'NivelTerciario')

f = f'{WEB}/src/paginas/NivelesHero.jsx'
s = open(f).read()
s = s.replace('export default function NivelesHero() {', 'export default function NivelesHero({ nivel, elegir }) {')
s = s.replace('<div className="p2-hero__pestanas">', '<div className="p2-hero__pestanas" role="group" aria-label="Nivel">\n          <span className="pestanas__indicador" aria-hidden="true" />')
for i, c in enumerate(['primaria', 'secundaria', 'terciario-e-ingreso']):
    s, n = re.subn(rf'<div className="p2-hero__{c}">(\s*<p[^>]*>[^<]*</p>\s*)</div>',
                   lambda m: f'<button type="button" className={{"p2-hero__{c} pestana" + (nivel === {i} ? " pestana--activa" : "")}} aria-pressed={{nivel === {i}}} onClick={{() => elegir({i})}}>' + m.group(1).replace('<p ', '<span ').replace('</p>', '</span>') + '</button>', s)
    assert n == 1, c
open(f, 'w').write(s)
print('ok NivelesHero')
