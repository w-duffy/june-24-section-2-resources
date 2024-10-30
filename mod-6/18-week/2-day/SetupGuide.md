# Flask-SQLAlchemy Setup Guide

Here's how you should be setting up an app with Flask, WTForms, and SQLAlchemy

## 1. Do your normal project setup

- I usually start by creating:

  - Project folder

  - `app` folder

  - `__init__.py` file inside of `app`

## 2. Install dependencies

```zsh
 pipenv install flask flask-wtf flask-sqlalchemy python-dotenv
```

## 3. Set up your environment

- Make sure VSCode is pointing to the right `.venv`

- Create a `.flaskenv`

```env
FLASK_APP=app
DEBUG_MODE=1
```

- Create a `.env`

```env
SECRET_KEY=generate_a_secret
DATABASE_URL=sqlite:///dev.db
```

## 4. Create our Config class

```python
# /project-name/app/config.py
import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
```

## 5. Create an instance of SQLAlchemy

```python
#/project-name/app/db.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
```

## 6. Connect it all to our app

```python
# /project-name/app/__init__.py
from flask import Flask
from .config import Config
from .db import db

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
```

## Add Your Models

Example model for Ponies
```python
#/project-name/app/models.py
from app.db import db

# Example Model:
class Pony(db.Model):
    __tablename__ = 'ponies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    birth_year = db.Column(db.Integer)
    breed = db.Column(db.String(255))
```
## Run Migrations
> ⚠️We'll look at migrations on Thursday; we can use this for now

Add a file to handle migrations

```python
#/project-name/migrations.py
from dotenv import load_dotenv

load_dotenv()
from app import app
from app.db import db
from app.models import Pony

with app.app_context():
    db.drop_all()
    db.create_all()

    # Seed too, add more if you'd like:
    seabiscuit = Pony(name="Seabiscuit", birth_year=2015, breed="Stallion")
    db.session.add(seabiscuit)
    db.session.commit()

```

Run this file seperately from the flask app. We'll look at migrations on Thursday.

```bash
pipenv run python migrations.py
```
