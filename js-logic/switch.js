// const day = 4;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");        
//         break;
//     case 3:
//         console.log("Wednesday");        
//         break;
//     case 4:
//         console.log("Thursday");        
//         break;
//     case 5:
//         console.log("Friday");        
//         break;
//     case 6:
//         console.log("Saturday");        
//         break;
//     case 7:
//         console.log("Sunday");        
//         break;
//     default:
//         console.log("Invalid day");
// }

let balonku = prompt('masukkan warna balon').toLowerCase();
switch (balonku) {
    case 'merah':
        console.log('balon merah');
        break;
    case 'kuning':
        console.log('balon kuning');
        break;
    case 'hijau':
        console.log('dooor');
        break;
    default:
        console.log('balon warna lain');
        break;
}