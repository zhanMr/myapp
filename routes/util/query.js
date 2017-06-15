'use strict';
const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog',
    port: 3306
});
const query = (sql, callback) => {
    pool.getConnection((err, conn) => {
        if(err){
            callback(err, null, null);
        }else{
            conn.query(sql, (err, vals, fields) => {
                conn.release();
                callback(err, vals, fields)
            })
        }
    });
};
module.exports = query;