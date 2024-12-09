const arraySaya = ['jodi', 'iwan', 'farhan', 'joko']
nama = arraySaya.includes('wahyu')
if (nama == false){
    arraySaya.push('wahyu')
    console.log('wahyu disini')
    posisi = arraySaya.indexOf('joko')
    indexsblm = arraySaya.indexOf('joko') - 1
    indexsdh = arraySaya.indexOf('joko') + 1
    blm = arraySaya[indexsblm]
    sdh = arraySaya[indexsdh]
    console.log(`posisi sebelum joko adalah ${blm}`)
    console.log(`posisi sesudah joko adalah ${sdh}`)
}
else{
    console.log('wahyu gatau')
    
}
console.log(nama , posisi, arraySaya) 