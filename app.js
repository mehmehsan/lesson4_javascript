var btnTranslate=document.querySelector("#btntranslate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {

    console.log("clicked!");
    console.log("input",txtInput.value); 
}



