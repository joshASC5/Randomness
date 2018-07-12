//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomNumber(){
    let number = Math.random();
    let numberTwenty = number*20;
    console.log(numberTwenty);
}
randomNumber();

function randomLetter(){
    let x = Math.random();
    let i = Math.floor(x*25);
    console.log(alphabet[i]);
}
randomLetter();

function randomFood(){
    let x = Math.random();
    let i = Math.floor(x*5);
    console.log(foods[i])
}
randomFood();

function randomStudent(){
    let x = Math.random();
    let i = Math.floor(x*6);
    console.log(students[i])
}
randomStudent();

function randomGroup(){
    for(let i = 0; i < 3; i++){
        randomStudent();
    }
}
randomGroup();
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////