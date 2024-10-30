# TWEETER

## What's Elon Musk up to now?

## PHASE 1 - FLASK Setup

Lets get that flask server up and running!


1. The starter already has `flask` and `python-dotenv` dependencies in its
   pipfile, so we just need to run `pipenv install` to get those dependencies
   installed and our `.venv` folder created 👍🏼.  **REMINDER!  You want to cd
   into the `starter-phase-1` folder before doing any installs, and then create
   all new files in the starter folder**


2. Next let's make our 2 environment files, a `.flaskenv` file to hold our
   public environmental variables like FLASK_APP and FlASK_DEBUG and then a
   `.env` file to hold our sensitive environmental variables like our SECRET_KEY
   (and eventually our DATABASE_URL).


3. Next let's set up our `config.py` to store all of our environmental variables
   imports (it should go in the `app` folder).  It should be a `Config` class
   with the SECRET_KEY being set as a class attribute (HINT: will need to import
   os and use that module to get the necessary environmental variables)


4. Last step for this phase!  Time to create a __init__.py in our app folder to
   house the instance of our flask app.  We want to import our `Config` class we
   just made, as well as flask, and then we will want to create an instance of
   Flask.  We will also want to configure our Flask instance with the `Config`
   class we imported.



When you have completed this phase, you should be able to start up your flask
server successfully using `pipenv run flask run` and provide an additional `-p
5001` if you need to start it on a port other than the default of 5000.  If you
navigate to the app in the browser you will see a "Not Found" error, as we have
not made any routes yet!
