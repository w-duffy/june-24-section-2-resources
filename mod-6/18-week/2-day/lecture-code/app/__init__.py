from flask import Flask, render_template, redirect, url_for
from app.config import Config
from .posts import posts, users

from .routes import post_router, user_router


app = Flask(__name__)


app.config.from_object(Config)

app.register_blueprint(post_router)
app.register_blueprint(user_router)


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")
