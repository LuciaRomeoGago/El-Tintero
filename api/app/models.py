from datetime import datetime, timedelta

from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, String, Text, func, or_, select
from sqlalchemy.orm import Mapped, Session, mapped_column, relationship

from .db import Base

RETENCION = timedelta(minutes=20)  # el lugar queda guardado 20 minutos mientras se paga


class Docente(Base):
    __tablename__ = "docente"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(80))
    titulo: Mapped[str] = mapped_column(String(160))
    anios_docencia: Mapped[int] = mapped_column(Integer)
    materias: Mapped[str] = mapped_column(String(200))  # separadas por coma
    niveles: Mapped[str] = mapped_column(String(120))
    modalidades: Mapped[str] = mapped_column(String(60))
    trayectoria: Mapped[str] = mapped_column(Text, default="")
    activo: Mapped[bool] = mapped_column(Boolean, default=True)


class Clase(Base):
    __tablename__ = "clase"
    id: Mapped[int] = mapped_column(primary_key=True)
    materia: Mapped[str] = mapped_column(String(80))
    nivel: Mapped[str] = mapped_column(String(20))  # primaria | secundaria | ingreso
    curso: Mapped[str] = mapped_column(String(60))  # "2.º año", "Ingreso a Veterinaria"
    modalidad: Mapped[str] = mapped_column(String(20))  # presencial | online
    formato: Mapped[str] = mapped_column(String(20))  # grupo | individual
    docente_id: Mapped[int] = mapped_column(ForeignKey("docente.id"))
    inicio: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    duracion_min: Mapped[int] = mapped_column(Integer, default=60)
    cupo_max: Mapped[int] = mapped_column(Integer)
    precio_total: Mapped[int] = mapped_column(Integer)  # pesos, sin centavos
    estado: Mapped[str] = mapped_column(String(20), default="borrador")  # borrador | publicada | cancelada
    docente: Mapped[Docente] = relationship()

    @property
    def sena(self) -> int:
        return self.precio_total // 2


class Reserva(Base):
    __tablename__ = "reserva"
    id: Mapped[int] = mapped_column(primary_key=True)
    clase_id: Mapped[int] = mapped_column(ForeignKey("clase.id"), index=True)
    estudiante_nombre: Mapped[str] = mapped_column(String(80))
    contacto_nombre: Mapped[str] = mapped_column(String(80))
    whatsapp: Mapped[str] = mapped_column(String(30))
    notas: Mapped[str] = mapped_column(Text, default="")
    estado: Mapped[str] = mapped_column(String(20), default="pendiente")  # pendiente | confirmada | cancelada | vencida
    creada_en: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    token: Mapped[str] = mapped_column(String(64), unique=True)
    saldo_cobrado: Mapped[bool] = mapped_column(Boolean, default=False)
    saldo_cobrado_en: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    cancelada_en: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))  # para la línea de tiempo de "Tu reserva"
    medio_saldo: Mapped[str | None] = mapped_column(String(20))  # efectivo | transferencia
    clase: Mapped[Clase] = relationship()


class Pago(Base):
    __tablename__ = "pago"
    id: Mapped[int] = mapped_column(primary_key=True)
    reserva_id: Mapped[int] = mapped_column(ForeignKey("reserva.id"), index=True)
    mp_id: Mapped[str | None] = mapped_column(String(40), unique=True)
    importe: Mapped[int] = mapped_column(Integer)
    estado: Mapped[str] = mapped_column(String(20))  # pendiente | aprobado | rechazado | devuelto (pago simulado)
    aprobado_en: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    devuelto_en: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))


class MensajeWhatsapp(Base):
    __tablename__ = "mensaje_whatsapp"
    id: Mapped[int] = mapped_column(primary_key=True)
    reserva_id: Mapped[int] = mapped_column(ForeignKey("reserva.id"), index=True)
    telefono: Mapped[str] = mapped_column(String(30))
    tipo: Mapped[str] = mapped_column(String(20))  # confirmacion | rechazo | cancelacion
    texto: Mapped[str] = mapped_column(Text)
    estado: Mapped[str] = mapped_column(String(20))  # demo: siempre simulado (se muestra como entregado)
    creado_en: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class UsuarioPanel(Base):
    __tablename__ = "usuario_panel"
    id: Mapped[int] = mapped_column(primary_key=True)
    correo: Mapped[str] = mapped_column(String(120), unique=True)
    clave_hash: Mapped[str] = mapped_column(String(200))
    rol: Mapped[str] = mapped_column(String(20))  # admin | docente
    docente_id: Mapped[int | None] = mapped_column(ForeignKey("docente.id"))


def lugares_libres(db: Session, clase: Clase, ahora: datetime) -> int:
    """Cupo menos las confirmadas y las pendientes que todavía están dentro de los 20 minutos."""
    ocupadas = db.scalar(
        select(func.count()).select_from(Reserva).where(
            Reserva.clase_id == clase.id,
            or_(
                Reserva.estado == "confirmada",
                (Reserva.estado == "pendiente") & (Reserva.creada_en > ahora - RETENCION),
            ),
        )
    )
    return max(clase.cupo_max - ocupadas, 0)
