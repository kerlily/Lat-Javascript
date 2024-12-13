const examScore = [80, 90, 100, 50, 70, 70 , 23];
const isgraduate = examScore.some((score) => score >= 70);
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
        genre: 'soidnaoi'
    }
]

const animelist = anime.some((anime) => anime.genre === 'Shounen');