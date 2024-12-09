// // console.log(document.title) //document.title
// // console.log(document.title)

// document.title = 'wahyu bengkel'
// const body = document.body  


// const h1 = document.createElement('h1')
// h1.textContent = '<marquee>anjay h1</marquee>'

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee>farhan</marquee>'

// const namamu = document.createElement('b')
// namamu.innerText = '<marquee>goklop</marquee>'

// body.append('wahyu bengkel ternial ')
// body.append(h1)
// body.append(namaSaya) 
// body.append(namamu)

document.title = 'wahyu bengkel'
const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
const btn2 = document.querySelector('.btnCLass')

const defaultText = "klik saya 1"

btn1.textContent = defaultText
btn1.style.border = "none"
btn1.style.padding = "5px"
btn1.style.fontSize = "10px"
btn1.style.color = "white"
btn1.style.backgroundColor = "red"  

btn2.style.border = "none"

console.log(btn2)

function gantiwarna(){
    btn1.style.border = "none"
    btn1.style.padding = "5px"
    btn1.style.fontSize = "10px"
    btn1.style.color = "white"
    btn1.style.backgroundColor = "green"
}

function gantihuruf(){
    btn1.textContent = 'klik aja king'
} 

function kekawal(){
    btn1.textContent = defaultText
}