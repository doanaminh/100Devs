//Create a function that grabs the number of snacks from the input and tells you to stop that many times
let n = document.querySelector('input').value;
let i = 1;
document.querySelector('#help').addEventListener('click', help);
function help() {
    while (i < n) {
        document.querySelector('#stops').innerText += 'Stop snacking! ';
        i++;
    }
}