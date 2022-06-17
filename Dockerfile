FROM maven:3.8.6-jdk-11

RUN mkdir -p /usr/src/crud

WORKDIR /usr/src/crud

ENV MYSQL_ROOT_PASSWORD=password
ENV DB_PORT=3306
ENV MYSQL_DB_HOST=crud-mysql-1
