//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

/*
check for button
day for input
placeToSee for message

when click button
take value of input
evaluate and if certain day
display text
*/

const voice = window.speechSynthesis;

document.querySelector('#check').addEventListener('click', run);
function run() {
  const day = document.querySelector('#day').value.toLowerCase();

  let message;

  if(day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = message ='CLASS DAY!';
  } else if(day === 'monday' || day === 'wednesday') {
    document.querySelector('#placeToSee').innerText = message = 'BORING !';
  } else if(day === 'friday' || day === 'saturday' || day ===  'sunday') {
    document.querySelector('#placeToSee').innerText = message = 'IT\'S THE WEEKEND! ! !';
  }

  const speechMessage = new SpeechSynthesisUtterance(message);
  voice.speak(speechMessage);
}