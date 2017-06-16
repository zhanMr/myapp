'use strict'
const express = require('express');
const router = express.Router();
const query = require('../util/query');
router.get('/', (req, res) => {
    res.render('home/index', { title: '登录' });
});

router.post('/', (req, res) => {
    let sql = `select * from content order by id desc`;
    query(sql, (err, rows, fields) => {
        if(!err){
            res.json({data: rows});
        }
    })

});

module.exports = router;
