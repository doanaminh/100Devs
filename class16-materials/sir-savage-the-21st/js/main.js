//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
let savageSays = document.querySelector('h2').innerText;
function twentyOne() {
    for(i = 1; i <= 21; i++) {
        savageSays = '21';
    }
}