let password = prompt('masukkan password')
if (password.length >= 6 && password.indexOf(' ') === -1)
    {
        console.log('password valid')
    }
    else {
        console.log('password gbleh ada spasi')
    }

    // Logic **AND** itu kayak aturan "semua harus bener". Jadi, kalau ada dua kondisi yang dicek, hasilnya bakal **true** cuma kalau kedua kondisi itu **bener semua**. Kalau ada yang salah, langsung **false**. Jadi, kalau ada satu aja yang salah, hasilnya langsung gak valid.


