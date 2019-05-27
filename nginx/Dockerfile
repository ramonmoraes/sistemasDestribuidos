FROM nginx
RUN apt-get update && apt-get install -y vim && apt-get install -y procps && apt-get install -y curl
WORKDIR /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
