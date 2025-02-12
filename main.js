//consts & variables
const range = document.querySelector('input#range');
const rangeBox = document.querySelector('input#range-value');
const password = document.querySelector('input#pass');
const bar = document.querySelector('#bar');

    //checkboxes on config class
const lowerCaseCheck = document.querySelector('input#lower');
const upperCaseCheck = document.querySelector('input#upper')
const numsCheck = document.querySelector('input#nums')
const especialCheck = document.querySelector('input#especialChar')

    //consts para eventListener
const rangeEl = document.querySelector('input#range');
const rangeBoxEl = document.querySelector('input#range-value');
const buttonEl = document.querySelector('button#copy1');
const button2El = document.querySelector('button#copy2');
const resetButtonEl = document.querySelector('button#reset');



// functions
function generation(){
    let passw = ""
    let chars = ''
    const lowerCaseChars = 'abcdefghijklmnpqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
    const numberChars = '123456789'
    const especialChars = '!@#$%&*()-_=+|;:,.?/'

    
    if(lowerCaseCheck.checked){
        chars += lowerCaseChars;
    }
    if(upperCaseCheck.checked){
        chars += upperCaseChars;
    }
    if(numsCheck.checked){
        chars += numberChars;
    }
    if(especialCheck.checked){
        chars += especialChars;
    }

    if(!(lowerCaseCheck.checked || upperCaseCheck.checked || numsCheck.checked || especialCheck.checked)){
        window.alert('Ative pelo menos uma opção de personalização!');
        lowerCaseCheck.checked = 'checked';
        chars += lowerCaseChars;
    }
    
    for(let i = 0; i < range.value; i++) {
        const randNum = Math.floor(Math.random() * chars.length)
        passw += chars.substring(randNum, randNum+1)
        
    }
    password.value = passw;

    barColor(range.value);
}

function barColor(value){
    if(value > 14){
        bar.className = 'completed';
    }
    else if(value >= 11){
        bar.className = 'almost-completed';
    }
    else if(value > 7){
        bar.className = 'halfbar';
    }
    else if(value < 8){
        bar.className = 'critical';
    }
}

function rangeFunc() {
    rangeBox.value = range.value;
}
function rangeBoxFunc() {
    range.value = rangeBox.value;
    
}
function rangesChangedOnPassLength(){
    rangeBox.value = password.value.length;
    range.value = password.value.length;
}

function copy(){
    navigator.clipboard.writeText(password.value)
    window.alert("Copiado para a área de tranferência")
}



//listeners

    //listeners de range
rangeEl.addEventListener('change', rangeFunc);
rangeEl.addEventListener('input', rangeFunc);
password.addEventListener('input', rangeFunc);
rangeBoxEl.addEventListener('input', rangeBoxFunc);
password.addEventListener('input', rangesChangedOnPassLength);


    //botoes de copiar
buttonEl.addEventListener('click', copy);
button2El.addEventListener('click', copy);

    //listeners de rodar a função principal
rangeEl.addEventListener('input', generation); //gerar nova senha ao mudar o range
rangeBoxEl.addEventListener('input', generation);
resetButtonEl.addEventListener('click', generation); //substitui por uma nova senha
        //" " " quando há atualização nos caracteres da senha
lowerCaseCheck.addEventListener('input', generation);
upperCaseCheck.addEventListener('input', generation);
numsCheck.addEventListener('input', generation);
especialCheck.addEventListener('input', generation);
generation()