user = {}
from flask import Flask, render_template
from app.config import Config
from .routes import auth_routes


app = Flask(__name__)

app.config.from_object(Config)


@app.route("/")
def index():
    return render_template("index.html", message="my message", user=user)

@app.route("/names")
def names():
    return render_template("names.html", message="my message", user=user)


app.register_blueprint(auth_routes)
