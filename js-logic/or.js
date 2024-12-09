// let age = 35;

// if (age >18 || age < 18) {
//     console.log('anda boleh masuk');
// }
// else {
//     console.log('anda tidak boleh masuk');
// }

const role = prompt('masukkan role')

if(role === 'admin' || role === 'spv') {
    console.log('anda boleh masuk')
}
else {
    console.log('anda tidak boleh masuk')
}




    // Logic OR itu kebalikannya. Jadi, OR itu kayak aturan "kalau ada yang bener aja, udah cukup". Artinya, kalau ada satu kondisi yang bener, hasilnya true. Cuma kalau kedua-duanya salah, baru deh hasilnya false. Jadi, cukup satu kondisi yang berhasil, gak perlu semuanya.