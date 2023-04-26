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
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data pegawai berdasarkan id
exports.berdasarkanidpegawai = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM pegawai WHERE id_pegawai = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows,res)
            }
    });
};