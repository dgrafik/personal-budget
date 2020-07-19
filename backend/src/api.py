from datetime import datetime

from flask import Blueprint, jsonify, request
from sqlalchemy.orm.exc import NoResultFound

from .model import Transaction, db

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/transactions/<int:transaction_id>", methods=["PUT", "GET", "DELETE"])
def transaction(transaction_id):
    transaction = Transaction.query.filter_by(id=transaction_id).first()
    if not transaction:
        return jsonify({"result": "failure", "error": 404}), 404

    if request.method == "PUT":
        if request.is_json:
            updates = request.json["updates"]
            transaction.description = updates["description"]
            transaction.note = updates["note"]
            transaction.amount = updates["amount"]
            db.session.commit()
            return jsonify(transaction.serialize), 200
        else:
            return jsonify({"result": "failure", "error": 400}), 400

    elif request.method == "GET":
        return jsonify(transaction.serialize), 200

    elif request.method == "DELETE":
        db.session.delete(transaction)
        db.session.commit()
        return jsonify(transaction.serialize), 200


@api.route("/transactions", methods=["GET", "POST"])
def transactions():
    if request.method == "GET":
        result = {}
        transactions = Transaction.query.all()
        for transaction in transactions:
            result[transaction.id] = transaction.serialize
        return jsonify(result), 200

    if request.method == "POST":
        if request.is_json:
            try:
                transaction = request.json["transaction"]
                newTransaction = Transaction(
                    description=transaction["description"],
                    amount=transaction["amount"],
                    note=transaction["note"],
                )
                db.session.add(newTransaction)
                db.session.commit()
                return jsonify(newTransaction.serialize), 200
            except NoResultFound:
                return jsonify({"result": "failuse", "error": 404}), 404
        else:
            return jsonify({"result": "failure", "error": 400}), 400
