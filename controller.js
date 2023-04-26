'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("Selamat Data di Aplikasi REST API",res)
};

//menampilkan semua data mahasiswa
exports.seluruhpegawai = function(req,res){
    connection.query('SELECT * FROM pegawai', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};