# Module 7: Capstone Project Requirements & Resources

This repo is meant to hold convenient links for you to use during your capstone projects, and to give a summarized compilation of project requirements. Note this is a living document, things will be continuously changed and updated as needed but capstone requirements WILL NOT change.

## Capstone Project Requirements
Projects must have a minimum of **2 working CRUD features** and **base requirements** *(User Auth)* completed by final grading on 12/2/2024. Only the live site will be used for grading.

![scorecard](https://user-images.githubusercontent.com/76798385/229187286-ba7411c1-5369-4756-9228-e9d3a8234005.png)

**Ex. Project: Airbnb**
- Users (Auth): Create, Read
1. Listings: Create, Read, Update, Destroy
2. Bookings: Create, Read, Destroy (Not Editable)
3. Reviews: Create, Read, Update, Destroy
4. Favorites: Create, Read, Destroy
5. *Bonus* Search: Backend Fetch w/ Params (ideal), Frontend filtering.
6. *Bonus* Google API: Integration (i.e. Google Maps)

The first feature has to be **full** CRUD. and the second feature can be **3/4** CRUD or full CRUD. In the example above, the bookings feature has the create, read, and Delete. Ideally, update and delete perform the same action so this feature would be considered 3/4 CRUD.

[Example Scorecard Link](https://docs.google.com/spreadsheets/d/1koN-rcsiGkHTLgI1H7SLbGqohdotLh2ed-0ybl60eVk/edit#gid=1184667675)

### Error Validations
A User should **NOT** be allowed to update or submit a form with blank or null input fields that are assumed to be required. All input fields within a form are assumed to be required and tested as such. If certain fields within a form are not required, then all required fields must be marked by a different CSS style or an asterisk (*) next to the label to indicate a required field.

Please refer to the Error Validations Repo for more examples.
[Error Message Examples](https://github.com/whitnessme/capstone-minimum-required-error-messages)

### Prepopulating Data For the Update Form
When a User goes to Edit/Update a resource, the edit form must be prepopulated with the previous data. Using the "placeholder" attribute will **not** be accepted by itself. You must be able to dynamically update the value of the input field. This will create a smoother UX for recruiters to look at.

---

## The Big Picture

The Capstone Project is an assessment to test your programming and software engineering skills. The ideal expectation is to have a completed MVP (minimum viable product) application done by Monday 12/2, then use the remaining time to refactor to include additional features and/or polish the user interface and improve the user experience. The long-term goal is to present our best work to recruiters to demonstrate our technical abilities.

Remember, a minimum viable product (MVP) is the absolute least you can put out that is also a usable product. For your capstone project, this means 2 fully functional CRUD features with validation error messages that are intuitive and simple to use by someone who has never seen the app before.

We want to make sure we are completing ONE FEATURE before moving on to the next. This feature-driven approach can be seen as an **agile** workflow, whereas the **waterfall** approach can be seen as completing one phase at a time before moving on to the next phase. Agile is an iterative approach where we deliver goals in small incremental amounts. An example of a waterfall workflow would be working on the entire backend first for all features then working on the frontend.

[Agile vs Waterfall Link](https://www.ibm.com/cloud/blog/agile-vs-waterfall)

Students should have a clear road map during the planning phase of what should be the MVPs for their capstone project.

> The end goal is to have 4 features working. After graduation, to be greenlit you will need to have at least 3 features and the Greenlit requirements done in the scorecard. You will have additional time to work on your projects during post-graduation however, it is ideal to shoot for completing the Greenlit requirements early on.

### A Quick Overview of Project Development Expectations

Based on the pie chart below is a rough estimation of what a typical day for a software developer can look like. This can vary based on the company and the role, but ideally, you may be spending less than half a day on solely coding. The typical day-to-day basis during capstone weeks will be attending morning standups, engaging in peer reviews, and coding.

![image (10)](https://github.com/crespohector/welcome-to-mod-7/assets/76798385/51825481-a876-413b-be6a-525b18b1d13a)


## Mental Health Resources
Taking care of our mental health is an important aspect of our life. Please make sure to take breaks, meditate, sleep, or go for a walk outside to do what's best for you to reduce stress. Here are some resources provided that can be informative.

- [Imposter Syndrome](https://docs.google.com/document/d/1CA5UZwDisg_1WMQIurtDsj4vOkWlZ0cZ/edit)
- [Programmer Imposter Syndrome](https://drive.google.com/file/d/1A6_x1iHqKi1aOAlKKUsx3f-jkhZUZhpM/view?usp=sharing)
- [Anxiety](https://drive.google.com/file/d/13BnCXH7XKsJhQOp_xaBH9E2BAwMTTJ2c/view?usp=sharing)
- [Academic Burnout: How to Prevent it and What to Do](https://drive.google.com/file/d/1oTIKuSqpS6S2bvLWJahQ8xmPDvZeqUqF/view?usp=sharing)
- [Avoiding Burnout](https://drive.google.com/file/d/1viR9dO-xOJSF6ouLsLs4vqvC5Qhy8dZY/view?usp=sharing)

## Cheating
Students plagiarising another student's source code will be dismissed. This is an assessment to utilize the knowledge gained from the previous modules to build what you have learned.

## Camera Etiquacy
Students **MUST** have their cameras on anytime they're interacting with staff or students in Module 7, including during the Career Quest. Students who have their cameras off, are AFK/not present, or do not show their full face in the camera view, will receive a **strike**.

## Some Useful Development Links

* [Flask Project Starter](https://github.com/appacademy/aa19-python-group-project/tree/main)
* [Express Project Starter Frontend (authenticate me)](https://github.com/appacademy/practice-for-sprint-15-react-redux-authenticate-me-for-render-deployment)
* [Express Project Starter Backend (authenticate me)](https://github.com/appacademy/practice-for-sprint-12-authenticate-me-for-render-deployment)
* [Flask-SQLAlchemy Quick Reference](https://hackmd.io/@app-academy/flask-sqlalchemy-reference)
* [Flask AWS S3 for Image Uploads](https://github.com/appacademy/Module-6-Resources/tree/main/group_project_resources/AWS)
* [Express AWS S3 for Image Uploads](https://github.com/jdrichardsappacad/aws-s3-pern-demo)
* [Flask Websockets for Chat Features](https://hackmd.io/oTn-ZTjcQRO5Ghbv9tO9ug)
* [Easy Modals Using React Context!](https://github.com/whitnessme/context-modal-instructions)
* [Using the spread operator](https://dev.to/mlgvla/javascript-using-the-spread-operator-with-nested-objects-2e7l#:~:text=The%20spread%20operator%20only,a%20true%20value%20copy.)
* [low-level and high-level wireframes](https://www.justinmind.com/wireframe/low-fidelity-vs-high-fidelity-wireframing-is-paper-dead)
* [Serialization Volume 1: JSON vs Multipart](https://github.com/bkieselEducational/Serialization)
* [Considerations for a Pleasant User Experience (including pre-population of Edit Form when using image uploads)](https://github.com/bkieselEducational/Considerations-for-User-Experience-in-Web-Development/blob/main/README.md)
---

# Phase 1 - Project Approval

## Capstone Project Proposals
You must submit a Project proposal and get approval from an Instructor before implementing the features. The deadline for all project proposals will have to be submitted by the **end of day** on Wednesday 11/20/24.

If you're currently waiting for an Instructor to review your project proposal, please utilize the time appropriately and continue to be productive *(initialize your project + deploy skeleton starter, set up your GitHub repo, project kanban board, etc.)*.

Your Instructor will review your GitHub repo wiki documents based on the submission order.

*Note- Any project proposal without all the required wiki documentation will be disapproved and asked to complete.*

Questions should be asked in the questions channel during the **Project Approval Phase**.

---
## The Purpose of User Stories

As you are preparing your documents for project approval, if you are anything like myself, it is quite likely that you'll simply copy the example that we provide and change values where necessary to make it indicative of your app. And then, you will probably forget that you even did that. And if you don't, in both cases, you possibly will have no clear idea about WHY you did it, aside from getting your project approved. I know I did that!! But since my time going through the academy, I can now see the value and purpose of the User Stories. Not only is this a great format to communicate your application's functionality to your boss or co-workers, but it is also a valuable tool for YOU to use as you actually begin the process of coding out your project.</br>
</br>
With an emphasis on an Agile workflow, which will have you working on a single feature from front to back, you may notice that in setting up your endpoints and routing, simply making a GET, POST, PUT, DELETE endpoint for your feature MAY not directly correlate with how you will be using any of this data on the front end. It may also not be immediately apparent when you need to have more endpoints than you originally thought. In a lot of cases, this will be apparent when GETting data!! This is actually where User Stories can be very helpful in the development of the backend!! If you consult your User Stories and see that your first feature will have functionality on the frontend that calls for grabbing a single item from the database, this tells you that you will probably need to setup an endpoint with the route /api/feature1/<int:id> GET, for example. You may also notice in your User Stories that your first feature has a link to a page with the 10 newest additions. This may indicate that you need another endpoint where you can grab the newest entries. Something like: /api/feature1/newest GET where you will also need to query the database in such a way that it returns the 10 most recently added items (This is where a column like 'created_at' becomes VERY useful!). And the list can go on!! But I hope that you can already see that the functionality you define as essential to your app, makes it clear what you may need on the backend and frontend alike! Use your User Stories as a way to inform and structure your own workflow!! It works!!

---


## Required Github Wiki Documentation Example Links
> User stories, MVP's Feature List, Database Schema, and Wireframes are _required._
1. [Example User Stories (Only for the first two features)](https://github.com/crespohector/welcome-to-mod-7/wiki/User-Stories)
2. [Example MVP's Feature List](https://github.com/crespohector/welcome-to-mod-7/wiki/MVP's-Feature-List)
3. [Example Schema (3-6 tables only for first 2 features needs to be completed)](https://github.com/chrisoney/mercenary-review/wiki/Database-Schema-and-Backend-Routes)
4. [Example Wireframes (Minimum 3 Low-level wireframes. One for Splash page + 1st feature + 2nd feature)](https://github.com/AppBK/Sweetwafer/wiki/Wireframes)
     * [Figma App](https://figma.com)
     * [DrawIO](https://app.diagrams.net)

### [Optional] KanBan Boards
This is optional if you wish to utilize a project management tool to help organize your tasks. Here is a link for creating a Kanban board, [Walkthrough on how to create a Kanban board](https://github.com/crespohector/welcome-to-mod-7/blob/main/kanbanBoardWalkthrough.md).

---

## Important Notes
- Please note that **multiple user types upon sign-up creation are not allowed**. *(Ex- Business owner and customers)*

- *Please do not reference the **exact name** of the target website as this will be flagged by Google for being deceptive.*

- *If your feature includes an image or video upload, then you MUST include AWS s3 buckets for file uploads.*

- *Students who plan to update, add, or remove their user stories during project development need to be approved by their Project Manager.*

- Avoid using copyright resources for seed data.

> We want to diversify our project portfolio. If you already did a social media clone, then maybe try working on a traveling app or E-commerce app.

## Using External Packages (NPM / PIP)
**Please Note: Any external packages implemented without your Project Manager's approval are a risk of having to refactor your code**

* Any package technology *(outside curriculum)* needs to be approved by your **Project Manager**
* CSS Component Libraries *(Radix UI, Shadcn etc.)* are **not allowed**

*Any questions related to third-party APIs (AWS, Google Maps, Socket.io, NPM Packages, etc.) that are outside of the curriculum are the student's responsibility to debug. Instructors may offer advice/guidance but are not expected to help debug.*

### List of Approved Packages
**The packages listed below are already approved, free feel to implement these into your projects**

- Boto3 (AWS)
- Google Maps (@reach/combobox, @react-google-maps/api, use-places-autocomplete...)
- Moment.js
- WaveSurfer.js
- react-player
- Websockets (i.e socket.io)
- Multer
- AWS-SDK
- Faker *(Use the older versions before 6.6)*
- React Drag and Drop *(https://github.com/atlassian/react-beautiful-dnd)*
- Rich Text Editor's
- React star ratings
- Carousel packages

**Please note that some packages require you to add information to your environment variables. Adding these to your local .env does *NOT* affect your Render deployment. You will need to be sure to also add that information to your Render Environment variables.**

---

## Lecture Questions Emoji System

Because IA's are asked to answer all questions asynchronously when possible and because capstone issues can often take hours to address, the IA's will use slack reaction emojis to communicate the status of your question. Please pay attention to these emojis and consider them official communication. If it seems odd to take emojis seriously welcome to the tech world!

# 👀
The eyeballs mean the Instructor is aware of the question is are looking into it. There may be other questions ahead of yours and it may take time to resolve the question based on the complexity of the problem and how clear the question was, if screenshots or commits were provided, etc.

# ✅
The green check means that an Instructor or the student has confirmed that the question has been resolved. If this isn't correct, tag the Instructor in the thread or re-post the question.

# 🔃
The gray or blue check means the question seems to have been resolved by an Instructor or other student but is awaiting some form of confirmation.

# ⚠️ or ❌
The alert emoji means the question may not be specific enough or may not show clear evidence of independent student research on AAO, Stack Overflow, Google, etc.

Before the Instructor can effectively address the question, the student will need to add more information, screenshots, and a description of what you have done so far in terms of research and solution attempts.

Once you have revised the question, tag the Instroctor or re-post a new version of the question in the lecture questions channel.

### Good Question Template

To ensure the quickest possible response to a question, you are encouraged to copy, paste, and fill this out when asking a question in Slack.

1. What feature/task are you working on? (modals, API routes, React components, Reducer, etc)
2. Describe the problem (what are you trying to do? What is it currently doing?)
3. What error messages do you have? (server/front-end console, *if there is one*)
4. What have you done to debug? What have you searched/tried? (THIS IS VERY HELPFUL TO DESCRIBE)
5. Relevant code snippets/screenshots (crop, mark up, or explain them, but make sure that line numbers are visible)

---

# Phase 2 - Project Development

## Workflow Expectations

### Complete ONE FEATURE before moving on to the next.
* Expected General Workflow:
    * DB Tables => Backend Routes => Frontend Components => Error Handling => Styling

> This general workflow is what's to be expected and will help with understanding how the data flow works from the backend to the front end.

### CSS Styling
* Do not leave any default styling for HTML elements such as buttons, inputs, text areas, etc.
* CSS must look as if you have made a valiant effort. You are not expected to be a designer, but attention to spacing, font, and layout must be apparent.
* Your site must be intuitive to the user. Users must not have to hunt and guess how to navigate and use your app.

### GitHub
* Utilize creating a KanBan Board on Github to effectively manage your time in completing tasks and objectives.
* Make sure to push to GitHub daily. *(We want to see that garden green)*
* You are encouraged to use branches to complete your features and to push to your main branch when you have working functionality.
   * Please remember to test the feature not only on local but on Production as well to ensure it works as expected.

---

# Phase 3 - Feature Reviews / Final Grading

## Requesting a Feature Review

Requesting Feature Reviews will begin on Wednesday of the second week of capstone development and go through until lunch on Friday. Ideally, your project should be nearly completed before submitting a feature review so we can point out as many bugs/corrections that will help prepare you for the final grading when projects are due. You can reach out to your project manager when your project is ready for a feature review.

**Note that Wednesday is the final day to request a Feature Review.**

## Review Your Scorecard
After receiving your Feature Review, your priority should be fixing any bugs listed in the bug chart. Please reach out to your grader to ask for any clarifying questions, and to ensure what you need to work on. After fixing the corrections from the scorecard, **please test on Production** to ensure it works as expected.


### Test Test Test Your Features
* Students are **expected** and **responsible** to test their deployed app before final grading.
    * Test the CRUD functionality of all implemented features.
    * Test the User Auth (login, sign up, error validations, demo user, logout).
    * Make sure that your site works for new users and Demo/seeded users.
    * Check if the styling is consistent throughout the entire app.
    * Check to make sure error validations work as intended for user auth and all features *(check [Capstone Minimum Required Error Messages](https://github.com/whitnessme/capstone-minimum-required-error-messages) for more info)*
    * IA's will do their best to leave as much feedback as possible, however, **it is your responsibility to test the functionality on your app to ensure it still works as expected**.

## Final Grade
Upon final grading, you should see two tabs at the bottom of the scorecard Google spreadsheet labeled as **"Feature Review"** and **"Capstone"**. Your capstone project final grade will be in the "Capstone" tab. Students will transition to the AI curriculum and project time, and your Instructor will begin final grading student's projects during this time. Please try to avoid watching your Instructor live grade, your priority will be to focus on any work given by your instructor. Once all projects have been graded, the staff will announce it in the Discord General channel.

*The last time to deploy any changes to your Render application will be at 8 AM PT / 11 AM EST on Monday after the second week of Capstone. Any changes made during final grading will be **considered cheating and handled appropriately**.*

Under the Capstone tab, students will see the status of their project, either as "pass", "fail", or "currently grading". Any capstone project marked as "fail" will take an academic deferral. Please do not view it as a negative outcome but as an opportunity to extend your learning to gain more mastery, which is imperative in the job search.

---

## Future Goals After Final Grade

What to do moving forward? Well, the journey has only just begun. As you get closer to graduation, students are encouraged to continue polishing up their capstone project. Students can also look at the constructive feedback left in the capstone scorecards for more considerations on what to work on. Get ahead of the game, to be greenlit after graduation you will need to have at least 3 features in your projects and have the general requirements in the scorecard *(favicon, readme, About Me Links, etc)* completed.

> "To become a better software engineer, is through repetition."

## What Should Be In a ReadMe?
* Name of the project
* Link to live site
* *Optional* Link to your backend repo if you have a separate one
* Summary of what the project is and what it does
* Screenshots of your app in action (once completed)
* Instructions on how to build/run the project (installation instructions)
* List of techs/languages/plugins/APIs used
* To-dos/future features
* Technical implementation details
   * Anything you had to stop and think about before building
   * Descriptions of particular challenges
   * Snippets or links to see code for these
* Links to contact you *(LinkedIn)*
* Endpoints (See example below)*
<img width="983" alt="MarkdownEndpointsExample" src="https://github.com/crespohector/welcome-to-mod-7/assets/107947798/c80e52df-478f-4eb5-a034-45393e170078">

### Best Practices
* Divide your README into distinct sections
* List the technologies used at the top of your README for increased visibility
* Include nice screenshots or GIFs to show and demonstrate the features of your application
* Include code snippets
* Include a link to the live site
* Provide instructions for how to install the project (if applicable)
* Include a list of technologies used in the project
* Include a list of any third-party APIs you used in the project

[Example of a ReadMe](https://github.com/AppBK/Sweetwafer)

[Markdown Guide Link](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Making Tables in Markdown Tutorial](https://www.makeuseof.com/tag/learning-markdown-write-web-faster/)

## About Links
GitHub and LinkedIn links should be located somewhere in the footer, splash page, and navigation/header. Please refrain from trying to place these links in creative places or as “Easter Eggs”.

## How to keep your Render Web Application "Alive" Using CRON Jobs

### *Option 1* The Google Scripts Method
Here is a GitHub repo to ping (not to be confused with the "ping" utility) your Render projects using Google Scripts. https://github.com/crespohector/welcome-to-mod-7/blob/main/GOOGLE_SCRIPT.md

### *Option 2* The Render CronJob Way (JavaScript Example)
If you prefer to use a Cron Job on Render, you'll need to write a program to make these GET requests to your site(s). Place it into a desired folder in your project and set that folder's relative path to the 'Root Directory' value in the Cron Job settings. Additionally, you'll need to set the 'Command' and 'Build Command' settings for the Cron Job and adjust the value in 'Schedule' to your liking. Also, **note that Render will want your credit card** information to set up a cron job and may charge a fee of $1 per month for this service. Please see the file 'genericKeepAlive.js' in this repo for an example script.

[Render Documentation for free tier](https://render.com/docs/free)

# Additional Resource: Oauth
- [Oauth Repo](https://github.com/bkieselEducational/Oauth)
