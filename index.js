require('dotenv').config();

const path = require('path');
const tmi = require('tmi.js');
const express = require('express');
const service = require('./service');
const app = express();

/*
 * Chat
 */

const chatClient = new tmi.client({
  identity: {
    username: process.env.TMI_USERNAME,
    password: process.env.TMI_PASSWORD,
  },
  channels: [ process.env.TMI_CHANNEL_NAME ],
  connection: {
    reconnect: true,
  },
});

chatClient.on('message', service.handleChatMessage);
chatClient.on('connected', service.handleChatConnected);
chatClient.on('disconnected', service.handleChatDisconnected);
chatClient.connect();

service.run();

/*
 * Service
 */

app.use('/command.json', (request, response) => {
  response.status(200).set('Connection', 'close').json(service.state);
});

app.use('/voting.json', (request, response) => {
  response.status(200).set('Connection', 'close').json(service.voting);
});

app.use('/', (request, response) => {
  response.sendFile(path.join(`${__dirname}/prompt.html`));
});

app.listen(8000, () => {
  console.log('[ SERVICE:SERVER ] STARTED');
});
