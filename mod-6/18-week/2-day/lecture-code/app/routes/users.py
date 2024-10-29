from flask import Blueprint, render_template, redirect
from ..posts import posts, users


user_router = Blueprint("users", __name__, url_prefix="/users")

@user_router.route("/<int:id>/posts")
def get_single_users_posts(id):
    user = users[id-1]
    user_posts = [post for post in posts if post["author"] == user["name"]]
    return render_template("posts.html", posts=user_posts, page_type="user")

