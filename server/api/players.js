<<<<<<< HEAD
const router = require("express").Router();
const playerData = require("../data/roster.json");

module.exports = router;

router.get("/", (req, res, next) => {
  try {
    res.json(playerData);
  } catch (error) {
    next(error);
  }
});
=======
const router = require('express').Router()

const playerData = require('../data/roster.json')

module.exports = router;

router.get('/', (req, res, next) => {
    res.json(playerData);
})
>>>>>>> 19de831893befd9f8faf11c2c4fbb7b69027fc91
