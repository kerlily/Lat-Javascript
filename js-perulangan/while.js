// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// const password = 'pass123';

// let guess = prompt('masukkan password');

// while (guess !== password) {
//     guess = prompt('masukkan password');
// }
// alert('password benar');    


// let input = prompt('say something');
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop') 
//         break;
    
// }
// alert('stopped');

// for (let i = 0; i < 1000; i++) {
//     if (i === 100)
//     {
//         break;
//     }
//     console.log(i);
// }


let maximum = parseInt(prompt('masukkan nilai maximal: '));
while(!maximum) {
    maximum = parseInt(prompt('masukkan nilai maximal: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
attempts = 0;

let guess = parseInt(prompt('masukkan angka: '));

while (guess !== targetNum) {
    attempts++;
    if (guess < targetNum) {
        guess = parseInt(prompt('angka terlalu kecil, coba lagi: '));
    } else {
        guess = parseInt(prompt('angka terlalu besar, coba lagi: '));
    }
}
alert('yay! tebakanmu benar!');

alert(`it took you ${attempts} attempts to guess the number`);