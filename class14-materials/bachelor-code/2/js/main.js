/*
when click on name
picture of name should pop up
other names' pictures should be hidden

andiNext
claireNext
sharleenNext

andi
claire
sharleen
*/

document.querySelector('#andiNext').addEventListener('click', andiNext);
function andiNext() {
	document.querySelector('#andi').classList.toggle('hidden');
	document.querySelector('#claire').classList.add('hidden');
	document.querySelector('#sharleen').classList.add('hidden');
}

document.querySelector('#claireNext').addEventListener('click', claireNext);
function claireNext() {
	document.querySelector('#andi').classList.add('hidden');
	document.querySelector('#claire').classList.toggle('hidden');
	document.querySelector('#sharleen').classList.add('hidden');
}

document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);
function sharleenNext() {
	document.querySelector('#andi').classList.add('hidden');
	document.querySelector('#claire').classList.add('hidden');
	document.querySelector('#sharleen').classList.toggle('hidden');
}