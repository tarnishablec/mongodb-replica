FROM mongo
WORKDIR /usr/src/configs
COPY mongo.conf .
COPY .keyFile .
RUN chmod 600 .keyFile
RUN mkdir -p /usr/local/mongodb/log/
RUN touch /usr/local/mongodb/log/mongo.log
RUN chmod 777 /usr/local/mongodb/log/mongo.log
EXPOSE 27017
CMD ["--config", "./mongo.conf"]