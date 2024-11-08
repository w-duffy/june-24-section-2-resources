from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired

ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif", "webp"}

class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    age = IntegerField("Age")
    bio = TextAreaField("Biography")
    submit = SubmitField("Submit")

class ImageForm(FlaskForm):
    image = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
