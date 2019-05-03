FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./cert.crt /etc/nginx/cert.crt
COPY ./cert.rsa /etc/nginx/cert.rsa

ENV PORT=

EXPOSE ${PORT}