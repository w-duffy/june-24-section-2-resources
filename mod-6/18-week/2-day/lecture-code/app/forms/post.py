from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import InputRequired, Length, URL

from ..posts import users

user_choices = [user["name"] for user in users]

class PostForm(FlaskForm):
    author = SelectField("Author: ", choices=user_choices)
    caption = StringField("Caption: ", validators=[InputRequired(), Length(max=2000)])
    image = StringField("Image URL: ", validators=[InputRequired(), URL()])
    submit = SubmitField("Submit")

