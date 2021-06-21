const express = require('express');
const users = require('../data/users.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
});

module.exports = router;