<<<<<<< HEAD
const router = require("express").Router();
const statsData = require("../data/stats.json");

module.exports = router;

router.get("/", (req, res, next) => {
  try {
    res.json(statsData);
  } catch (error) {
    next(error);
  }
});
=======
const router = require('express').Router()

const statsData = require('../data/stats.json')

module.exports = router;

router.get('/', (req, res, next) => {
    res.json(statsData);
})
>>>>>>> 19de831893befd9f8faf11c2c4fbb7b69027fc91
