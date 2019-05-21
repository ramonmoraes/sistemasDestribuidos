FROM python:3.6
COPY . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 5000
RUN pip install -r ./requeriments.txt
CMD ["flask", "run"]