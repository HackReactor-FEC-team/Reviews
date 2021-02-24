/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Review = require('../database/reviews.js');
const Overview = require('../database/overview');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', async (req, res) => {
  try {
    let results = await Review.find().sort({ _id: -1 });
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/overview', async (req, res) => {
  try {
    const results = await Overview.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/review', async (req, res) => {
  try {
    const results = await Review.create(req.body.input);
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
