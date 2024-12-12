// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit)

// } 


const studentsScore = {
    olivia: 20,
    jodi: 19,
    farhan: 22,
    wahyu: 20,
    iwan: 22,
    joko: 20
};


// for (let students in studentsScore) {
//     console.log(` ${students} score is ${studentsScore[students]}`); 
// }


let total = 0;
let scores = Object.values(studentsScore);
for (let score of scores) {
    total += score;
    console.log(total);
}
console.log(total/score.length);