import os
import unittest

from src.app import create_app


TEST_DB = "/tmp/personal-budget-test.db"


class TestAPI(unittest.TestCase):
    VALID_DATA = {
        "description": "test_description",
        "note": "test_note",
        "amount": 5.1,
    }

    def setUp(self):
        self.app = create_app(
            {"SQLALCHEMY_DATABASE_URI": f"sqlite:///{TEST_DB}", "TESTING": True}
        )
        self.client = self.app.test_client()

    def tearDown(self):
        os.remove(TEST_DB)

    def test_create_transaction(self):
        response = self.client.post(
            "/api/transactions",
            content_type="application/json",
            json={"transaction": self.VALID_DATA},
        )
        self.assertEqual(response.status_code, 200)
        transaction_id = response.json["id"]
        response = self.client.get("/api/transactions", content_type="application/json")
        self.assertEqual(len(response.json.items()), 1)

        response = self.client.get(
            f"/api/transactions/{transaction_id}", content_type="application/json",
        )
        for k, v in self.VALID_DATA.items():
            self.assertEqual(response.json[k], v)

    def test_delete_transaction(self):
        response = self.client.post(
            "/api/transactions",
            content_type="application/json",
            json={"transaction": self.VALID_DATA},
        )
        self.assertEqual(response.status_code, 200)
        transaction_id = response.json["id"]

        response = self.client.get("/api/transactions", content_type="application/json")
        self.assertEqual(len(response.json.items()), 1)

        response = self.client.delete(
            f"/api/transactions/{transaction_id}", content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)

        response = self.client.get("/api/transactions", content_type="application/json")
        self.assertEqual(len(response.json.items()), 0)

    def test_update_transaction(self):
        response = self.client.post(
            "/api/transactions",
            content_type="application/json",
            json={"transaction": self.VALID_DATA},
        )
        self.assertEqual(response.status_code, 200)
        transaction_id = response.json["id"]

        response = self.client.get("/api/transactions", content_type="application/json")
        self.assertEqual(len(response.json.items()), 1)

        new_data = {**self.VALID_DATA, "amount": 10.0}

        response = self.client.put(
            f"/api/transactions/{transaction_id}",
            content_type="application/json",
            json={"updates": new_data},
        )
        self.assertEqual(response.status_code, 200)

        response = self.client.get(
            f"/api/transactions/{transaction_id}", content_type="application/json"
        )
        self.assertEqual(response.json["amount"], new_data["amount"])
