/* 
click on final rose
hide other contestants
and show only nikki

finalRose 
claire
nikki 
sharleen
*/

document.querySelector('#finalRose').addEventListener('click', run);
function run() {
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#sharleen').style.display = 'none';
}