FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY web/build/ /usr/share/nginx/html/
