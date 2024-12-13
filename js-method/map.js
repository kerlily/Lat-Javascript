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

const animelist = anime.map(function(anime) {
    return anime.name.toUpperCase();
})
console.log(anime);
console.log(animelist);