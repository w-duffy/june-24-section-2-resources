from flask import Flask, session, request, redirect, url_for

from src.config import Config

app = Flask(__name__)

config = Config()

app.config.from_object(config)




@app.route("/")
def index():
    if "username" in session:
        return f'Logged in as {session["username"]}'
    return "You are not logged in"


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        session["username"] = request.form["username"]
        return redirect(url_for("index"))
    return """
        <form method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    """


@app.route("/logout")
def logout():
    # remove the username from the session if it's there
    session.pop("username", None)
    return redirect(url_for("index"))




#     # page = replace_placeholder(HTML_PAGE, "message", "Hello World!")
# # HTML_PAGE = """
# # <!DOCTYPE html>
# # <html lang="en">
# HTML_PAGE = """
# <!DOCTYPE html>
# <html lang="en">
#   <head>
#     <meta charset="UTF-8">
#     <meta name="viewport" content="width=device-width, initial-scale=1.0">
#     <meta http-equiv="X-UA-Compatible" content="ie=edge">
#     <title>HTML 5 Boilerplate</title>
#   </head>
#   <body>
#     <h1>{{message}}</h1>
#   </body>
# </html>
# """

# def replace_placeholder(html_page, placeholder, replacement):
#     start_token = "{{" + placeholder + "}}"
#     return html_page.replace(start_token, replacement)
