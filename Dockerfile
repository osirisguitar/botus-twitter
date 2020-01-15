FROM node:12.8.1-alpine

COPY package.json /app/
COPY package-lock.json /app/
COPY index.js /app/
COPY dummy.js /app/
COPY cron.js /app/
COPY run.sh /app/
COPY lib /app/lib

WORKDIR /app
VOLUME /app/data

RUN npm install --production

CMD /bin/sh -c "source /app/run.sh"