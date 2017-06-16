'use strict'
const express = require('express');
const router = express.Router();
const query = require('../util/query');
router.get('/', (req, res) => {
    res.render('home/login', { title: '登录' });
});
//处理登录
router.post('/', (req, res) => {
    let {username, password} = req.body;
    let sql = `select * from login where username = '${username}' and password = '${password}'`;
    query(sql, (err, rows, fields) => {
        console.log(rows.length);
        res.cookie('user', username, {maxAge: 60 * 1000});
        req.session.isvist = {'key': username};
        res.json({
            a: 1000
        })
    })

});


module.exports = router;
