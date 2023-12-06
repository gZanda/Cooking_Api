// Core node module

const express = require('express');
const router = require('./router');
const db = require('./database/db');
const app = express();
cors = require('cors');

app.use(cors());
app.use(router);
db.sync();

module.exports = app;