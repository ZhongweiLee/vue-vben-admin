FROM nginx
LABEL maintainer="zhongwei-li@qq.com"

ENV LANG C.UTF-8
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone

COPY dist/ /usr/share/nginx/html
COPY ./vhost.nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
