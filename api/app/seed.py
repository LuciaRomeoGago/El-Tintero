"""Datos de la demo (los mismos que en Figma). Uso: python -m app.seed"""
import secrets
from datetime import datetime, timedelta, timezone

from sqlalchemy import select

from .db import Session
from .models import Clase, Docente, Reserva

AR = timezone(timedelta(hours=-3))


def cuando(dia, hora, minuto=0):
    return datetime(2026, 10, dia, hora, minuto, tzinfo=AR)


def cargar():
    with Session() as db:
        if db.scalar(select(Docente.id)):
            print("La base ya tiene datos; no cargo nada.")
            return
        laura = Docente(nombre="Laura M.", titulo="Maestra de Educación Primaria · ISFD N.° 10", anios_docencia=16,
                        materias="Todas las materias,Tareas y carpetas", niveles="Primaria", modalidades="Presencial")
        pollo = Docente(nombre="“Pollo” S.", titulo="Lic. en Ciencias Biológicas · UNICEN", anios_docencia=12,
                        materias="Biología,Química", niveles="Secundaria,Ingreso a Veterinaria", modalidades="Presencial,Online")
        carolina = Docente(nombre="Carolina T.", titulo="Profesora de Matemática · ISFD N.° 10", anios_docencia=14,
                           materias="Matemática,Física", niveles="Secundaria,Ingreso", modalidades="Presencial,Online")
        db.add_all([laura, pollo, carolina])

        # (docente, materia, nivel, curso, modalidad, formato, inicio, minutos, cupo, precio, estado, confirmadas)
        datos = [
            (laura, "Tareas y carpetas", "primaria", "4.º grado", "presencial", "grupo", cuando(14, 16), 60, 6, 40000, "publicada", 5),
            (carolina, "Matemática", "secundaria", "2.º año", "presencial", "grupo", cuando(14, 17), 60, 6, 40000, "publicada", 3),
            (carolina, "Física", "secundaria", "5.º año", "online", "individual", cuando(14, 18, 30), 60, 1, 40000, "publicada", 1),
            (pollo, "Biología", "ingreso", "Ingreso a Veterinaria", "online", "grupo", cuando(14, 19, 30), 60, 6, 40000, "publicada", 2),
            (laura, "Prácticas del lenguaje", "primaria", "5.º grado", "presencial", "grupo", cuando(15, 16), 60, 4, 40000, "publicada", 2),
            (pollo, "Biología", "ingreso", "Ingreso a Veterinaria", "online", "individual", cuando(16, 18, 30), 90, 1, 60000, "publicada", 0),
            (pollo, "Química", "secundaria", "4.º año", "presencial", "grupo", cuando(17, 17, 30), 60, 6, 40000, "publicada", 6),
            (carolina, "Matemática", "ingreso", "Ingreso", "online", "grupo", cuando(17, 19), 60, 6, 40000, "borrador", 0),
        ]
        for docente, materia, nivel, curso, modalidad, formato, inicio, minutos, cupo, precio, estado, confirmadas in datos:
            clase = Clase(docente=docente, materia=materia, nivel=nivel, curso=curso, modalidad=modalidad, formato=formato,
                          inicio=inicio, duracion_min=minutos, cupo_max=cupo, precio_total=precio, estado=estado)
            db.add(clase)
            for i in range(confirmadas):
                db.add(Reserva(clase=clase, estudiante_nombre=f"Estudiante {i + 1}", contacto_nombre="Familia",
                               whatsapp="2494000000", estado="confirmada", token=secrets.token_urlsafe(32)))
        db.commit()
        print("Datos de la demo cargados.")


if __name__ == "__main__":
    cargar()
