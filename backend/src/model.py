from datetime import datetime

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, DateTime, Float, Integer, String

db = SQLAlchemy()


class Transaction(db.Model):
    __tablename__ = "transaction"
    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)
    createdAt = Column(DateTime, default=datetime.now)
    amount = Column(Float, nullable=False)
    note = Column(String, nullable=True)

    @property
    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "amount": self.amount,
            "createdAt": self.createdAt.isoformat(),
            "note": self.note,
        }
