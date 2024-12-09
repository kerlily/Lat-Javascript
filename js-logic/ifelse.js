const password = prompt('masukkan password')

// if(password.length >= 6) {
//    if(password.indexOf(' ') === -1) {
//     if(password.indexOf('x') === -1) {

//     console.log('password valid')
//     }else
//     {
//         console.log('password gbleh ada x')
//     }
//     } else {
//     console.log('password gbleh ada spasi')
//     } 

// }
// else {
//     console.log('6 karakter minimal')
// }

if (password.length >= 6 && password.indexOf(' ') === -1)
{
    console.log('password valid')
}
else {
    console.log('password gbleh ada spasi')
}