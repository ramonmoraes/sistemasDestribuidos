FROM nginx
COPY . /usr/src/app
WORKDIR /usr/src/app

COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
RUN apt-get update && apt-get install -y vim && apt-get install -y procps
CMD ["nginx", "-g", "daemon off;"]
