var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function textGenerator(text){
  return url+"?"+"text="+text;
}


function clickHandler(){
  var inputVal = txtInput.value;
  fetch(textGenerator(inputVal))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    txtOutput.innerText = translatedText;
  });

};

btnTranslate.addEventListener('click', clickHandler);