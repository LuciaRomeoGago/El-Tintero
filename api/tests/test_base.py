from datetime import datetime, timedelta, timezone

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.db import Base, get_db
from app.main import app
from app.models import Clase, Docente, Reserva, lugares_libres

engine = create_engine("sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool)
Base.metadata.create_all(engine)
TestSession = sessionmaker(engine)
AHORA = datetime(2026, 10, 14, 15, 0, tzinfo=timezone.utc)


def nueva_clase(db, cupo=6):
    d = Docente(nombre="Carolina T.", titulo="Prof.", anios_docencia=14, materias="Matemática", niveles="Secundaria", modalidades="Presencial")
    c = Clase(docente=d, materia="Matemática", nivel="secundaria", curso="2.º año", modalidad="presencial", formato="grupo",
              inicio=AHORA + timedelta(days=1), cupo_max=cupo, precio_total=40000, estado="publicada")
    db.add(c)
    db.flush()
    return c


def reserva(c, estado, hace_min, token):
    return Reserva(clase=c, estudiante_nombre="E", contacto_nombre="F", whatsapp="1", estado=estado,
                   token=token, creada_en=AHORA - timedelta(minutes=hace_min))


def test_lugares_libres_cuenta_confirmadas_y_pendientes_recientes():
    with TestSession() as db:
        c = nueva_clase(db)
        db.add_all([
            reserva(c, "confirmada", 600, "a"),
            reserva(c, "pendiente", 5, "b"),      # dentro de los 20 minutos: ocupa
            reserva(c, "pendiente", 25, "c"),     # vencida por tiempo: no ocupa
            reserva(c, "cancelada", 1, "d"),
        ])
        db.flush()
        assert lugares_libres(db, c, AHORA) == 4
        assert c.sena == 20000


def test_api_clases_lista_solo_publicadas():
    with TestSession() as db:
        nueva_clase(db).estado = "borrador"
        nueva_clase(db)
        db.commit()

    def db_de_prueba():
        with TestSession() as s:
            yield s

    app.dependency_overrides[get_db] = db_de_prueba
    datos = TestClient(app).get("/api/clases").json()
    assert all(c["sena"] == 20000 for c in datos)
    assert len(datos) == len([c for c in datos if c["materia"] == "Matemática"])
    with TestSession() as db:
        assert len(datos) == db.query(Clase).filter_by(estado="publicada").count()
