# Hero Center Dockerfile
#

FROM nginx:1.11.3-alpine
MAINTAINER Kent Johnson <kentoj@gmail.com>

COPY dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf


# To normalize the timezone to my local timezone
ENV TZ "America/Boise"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
