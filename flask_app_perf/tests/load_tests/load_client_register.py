from locust import HttpUser, task, between
import random

class ClientRegisterLoadTest(HttpUser):
    wait_time = between(1, 3)  

    @task
    def client_register(self):
        data = {
            "fullName": f"User {random.randint(1, 10000)}",
            "userName": f"user{random.randint(1, 10000)}",
            "email": f"user{random.randint(1, 10000)}@example.com",
            "password": "password123",
            "phone": f"+420123456{random.randint(100, 999)}"
        }

        response = self.client.post("/client_registeration", data=data)

        if response.status_code != 200:
            print(f"Failed registration: {response.status_code} - {response.text}")
