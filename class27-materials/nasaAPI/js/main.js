//Example fetch using pokemonapi.co
const urlOG = `https://api.nasa.gov/planetary/apod?api_key=v7OeWYWkS1hB3WR1JeEr1fyQFrcK5OHofd7I1V9z`


document.querySelector('input').addEventListener('input', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=v7OeWYWkS1hB3WR1JeEr1fyQFrcK5OHofd7I1V9z&date=${choice}`;
  let img = document.querySelector('img');

  fetch(url)
      .then(response => response.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        console.log(img.height, img.width);
        if (data.media_type === 'image') {

          document.querySelector('iframe').src = '';
          document.querySelector('iframe').style.height = '0';
          document.querySelector('iframe').style.width = '0';


          document.querySelector('.instructions').classList.add('hidden');
          document.querySelector('.date').innerText = data.date;
          document.querySelector('.title').innerText = data.title;
          document.querySelector('img').src = data.hdurl;
          console.log(data.hdurl.height);
          document.querySelector('.explanation').innerText = data.explanation;
          
          
        } else if (data.media_type === 'video') {

          document.querySelector('img').src = '';
          document.querySelector('iframe').src = data.url;
          document.querySelector('iframe').style.height = '90vh';
          document.querySelector('iframe').style.width = '100vw';

          document.querySelector('.instructions').classList.add('hidden');
          document.querySelector('.date').innerText = data.date;
          document.querySelector('.title').innerText = data.title;
          document.querySelector('img').src = data.hdurl;
          document.querySelector('.explanation').innerText = data.explanation;

        }
      })
      // .then (data => {
      //     console.log(img.height, img.width);
      //     if (img.width > img.height) {
      //       img.style.width = 'auto';
      //       img.style.height = '100vh';
      //     } else {
      //       img.style.width = '100vw';
      //       img.style.height = 'auto';
      //     }
      // }) 
      .catch(err => {
          console.log(`error ${err}`)
      });  
}



let messageArray = ['hover your mouse at the top and select a date using the calendar'];
  let textPosition = 0;
  let speed = 80; 

const typewriter = _ => {
  

  document.querySelector('.instructions').innerHTML = messageArray[0].substring(0, textPosition) + '<span>|</span>';

  if (textPosition++ != messageArray[0].length) 
    setTimeout (typewriter, speed);
  
};
window.addEventListener('load', typewriter);