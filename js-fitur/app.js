// function lempardadu(sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1
// }

// function sapa(nama = 'user', msg = 'selamt bekerja') {
//     console.log(msg + ' mahal ' + nama)
// }

// const angka = [3, 2, 1, 5, 4, 8]
// const nama = ["budi", "joko", "wahyu", "farhan", "bengkel", "jodi"] 

// const campuran = [...angka, ...nama]
// campuran.sort()
// console.log(campuran)

// const user = {
//     nama: 'farhan',
//     umur: 20
// }

// const user2 = {
//     ...user,
//     hobi: 'coding',
//     password: '123456'
// }

// console.log(user)



// const sumALL = (...angka) => {
//     return angka.reduce((acc, val) => acc + val, 0)
// }

// const nama = ["budi", "joko", "wahyu", "farhan", "bengkel", "jodi"] 

// const winner = (gold, silver, bronze, ...sisa) => {
    //     console.log(`1st ${gold}`)
    //     console.log(`2nd ${silver}`)
    //     console.log(`3rd ${bronze}`)
    //     console.log(`4th ${sisa}`)
    // }   
    
    // console.log(winner(...nama))

// const nama = ["budi", "joko", "wahyu", "farhan", "bengkel", "jodi"] 
   
// const [gold, silver, bronze, ...a] = nama


// console.log(gold, silver, bronze, ...a)

// const user = {
//     nama: 'farhan',
//     umur: 20,
//     role: 'admin'
// };

const animes = [
    {
        name: 'Naruto',
        episode: 700,
        genre: 'Shounen'
    },
    {
        name: 'One Piece',
        episode: 1000,
        genre: 'Shounen'
    },
    {
        name: 'Boruto',
        episode: 600,
        genre: 'Shounen'
    }
]

// const {nama: name, umur, phone = '564654'} = user;

// const userandrole = ({nama,role}) => {
//     return `halo nama saya ${nama} role saya ${role}`;
// }

const animelist = animes.map((name, episode) => {
    return `${name} mengannjau episode ${episode}`
}
)