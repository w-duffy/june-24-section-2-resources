# TWEETER

## What's Elon Musk up to now?

Remember to check your code from Phase 2 against the starter code for Phase 3 to see how you did!


## Phase 3 - Setting up a form class

So now we get a random tweet on our home page, and our feed is filled with great
tweets, what else could we want with our site?  We probably want to let users
make new tweets?


1. We are going to need a few more dependencies to get a form up and working, so
   lets run the following: `pipenv install wtforms flask-wtf` to get `WTForms`
   and its helper dependency `flask-wtf` installed.


2. We will want to make a `form` folder, and then in that folder a `form.py`
   file to store our tweet form. Create a Tweet form class and form fields for
   author, tweet, and a submit button.  The author and tweet fields should both
   be strings and be required.  Label the submit button "Create Tweet".
   Reminder that forms need several imports 👍🏼

3. Now lets start working on a route for this form!  We will want to start with
   the GET route for a URL path of `'/new'` and we will certainly need to import
   our new form, so we can instantiate it inside our route.  We will also want
   to create a new html template for our form called `'new_tweet.html'`, but
   before we jump to that, make sure to render the new template, and to pass
   form to that template.

4. The `'new_tweet.html'` form should inherit from `'base.html'` so it will get
   some CSS.  Some sort of header would be nice on this page.  You can set up
   the form fields anyway you like, `div`'s or `p` tags are usually preferred.
   Don't forget your CSRF protection!  If you give the `form` tag a
   `class="tweet"` attribute, it will look a whole lot nicer in the browser!


If you take a peek in the browser, your new form should look something like
this, depending on how you set up the fields.  If you try to submit the form,
nothing should happen because we still need to set up the post route! ![Form
Route](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-18/tweeter-phase3.png)
