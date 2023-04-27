'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/data_seluruh_mahasiswa')
        .get(jsonku.seluruhmahasiswa);

    app.route('/data_seluruh_mahasiswa/:id/:Nama')
        .get(jsonku.berdasarkanidmahasiswa);

    app.route('/tambah_data_mahasiswa')
        .post(jsonku.tambahmahasiswa);

    app.route('/ubah_data_mahasiswa')
        .put(jsonku.ubahmahasiswa);

    app.route('/hapus_data_mahasiswa')
        .delete(jsonku.hapusmahasiswa);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
}