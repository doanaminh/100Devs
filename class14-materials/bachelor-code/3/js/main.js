/*
click contestant
if wrong contestant
show alert wrong
if correct contestant
show img of winner

.contestant 
.rose

#claire
#nikki
*/

const contestants = document.querySelectorAll('.contestant');
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click) {
	if(click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.remove('hidden')
	} else {
		console.log('THAT\'S THE WRONG ANSWER!')
		document.querySelector('#nikki').classList.add('hidden')
	}
}