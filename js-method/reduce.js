// const subtotal = [1500, 2500, 2000, 3000];

// let total = 0;
// for(let i of subtotal) {
//     total += i
// }

// console.log(total)

// const total = subtotal.reduce((jmlawal, jmlakhir) => {
//     return jmlawal - jmlakhir 

// })

const anime = [
    {
        name: 'Naruto',
        episode: 700,
        genre: 'Shounen',
        rating: 93
    },
    {
        name: 'One Piece',
        episode: 1000,
        genre: 'Shounen',
        rating: 98
    },
    {
        name: 'Boruto',
        episode: 600,
        genre: 'soidnaoi',
        rating: 70
    }
]

const rating = anime.reduce((rate1, rate3) => {
    if(rate3.rating > rate1.rating) {
        return rate3;
    }
    return rate1
})

console.log(rating);