var btnTranslate = document.querySelector("#btntranslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {

    return serverURL + "?" + "text#" + text

}

function errorHandler(error) {
    console.log("error occured" , error)
    alert("something wrong with server")
}

console.log(txtInput);



function clickHandler() {

    // outputDiv.innerText = " ajs"+txtInput.value[0]+" " + txtInput.value +"ahh";

    var inputTet = txtInput.Value;

    fetch(getTranslationURL(txtInput))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
