


let fullname="Somto";
console.log(fullname);

var age = 50;
console.log(age);
// /ley allow us to declare amd reasign in let
let client =" YINKA"
console.log(client);

const church ="winner"
console.log(church);

// contraints in varable naming
// 1,dont giv VideoColorSpace, use carmel
3
// 2 varables names can contains only latters, numbers, underscoreordollersign bt cant start wit a number
// 3 resevered names like class cant be used in varables
// 4 when using variable, please use  meaningful name so other persons and yourself can understand your code
//Data Types


//string data types(letter or text and they are denoted or represented by single or double quote)
let email = 'askjeeves@gmail.com';
let firstName = "bayo";
let lastName = 'Olaade';
let fullName = firstName + " " + lastName;
console.log(fullName);
// another way of giving space
console.log(fullName);


let country = 'nigeria'
console.log(country);

const state = 'Lagos';
console.log(state);

let continent = 'Africa'
console.log(continent);
// length properties
let length_Of_fullName= fullName.length;
console.log(length_Of_fullName);


let position_fullName = fullName[4]
console.log(position_fullName);


let _country = "Tanzania";
let upper_country = _country.toUpperCase()
console.log( upper_country);

//index
let Email = "techstudio@gmail.com"
console.log(Email);


let index = Email.indexOf('@')
console.log(index);

//slice
let slice = Email.slice(0,4)
console.log(slice);

let replace = Email.replace("t", "z")
console.log(replace);


// Assignment

let animal = 'hippopotamus';
console.log(animal);

let upper_case = animal.toUpperCase()
console.log(upper_case);

let lower_case = animal.toLowerCase()
console.log(lower_case);

let _animal = 'hippopotamus';
console.log(_animal);

let _animal1 = animal.indexOf("m")
console.log(_animal1);

let slice_type = animal.slice(0,6)
console.log(slice_type);

let replace_type = animal.replace("p", "5")
console.log(replace_type);


let nation = 'Nigeria "a terrible country"'
console.log(nation);

// 6/12....tuesday
let year = 2022;
console.log(year);

let score = 100;
let score2 = 200
console.log(score);

let num = 10;
let num2 = 3
console.log(num);

let num1 = 3;
console.log(num1);

//math operation +, -, *, /, **, %
let final_score = score + score2;
console.log(final_score);

let minus = score + score2
console.log(minus);

let div = score / score2
console.log(div);

let indices = num ** num2
console.log(indices);


let modulus = num % num2
console.log(modulus);

year--
console.log(year);

let new_year = year - 2
console.log(new_year);


//c/work
let _continent = 'Africa';
let language = 'pidign English';
let ghanaPopulation = 500
let finlandPopulation = 800
let __country ="Nigeria"
let nigeriaPopulation = 1000
console.log(nigeriaPopulation);
 
// que1
let half = nigeriaPopulation / 2;
console.log(half);


// Que2
console.log(nigeriaPopulation);

// Que3
nigeriaPopulation >= finlandPopulation
console.log(nigeriaPopulation >= finlandPopulation);

// que4
console.log(nigeriaPopulation >= ghanaPopulation);

// Que5
let describle =__country +' is in ' + _continent + ' and it\'s.' + nigeriaPopulation + ' people speak ' + language;
console.log(describle);


// template literal or template string

let response =`${__country} is in ${_continent} and it's ${nigeriaPopulation} people speaks ${language}`
console.log(response);

let Score = 50

let name = "olive"

let statement = name + "scored" + Score + " in her Exams"
console.log(statement);

// template literals will always use a $ sign and a curly bracket for it to word
let _response = `${name} scored ${Score} in her Exams.`
console.log(_response);




let capWhite = "Ola"
let oncap = "Yinka"
let hascap = "Wale"
let blackcap ="Tobi"
console.log(capWhite,oncap, hascap, blackcap);

let friends = ["ola", "Yinka", "Deji", "Tobi"] 
console.log(friends);

// Array properties

console.log(friends[2]);
friends[2]
friends[0] ='john'

// Array methods
let includes = friends.includes("Tobi")
console.log(includes);

let join = friends.join('-');
console.log(join)

let indexOf = friends.indexOf("deji")
console.log(indexOf);

let concat = friends.concat(['bayo', 'Gbola'])
console.log(concat);

let push = friends.push('somoto')
console.log(push);
console.log(friends);

