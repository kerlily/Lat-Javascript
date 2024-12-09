console.log(1>3);

let bane = '20'

let age = 20;
let conclu = age >= 18;


console.log(conclu);
console.log(bane == age);
console.warn('mek');
console.error('mek');
alert('mek');

if (1 +1 == 3) {
    console.log('kelas king');
}

else{
    console.log('kelas kucing');
}

let angka = Math.random();
console.log(angka);
if (angka > 0.5) {
    console.log('angka lebih besar dari 0.5');
}

else{
    console.log('angka lebih kecil dari 0.5');
}

const hari = prompt('masukkan hari').toLowerCase();

if (hari ==='senin') {
    console.log('hari ini adalah senin');
} else if (hari === 'selasa') {
    console.log('hari ini adalah selasa');
} else if (hari === 'rabu') {
    console.log('hari ini adalah rabu');
} else if (hari === 'kamis') {
    console.log('hari ini adalah kamis');
} else if (hari === 'jumat') {
    console.log('hari ini adalah jumat');
} else if (hari === 'sabtu') {
    console.log('hari ini adalah sabtu');
} else if (hari === 'minggu') {
    console.log('hari ini adalah minggu');
} else {
    console.log('typo sia pasti');
}

const nilai = prompt('masukkan nilai');

if (nilai > 80) {
    console.log('nilai anda A');
} else if (nilai > 70) {
    console.log('nilai anda B');
} else if (nilai > 60) {
    console.log('nilai anda C');
} else if (nilai > 50) {
    console.log('nilai anda D');
} else {
    console.log('nilai anda E');
}