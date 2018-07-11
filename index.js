/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

function convert(inputText) {
 var i;
  let inputText = document.getElementById('sourceLangText').value;
  let splitInput = inputText.split("");

  const BrailleLiteralSet = new Map(englishToBrailleLiteralSet);
  for (i=0; i<inputText.length; i++) {

    splitInput[i]=BrailleLiteralSet.get(splitInput[i]);
    }
  document.getElementById('targetLangText').innerHTML = splitInput.join("");
  }
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
};
