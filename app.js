var btnTranslate=document.querySelector("#btntranslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {

    outputDiv.innerHTML = " ajs"+txtInput.value[0]+ txtInput.value +"ahh";
} 

