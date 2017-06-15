'use strict'
const express = require('express');
const router = express.Router();
const query = require('../util/query');
router.get('/', (req, res) => {
    res.render('home/index', { title: '登录' });
});



module.exports = router;
