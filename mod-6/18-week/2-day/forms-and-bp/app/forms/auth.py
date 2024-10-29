from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import InputRequired, Length


class LoginForm(FlaskForm):
    username = StringField("Username: ", validators=[InputRequired(), Length(5)])
    password = StringField("Password: ")
    submit = SubmitField("Submit")
