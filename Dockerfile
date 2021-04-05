FROM cypress/base:12

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./jsconfig.json ./jsconfig.json
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm install
RUN npm run open
RUN npm run test

