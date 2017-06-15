'use strict'
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home/login', { title: '登录' });
});
router.post('/', (req, res) => {
   console.log(req.body);
});


module.exports = router;
