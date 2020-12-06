var Button = document.querySelector("#btn");
var Inputlan = document.querySelector("#InputLang");
var trans = document.querySelector("#Translated");  

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
  alert("Something wrong with server")
}


function eventHandler() {
  var inputText = Inputlan.value; 

  
  fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
          var translatedText = json.contents.translated;
          trans.innerText = translatedText; // output
         })
      .catch(errorHandler)
};

Button.addEventListener("click", eventHandler)

