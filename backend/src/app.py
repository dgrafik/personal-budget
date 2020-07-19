from flask import Flask
from flask_cors import CORS

from .api import api
from .model import db


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)

    app.config.from_mapping(
        SECRET_KEY="dev",
        SQLALCHEMY_DATABASE_URI="sqlite:///../../budget.db",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    if test_config:
        app.config.from_mapping(**test_config)

    app.register_blueprint(api)

    db.init_app(app)
    with app.app_context():
        db.create_all()  # Create sql tables for our data models
    return app


def run():
    app = create_app()
    app.run()


if __name__ == "__main__":
    run()
