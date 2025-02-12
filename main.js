//consts & variables
const range = document.querySelector('input#range')
const rangeBox = document.querySelector('input#range-value')
const password = document.querySelector('input#pass')



// functions
function generation(){
    let passw = ""
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}}|;:',.<>?///`~";
    for(let i = 0; i < range.value; i++) {
        const randNum = Math.floor(Math.random() * chars.length)
        passw += chars.substring(randNum, randNum+1)
        
    }
    password.value = passw;
}
function rangeFunc() {
    rangeBox.value = range.value;
}
function rangeBoxFunc() {
    range.value = rangeBox.value;
}

function copy(){
    navigator.clipboard.writeText(password.value)
    window.alert("Copiado para a área de tranferência")
}








//listeners
const rangeEl = document.querySelector('input#range');
rangeEl.addEventListener('change', rangeFunc);
rangeEl.addEventListener('change', generation);

rangeEl.addEventListener('input', generation);
rangeEl.addEventListener('input', rangeFunc);

const rangeBoxEl = document.querySelector('input#range-value');
rangeBoxEl.addEventListener('change', rangeBoxFunc);

const buttonEl = document.querySelector('button#copy1');
buttonEl.addEventListener('click', copy);
const button2El = document.querySelector('button#copy2');
button2El.addEventListener('click', copy);

const resetButtonEl = document.querySelector('button#reset');
resetButtonEl.addEventListener('click', generation);
generation()