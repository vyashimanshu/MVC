FROM cypress/base:14

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./jsconfig.json ./jsconfig.json
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm install cypress
RUN npm run test

