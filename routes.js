'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/data_seluruh_pegawai')
        .get(jsonku.seluruhpegawai);

    app.route('/data_seluruh_pegawai/:id')
        .get(jsonku.berdasarkanidpegawai);
}