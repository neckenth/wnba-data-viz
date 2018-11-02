const router = require('express').Router()

const statsData = require('../data/stats.json')

module.exports = router;

router.get('/', (req, res, next) => {
    res.json(statsData);
})