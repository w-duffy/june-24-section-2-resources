FROM python:3.9-slim



WORKDIR /var/www

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV FLASK_APP=app

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
