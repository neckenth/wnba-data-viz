const router = require('express').Router()

const playerData = require('../data/roster.json')

module.exports = router;

router.get('/', (req, res, next) => {
    res.json(playerData);
})