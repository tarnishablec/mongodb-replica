FROM mongo
WORKDIR /usr/src/configs
COPY mongo.conf .
RUN mkdir -p /usr/local/mongodb/log/
RUN touch /usr/local/mongodb/log/rs0-m0.log
RUN chmod 777 /usr/local/mongodb/log/rs0-m0.log
EXPOSE 27017
CMD ["--config", "./mongo.conf"]