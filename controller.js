'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("Selamat Data di Aplikasi REST API",res)
};

//menampilkan semua data mahasiswa
exports.seluruhmahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id dan Nama
exports.berdasarkanidmahasiswa = function(req,res){
    let id = req.params.id;
    let Nama = req.params.nama;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id, Nama],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows,res)
            }
    });
};

//menambahkan data mahasiswa
exports.tambahmahasiswa = function(req,res){
    var NIM = req.body.NIM;
    var Nama = req.body.Nama;
    var Jurusan = req.body.Jurusan;

    connection.query('INSERT INTO mahasiswa (NIM,Nama,Jurusan) VALUES (?,?,?)',[NIM,Nama,Jurusan],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok('Berhasil menambahkan data mahasiswa',res)
            }
    });
};

//mengubah data mahasiswa
exports.ubahmahasiswa = function(req,res){
    var id = req.body.id_mahasiswa;
    var NIM = req.body.NIM;
    var Nama = req.body.Nama;
    var Jurusan = req.body.Jurusan;

    connection.query('UPDATE mahasiswa SET NIM=?, Nama=?, Jurusan=? WHERE id_mahasiswa=?',[NIM,Nama,Jurusan,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok('Berhasil mengubah data mahasiswa',res)
            }
    });
};

//menghapus data berdasarkan id
exports.hapusmahasiswa = function(req,res){
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok('Berhasil menghapus data mahasiswa',res)
            }
    });
};

//menampilkan gabungan matakuliah
exports.tampilgroupmatakuliah = function(req, res){
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.nested(rows, res);
            }
        }
    )

};