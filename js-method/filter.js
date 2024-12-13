const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const hasil = angka.filter(angka => {
    

    return angka > 4;
});

// console.log(hasil);
const anime = [
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

const rating = anime.filter((anime) => anime.episode > 800)
.map((anime) => anime.name);
const rating2 = anime.filter((anime) => anime.episode < 800);

// console.log(`anime ddiatas eps 800 : ${rating}`);111