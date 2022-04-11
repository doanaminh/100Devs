// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const arrFunction = a => {
    
        if(a[0] < a[a.length - 1]) {
            console.log('Hi');
        }
        if(a[0] > a[a.length - 1]) {
            console.log('Bye');
        }
        if(a[0] === a[a.length - 1]) {
            console.log('We close in an hour');
        }
     
}