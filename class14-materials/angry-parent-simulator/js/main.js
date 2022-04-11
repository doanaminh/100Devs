/* 
firstName
firstMiddle
lastMiddle
lastName
yell = button
placeToYell

for a value of input
on button press 
take value 
make into a string
use string to write a note
display on page
*/
//variable for speech
const voice = window.speechSynthesis;


const run = () => {
  const fName = document.querySelector('#firstName').value;
  const fMid = document.querySelector('#firstMiddle').value;
  const lMid = document.querySelector('#lastMiddle').value;
  const lName = document.querySelector('#lastName').value;

  const message = `${fName} ${fMid} ${lMid} ${lName} welcome!`;

  document.querySelector('#placeToYell').innerText = message;

  let speechMessage = new SpeechSynthesisUtterance(message);
  voice.speak(speechMessage);
}
document.querySelector('#yell').addEventListener('click', run);
