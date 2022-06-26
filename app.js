'use strict'
// use strict tells us to follow some baseline 'strict rules'

// varibles = storing data as values

// Comment out en masse
// high all the text/lines
// ctrl + K + C

// declaration of the variable firstName to be equal to the value of manuch
// let firstName = 'Manuch'; //string
// let lastName = "Sadri"; //single or double quotes are acceptable
// let numberOfDogs = 0; // number
// let lovesScotch = true; //boolean

//output to the console some value
// console.log('Hello, you are ' + firstName);
// console.log('You have ' + numberOfDogs + ' dogs, which is sad.');

// === strict equals
// == loose equals (truthy or a falsy) string '1' loosely equals numeric 1

// dynamic input
let firstName = prompt('What is your first name?')
let time = prompt('What time is it (0-24)?');
let message = '';

//Provide on-screen greeting dependind on user's time of day input
if(time <= 11){
    //console.log('Good Morning');
    message = 'Good Morning.';
} else if(time >= 12 && time <= 18){
    //console.log('Good Afternoon');
    message = 'Good Afternoon.';
} else if(time <= 24){
    //console.log('Good Evening');
    message = 'Good Evening.';
} else{
    //console.log('Invalid input');
    message = 'Invalid Input.';
}
document.write('Hello ' + firstName + '. ' + message);



console.log('done with program');



