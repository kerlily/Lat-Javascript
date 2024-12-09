const role = prompt('masukkan role')

if(role !== 'admin' || role === 'spv') {
    console.log('anda boleh masuk')
}
else {
    console.log('anda tidak boleh masuk')
}

// Logic NOT itu kayak tombol balikkan keadaan. Jadi, kalau kondisi yang dicek true, dia jadi false. Sebaliknya, kalau kondisi yang dicek false, dia jadi true. Jadi, NOT ini cuma ngubah kondisi menjadi kebalikannya.