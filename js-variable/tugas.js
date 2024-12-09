let saldoawal = Number(prompt('Masukkan saldo awal: '));
let saldotambahan = Number(prompt('Masukkan saldo tambahan: '));
let hutang = Number(prompt('Masukkan hutang: '));
const saldoakhir = saldoawal + saldotambahan - hutang

let hari = new Date().getDay()
switch (hari) {
    case 1:
        hari = 'senin';
        break;
    case 2:
        hari = 'selasa';
        break;    
    case 3:
        hari = 'rabu';
        break;
    case 4: 
        hari = 'kamis';
        break;    
    case 5: 
        hari = 'jumat';
        break;    
    case 6: 
        hari = 'sabtu';
        break;    
    case 7: 
        hari = 'minggu';
        break;
}
alert(`saldo akhir anda adalah ${saldoakhir} dan hari ini adalah hari ${hari}`) 
