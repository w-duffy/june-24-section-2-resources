# TWEETER

## What's Elon Musk up to now?

Remember to check your code from Phase 1 against the starter code for Phase 2 to see how you did!


## PHASE 2 - Routes & Templates


Now that we have a server up and running, let's make some routes!


1. Lets start by making a home or index route!  This route should have the URL
   path of `'/'`and should randomly pick a tweet from the `tweets` dictionary in
   the `tweets.py` file. (might want to check out the random module if your
   don't remember the method to use)  Once a random tweet has been selected, we
   want to render a template using the already created `index.html` template in
   the `templates` folder (remember to send the tweet along to the template).
   You should see output in the browser like the following if all is done
   correctly (might see a different tweet as that part is random)  
![Index
Route](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-18/tweeter-phase2-1.png)
Note how we did not need to install `Jinja2` at all, since it is a dependency of
flask!


2. So our index route works, but wow is it in need of some styling, and maybe
navigation?  Luckily, there is a `base.html` in our templates folder that has a
nav bar and is already linked to a stylesheet!  All we need to do is set up our
`index.html` to inherit from the `base.html`, and we will be looking at some
pretty colors!  Check out the browser and our home route should look like the
following if all is done correctly (again might see a different tweet as that
part is random) ![Index Route
Styled](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-18/tweeter-phase2-2.png)


3. A random tweet is nice and all for a home page, but we want more of a feed
   that is going to display all the tweets we have, so lets start on that route!     

    a. Let's make a route at the URL path of `'/feed'` that will get all of the
    tweets, and then send them to the `feed.html` template that is already
    created in the `templates` folder.  

    b. The `feed.html` template is going to need some work, lets start of by
    having it inherit from the `base.html` template, like we did for our home
    route.  Now at least it should look pretty!  

    c. We are not just sending a single tweet like we did on the home route, we
    are sending a whole list, so we will need to iterate through the list in the
    template.  What we want displayed in each tweet can be the same as our home
    page, so it should look like this (the below code snippet is how you should
    display a single tweet, but you will need to add the code to iterate through
    all the tweets):

    ```html
        <div class="tweet">
            <p>{{ tweet.author }} tweeted on {{ tweet.date }} ...</p>
            <p>"{{ tweet.tweet }}"</p>
            <p>Likes: {{ tweet.likes / 1000}}k</p>
        </div>
    ``` 

    **Make sure the "tweet" is in the div with the class name "tweet" and the
    div with the class name "feed_container" is outside you loop to make the
    completed template look the same as other styles in the site.**

    d. If a tweet has more than 525k likes, lets make the `Likes` orange instead
    of being plain white!  Add a conditional to the `feed.html` template to take
    care of this.  


    If everything was done right, you should be able to see something like this
    in your browser: ![Feed
    Route](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-18/tweeter-phase2-3.png)
