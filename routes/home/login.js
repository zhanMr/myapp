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
        res.json({
            a: 100
        })
    })

});


module.exports = router;
