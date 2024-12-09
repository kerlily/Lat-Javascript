let password = prompt('masukkan password')
if (password.length >= 6 && password.indexOf(' ') === -1)
    {
        console.log('password valid')
    }
    else {
        console.log('password gbleh ada spasi')
    }