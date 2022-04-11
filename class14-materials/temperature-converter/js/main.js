//Write your pseduo code first! 

/*
convert
degrees
result

take value of input and assign it
take assignment and run it through a function to convert
assign new number
display new number
*/




document.querySelector('#convert').addEventListener('click', convert);
function convert() {
    let degrees = document.querySelector('#degrees').value;
    let result = degrees * 9/5 + 32;
    document.querySelector('#result').innerText = result;
}