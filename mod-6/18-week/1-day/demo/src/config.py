import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    DB_FILE = os.environ.get("DB_FILE")
