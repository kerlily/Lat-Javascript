let nama = 'farhan'
let usia = 20
let tinggi = 170.3
let berat
let pacar = null

berat = prompt('masukkan berat anda : ');

if (pacar == null) {
    pacar = 'ada';
}
else {
    pacar = 'tidak ada';
}
switch (berat) {
    case '1':
        berat = 'ada';
        break;
    case '2':
        berat = 'ada 2';
        break;
    default:
        berat = 'tidak ada';
        break
}
let saldoawal = 500000
let saldotambahan = 100000
const hutang = 400000
const saldoakhir = saldoawal + saldotambahan - hutang

let x = 10
const y = 3
const z = x/y

alert(` jumlah x = ${x} dan jumlah y = ${y} dan z = ${z}`)
// alert(`nama saya ${nama} usia saya ${usia} tinggi saya ${tinggi} berat saya ${berat} pacar saya ${pacar} saldo akhhri yang sya miliki adalah ${saldoakhir}`);
console.log(berat, usia, tinggi, nama, pacar);
