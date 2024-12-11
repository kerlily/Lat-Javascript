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