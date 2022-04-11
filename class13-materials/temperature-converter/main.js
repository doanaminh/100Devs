//Write your pseduo code first! 
document.querySelector('#converter').addEventListener('click', convert);
function convert() {
    const celcius = document.querySelector('#input').value;
    farenheit = celcius * (9/5) + 32;
    document.querySelector('#result').innerText = farenheit;
}