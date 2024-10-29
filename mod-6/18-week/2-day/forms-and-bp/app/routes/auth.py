from flask import render_template, request, redirect, url_for, Blueprint
from app import user
from app.forms.auth import LoginForm

auth_routes = Blueprint("auth", __name__, url_prefix="/auth")

@auth_routes.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if request.method == "POST":
        if form.validate_on_submit():
            username = request.form["username"]
            password = request.form["password"]
            print("CREDENTIALS: ", username, password)
            error = None
            user["username"] = username
            if error is None: # fake
                return redirect(url_for("index"))

    return render_template("login.html", form=form)
