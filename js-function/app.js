let lempardadu = Math.floor(Math.random() * 6) + 1;
console.log(lempardadu);


function lempardadu() {
    console.log(Math.floor(Math.random() * 6) + 1);
}



function nyanyi() {
    console.log('do..')
    console.log('re..')
    console.log('mi..')
    console.log('fa..')
    console.log('sol..')
    console.log('la..')
    console.log('si..')
    console.log('do..')
}

nyanyi() 
 
function selmamtpagi(name) {
    console.log(`selamat pagi ${name}`)
}

selmamtpagi('farhan')

function jumlahkan(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'input harus angka'
    }
    else{
        return a + b
    }
}

let programming = 'javascript';

function bahasa() {
    programming = 'python';
    console.log(programming);
}
bahasa();
console.log(programming);


// let tinggi = 8
// if (tinggi > 5) {
//     let lebar = 10
//     console.log('lebar')
//     // return;
// } 

console.log(lebar)


scope

let tinggi = 8
if (tinggi > 5) {
    var lebar = 10
    console.log('lebar')

} 
console.log(lebar)


function lamarankerja() {
    const jabatatan = 'programmer'

    function lebihhdalam() {
    
        function orangdalam() {
            let kenalan = `orang dalam bisa memmasukkan ${jabatatan}`;
            console.log(kenalan);
        }
        orangdalam();
    }

    
    lebihhdalam();
}

function perpangkatan(nilai) {

    return nilai * nilai;
}

// let hasil = perpangkatan(6);    

const hasilperpangkatan = function (nilai, nilai2) {
    return nilai * nilai2;
}

hasilperpangkatan(6, 3);



function duakali(main) {
    main();
    main();
    main();
}

function lempardadu(){
    const lempardadu = Math.floor(Math.random() * 6) + 1;
    console.log(lempardadu);    
}

function hasilnyaadalahfunction() {
    const rand = Math.random();
    if (rand > 0.1) {
        return function () {
            console.log('lempardadu');
        }
    }
    else {
        return function () {
            console.log('nyanyi');
        } 
    }
}

const hasil = hasilnyaadalahfunction();
hasil();

function myFun(){
    console.log('hello world');
    return 'halo';
}

const aritmatika = {
    perkalian: function (a, b) {
        return a * b
    }
}

const saya = {
    nama: 'farhan',
    umur: 20,
    kenalan: function () {
        return `halo nama saya ${this.nama} umur saya ${this.umur}`
    }
}

function  sayhello(nama){

    try {
        console.log(nama.toUpperCase()); 
    } catch (error){
        console.log('error harus nomor');
    }
}