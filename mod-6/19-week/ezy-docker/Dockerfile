# Base Image.  Render defaults to Python v3.11.10 as of 11/15/2024.
FROM python:3.11.10

# "Copy all source code (first '.') into the image (second '.')"
COPY . .

# Build Command
RUN pip install -r requirements.txt

# Start command
CMD flask db upgrade && flask seed all && gunicorn app:app

#############################################################

### How can we "improve" this?

## Use a lighter base image

## Optimize the order the instructions so that we utilize Docker's caching mechanisms

## Only copy necessary code into the final image

## Use a container image registery such as Docker Hub

## Add CI/CD pipelines, like GH Actions, to automatically to build, test, push our image to a registery, and trigger a deployment

## And more!!

#############################################################
