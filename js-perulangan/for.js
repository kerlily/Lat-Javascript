// for(let i = 1; i <= 10 ; i++){
//     console.log(i)
// }

// for(let i = 200; i >= 0 ; i --){
//     console.log(i)
// }


// const animal = ['cat','deer','dog','snake','lion'];

// for(let i = 0; i < animal.length; i++){
//     console.log(i + 1 + '. ' + animal[i])
// }

// const pilihan = 'abcd'

// for(let i = 1; i <= 10; i++){
//     console.log(`${i}. soall nomor ${i}:`)
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`   ${pilihan[j]}. pilihan jawban`)
//     }
// }


const studentrow = [
    ['farhan', 'ewf', 'sdfdsf', 'czv'],
    ['dfg', 'bengfgdkel', 'sdf', 'bengkel'],
    ['thtrdh', 'dfsf', 'bengkel', 'dfzsfddf'],
    ['wefwe', 'adsf', 'asdf', 'wefwf']
];

for(let i = 0; i < studentrow.length; i++){
    const row = studentrow[i];
    console.log(`saat row #${i + 1}`)
    for(let j = 0; j < row.length; j++){
        console.log(`   ${row[j]}`);
    }

}
