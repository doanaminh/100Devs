//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', check);
function check() {
    let age = document.querySelector('#danceDanceRevolution').value;
    let message = document.querySelector('p').innerText;
    

//If under 16, tell them they can not drive
    if (age < 16) {
        message += 'You can\'t drive';
    }    

//If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18) {
        message += 'You can\'t hate from outside the club bc you can\'t even get in';
    }
//If under 21, tell them they can not drink
    else if (age < 21) {
        message += 'You can\'t drink';
    }
//If under 25, tell them they can not rent cars affordably
    else if (age < 25) {
        message += 'You can\'t rent cars affordably';
    }
//If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30) {
        message += 'You can\'t rent fancy cars affordably';
    }
//If under over 30, tell them there is nothing left to look forward too
    else if (age >= 30) {
        message = 'gl finding a purpose';
    }
    console.log(message);
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
