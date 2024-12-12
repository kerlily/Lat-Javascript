let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

const password = 'pass123';

let guess = prompt('masukkan password');

while (guess !== password) {
    guess = prompt('masukkan password');
}
alert('password benar');    


let input = prompt('say something');
while(true){
    input = prompt(input);
    if(input.toLowerCase() === 'stop') 
        break;
    
}
alert('stopped');

for (let i = 0; i < 1000; i++) {
    if (i === 100)
    {
        break;
    }
    console.log(i);
}
