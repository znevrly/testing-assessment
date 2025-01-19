# Flask API Performance Testing

This project contains a Flask API application and load/stress tests to evaluate its performance. The tests are written using **Locust** and can be run in headless mode or with a web interface.

---

## **Prerequisites**
- Python 3.7 or higher
- pip (Python package installer)

---

### Install depedencies

```sh 
python -m venv venv

source venv/bin/activate   # Linux/Mac

.\venv\Scripts\activate    # Windows
```

```sh 
pip3 install -r requirements.txt
```

### Run API

```sh
python app.py
```



When running Locust tests, you can customize the behavior of your load or stress tests using the following command-line parameters:

| Parameter              | Description                                                                                  | Example                                      |
|------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------|
| `-u` or `--users`      | The number of users to simulate concurrently.                                               | `-u 10` simulates 10 users.                 |
| `-r` or `--spawn-rate` | The rate at which new users are spawned per second until the total user count is reached.    | `-r 2` spawns 2 users per second.           |
| `--run-time`           | Specifies how long the test should run. Can be in seconds (`s`), minutes (`m`), or hours (`h`).| `--run-time 5m` runs the test for 5 minutes.|
| `--host`               | The base URL of the target system being tested.                                             | `--host http://127.0.0.1:5000` specifies the target API. |
| `--headless`           | Runs Locust tests without starting the web interface. Ideal for CI/CD pipelines.            | `--headless` runs the test in terminal only. |
| `--csv`                | Generates CSV reports of the test results with the specified file prefix.                   | `--csv=reports/test_report` saves reports to `test_report_*`. |
| `-f` or `--locustfile` | Specifies the Locust test file to run.                                                     | `-f tests/load_tests/load_client_register.py` runs the specified test file. |

---

### Run Load Tests Web Interface

e.g 
```sh
locust -f tests/load_tests/load_client_register.py --host=http://127.0.0.1:5000
```

### Run Load Tests Headless

e.g 
```sh
locust -f tests/load_tests/load_client_register.py --host=http://127.0.0.1:5000 --headless -u 10 -r 2 --run-time 5m --csv=reports/client_register_load_report
```

### Run Stress Tests Headless

e.g 
```sh
locust -f tests/stress_tests/stress_client_login.py --host=http://127.0.0.1:5000 --headless -u 50 -r 10 --run-time 5m --csv=reports/stress_client_login_report
```



