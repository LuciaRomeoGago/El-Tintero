import os

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

engine = create_engine(os.environ.get("DATABASE_URL", "sqlite:///./tintero.db"))
Session = sessionmaker(engine)


class Base(DeclarativeBase):
    pass


def get_db():
    with Session() as db:
        yield db
