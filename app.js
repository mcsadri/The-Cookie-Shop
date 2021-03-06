'use strict'

function getGreeting(){
    let greetingName = getFirstName();
    let greetingTime = getTime();
    return document.write('Hello, ' + greetingName + '. ' + greetingTime);
}

function getFirstName(){
    let firstName = prompt('What is your first name?')
    return firstName;
    //console.log('the value of firstName in function getFirstName is: ' + firstName);
}

function getTime(){
    let time = prompt('What time is it (0-24)?');
    let message = '';
    if(time <= 11){
        //console.log('Good Morning');
        message = 'Good Morning.';
    } else if(time >= 12 && time <= 18){
       // console.log('Good Afternoon');
        message = 'Good Afternoon.';
    } else if(time <= 24){
        //console.log('Good Evening');
        message = 'Good Evening.';
    } else{
        //console.log('Invalid input');you
        message = 'Invalid Input.';
    }
    return message;
}

function getImage1(){
    let imageChoice = prompt('Pick a cookie: 1 or 2');
    let imageSrc = '';
    if(imageChoice == 1){
        imageSrc = '<li><img class="subImage" alt="chocolate chip cookies" src="./images/chocochip.jpg"></li>';
        //console.log('imageChoice = ' + imageChoice + ' and imageSrc = ' + imageSrc);
    }
    else if(imageChoice== 2){
        imageSrc = '<li><img class="subImage" alt="oatmeal cookies" src="./images/oatmeal.jpg"></li>';

    }
    else{
        imageSrc = '<li><img class="subImage" alt="cookie image 1" src="https://via.placeholder.com/300x150.png?text=Cookie+Pic+1"></li>';
    }
    return document.write(imageSrc);
}

// for loop example
function getCookieStars(){
    // 1. variable declaration & assignment
    // 2. condition that needs to be met
    // 3. what do we do with the variable once an iteration has completed
    let userStars = prompt('How many stars would you rate our cookie shop? (1 -5)');
    let printStars = '';
    for(let x = 0; x < userStars; x++){
        printStars = printStars + '<img class="star" alt="cookie star" src="./images/cookiestar.jpg">'
        // console.log(x);
        // console.log(output);
    }
    return document.write(printStars);
}
