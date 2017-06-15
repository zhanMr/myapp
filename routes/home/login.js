'use strict'
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home/login', { title: '登录' });
});

module.exports = router;
