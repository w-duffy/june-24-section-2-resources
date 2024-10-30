from flask import Flask, render_template
from .config import Config
from .tweets import tweets
import random
# !!START SILENT
from .form.form import TweetForm
# !!END

app = Flask(__name__)

app.config.from_object(Config)


@app.route("/")
def index():
    """
    Landing page, displays a random tweet
    """
    tweet = random.choice(tweets)
    return render_template("index.html", tweet=tweet)


@app.route("/feed")
def feed():
    """
    Displays the feed page showing all tweets
    """
    return render_template('feed.html', tweets=tweets)

# !!START SILENT
@app.route("/new", methods=["GET", "POST"])
def new_tweet_form():
    """
    Displays the Tweet form on GET requests, and then
    validates and creates a new Tweet on POST requests
    """
    form = TweetForm()
    return render_template("new_tweet.html", form=form)
# !!END