let pop = friends.pop()
// console.log(pop);
console.log(friends);

let add = 100;
console.log(add);
console.log(typeof add);

let food = 'Hambuger'
console.log(food);
console.log(typeof food);

let town
console.log(typeof town);

let sth = null
console.log(sth);
console.log( typeof sth)

//Spread operator
let YinkaFood = [' Amala', 'Ewedu'];
let somtoFood = [ 'ofesala', 'Fufu']

let eggyFood = ['Banga', 'starch',...somtoFood, 'rice' ]
console.log(eggyFood);

console.log(...YinkaFood, somtoFood);
console.log(...somtoFood);

//Array Destructive
let colors =['pink', 'green', 'blue', 'white', 'grey']
let [, ,a,b, ...rest] = colors
console.log(a,b, ...rest);
// note
//rest and others can be used


//assignment 

let class_array = ['Ololade', 'Yinka', 'Wale', 'Tobi', 'Latifat', 'Deji', 'Divine', 'John', 'Jerry', 'Somotochukwu', 'Nestor', 'Gbolahan', 'Bayo', 'Lantana', 'Olive']
console.log(class_array); 


class_array[0] = 'pappi'

console.log(class_array);

let additionalName = class_array.push('Mike', 'Amos')
console.log(class_array);

let remove = class_array.pop()
console.log(class_array);

class_array.unshift('Zack', 'Bobby')
console.log(class_array);

// let _lenght = class_array.length()
// console.log(class_array);

class_array.shift()
console.log(class_array);


 let myConcat=class_array.concat(['Queen', 'Segun', 'Pius', 'Emeka']) 

console.log(myConcat);
console.log(class_array.length);

console.log(myConcat.length);

// Types convertion and coercion

