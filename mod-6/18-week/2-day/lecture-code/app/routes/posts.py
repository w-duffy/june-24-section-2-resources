from flask import Blueprint, render_template, redirect, url_for
from app.posts import posts, random_date_2023
from app.forms import PostForm


post_router = Blueprint("posts", __name__, url_prefix="/posts")


@post_router.route("")
def all_posts():
    return render_template("posts.html", posts=posts, page_type="posts")


@post_router.route("/<int:id>/delete", methods =["GET"])
def delete_post(id):
    post_to_delete = [post for post in posts if post["id"] == id][0]
    posts.remove(post_to_delete)
    return redirect(url_for("posts.all_posts"), 302)

@post_router.route("/<int:id>")
def get_single_post(id):
    post = [post for post in posts if post["id"] == id]
    return render_template("posts.html", posts=post, post_type="post")

@post_router.route("/new", methods=["GET", "POST"])
def create_new_post():
    form = PostForm()

    if form.validate_on_submit():
        new_post = {}
        new_post["id"] = posts[-1]["id"] + 1
        new_post["author"] = form.data["author"]
        new_post["caption"] = form.data["caption"]
        new_post["image"] = form.data["image"]
        new_post["date"] = random_date_2023()
        new_post["likes"] = 0
        posts.append(new_post)
        return redirect("/posts")
    if form.errors:
        # print(form.errors)
        pass
    return render_template("new-post.html", form=form)

@post_router.route("/<int:id>/update")
def update_post_form(id):
    form = PostForm()
    post_to_update = [post for post in posts if post["id"] == id][0]
    form.process(data=post_to_update)
    return render_template("new-post.html", id=id, form=form)

@post_router.route("/<int:id>/update", methods=["POST"])
def update_post(id):
    form = PostForm()

    if form.validate_on_submit():
        new_post = {
            "id": id,
            "author": form.data["author"],
            "caption": form.data["caption"],
            "image": form.data["image"],
            "date": random_date_2023(),
            "likes": 0,
        }
        for idx, post in enumerate(posts):
            if post["id"] == id:
                posts[idx] = new_post
        if form.errors:
            return render_template("new-post.html", form=form)

        return redirect(f"/posts/{id}")
