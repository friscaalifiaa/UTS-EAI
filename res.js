'use strict';

exports.ok = function(values, res){
    var data = {
        'status': 200,
        'message': "Berhasil mengakses data",
        'values': values
    };

     res.json(data);
     res.end();
};


//response untuk nested matakuliah
exports.nested = function(values, res){
    const hasil = values.reduce((akumulasikan, item)=>{
        if(akumulasikan[item.Nama]){
            const group = akumulasikan[item.Nama];
            if(Array.isArray(group.matakuliah)){
                group.matakuliah.push(item.matakuliah);
            }else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else {
            akumulasikan[item.Nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}