from locust import HttpUser, task, between
import random

class ClientLoginStressTest(HttpUser):
    wait_time = between(0.1, 0.3) 

    @task
    def client_login(self):
        data = {
            "userName": f"user{random.randint(1, 10000)}",
            "email": f"user{random.randint(1, 10000)}@example.com",
            "password": "password123"
        }

        response = self.client.post("/client_login", data=data)

        if response.status_code != 200:
            print(f"Login failed: {response.status_code} - {response.text}")
