from datetime import datetime, timezone

from fastapi import Depends, FastAPI
from sqlalchemy import select
from sqlalchemy.orm import Session

from .db import get_db
from .models import Clase, lugares_libres

app = FastAPI(title="El Tintero")


@app.get("/api/salud")
def salud():
    return {"ok": True}


@app.get("/api/clases")
def clases(db: Session = Depends(get_db)):
    ahora = datetime.now(timezone.utc)
    filas = db.scalars(select(Clase).where(Clase.estado == "publicada").order_by(Clase.inicio))
    return [
        {
            "id": c.id,
            "materia": c.materia,
            "nivel": c.nivel,
            "curso": c.curso,
            "modalidad": c.modalidad,
            "formato": c.formato,
            "docente": c.docente.nombre,
            "inicio": c.inicio.isoformat(),
            "duracion_min": c.duracion_min,
            "cupo_max": c.cupo_max,
            "lugares_libres": lugares_libres(db, c, ahora),
            "precio_total": c.precio_total,
            "sena": c.sena,
        }
        for c in filas
    ]