const inputYear = '1987'
console.log(inputYear);
console.log(typeof inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

// lrt try to convert somtin that is not a number
console.log('Eggy');
console.log(Number('Eggy'));
console.log(typeof NaN);


let scorer = 'hi'
let answer = scorer + 10;
console.log(answer);

console.log(String(23), 23);


// cocercion
console.log('i am' + 23 + 'years old');
console.log('I am' + String(23) + 'Years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' - '10' * 3);
console.log('10' - 3 +'23');
console.log('23' > '3');



let z = Number ('1') + 1;
z = z - 1;
console.log(z);

//comparison operator
//>,<, ==, ===, !=, >=, <=
let Year = 2023;
console.log(Year > 2001);
console.log(Year < 2001)
console.log(Year >= 2001)
console.log(Year <= 2001)
console.log(Year != 2001)

// loose comparison operation
let SCORE = '100'
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;

console.log(SCORE2);
console.log(SCORE3);

//strict comparison operator
let SCORE4 = SCORE === 100
let SCORE5 = SCORE !== 100

console.log(SCORE4);
console.log(SCORE5);


//control Flow(for and while) and conditional statement (if, else if, else, switch statement)
//loops
//For - loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let people = ['oliv', 'Bayo', 'John', 'Latifat', 'Yinka']


for (let p = 0; p < people.length; p++) {
    console.log(people[p]);
}
for (let p = 2; p < people.length; p++) {
    console.log(people[3]);
}

for (let rep = 1; rep < 11; rep++){
    console.log(`Eggy lift weight ${rep} 9 🏋️‍♀️`);
}

for (let rep = 1; rep < 11; rep++){
    console.log(' Eggy lifts weigth ' + rep + ' times 🏋️‍♀️🏋️‍♀️');
}


//Y Loop
let q = 0
while (q < 11) {
    console.log(q);
    q++
}

let colors_ = ['pink', 'blue', 'black', 'red']
let sile = colors_.push('ondo')
console.log(sile);

for(let c = 0; c < colors_.length; c++) {
    console.log(colors_);
}

let c = 0;
while (c < colors_.length) {
    console.log(colors_[c]);
    c++
}

// 23/ june
//conditional statement
let AGE = 50

if(AGE === 50) {
    console.log('Baba you re qualify');
}
else{
    console.log('Oga you qualify');

}


let PASSWORD = 'pass'
if ( PASSWORD.length >= 12) {
    console.log('Thats a  very strong password');

}
else if(PASSWORD.length >= 8) {
    console.log('password is week');
}
else if(PASSWORD.length >=6) {
    console.log('password is bad');
    
}
else{
    console.log('error');
}
// Logical opaerator
// || means or
// && means and


//true && true = true
//true && false = false
//false && true = false
//false && false = false

//true || true true
//false || true =true
//ture || false =true
//false || false = false


console.log(true || true);
console.log( true || false);
console.log(false || true);
console.log(false || false);

//&&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


console.log((!true));
console.log(!false);

let password = 'password'

if (password.length >= 5 && password.includes('@')) {
    console.log('thats a strong password');
}
else if( password.length <= 5 || password.includes('@') || password.length === 4) {
    console.log('password is good');

}
else {
    console.log('not good enuff');
}


// let input = prompt('Type a Password')
// if(input.length >= 10 && input.includes('@', '_')) {
//     alert('strong password')

// }
// else if(input.length >= 5 || input.includes ('@')) {
//     alert('good password')
// }else{
//     alert('invalid password, try password')
// }


//breack amd continue

let trainess_Result = [20, 40, 0, 50, 100, 15, 10]
for (let z = 0; z < trainess_Result.length; z++) {

//what if we dont want to log to our console 0
if(trainess_Result[z] === 0) {
    continue
}
else if(trainess_Result[z] === 50) {
    continue
}

// else if(trainess_Result[z] === 100) {
//     continue
// }
console.log(trainess_Result[z]);
if(trainess_Result[z] ==100){
    break
}
}



let _language = ['hausa', 'Igbo', 'Yoruba', 'Tbi'] 
    for(let a = 0; a < _language.length; a++) {
        if(_language[a] === "Igbo") {
            continue
        }
        
        console.log(_language[a]);
    }


    let GRADE = 'z'
    if(GRADE) {
        console.log('you got A');
    } if (GRADE === 'B') {
        console.log('You got B');
    }else if (GRADE === 'B') {
        console.log('You got C');
    }else if (GRADE === 'B') {
        console.log('You got D');
    }else {
        console.log('You failed');
    }


    let point = 'c';
    switch(point) {
        case 'A':
        console.log('You got A');
        break
    case 'B':
        console.log('You got B');
        break
    case 'C':
        console.log('You got C');
        break
    case 'D':
    console.log('You got D');
    break
    default:
        console.log('You failed');
    }


    // c/w
    const n = prompt('Enter a number')
    if (n % 2 !== 0)alert('the number is odd');
    else{
        alert('The number is even')
    }
    

    //assignment 24/6/2022

    // let bayoBMI = 12
    // let olivBMI = 15.5555;
    // if( bayoBMI > olivBMI){
    //     console.log('Bayo BMI is greater');
    // } else {
    //     console.log('oliv BMI is greater');
    // }

    const _bayoBMI = 12
    const _olivBMI = 15.5555;
    const BMI = _bayoBMI < _olivBMI ? 'Bayo BMI is greater than Oliv\'s' : 'Oliv BMI is greater than Bayo\'s'
     console.log(BMI);

    let bad = 30
    if( bad ===30) {
        console.log('Good');
    } else {
        console.log('weak');
    }

    const math = 23
    switch(math) {
        case 'no' :
        console.log('no case');
        break;

    case 'wonderful':
        console.log('correct');
        break;
    default : 
    console.log('nothing');

    }

    //BMI = mass/height ** 2

//Given that Boyo's/Oliv height  10/9
//Given that Bayo/Oliv mass  60/70
//
//Hint use and if else statement but if the spirit leads use ternary operator
//
//BMI = mass/height ** 2

//assignment 24/6/2022
 let Bayo_Height = 10;
 let Oliv_Height = 9;
 let Bayo_mass = 60;
 let Oliv_mass = 70;

 let Bayo__ = Bayo_mass/Bayo_Height;
 let Oliv = Oliv_mass / Oliv_Height;
 let bayo = Bayo__**2;
 let oliv = Oliv **2;
 console.log(oliv);
 console.log(bayo);

 let bayoBMI = bayo;
 let olivBMI = oliv;
 if( bayoBMI > olivBMI){
     console.log('Bayo BMI is greater');
 } else {
     console.log('oliv BMI is greater');
 }
let rain = 'falling';
if(rain = 'live') {
    console.log('rain is falling');
}
//  27/6/2022
// Global and block code
 let AGES = 100;

 if (true) {
    let AGES = 60;
    console.log('inside 1st block of code', AGES);

    if(true) {
        let AGES = 40
        console.log('Inside 2nd block od code', AGES);
    }
 }
 console.log('Outside block of code', AGES);

 //Functions
 //DEclaration
function team () {
    console.log('Yinka ia around');
}

//invoking, run and calling the function
team()
team()
team()

//Expression
let techCenter = function (house) {
    console.log("Latifat inst in class today");
}
techCenter('make')

//parameters and argument
 function _class (name) {
    console.log(`Hello my name is ${name}`);
 }

 _class()
 _class('john')
 _class('Jerry')
 _class('Eggy')

 let speak = function (name) {
    console.log(`thanks to you Mr ${name}`)
 }

 speak('Jimmy') //jimmy will replace d value {name}

 const Teach = function (name, time) {   //parameter can also have a default value
    let expresion = `Good ${time} ${name}`
    console.log(expresion);
 }
 Teach('John', 'morning')

 //Arrow function
 let Speaker = (gender) =>{
    console.log('Na we de here ' + gender);
 }
 Speaker('people')
 ///in d arrow function we can remove the parentesis when we have just one parameter
let describe = (number)=>{
    let apples = 10;
    let description = 'Yinka was bale to eat ' + apples + 'warp of fu-fu  ' + number
    console.log(description);
    return(description)
} 
let agree = describe('today')

let $description = agree + ' after class'
console.log($description);
 

let $trainees = [1, 0, 200]
let fees = [60, 800, 0, 120]
let People = ['Yinka', 'Tobi', 'Ola', 'Latifat']

let calc = (Array, sth)=>{
    for(let i = 0; i < Array.length; i++){
        if(Array[i] === 0){
            continue
        }
        console.log(Array[i]);
    }
    for(let g = 0; g < sth.length; g++) {
        console.log(sth[g]);
    }
}

calc($trainees, People);

// Q
//  We have 2 tech teams(Spartans and alpha)
// They compete against each other 3x, the winner with the highest average score wins the trophy
// Calculate the average score for each team using data below
// Spartan score - 60, 70, 80
// Alpha score - 88, 91, 120

// Compare the teams average score to determine the winner of the copetititon and log to the console
// HINT, use an if, else statement

let Spartan = [60 + 70 + 80];

let alpha =[88 + 91 + 120]


let SpartanAve = Spartan/3;
let alphaAve = alpha/3;
let _score = SpartanAve > alphaAve ? 'Spartan team is the winner' : 'Alpha team is the winner'
console.log(_score);

function calAge(birthYear){
    let ages = 2022 - birthYear
    console.log(ages);
    return ages
}

let myAges = calAge(1934)
let EXPRESSION = 'lATANA IS ' + myAges + ' years old'
console.log(EXPRESSION);


// assignment
// let AlphaScore = [(43 + 21 + 73)]
// console.log(AlphaScore);
// let SpartanScore = [(63 + 55 + 47)]
//  console.log(SpartanScore);

// let calAverage = (Average)=>{
//     console.log(SpartanScore / Average);
// }
// calAverage(3)

// let calcAverage = (Average)=>{
//     console.log(AlphaScore / Average);
// }
// calcAverage(3)

// let none = 'Spartan wins ' + (SpartanScore  + ' Vs ' + AlphaScore);
// console.log(none);

// function cheakWinner(aveAlpha = calAverage, aveSpartan = calcAverage) {
//     console.log(calcAverage(3), calcAverage(3));
// }
// cheakWinner(calAverage)
// let cheakWinner = () =>{

// };
// prompt('welcome')
// alert("welcome") 

//A1
let calcAverage = (one, two, three) =>{
    return ave = (one, two, three)/3
    
}

calcAverage(5,5,5)

//A2
let AlphaScore = calcAverage(43,21,73)
console.log(AlphaScore);
let SpartanScore = calcAverage(63,55,47)
console.log(SpartanScore);

//A3
let checkWinner = function(AlphaScore , SpartanScore){
    if(AlphaScore >= 2* SpartanScore){
        console.log(`AlphaScore wins (${AlphaScore} vs ${SpartanScore})`);
    }else if(SpartanScore >= 2* AlphaScore) {
        console.log(`SpartanScore wins (${SpartanScore} vs ${AlphaScore})`);
    }
}

// checkWinner(AlphaScore,SpartanScore)
checkWinner(100,300)