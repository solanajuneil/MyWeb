/*
//This is comment
console.log('Hello World!');

let firstName = 'juneil';
let lastName = 'solana';
console.log (firstName, lastName);

//constant 
const interestRate = 0.3;
interestRateunchanged = 1;
console.log(interestRate)


// can be reassigned
let interestRate1 = 0.3;
interestRate1 = 1;
console.log(interestRate1)


//Primative
let name = 'Lelouch';
let age = 21;
let trueorFalse = false;
let firstNameorderone = undefined;
let selectedColor = null;

//Reference type 
const person = {
    name :"David",
    age: 20
};
console.log(person)

person.name = 'James';
person.age = 22;
console.log(person) 

// array
let selectedColors = ['red', 'yellow', 'blue'];
selectedColors[3] = 'green';
selectedColors[4] = 2;
console.log(selectedColors.length)

//class
function command(fName, sName, mName){
    console.log('Hello ' + fName +' ' +  sName,mName)
}
command('Juneil', 'Solana', 'Examen')
command('Juneil2', 'Solana2', 'Examen2')
number1 = 23; 
number2 = 23;
function add(number1, number2){
    return number1 + number2;
}
let answer = add(number1,number2);
console.log(add(number1, number2)); 

if (answer > 50){
    console.log('The answer is 3')
}  
*/
function tutorials() {
    console.log("YOOOO");
    //window.alert("This is a alert example");
    var a = "Hi";
    let a3 = a;
    if (a3 == "Yoo") {
        console.log("This console run");
        document.getElementById("p2").innerHTML = a3;
    }
    else if (a3 == "Yoood") {
        console.log("This console run but false");
        document.getElementById("p1").innerHTML = "Hello";
    }
    else {
        console.log("This is a else statement");
        document.getElementById("p1").innerHTML = a3
        document.getElementById("p2").innerHTML = a3
        document.getElementById("p3").innerHTML = a3
    }
    const a1 = "Dont change me ";
    var a2 = "This is a var example";
    let score = 20;
    score = score + 1;
    let extrascore = score % 2;
    for (i = 0; i < 20; i++) {
        console.log(extrascore);
    }
    score *= 1;
    console.log(score);
    let problem = 2 + 22 * 2 * ((3 - 4) / 23);
    console.log(problem);
}

var z;
let human;

/*
document.getElementById("button").onclick = function(){
    //let z = window.prompt("Enter a number");
    human = document.getElementById("name").value;
    z = document.getElementById("z").value;

    if (z%2==0||z%5==0){
        document.getElementById("h1").innerHTML = "The value of z, " + human + ",  is visible to 2 and 5";
    }
    else if(z%5==0){
        document.getElementById("h1").innerHTML = "The value of z, " + human + ", is visible to 5";
    }
    else if(z%2==0){
        document.getElementById("h1").innerHTML = "The value of z, " + human + ", is visible to 2";
    }
    else {
        document.getElementById("h1").innerHTML = "The value of z, " + human + ", is not visible to 2 and 5";
    }
}  
*/

function tutorialof30DaysOfDay1() {


    //This is use to print something like primative and non-primative 
    console.log('Hello', 'World', '!');
    console.log('Happy', 'New', 'Year', 2023);
    console.log('Welcome', 'to', 30, 'Days', 'of', 'JavaScript');

    //This is comment 
    /* This 
        is 
        Multiple comment
    */

    //All of this is a print display
    console.log('Hello, World!');
    console.log("Hello, World!");
    console.log(`Hello, World!`);

    //Arithmetics
    console.log(2 + 2);//Addtion
    console.log(2 - 2);//Subtraction
    console.log(2 / 2);//Division
    console.log(2 * 2);//Multiplication
    console.log(2 % 2);//Modulus - find the remainder
    console.log(3 ** 2);//Exponentiation

    //Boolean
    let ligthIsOn = true;
    let ligthIsOff = false;

    //Undefined 
    let firstName
    console.log(firstName);

    //Checking Data Types 
    console.log(typeof 'Asabeneh') // string
    console.log(typeof 5) // number
    console.log(typeof true) // boolean
    console.log(typeof null) // object type
    console.log(typeof undefined) // undefined

    /*
    # This is a example of variables

    firstName
    lastName
    country
    city
    capitalCity
    age
    isMarried

    first_name
    last_name
    is_married
    capital_city

    num1
    num_1
    _num_1
    $num1
    year2020
    year_2020
    
    */

    //Example of Variables 
    let person1 = 'Rem';
    let person2 = 'Subaru';
    let age = 20;
    let location = 'New York';

    console.log('Person 1:' + person1, 'Person 2:' + person2, age, location);

    //const cannot be change
    let age1 = 100;
    const game = 'gH';
    const game1 = 100;
    const play = 1000;
    console.log(game, game1, play);

    // 1. Comments can make code readable 
    // 2. Welcome to 30DaysOfJavaScript
    /* 3. Commets can make code readable,
        easy to reuse and informative
    */
    // 4. 
    let sampleString = 'String';
    let trueAndFalse = true;
    let ob;
    let nothing = null;

    console.log(sampleString, trueAndFalse, ob, nothing);

    // 5.
    console.log(typeof sampleString);
    console.log(typeof trueAndFalse);
    console.log(typeof ob);
    console.log(typeof nothing);

    //6.
    var sampleVar;
    let sampleLet;
    let sampleLet1;
    var sampleVar2;

    // 7.
    sampleVar = 'This is a var sample ';
    sampleLet = 'This is a let sample';
    sampleLet1 = 1;
    sampleVar2 = 2;

    //8. 
    let first_name = 'Juneil';
    let last_name = 'Solana';
    let marital_status = 'Single';
    let country = 'Philippines';
    let age2 = 22;

    //9.
    let first_name1 = 'Juneil', last_name1 = 'Solana', marital_status1 = 'Complicated', age3 = 23;
    console.log(first_name1, last_name1, marital_status1, age3);

    //10.
    const myAge = 22;
    const yourAge = 30;
    console.log('I am ' + myAge + ' years old');
    console.log('You are ' + yourAge + ' years old');
}

// # Day 2 
function tutorialOf30DaysOfDay2() {
    let word = 'JavaScript';
    word[0] = 'Y';


    let numOne = 3;
    let numTwo = 3;
    console.log(numOne == numTwo);

    let js = 'JavaScript';
    let py = 'Python';
    console.log(js == py);

    let ligthOn = true;
    let ligthOff = false;
    console.log(ligthOff == ligthOn);

    let array = [1, 2, 3];
    array[0] = 21;
    console.log(array);

    let nums = [1, 2, 3];
    let numbers = [1, 2, 3];
    console.log(nums == numbers); //false 

    let userOne = {
        first_name: 'Albert',
        middle_name: 'Elepent',
        last_name: 'Einstein'
    }
    let userTwo = {
        first_name: 'Albert',
        middle_name: 'Elepent',
        last_name: 'Einstein'
    }
    console.log(userOne == userTwo);//false

    let number_one = nums;
    console.log(number_one == nums);
    let changeUser = userTwo;
    console.log(changeUser == userTwo);

    //Numbers
    let age = 22;
    const Pi = 3.14;
    let temperature = 35;
    const force = 200;
    let bodyTemperature = 36;
    const freezingPoint = 0;


    //Math.operation 
    console.log(age, Pi, temperature, force, bodyTemperature, freezingPoint);
    console.log(Math.round(Pi));
    console.log(Math.round(2.423));
    console.log(Math.floor(232.234));
    console.log(Math.ceil(Pi));
    console.log(Math.min(2, -2, 3, 4, 0, 23));
    console.log(Math.max(2, -2, 3, 4, 0, 23));
    const randomNumbers = Math.random();
    const rand = Math.floor(Math.random() * 11)
    console.log('This is random number:' + randomNumbers);
    console.log('This is the random number range from 0-10: ' + rand);
    console.log(Math.abs(-14));
    console.log(Math.sqrt(24));
    console.log(Math.pow(2, 2));
    console.log(Math.E);

    //String
    let space = ' ';
    let country = 'Japan ';
    let language = 'Katanaga ';
    let job = 'animator ';
    let qoute = 'People died, when they are killed ';
    let combine = country + language + job;
    console.log(combine);
    console.log('I lived in ' + country + 'and I know some of ' + language + 'also my job is ' + job);

    //Long Literal Strings use some black slash to create newlines
    const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
    I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
    Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
    In the end of 2019, I was thinking to expand my teaching and to reach \
    to global audience and I started a Python challenge from November 20 - December 19.\
    It was one of the most rewarding and inspiring experience.\
    Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
    I hope you are enjoying too."
    console.log(paragraph)

    //Escape Sequences in Strings
    console.log('\n hello');
    console.log('\t hello');
    console.log('\\hello');
    console.log('\'hello');
    console.log('\"hello');
    console.log('The sum of 2 and 3 is 5');
    let a = 2;
    let b = 3;
    console.log(`The sum of ${a} and ${b} is ${a + b}`)

    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let fullName = firstName + lastName;

    let personInfoOne = `I am ${fullName}. I am ${age}. I live in ${country}.`
    let personInfoTwo = `my firstname is ${firstName} and my lastname is ${lastName}`
    console.log(personInfoOne);
    console.log(personInfoTwo);

    let a1 = 2;
    let a2 = 3;
    console.log(`${a1} is greater than ${a2}: ${a2 < a1}`);
    console.log(firstName.length);

    // using string index[]
    let javaScript = 'Java Script';
    let javaScript1 = '         Java Script       ';
    let commaExample = 'Bruh, Stop, Look, Listen, Stop';
    let fLetter = javaScript[0]; //J 
    let sLetter = javaScript[1]; //a
    let tLetter = javaScript[2]; //v
    let frLetter = javaScript[3]; //a
    let fifLetter = javaScript[4] //S
    let lIndex = javaScript.length - 1;
    console.log(javaScript[lIndex]);

    console.log(javaScript.toUpperCase());//JAVASCRIPT

    console.log(javaScript.toLowerCase());//javascript

    console.log(javaScript.substr(1, 5));//avaSc

    console.log(javaScript.substring(4, 10));//Java

    console.log(javaScript.split());// it becomes an array in space
    console.log(javaScript.split(''));// 'J', 'a' , 'v', 'a'...'t'
    console.log(javaScript.split(' '));// ['Java', 'Script']
    console.log(commaExample.split(','));// it becomes an array in comma
    console.log(commaExample.split(', '));//['Bruh' , 'Stop', 'Look', 'Listen']

    console.log(javaScript1.trim());//cut the extra space

    console.log(javaScript.includes('Java'));//True
    console.log(javaScript.includes('j'));//False
    console.log(javaScript.includes('a'));//False
    console.log(javaScript.includes('ript'));//False

    console.log(javaScript1.replace('Java Script', 'TypeScript'));//Change old substring to new substring

    console.log(javaScript.charAt(2));//v
    let secondToLastIndex = javaScript.length - 2;
    console.log(javaScript.charAt(secondToLastIndex));

    console.log(commaExsample.lastIndexOf('Stop'))//26

    console.log(javaScript.indexOf('ript'));//7

    console.log(javaScript.concat(' is fun.'));// Java Script is fun

    console.log(javaScript.startsWith('Love'));//false
    console.log(javaScript.startsWith('Java'));//True

    console.log(javaScript.endsWith('h'));//false
    console.log(javaScript.endsWith('t'));//true 

    console.log(javaScript.search('a'));//1
    console.log(javaScript.search(/Script/gi));//5

    let exampleString = 'fasd lOrem 2016 fadsfa 3450 lorem. lorem 2002. lorem 2032';
    console.log(exampleString.match('lorem'));
    let pattern0 = /lorem/gi
    let pattern = /lorem/g
    let pattern1 = /lorem/
    console.log(exampleString.match(pattern));
    console.log(exampleString.match(pattern0));
    console.log(exampleString.match(pattern1));
    let regEx1 = /\d+/
    console.log(exampleString.match(/\d+/g))// '2016', '3450', '2002', '2032'

    let exampleRep = 'Love ';
    console.log(exampleRep.repeat(10));// Love Love Love Love Love Love Love Love Love Love Love 

    console.log(typeof 'Any in primativ data types and non-primative data types ');

    let num = '10 cool';
    let numInt = parseInt(num);
    console.log(numInt);//10
    let newNumInt = Number(numInt);
    console.log(newNumInt);//10
    let anotherNewNumInt = +newNumInt;
    console.log(anotherNewNumInt);//10

    let floatNum = '23.21';
    let numFloat = parseFloat(floatNum);
    console.log(numFloat);//23.21
    let newNumFloat = Number(numFloat);
    console.log(newNumFloat);//23.21
    let anotherNewNumFloat = +newNumFloat;
    console.log(anotherNewNumFloat);//23.21

    let numConvert = parseInt(floatNum);
    console.log(numConvert);//23
}

function quizDay2() {
    //1.
    let declare = '30 Days Of JavaScript';
    //2.
    console.log(declare);
    //3.
    console.log(declare.length);
    //4.
    console.log(declare.toUpperCase());
    //5.
    console.log(declare.toLowerCase());
    //6.
    console.log(declare.substr(3, 5));
    console.log(declare.substring(3, 7));
    //7. 
    console.log(declare.substring(2, 21));
    //8.
    console.log(declare.includes('Script'));
    //9.
    console.log(declare.split());
    //10.
    console.log(declare.split(' '));
    //11.
    let apps = 'Facebook, Google, Mircosoft, Apple, IBM, Oracle, Amazon';
    console.log(apps.split(', '))
    //12. 
    console.log(declare.replace('30 Days Of JavaScript', '30 Days Of Python'));
    //13.
    console.log(declare.charAt(15));
    //14.
    console.log(declare.charCodeAt('J'));
    //15.
    console.log(declare.indexOf('a'));
    //16.
    console.log(declare.lastIndexOf('a'));
    //17.
    let because = 'You cannot end a sentence with because because because is a conjunction';
    console.log(because.indexOf('because'));
    //18.
    console.log(because.lastIndexOf('because'));
    //19.
    console.log(because.search('because'));
    //20.
    let javaSample = '       30 Days Of JavaScript';
    console.log(javaSample.trim());
    //21.
    console.log(declare.startsWith('3'));
    //22.
    console.log(declare.endsWith('t'));
    //23.
    console.log(declare.match('a'));
    //24.
    let declare1 = '30 Days Of ';
    console.log(declare1.concat('JavaScript'));
    //25.
    console.log(declare.repeat(2));

    //Exercise Level 2 

    //1.
    let extention = '\'There is no exercise better for the heart than reaching down and lifting people up.\' ';
    console.log(`The The quote ${extention}by John Holmes teaches us to help one another.`);

    //2. 
    console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\n--Quote by Mother Teresa ");

    //3.
    let sampleTen = '10';
    let sampleTen1 = parseInt(sampleTen);
    console.log(typeof '10');
    console.log(+(sampleTen1));

    //4. 
    let checkFloat = '9.8';
    let convert = parseFloat(checkFloat);
    console.log(Math.round(convert));

    //5. 
    let wordSample = 'Pyton', wordSample1 = 'Jargon';
    console.log(wordSample.match('on'));
    console.log(wordSample1.match('on'));

    //6.
    let sampleSentence = 'I hope this course is not full of jargon';
    console.log(sampleSentence.match('jargon'));

    //7. 
    let random_number = Math.floor(Math.random() * 101);
    console.log(random_number);

    //8. 
    let random_number_another = Math.floor(Math.random() * (100 - 51)) + 50;
    console.log(random_number_another);

    //9. 
    let random_number_range = Math.floor(Math.random() * 255);

    //10. 
    let letter = 'JavaScript'
    console.log(Math.floor(Math.random() * letter.length));

    //11. 
    console.log('1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64\n5 1 5 25 125');

    //12. 
    let because_2 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(because_2.substr(31, 24));

    //13. 
    const loveFacts = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    let count = (loveFacts.match(/love/gi) || []).length
    console.log(count);

    //14.
    const because_inQuestion13 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(because_inQuestion13.match(/because/gi || []).length);

    //15.
    const sentence = '%I????????? $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    //const cleanText = sentence.replace(/[^A-Za-z\s]/g, '') ///[^A-Za-z\s]/g to match any non-alphabetic character except whitespace.
    const sentence1 = sentence.replace(/%/g, '');
    const sentence2 = sentence1.replace(/\$/g, '');
    const sentence3 = sentence2.replace(/\?/g, '');
    const sentence4 = sentence3.replace(/#/g, '');
    const sentence5 = sentence4.replace(/@/g, '');
    const sentence6 = sentence5.replace(/;/g, '');
    console.log(sentence6.replace(/&/g, ''));

    //16.
    const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
    const income1 = income.match(/\d+/g);
    const mSalary = parseInt(income1[0]);
    const bSalary = parseInt(income1[1]);
    const cSalary = parseInt(income1[2]);

    let add_totalSalary = mSalary + bSalary + cSalary;
    console.log(`Total annual income is ${add_totalSalary}`);

}



function quizDay3() {
    let isLigthOn = true;
    let isLigthOff = false;
    let temp;
    temp = isLigthOn;
    isLigthOn = isLigthOff;
    isLigthOff = temp;

    console.log(isLigthOff);
    console.log(isLigthOn);

    //Null 
    let empty = null;
    console.log(empty);

    //Operators
    var x = 3;
    var y = 3;
    //var z = x**=y;
    //var z2 = x+=y;   
    //var z1 = x*=y;
    //var z3 = x%=y;
    //var z4 = x-=y; 
    var z5 = x /= y;
    //console.log(z); // 27 is more likely to 3^3
    //console.log(z1); // 9 is just multiplication 
    //console.log(z2); // 6 is just addtion
    //console.log(z3); // 0 modulus
    //console.log(z4); // -3 difference 
    console.log(z5); // 0 division 

    const PI = 3.14;
    let radius = 100;

    //Let us calculate area of circle
    const areaOfCircle = PI * radius * radius;
    console.log(areaOfCircle); // 314m 

    const gravity = 9.81;
    let mass = 72;

    //Let us calculate weight of an object 
    const weight = mass * gravity;
    console.log(weight);

    const boilingPoint = 100;
    const bodyTemp = 37;
    console.log(`The boiling point of water is ${boilingPoint} oC. \nHuman body temperature is ${bodyTemp} oC. \nThe gravity of earth is ${gravity}m / s2.`);


    // Comparison Operators
    /*
    console.log (3 < 2); //False
    console.log (2 < 3); //True
    console.log (2 > 3); //False
    console.log (3 > 2); //True 
    console.log (3 == 2); //False
    console.log (3 === 2); //False
    console.log (3 != 2); //True 
    console.log (3 <= 2); //False
    console.log (3 >= 2 ); //True 
    console.log (3 >= 3); //True
    console.log (3 == '3'); //True
    console.log (3 === '3'); //False 
    console.log (3 != '3'); //False 
    console.log (3 !== '3'); //True
    console.log (3 != '2'); //True 
    console.log (3 != '3'); //False 
    console.log (0 == false); //True 
    console.log (0 === false); //False
    console.log (0 == ' ');  //True
    console.log (0 == '');  //True
    console.log (0 === ''); //False
    console.log (1 == true); //True
    console.log (1 != true); //False
    console.log (1 === true); //False
    console.log (undefined == null);  //True
    console.log (undefined === null); //False
    console.log (NaN == NaN); //False
    console.log (NaN === NaN); //False
    console.log (typeof NaN); //Number
    */

    console.log('mango'.length == 'mangos'.length); //False
    console.log('mango'.length != 'mango'.length); //False
    console.log('avocado'.length != 'coconuts'.length) //True
    console.log('milk'.length < 'coconuts'.length)//True
    console.log('milk'.length == 'meat'.length)//True
    console.log('milk'.length != 'meat'.length)//False
    console.log('dragon'.length > 'Tiger'.length)//True

    console.log(1 == true);

    const check = 4 > 3 && 'a' === 'a'
    const check1 = 8 >= 7 && 10 < 11
    const check2 = 1 == true && 0 == ''

    console.log(`This is first check ${check}, \n second ${check1} , \n third ${check2}`)

    const pipe = 4 < 2 || 0 == false
    const pipe1 = 'a' == 1 || 3 > 2
    const pipe2 = undefined == null || NaN === NaN

    console.log(`This is first pipe ${pipe}, \n second ${pipe1}, \n third ${pipe2}`)

    const negate = !true
    const negate1 = !negate
    const change = !isLigthOff

    console.log(`First negation ${negate}, \n second ${negate1} \n third ${change}`)

    //Increment Operators
    let count = 0
    //pre-increment
    console.log(++count)//1
    console.log(++count)//2
    //post-increment 
    console.log(count++)//2
    console.log(count)//3

    console.log(" ")

    //Decrement Operators
    let count1 = 3
    //pre-decrement 
    console.log(--count1)
    console.log(count1)
    //post-decrement
    console.log(count1--)
    console.log(count1)


    //Ternary Operators

    let isRaining = true
    isRaining
        ? console.log('You need a rain coat. ')
        : console.log('No need for a rain coat. ')

    let isRaining1 = false
    isRaining1
        ? console.log('You need a rain coat. ')
        : console.log('No need for a rain coat. ')

    let number = 5
    number > 0
        ? console.log(`The number ${number} is positive. `)
        : console.log(`The number ${number} is negative. `)

    let number1 = -1
    number1 > 0
        ? console.log(`The number ${number1} is positive. `)
        : console.log(`The number ${number1} is negative. `)

    //alert('hello')
    //alert('Error 404')//alert code 

    //const pro = prompt('requierd text', 'Input some data here: ')///prompt code 
    //cosnole.log(pro)// this will show if is true/false

    /*let agree = confirm ('Are you sure you like to delete?'); 
    console.log(agree)*/

    const dateNow = new Date()
    console.log(dateNow)//current Date
    console.log(dateNow.getFullYear())//2023
    console.log(dateNow.getDate())
    console.log(dateNow.getMonth())
    console.log(dateNow.getHours())
    console.log(dateNow.getMinutes())
    console.log(dateNow.getSeconds())
    console.log(dateNow.getMilliseconds())
    console.log(dateNow.getTime())


    console.log('Quiz for day 3')
    console.log()
    //1. 
    let firstName = 'Juneil'
    let lastName = 'Solana'
    let country = 'Philippines'
    let city = 'Zamboanga Sibugay'
    var age = 21
    let status = 'Complicated'
    var year = 2023
    let arr = [firstName, lastName, country, city, age, status, year]
    console.log(typeof (firstName))
    console.log(typeof (lastName))
    console.log(typeof (country))
    console.log(typeof (city))
    console.log(typeof (age))
    console.log(typeof (status))
    console.log(typeof (year))
    //2.
    console.log('10' == 10)
    //3.
    const par = parseInt('9.8')
    console.log(par == 10)
    //4. 
    console.log('Trutly')
    console.log(10 === 10)
    console.log('1.111' == 1.111)
    console.log(1 == true)
    console.log('Falsely')
    console.log(NaN === NaN)
    console.log(null == ' ')
    console.log('' == undefined)
    //5.
    let i = 4 > 3
    let ii = 4 >= 3
    let iii = 4 < 3
    let iv = 4 >= 4
    let v = 4 == 4
    let vi = 4 === 4
    let vii = 4 != 4
    let viii = 4 !== 4
    let ix = 4 != '4'
    let x0 = 4 == '4'
    let xi = 4 === '4'
    let py = 'python'
    let jar = 'jargon'
    let xii = length.py != length.jar
    console.log(i, ii, iii, iv, v, vi, vii, viii, ix, x0, xi, xii)
    //6. 
    let i1 = 4 > 3 && 10 < 12
    let ii1 = 4 > 3 && 10 > 12
    let iii1 = 4 > 3 || 10 < 12
    let iv1 = 4 > 3 || 10 > 12
    let v1 = !(4 > 3)
    let vi1 = !(4 < 3)
    let vii1 = !(false)
    let viii1 = !(4 > 3 && 10 < 12)
    let ix1 = !(4 > 3 && 10 > 12)
    let x1 = !(4 === 4)
    let dar = 'dragon'
    const res = dar.includes('on') && py.includes('on')
    console.log(i1, ii1, iii1, iv1, v1, vi1, vii1, viii1, ix1, x1, res)
    //7.
    const dayDate = new Date()
    console.log('Today year is' + dayDate.getFullYear())
    console.log('The month today as a number is ' + dayDate.getMonth())
    console.log('The Date today is ' + dayDate.getDate())
    console.log('Day today as a number ' + dayDate.getDay())
    console.log('The hours now is ' + dayDate.getHours())
    console.log('The minutes now is ' + dayDate.getMinutes())
    console.log('To find out the number of seconds elapsed from Jan 1, 1970 to now ' + Math.floor(Date.now() / 1000))

    //Exercises: Level 2 
    //1.
    /*
    const base = prompt('Enter base: ')
    const heigth = prompt('Enter height: ')
    let area = 0.5 * base * heigth
    alert(`The area of the triangle is ${area} `)*/
    //2.
    /*
    const sideA = parseInt(prompt('Enter side a: '))
    const sideB = parseInt(prompt('Enter side b: '))
    const sideC = parseInt(prompt('Enter side c: '))
    let triangle = sideA + sideB + sideC
    console.log(`The perimeter of the triangle is ${triangle}`)*/
    //3.
    /*
    const len = parseInt(prompt('Enter length: '))
    const wid = parseInt(prompt('Enter width: ')) 
    let answer = 2 * (len + wid)
    alert(`The answer is ${answer}`) */
    //4.
    /*
    const pi = 3.14
    const radius1 = parseFloat(prompt('Enter radius: '))
    let area = Math.floor(pi * radius1 * radius1)
    alert(`The area of circle ${area}`)
    let circumference = 2 * pi * radius1
    alert(`The circumference of a circle is ${circumference}`)*/
    //5. to 7.
    /*const e1 = prompt('Enter the linear equation mx + b: ')
    let slope = parseFloat(e1.slice(4,6))
    let yIntercept = parseFloat(e1.slice(4))
    let xIntercept = -yIntercept / slope
    let slope2 = (10-2)/(6-2)
    if (slope == slope2){
        console.log(`Both slope are equal `)
    }
    else{
        console.log(`slope are not equal `)
    }
    console.log(`The slope ${slope} ` + `The y-intercept ${yIntercept} ` + `The x-intercept ${xIntercept}`)
    console.log(`The second slope ${slope2}`)*/
    //8.
    /*
    const x_value = parseInt(prompt('Enter the value of x: '))
    let y_value = x_value**2  + 6*x_value + 9
    console.log(`The value of y is ${y_value}`)*/
    //9.
    /*
    const hours = parseInt(prompt('Enter hours: '))
    const rate_per = parseInt(prompt('Enter rate per hour: '))
    let earning = hours * rate_per
    console.log(`Your weekly earning is ${earning}`)*/
    //10. 
    /*  
    const enter_name = prompt('Enter your name ')   
    if (enter_name.length >= 7 ){
     alert('Your name is long')
    }
    else {
     alert('Your name is short')
    }*/
    //11.
    let firstName_example = 'Asabeneh'
    let lastName_example = 'Yetayeh'
    if (firstName_example.length > lastName_example.length) {
        let condition = 'is longer than your family name'
        console.log(`Your first name, ${firstName_example} ${condition}, ${lastName_example}`)
    }
    else {
        let condition_one = 'is shorter than your family name'
        console.log(`Your first name, ${firstName_example} ${condition_one}, ${lastName_example}`)
    }
    //12.
    let myAge = 250
    let yourAge = 25
    let error_or_trick = myAge - yourAge
    if (error_or_trick < 0) {
        let error_or_trick1 = yourAge - myAge
        console.log(`I am ${error_or_trick1} years older than you. `)
    }
    else if (myAge > yourAge) {
        console.log(`I am ${error_or_trick} years older than you. `)
    }
    //13.
    /*
    const birth = parseInt(prompt('Enter birth year: '))
    const newDate = new Date ()
    let result = parseInt(newDate.getFullYear()) - birth 
    let allowed = 18 - result
    if (result >= 18){
     console.log(`You are ${result}. You are old enough to drive`)
    }
    else {
     console.log(`You are ${result}. You will be allowed to drive after ${allowed} years. `)
    }*/
    //14.
    const live = parseInt(prompt('Enter number of years you live:'))

    let youLived = 365 * 24 * 60 * 60 * live
    console.log(`You lived ${youLived} seconds. `)
    //15.
    const date = new Date();

    // get the year, month, and day from the date object

    const month = date.getMonth() + 1;
    const day = date.getDate();

    // get the hour and minute from the date object
    const hour = date.getHours();
    const minute = date.getMinutes();

    // format the date and time using the desired format
    const formattedDate1 = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
    const formattedDate2 = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
    const formattedDate3 = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;

    // log the formatted dates to the console
    console.log(formattedDate1);
    console.log(formattedDate2);
    console.log(formattedDate3);
}


function quizDay4() {
    //if statement
    /*let isRaining = false
    let num = -2 
    if (num  > 0 ) {
        //console.log(`${num} is postive number`)
    }
    if(isRaining){
        console.log(`Remember to take your rain coat. `)
    }
    else{
        console.log(`No need for a rain coat`)
    }
    
    //else statement
    else{
        console.log(`${num} is negative number `)
    }*/
    //else if staments 
    /*
    let a = 'letter a '
    if(a > 0){
        console.log(`${a} is a positive number `)
    }
    else if (a == 0){
        console.log(`${a} is zero`)
    }
    else if (a < 0){ 
        console.log(`${a} is negative number `)
    }
    else{
        console.log(`${a} is not a number`)
    }
    let weather = 'sunny' 
    if (weather === 'rainy'){
        console.log('You need a rain coat')
    }
    else if (weather === 'cloudy'){
        console.log('It migth be cold, You need a jacket')
    }
    else if(weather === 'sunny'){
        console.log('Go out freely and bring unbrella for extreme heat')
    }
    else{
        console.log('No need for rain coat')
    }*/
    /*
    value = 'Setting'
    switch (value){
        case 'Click Menu':
        case 'Menu':
        case 'Go to Menu':
        case 'See the Menu':
            console.log('You are in Menu')
            break
        case 'Click Load':
        case 'Load':
        case 'Go to Load':
        case 'See the Load':
            console.log('You are in the Load Page')
            break
        case 'Click Setting':
        case 'Setting':
        case 'Go to Setting':
        case 'See the Setting':
            console.log('You are in the Setting')
            break
        default:
            console.log('Exit.......')
    
    }
    const inputDay = prompt('What day is today? ')
    let day = inputDay.toLowerCase()
    
    switch (day){
        case 'monday': 
            console.log('Today is Monday')
            break
        case 'tuesday':
            console.log('Today is Tuesday')
            break
        case 'wednesday': 
            console.log('Today is Wednesday')
            break
        case 'thursday':
            console.log('Today is Thursday')
            break
        case 'friday':
            console.log('Today is Friday')
            break
        case 'saturday':
            console.log('Today is Saturday')
            break
        case 'sunday': 
            console.log('Today is Sunday')
            break
        default:
            console.log('It is not a week day. ')
    } 
    let num = parseInt(prompt('Enter number'))
    switch(true){
        case num > 0:
            console.log('Number is positive')
            break 
        case num < 0:
            console.log('Number is negative')
            break
        case num === 0:
            console.log('Number is zero')
            break 
        default: 
            console.log('Not a Number')
    }
    let isRaining = 'sunny'
    console.log(isRaining === 'cloudy' ?'You need a rain coat' :'No need for a rain coat')  
    
    //1.
    const age_label = 18
    const input_age = parseInt(prompt('Enter your age: '))
    if(age_label < input_age){
        alert('You are old enough to drive')
    }
    else if (17 === input_age){
        alert(`You are left with 1 year to drive`)
    }
    else if (age_label > input_age){
        let left = age_label - input_age 
        alert(`You are left with ${left} years to drive`)
    }
    else if (age_label === input_age){
        alert("You're 18 years old and you are legal to drive" )
    }
    else{
        alert('Bruh get some help')
    } 
    //2.
    const age_label = 21
    const input_age = parseInt(prompt('Enter your age: '))
    if(age_label > input_age){
        left = age_label - input_age
        console.log(`You are ${left} younger than me`)
    }
    else if (age_label < input_age){
        left = input_age - age_label
        console.log(`You are ${left} older than me`)
    }
    else if (age_label === input_age){
        console.log(`We are in the same age`)
    }
    else {
        console.log(`You didn't input you're age`)
    } 
    //3.
    let a = 4
    let b = 3
    if (a > b){
        console.log(`${a} is greater than ${b}`)
    }
    else { 
        console.log(`${a} is less than ${b}`)
    }
    a > b 
        ? console.log(`${a} is greater than ${b}`)
        : console.log(`${a} is less than ${b}`)
    
    //4.
    let sample_input = prompt('Enter a number: ')
    if(sample_input % 2 == 0){
        console.log(`${sample_input} is even number`)
    }
    else if (sample_input % 2 == 1){
        console.log(`${sample_input} is odd number`)
    }
    else{
        console.log('You input NaN')
    }
    
   //5.
    let grade = parseInt(prompt('Enter your grade: '))
    if( grade >= 80 && grade <= 100 ){
        console.log('You got an A ')
    }
    else if (grade >= 70 && grade < 80){
        console.log('You got a B')
    }
    else if (grade >= 60 && grade < 70){
        console.log('You got a C')
    }
    else if (grade >= 50 && grade < 60){
        console.log('You got a D')
    }
    else if (grade >= 0  && grade < 50){
        console.log('You got a F')
    }
    else {
        console.log('Not a grade')
    }

    //6.
   let seasons = prompt('Month is today? ')
   let f_seasons = seasons.toLowerCase()
   switch(f_seasons){

        case 'september': 
        case 'october' :
        case 'november':
            console.log('The season is Autumn')
            break

        case 'december' :
        case 'january':
        case  'february':
            console.log('The season is Winter')
            break

        case 'march':
        case 'april':
        case 'may':
            console.log('The season is Spring')
            break

        case 'june':
        case 'july':
        case 'august':
            console.log('The season is Summer')
            break

        default:
            console.log('Maybe a mispelled months')
   } 
   //7.
   let day_today = prompt('What is the today? ')
   let day = day_today.toLowerCase()
   switch(day){
    case 'saturday':
        console.log('Saturday is a weekend')
        break
    case 'friday':
        console.log('Friday is a working day')
        break
   }*/
    //8.


}

function quizDay5() {
    /*
        const array = Array()
        console.log(array) //empty array
    
        const arr = []
        console.log(arr) //empty array
    
        //example of arrays 
        const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9.64, 56.6]//array of numbers
        const fruits = ['banana', 'orange', 'mango', 'cherry']//array of fruits
        const colors = ['red', 'green', 'blue', 'yellow']//array of colors  
        const animalsProducts = ['milk', 'meats', 'butter', 'yoghurt']//Arrays of products 
        const webTechs = ['HTML','CSS', 'JavaScript', 'React']//Arrays of technologies
        const country = ['Finland', 'Denmark', 'Sweden', 'Norway']//array of country 
    
        console.log('Number:', number)
        console.log('Number of number:', number.length)
    
        console.log('Fruits:', fruits)
        console.log('Number of fruits:', fruits.length)
    
        console.log('Colors:', colors)
        console.log('Number of colors:', colors.length)
    
        console.log('Animals Products:', animalsProducts)
        console.log('Number of animal products:', animalsProducts.length)
    
        console.log('Web Technologies:', webTechs)
        console.log('Number of web technologies:', webTechs.length)
    
        console.log('Country:', country)
        console.log('Number of Country', country.length)
    
        const array_Another = [
            'Asabaneh',
            250,
            true,
            {contry: 'Finland', city: 'Helsinki'},
            {skills: ['HTML', 'JavaScript', 'React']}
        ]// arr containing different data types
        console.log(array_Another)
    
        //String array using split function by invidual word 
        let js = 'JavaScript'
        const charsInJavaScript = js.split('')
        console.log(charsInJavaScript)
    
        // String array using split function by comma
        let companiesString = 'Facebook, Google, Twitter, Apple, Twitter'
        const company = companiesString.split (',')
        console.log(company)
    
        //String array using split function by spaces
        let txt = 'Lorem ipsum dolor sit amet, consectetur adipis dissect'
        const words = txt.split(' ')
        console.log(words)
    
        //Array using index function
        const frail = ["donut's", 'cheese', 'pizza', 'ham']
        let firstFrail = frail[0]
        let secondFrail = frail[1]
        let thirdFrail = frail[2]
        let lastFrail = frail.length - 1
        console.log(firstFrail)// donut's
        console.log(secondFrail)//cheese
        console.log(thirdFrail)//pizza
        console.log(lastFrail)//3
    
        //Another array using index function
        const numbers_sample = [0, 3.14, 9.85, 34, 98.5, 100]
        console.log(numbers_sample.length)//Array length
        console.log(numbers_sample)//Array of numbers
        console.log(numbers_sample[0])//frist element
        console.log(numbers_sample[5])//last element 
        console.log(numbers_sample.length-1)//last element
    
        //Modify array with values
        const country_sample = ['US',
                        'Albania',
                        'Andorra',
                        'Bolivia',
                        'Bosnia ',
                        'Canada',  
                        'Chile',
                        'Colombia',
                        'Costa Rica',
                        'Cuba',
                        'Dominican Republic'
                        ]
        console.log(country_sample)
        country_sample [0] = 'united states'
        let lastIndex = country_sample.length -1
        country_sample[lastIndex] = 'united kingdom'
        console.log(country_sample)
         
        // Array using fill function
        const eigthEmptyValues = Array(8)
        const eigthXValue = Array(8).fill('Scams')
        const eigth0Value = Array(8).fill(10)
        console.log (eigth0Value)
    
        //Array using concat function
        const concat_sample = eigth0Value.concat(eigthXValue)
        console.log(concat_sample)
    
        //Array indexOf function
        const numberSample = [1,2,3,4,5]
        console.log(numberSample.indexOf(5))// 4
        console.log(numberSample.indexOf(0))//-1
        console.log(numberSample.indexOf(13))// -1
        console.log(numberSample.indexOf(4))// 3
    
        //Array if exists function with indexOf function
        const fruitsSample =['banana', 'cherry', 'orange', 'apple', 'lemon', 'banana']
        const ifExists = fruitsSample.indexOf('mango')
        if(ifExists === -1 ){
            console.log('The fruit did not exist in the fruit list')
        }
        else {
            console.log('The fruit exists in the fruit list')
        }
        //Ternary examples 
        ifExists === -1 
            ? console.log('The fruit does not exist in the fruit list')
            : console.log('The fruit exists in the fruit list')
    
        //Array uses lastIndexOf function
        console.log(fruitsSample.lastIndexOf('banana'))//5
    
        //Array using includes function
        const anotherNumberSample = [1,2,3,4,5]
        console.log(anotherNumberSample.includes(1))
        console.log(anotherNumberSample.includes(1.4))
        console.log(fruitsSample.includes('apple'))
        if(anotherNumberSample.includes(6)=== true){
            console.log('The number exists')
        }
        else{
            console.log('The number does not exist')
        }
        
        const webTechsSample = [
            'HTML',
            'CSS',
            'JavaScript',
            'React'
        ]
        console.log(webTechsSample.includes('HTML'))//True
        console.log(webTechsSample.includes('Node.js'))//False
    
        //Array using Array.isArray function
        let webTwoTechsSample = 'Scam'
        console.log(Array.isArray(fruitsSample))//True
        console.log(Array.isArray(webTwoTechsSample))//False
    
        //Array Converting array to string 
        console.log(anotherNumberSample.toString())
        console.log(fruitsSample.toString())
        
        //Array using join function
        console.log(webTechsSample)
        console.log(webTechsSample.join('$ '))// This can join something in the last line
        
        //Array using slice function
        console.log(anotherNumberSample.slice(0,4))//This can slice in the array by with range
    
        //Array using splice function
        console.log(anotherNumberSample.splice(2,3))// 3, 4, 5 
        console.log(anotherNumberSample.splice()) // Remove all items 
        anotherNumberSample.splice(1, 1, 10, 33, 44)
        console.log(anotherNumberSample.splice(2, 2, 10, 33, 44))
    
        //Array using push function
        const arr1 = ['item1', 'item2', 'item3']
        arr1.push('item4')// push string 
        console.log(arr1)
        arr1.push(3)// push number
        console.log(arr1)
        
        //Array using pop function 
        arr1.pop()//remove item from the end 
        console.log(arr1)
    
        //Array using shift function
        arr1.shift()//remove item from the beginning 
        console.log(arr1)
    
        //Array using unshift function
        arr1.unshift('item1')//add item from the beginning
        console.log(arr1)
    
        //Array using reverse function
        arr1.reverse()//reverse the array
        console.log(arr1)
        arr1.reverse()//reverse the array back!!
        console.log(arr1)
    
        //Array using sort function
        const arr2 = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'MongoDB', 'JSON']
        arr2.sort()//sort the items
        console.log(arr2)
        arr2.reverse()//reverse the array
        console.log(arr2)


    //1.
    array = []
    console.log(array)
    //2.
    var arr = [1, 2, 3, 4, 5]
    console.log(arr)
    //3.
    console.log(arr.length)
    //4.
    console.log(arr[0])//first item
    console.log(arr[Math.floor(arr.length / 2)])///middle item 
    console.log(arr[arr.length - 1])//last item
    //5. 
    const mixedDataTypes = [1, 2, 3,
        {
            name: 'Rabel',
            age: 20,
            country: 'France',
            occupation: 'Technical Engineer',
            salary: 100000
        },
        {
            name: 'James',
            age: 22,
            country: 'England',
            occupation: 'Teacher',
            salary: 23940
        },
        {
            name: 'John',
            age: 23,
            country: 'USA',
            occupation: 'Student',
            salary: 100
        }
    ]
    console.log(mixedDataTypes.length)
    //6.
    const itCompanies = ['Facebook', 'Apple', 'Google', 'IBM', 'Microsoft', 'Orcale', 'Amazon']
    //7.
    console.log(itCompanies)
    //8.
    console.log(`There are ${itCompanies.length} companies in the array`)
    //9.
    console.log(itCompanies[0])//first item
    console.log(itCompanies[Math.floor(itCompanies.length / 2)])//middle item
    console.log(itCompanies[itCompanies.length - 1])//last item
    //10.
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i])
    }
    //11. 
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i].toUpperCase())
    }
    //12.
    console.log(`${itCompanies.join(', ')} are big IT companies.`)
    //13.
    let IBM = 'Twitter'
    if (itCompanies.includes(`${IBM}`) === true) {
        console.log(`${IBM} is in the array`)
    }
    else {
        console.log(`${IBM} is not in the array`)
    }
    //14.


    //15.
    console.log(itCompanies.sort())
    //16.
    console.log(itCompanies.reverse())
    //17. 
    console.log(itCompanies.slice(3, 7))
    //18.
    console.log(itCompanies.slice(0, 4))
    //19.

    // Use the slice method to get the middle IT company/ies
    const middleCompanies = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2));

    // Display the middle IT company/ies
    console.log('Middle IT Company/ies:', middleCompanies);

    //20.
    console.log(itCompanies.shift())
    //21.
    const itCompanies1 = ['Facebook', 'Apple', 'Google', 'IBM', 'Microsoft', 'Orcale', 'Amazon']
    const middleIndex = Math.floor(itCompanies1.length / 2)
    const ifItIsEven = itCompanies1.length % 2 === 0
    if (ifItIsEven) {
        itCompanies1.splice(middleIndex - 1, 2)
    }
    else {
        itCompanies1.splice(middleIndex, 1)
    }
    console.log(itCompanies1)
    //22.
    console.log(itCompanies.pop())
    //23.
    const removeAllItems = itCompanies.splice()
    console.log(removeAllItems)
    //24. 
    console.log(countries)
    console.log(webTechs)

    //25. 
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    let stringToArray = text.split(" ")
    console.log(stringToArray)
    console.log(stringToArray.length)

    //26.
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('Meat')
    shoppingCart.push('Sugar')
    console.log(shoppingCart)
    const indexIsTrue = shoppingCart.indexOf('Honey')
    if (indexIsTrue !== -1) {
        shoppingCart.splice(indexIsTrue, 1)
    }
    const indexIsTrueAnother = shoppingCart.indexOf('Tea')
    if (indexIsTrueAnother !== -1) {
        shoppingCart[indexIsTrueAnother] = 'Gree Tea'
    }
    console.log(shoppingCart)

    //27. 
    const checkIfExists = countries.indexOf('Ethiopia')
    if (checkIfExists !== -1) {
        console.log('ETHIOPIA')
    }
    else {
        countries.push('Ethiopia')
        console.log(countries)
    }
    //28.
    const checkIfExists2 = webTechs.indexOf('Sass')
    if (checkIfExists2 !== -1) {
        console.log('Sass is a CSS preprocess')
    }
    else {
        webTechs.push('Sass')
        console.log(webTechs)
    }

    //29.
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    let fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)

    //30. 
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ages.sort()
    let minAge = ages[0]
    let maxAge = ages[ages.length - 1]
    
    let middleAge = Math.floor(ages.length / 2)
    let medianAge = ages.length % 2 === 0
        ? (ages[middleAge - 1] + ages[middleAge]) / 2
        : ages[middleAge]
    
    let totalNumberOfAge = 0
    for (let i = 0; i < ages.length; i++) {
        totalNumberOfAge += ages[i]
    }
    let averageAge = Math.round(totalNumberOfAge / ages.length)
    
    let range = maxAge - minAge
    let difMin = Math.abs(minAge - averageAge)
    let difMax = Math.abs(maxAge - averageAge)
    
    console.log(minAge)
    console.log(maxAge)
    console.log(medianAge)
    console.log(averageAge)
    console.log(range)
    console.log(difMin)
    console.log(difMax)
    
    //31. 
    const firstTenCountries = countries.slice(0, 10)
    console.log(firstTenCountries)
    const MiddleCountries = Math.round(firstTenCountries.length / 2)
    if (MiddleCountries % 2 === 0) {
        const middleCountries = [firstTenCountries[MiddleCountries - 1 ] , firstTenCountries[MiddleCountries]]
        console.log(middleCountries)
    }
    else {
        console.log(firstTenCountries[MiddleCountries])
    }

    //32.
    firstTenCountries.push('Ice Land')
    firstTenCountries.push('Egypt')
    const divideCountries = Math.floor(firstTenCountries.length / 2 )
    const oneArray = firstTenCountries.slice(0, divideCountries)
    const twoArray = firstTenCountries.slice(divideCountries)
    */
}
          

function quizDay6() {
    /*
    for (let i = 0; i <= 5; i++){
        console.log(`${i}  * ${i} = ${i * i}`)
    }
    
   
    const newArr = []
    for (let i = 0; i < countries.length; i++) {
        newArr.push(countries[i].toUpperCase())
    }
    console.log(newArr)
    
    let totalnumber = 0
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 24]
    for (let i = 0; i < numbers.length; i++) { 
        totalnumber += numbers[i]
    }
    console.log(totalnumber)

    let multiplyarr = []
    for (let i = 0; i < numbers.length; i++) { 
        multiplyarr.push(numbers[i] ** 2 )
    }
    console.log(multiplyarr)

    //while loop
    let i = 0
    while (i <= 5) {
        console.log(i)
        i++
    }

    // do while loop
    let j = 0 
    do {
        console.log(j)
        j++
    } while(j < 5)
    
    
    //for of loop
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 24]
    for (let arr of countries) {
        console.log(arr.toUpperCase())
    }
    let totalnumber = 0
    for (let num of numbers) {
        console.log(num * num)
    }
    
    for (let tNum of numbers) {
        totalnumber = totalnumber + tNum
    }
    console.log(totalnumber)


    for (let split of countries) { 
        console.log(split[0])
    }

    //break 
    for (let i = 0; i < countries.length; i++) {
        if (countries[i] === 'Germany') {
            break;
        }
        console.log(countries[i])
    }
    
    //continue
    for (let i = 0; i < numbers.length; i++) { 
        if (i === 3) {
            continue
        }
        console.log([i])
    }

    //1.
    for (let i = 0; i <= 10; i++){
        console.log(i)
    }
    //2. 
    for (let i = 10; i > 0; i--){
        console.log(i)
    }
    //3. 
    let n = 10
    for (let i = 0; i < n; i++){
        console.log(i)
    }
    //4.  
    let symbol = ''
    for (let i = 0; i < 8; i++){
        symbol += '#'
        console.log(symbol)
    }
    //5. 
    for (let i = 0; i <= 10; i++) { 
        console.log(`${i} x ${i} = ${ i * i }`)
    }

    //6. 
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${i} = ${i ** 2}`)
    }
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${i} = ${i ** 3}`)
     } 
    //7. 
    for (let i = 0; i <= 100; i++) { 
        if (i % 2 === 0) {
            console.log(i)
        }
    }
    //8. 
    for (let i = 0; i <= 100; i++){
        if (i % 2 !== 0) { 
            console.log(i)
        }
    }
    //9. 
    for (let i = 2; i <= 100; i++) { 
        let primeNumber = true 

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
               primeNumber = false;
                break;
            }
        }
        
        if (primeNumber) {
             console.log(i)
         }
    }
    //10.
    let sumOfAllNumbers = 0
    for (let i = 0; i <= 100; i++) {
        sumOfAllNumbers += i
    }
    console.log(`The sum of all numberss from 0 to 100 is ${sumOfAllNumbers}`)
    //11.
    let sumOfAllEven = 0
    let sumOfAllOdd = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            sumOfAllEven = sumOfAllEven + i
        }
        if (i % 2 !== 0) {
            sumOfAllOdd = sumOfAllOdd + i
        }
    }
    console.log(`The sum of all evens from 0 to 100 is  ${sumOfAllEven}`)
    console.log(`And the sum of all odds from 0 to 100 is ${sumOfAllOdd}`)
    //12. 
    arr = []
    let sumOfAllEveninArry = 0
    let sumOfAllOddinArry = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            sumOfAllEveninArry = sumOfAllEveninArry + i
        }
        if (i % 2 !== 0) {
            sumOfAllOddinArry = sumOfAllOddinArry + i
        }
    }
    arr.push(sumOfAllEveninArry, sumOfAllOddinArry)
    console.log(arr)
    //13.
    randomNumber = []
    for (let i = 0; i < 5; i++) {
        randomNumber.push(Math.round(Math.random() * 1000))
    }
    console.log(randomNumber)
    //14.
    let randomNumber1 = []
    while (randomNumber1.length < 5) {
        let randomNumberGenerator = Math.floor(Math.random() * 1000)
        if (!randomNumber1.includes(randomNumberGenerator)) {
            randomNumber1.push(randomNumberGenerator)
        }
    }
    console.log(randomNumber1)

    //15.
    const generateRandomNumber = (length) => {
        let charactersThatWillBeGenerated = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let idOfTheRandomNumber = ''
        for (let i = 0; i < length; i++) {
            idOfTheRandomNumber += charactersThatWillBeGenerated[Math.floor(Math.random() * charactersThatWillBeGenerated.length)]
        }
        return idOfTheRandomNumber
    }
    randomId = generateRandomNumber(6)
    console.log(randomId)

    //16.
    const generateRandomNumber1 = (length) => {
        let characterWillBeUsedForGeneration = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let boxToPutTheRandomGenerated = ''
        for (let i = 0; i < length; i++) {
            boxToPutTheRandomGenerated += characterWillBeUsedForGeneration[Math.floor(Math.random() * characterWillBeUsedForGeneration.length)]
        }
        return boxToPutTheRandomGenerated
    }
    randomId1 = generateRandomNumber1(12)
    console.log(randomId1)

    //17.
    const generateRandomHexNumbers = (length) => {
        let hexNumbers = ''
        const hexDigits = '0123456789ABCDEF'
        for (let i = 0; i < length; i++) {
            hexNumbers += hexDigits[Math.floor(Math.random() * hexDigits.length)]
        }
        return hexNumbers
    }
    const hexGenerator = generateRandomHexNumbers(6)
    console.log(`#${hexGenerator}`)

    //18. 
    const rgbColorsGenerator = () => {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        return `rgb(${red}, ${green}, ${blue})`
    }
    console.log(`#${rgbColorsGenerator()}`)

    //19. 
    let newChangeCountry = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    countries = countries.splice()
    for (let i = 0; i < newChangeCountry.length; i++) {
        countries.push(newChangeCountry[i])
    }
    console.log(countries)
    
    //20.
    let countriesLength = []
    for (let i = 0; i < countries.length; i++) {
        countriesLength += countries[i].length
    }
    countriesLength = countriesLength.split('')

    //21.
    const countryInfo = countries.map(country => [country, country.slice(0, 3), country.length])
    console.log(countryInfo)

    //22.
    const countriesThatHasLandInTheName = countries.filter(country => country.toLowerCase().includes('land'))
    const countriesThatHasNoLandInTheName = countries.filter(country => !country.toLowerCase().includes('land'))
    console.log(countriesThatHasLandInTheName)
    console.log(countriesThatHasNoLandInTheName)

    //23. 
    const countriesWithIaOnTheName = countries.filter(filtercountry => filtercountry.toLowerCase().includes('ia'))
    const countriesThatHasNoAiOnTheName = countries.filter(noIa => !noIa.toLowerCase().includes('ia'))
    console.log(countriesWithIaOnTheName)
    console.log(countriesThatHasNoAiOnTheName)

    //24.
    const longestCountry = countries.reduce((longest, country) => {
        return country.length > longest.length ? country : longest
    }, ' ')
    console.log(longestCountry)
    
    //25. 
    const countriesThatOnlyHasFiveCharacters = countries.filter(country => country.length === 5)
    console.log(countriesThatOnlyHasFiveCharacters)

    //26.
    const longestWebtechs = webTechs.reduce((longest, tech) => {
        return tech.length > longest.length ? tech : longest
    }, '')
    console.log(longestWebtechs)

    //27.
    const webTechsCombineWithLength = webTechs.map(tech => [tech, tech.length])
    console.log(webTechsCombineWithLength)

    //28.
    let mernStack = ['MongoDB', 'Express', 'React', 'Node']
    const mernStackAcronym = mernStack.map(mern => mern.slice(0, 1)).join('')
    console.log(`${mernStackAcronym.toLowerCase()}Stack`)

    //29.
    for (print of mernStack) {
        console.log(print)
    }
    
    //30. 
    const fruitArray = ['banana', 'orange', 'mango', 'lemon']
    let newFruitArray = []
    for (fruit of fruitArray) {
        newFruitArray.unshift(fruit)
    }
    console.log(newFruitArray)

    //31. 
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MonogDB']
    ]
    console.log(fullStack.map(fullStack => fullStack))
    
    //32.   
    let copycontries = countries
    let sortedCountries = copycontries.sort()
    webTechs.sort()
    mernStack.sort()
    const extractLandFromCountriesThatContainsTheWordLand = sortedCountries.filter(land => land.toLowerCase().includes('land'))
    const extractAllhigestNumberCharacters = sortedCountries.reduce((longest, country) => {
        return country.length > longest.length ? country : longest 
    }, [])
    const extractOnlyFourCharacters = sortedCountries.filter(country => country.length === 4)
    const extractOnlyWithTwoLetters = sortedCountries.filter(country => country.includes(' '))
    const reverseCountries = []
    for (country of sortedCountries) { 
        reverseCountries.push(country.split('').reverse().join('').toUpperCase())
    }
    console.log(reverseCountries)*/
}

function quizDay7() {
    /*
    //Function example without paramater 
    function square() {
        let num = 2
        let sq = num * num
        console.log(sq)
    }
    square()//This is how to call a function

    function addTwoNumber() {
        let numberOne = 20
        let numberTwo = 10
        let sum = numberOne + numberTwo
        console.log(sum)
    }
    addTwoNumber()//This is how to call a function

    //Function example with paramater
    function fullName() {
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        console.log(`${firstName} ${lastName}`)
    }
    fullName()

    //Example Function with return value syntax 
    function fullNameReal() {
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        let fullNameOfThePerson = (`${firstName} ${lastName}`)
        return fullNameOfThePerson
    }
    console.log(fullNameReal())

    //Example Function with return value syntax
    function AddTwoNumbersReal() {
        let firstNumber = 10
        let secondNumber = 20
        let sum = firstNumber + secondNumber
        return sum
    }
    console.log(AddTwoNumbersReal())

    //Example Function with parameter and return value 
    function areaOfCircle(r) {
        let area = Math.PI * r * r
        return Math.round(area)
    }
    console.log(areaOfCircle(10))//The parameter is 10

    function squareReal(number) {
        let sq = number * number
        return sq
    }
    console.log(squareReal(10))//The parameter is 10

    //Example Function with two parameters and return value
    function sumOfTheNumbers(numberOne, numberTwo) {
        let sum = numberOne + numberTwo
        return sum
    }
    console.log(sumOfTheNumbers(10, 40))//The parameters are 10 and 40

    function printFullName(firstName, lastName) {
        let fullName = (`${firstName} ${lastName}`)
        return fullName
    }
    console.log(printFullName('Asabeneh', 'Yetayeh'))//The parameters are 'Asabeneh' and 'Yetayeh'

    //Example of function with multiple parameters
    function withMultipleParameters(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    const numbers = [1, 2, 3, 4, 5, 6]
    console.log(withMultipleParameters(numbers))//The multiple parameters is the number array
    
    const squareWithArrowFunction = (number) => {
        let square = number * number
        return square
    }
    console.log(squareWithArrowFunction(10))//The parameter is 10

    //Example of reusable function in which it just use it again 
    function sumAllNumbers() {
        let sum = 0
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }
    console.log(sumAllNumbers(10, 20, 30, 40))
    console.log(sumAllNumbers(-10, 20, -30, 40,))
    console.log(sumAllNumbers(10, 20, 30, 40, -50))

    //Example of arrow with ...args syntax
    const sumAllNumbersUsingArrowFunction = (...args) => {
        let sum = 0
        for (element of args) {
            sum += element
        }
        return sum
    }
    console.log(sumAllNumbersUsingArrowFunction(1, 2, 3, 4, 5, 100, 232.23))

    //Example of anonymous function
    const anonymousScam = function () {
        console.log('I am an anonymous function and my value is stored in anonymousFun')
    }
    anonymousScam()

    //Example of expression function 
    const squareAgain = function(n) {
        return n * n 
    }
    console.log(squareAgain(2))

    //Example of Self Invoking function
    //(function(n){console.log(n * n)}) (2)

    //Arrow Function uses arrow
    const squareAgainNumberTwo = n => { return n * n }
    console.log(squareAgainNumberTwo(2))
    
    //Arrow explicit return 
    const squareForSomeReasonAgain = n => n + n + n
    console.log(squareForSomeReasonAgain(10))

    //Example of Arrow function
    const toUpperCaseCountries = (country) => {
        let toUpperCaseCountry = []
        for (loop of country) {
            toUpperCaseCountry.push(loop.toUpperCase())
        }
        return toUpperCaseCountry
    }
    const countries1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
    console.log(toUpperCaseCountries(countries1))

    //Example of Arrow function
    const fullNameOfThePerson = (firstName,lastName) => {
        return (`${firstName} ${lastName}`)
    }
    console.log(fullNameOfThePerson('Juneil', 'Solana'))

    //Example of explicitly return 
    const explicitReturn = (firstName, lastName) => { return (`${firstName} ${lastName}`) }
    console.log(fullNameOfThePerson('Juneil', 'Solana'))

    //Function with default value/s
    const functionWithDefaultValue = (firstName = 'Steve') => {
        return (`${firstName}, Welcome to 30Day of JavaScript!`)
    }
    console.log(functionWithDefaultValue())
    console.log(functionWithDefaultValue('Neil'))

    //Function with default value/s
    const calculateTheBirthday = (birthday, currentyear = 2023) => {
        return age  = currentyear - birthday
    }
    console.log(calculateTheBirthday(2001))

    //Another Example of Function with default value/s
    const weightOfObject = (mass, gravity = 9.81) => {
        return weigth = (`${mass * gravity} N`)  
    }
    console.log('Weight of an object in Newton:', weightOfObject(100))
    console.log('Weight of an object in Newton:', weightOfObject(100, 1.62))

    //Example of Explicit function 
    const weightOfTheObject = (mass, gravity = 9.81) => (`${mass * gravity} N`)
    console.log(weightOfTheObject(100))
    */
    
    //1. 
    function fullName() {
        console.log('Juneil E. Solana')
    }
    fullName()

    //2.
    function fullNameThatReturnsAValue(firstName, lastName) {
        return (`${firstName} ${lastName}`)
    }
    console.log(fullNameThatReturnsAValue('Juneil E.', 'Solana'))
    
    //3. 
    function addNumber(firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }
    console.log(addNumber(10, 20))
    
    //4.
    function areaOfRectangle(length, width) {
        return length * width
    }
    console.log(areaOfRectangle(5, 6))

    //5.
    function perimeterOfRectangle(length, width) {
        return 2 * (length + width)
    }
    console.log(perimeterOfRectangle(5, 6))

    //6. 
    function volumeOfRectPrism(length, width, height) {
        return length * width * height
    }
    console.log(volumeOfRectPrism(5, 6, 7))

    //7.
    function areaOfCircle(radius, pi = 3.14,) {
        return pi * radius * radius
    }
    console.log(areaOfCircle(2))
    
    //8.
    function circumOfCircle(radius, pi = 3.14) {
        return 2 * pi * radius
    }
    console.log(circumOfCircle(2))

    //9.
    function calculateTheDensity(mass, volume) {
        let density = mass / volume
        if (density === Infinity) {
            density = (`${undefined}`)
        }
        return density
    }
    console.log(calculateTheDensity(2, 0))

    //10.
    function calculateTheSpeed(totaldistance, time) {
        let speed = Math.floor(totaldistance / time)
        if (speed === Infinity) {
            speed = (`${undefined}`)
        }
        return (`The speed is ${speed} per kilometers`)
    }
    console.log(calculateTheSpeed(1000, 25))

    //11. 
    const calculateTheWeight = (mass, gravity = 9.8) => {
        return Math.floor(mass * gravity)
    }
    console.log(calculateTheWeight(10))

    //12.
    const convertCelsiusToFahrenheit = (celsius) => {
        return (`${(celsius * 9 / 5) + 32} Fahrenheit`)
    }
    console.log(convertCelsiusToFahrenheit(32))

    //13.
    const canCalculateBMI = (weight, kilogram) => {
        let BMI = weight / (kilogram ** 2)
        switch (true) {
            case BMI >= 30:
                console.log(`Obese: BMI is 30 or more`)
                break
            case BMI >= 25:
                console.log(`Overweigth: BMI is 25 to 29.9`)
                break
            case BMI >= 18.5:
                console.log(`Normal weight : BMI is 18.5 to 24.9`)
                break
            case 18.5 >= BMI:
                console.log(`Underweight: BMI is less than 18.5`)
                break
            default:
                return BMI
        }
    }
    canCalculateBMI(80, 1.65)

    //14.
    const checkSeason = (month) => {
        if (month === 3 || month === 4 || month === 5) {
            return 'Spring';
        } else if (month === 6 || month === 7 || month === 8) {
            return 'Summer';
        } else if (month === 9 || month === 10 || month === 11) {
            return 'Autumn';
        } else if (month === 12 || month === 1 || month === 2) {
            return 'Winter';
        }
    }

    console.log(checkSeason(12));

    //15. 
    const findMax = (...agrs) => {
        let max = Number.NEGATIVE_INFINITY
        for (let i = 0; i < agrs.length; i++) {
            if (agrs[i] > max) {
                max = agrs[i]
            }
        }
        return max
    }
    console.log(findMax(-3, -1, -11))

    //16. 
    const solveLinEquation = (a, b, c, x) => { return y = Math.round(((-a * x) - c) / b) }
    console.log(solveLinEquation(2, 3, -4, 16))

    //17. 
    const solveQuadratic = (a, b, c) => {
        let discriminant = b * b - 4 * (a * c)
        if (discriminant > 0) {
            let x = (-b + Math.sqrt(discriminant)) / (2 * a)
            let x1 = (-b - Math.sqrt(discriminant)) / (2 * a)
            return [x, x1]
        }
        else if (discriminant === 0) {
            let x = -b / (2 * a)
            return [x]
        }
        else {
            return []
        }
    }
    console.log(solveQuadratic(1, 4, 4))
    console.log(solveQuadratic(1, 4, 4));
    console.log(solveQuadratic(1, -1, -2));
    console.log(solveQuadratic(1, 7, 12));
    console.log(solveQuadratic(1, 0, -4));
    console.log(solveQuadratic(1, -1, 0));

    //18. 
    const array = [1, 2, 3, 4, 5, 6, 7]
    const printAll = (arr) => { arr.forEach((valeu => console.log(valeu))) }
    printAll(array)

    //19. 
    const date = new Date()
    const showDateTime = (date) => {
        const formatcalendar = (`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
        const formatTime = (`${date.getHours()}:${date.getMinutes()}`)
        console.log(formatcalendar, formatTime)
    }
    showDateTime(date)

    //20.
    const swapValues = (value1, value2) => {
        let temp = value1
        value1 = value2
        value2 = temp
        console.log(value1, value2)
    }
    swapValues(23, 32)

    //21
    let array1 = ['A', 'B', 'C', 'D', 'E', 'F']
    const arrayReversed = (array1) => {
        return array1.reverse()
    }
    console.log(arrayReversed(array1))
    
    //22.
    const capitalizedArray = (array1) => {
        for (let i = 0; i < array1.length; i++) {
            array1[i] = array1[i].toLowerCase()
        }
        return array1
    }
    console.log(capitalizedArray(array1))

    //23.
    const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const addItems = (arr) => {
        const sum = arr.reduce((total, added) => total + added, 0)
        return [sum]
    }
    console.log(addItems(item))

    //24.
    const removeItem = (array, index) => {
        if (index < 0 || index >= array.length) {
            return array
        }
        let newArray = [...array]
        newArray.splice(index, 1)
        return newArray
    }
    const currentArray = [1, 2, 3, 4, 5, 6, 7]
    const removeItemIndex = 5
    const newArray = removeItem(currentArray, removeItemIndex)
    console.log(newArray)
    
    //25.
    const sumOfNumbers = (firstNumber, secondNumber) => {
        let sum = 0
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i
        }
        return sum
    }
    console.log(sumOfNumbers(1, 2))

    //26.
    const sumOfOdds = (firstNumber, secondNumber) => {
        let sum = 0
        for (let i = firstNumber; i <= secondNumber; i++) {
            if (i % 2 !== 0) {
                sum += i
            }
        }
        return sum
    }
    console.log(sumOfOdds(1, 5))
    
    //27.
    const sumOfEvens = (firstNumber, secondNumber) => {
        let sum = 0
        for (let i = firstNumber; i <= secondNumber; i++) {
            if (i % 2 === 0) {
                sum += i
            }
        }
        return sum
    }
    console.log(sumOfEvens(1, 5))
    
    //28.
    const evensAndOdds = (number) => {
        let sumOfAllEvens = 0
        let sumOfAllOdds = 0
        for (let i = 0; i <= number; i++) {
            if (i % 2 === 0) {
                sumOfAllEvens += 1
            }
            else {
                sumOfAllOdds += 1
            }
        }
        return (`The number of odds are ${sumOfAllOdds}. \n The number of evens are ${sumOfAllEvens}.`)
    }
    console.log(evensAndOdds(100))

    //29.
    const sum = (...agrs) => {
        let result = 0
        for (let i = 0; i < agrs.length; i++){
            result += agrs[i]
        }
       return result
    }
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

    //30.
    const randomUserIp = ()  => {
       let random1 = Math.floor(Math.random() * 256)
       return random1
    }
    console.log (`${randomUserIp()}.${randomUserIp()}.${randomUserIp()}.${randomUserIp()}`)

    //31. 
    const randomMacAddress = () => {
        const random = 'ABCDEF01234567890'
        let address = []

        for (let i = 0; i < 6; i++) {
            const firstDigit = random[Math.floor(Math.random() * random.length)]
            const secondDigit = random[Math.floor(Math.random() * random.length)]
        
            address += firstDigit + secondDigit

            if (i !== 5) {
                address += ':'
            }
        }
        return address
    }
    console.log(randomMacAddress())

    //32. 
    const randomHexNumberGenerator = () => {
        const random = 'abcdef0123456789'
        let address = ''
        for (let i = 0; i < 6; i++) { 
            address += random[Math.floor(Math.random()*random.length)]
        }
        return address
    }
    console.log(randomHexNumberGenerator())
    
    //33.
    const userIdGenerator = () => { 
        const random = 'abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789'
        let address = ''
        for (let i = 0; i <= 7; i++) { 
            address += random[Math.floor(Math.random()*random.length)]
        }
        return address
    }
    console.log(userIdGenerator())

    //34.
    /*
    const userIdGeneratedByUser = () => {
        let numberOfCharacter = prompt('Enter the number of characters:')
        let numberOfIds = prompt('Enter the number of ids: ')
        const random = 'abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789'
        let address = ''
        for (let i = 0; i < numberOfIds; i++){
            let id = ''
            for (let j = 0; j < numberOfCharacter; j++){
                address += random[Math.floor(Math.random()*random.length)]                
            }
            address += id + '\n'
        }
        return address
    }
    console.log(userIdGeneratedByUser())
    */
    
    //35. 
    const rgbColorGenerator = () => {
        const redColor = Math.floor(Math.random() * 255)
        const greenColor = Math.floor(Math.random() * 255)
        const blueColor = Math.floor(Math.random() * 255)
        return `rgb(${redColor},${greenColor},${blueColor})`
    }
    console.log(rgbColorGenerator())

    //36. 
    const arrayOfHexaColors = () => {
        const hexDigits = '0123456789ABCDEF'
        let hexColors = [] 
        for (let j = 0; j < 3; j++) {
            let hexColorAdded = ''
            for (let i = 0; i < 6; i++) {
                hexColorAdded += hexDigits[Math.floor(Math.random() * hexDigits.length)]
            }
            hexColors.push(hexColorAdded)
        }
        return hexColors
    }
    console.log(arrayOfHexaColors())

    //37.
    const arrayOfRgbColors = () => {
        let rgbColors = [] 
        for (let j = 0; j < 3; j++) {
            let rgbColorAdded = ''
            for (let i = 0; i < 1; i++) {
                let red = Math.floor(Math.random() * 255)
                let green = Math.floor(Math.random() * 255)
                let blue = Math.floor(Math.random() * 255)
                rgbColorAdded += `rgb(${red},${green},${blue})`
            }
            rgbColors.push(rgbColorAdded)
        }
        return rgbColors
    }
    console.log(arrayOfRgbColors())

    //38.
    const convertHexaToRgb = (hexColor) => {
        if (hexColor.startsWith('#')) { 
            hexColor = hexColor.substring(1)
        }
        const red = parseInt(hexColor.substring(0, 2) , 16)
        const green = parseInt(hexColor.substring(2, 4), 16)
        const blue = parseInt(hexColor.substring(4, 6), 16)
        return `rgb(${red},${green},${blue})`
    }

    console.log(convertHexaToRgb("#0000FF"))
   
    //39.
    const convertRgbToHex = (red, green, blue ) => {
        const redHex = red.toString(16).padStart(2, '0')
        const greenHex = green.toString(16).padStart(2, '0')
        const blueHex = blue.toString(16).padStart(2, '0')
        return `#${redHex}${greenHex}${blueHex}`
    }
    console.log(convertRgbToHex(5, 55, 175))

    //40. 
    const generateColors = (rgbOrHex, numberofcolors) => {
        let colors = []
        if (rgbOrHex === 'rgb') {
            for (let i = 0; i < numberofcolors; i++) {
                let newAddedColor = ''
                for (let j = 0; j < 1; j++) {
                    let red = Math.floor(Math.random() * 255)
                    let green = Math.floor(Math.random() * 255)
                    let blue = Math.floor(Math.random() * 255)
                    newAddedColor += `rgb(${red},${green},${blue})`
                }
                colors.push(newAddedColor)
            }
            return colors
        }
        else {
            const hexDigits = '0123456789ABCDEF'
            for (let i = 0; i < numberofcolors; i++) {
                newAddedColor = ''
                    for (let k = 0; k < 6; k++) {
                        newAddedColor += hexDigits[Math.floor(Math.random() * hexDigits.length)]
                    }
                colors.push(newAddedColor)
                }
                
        }
        return colors
    }

    console.log(generateColors('hex', 2))

    //41.
    const shuffleArray = (array) => {
        const shuffledArray = [...array]
        let currentIndex = shuffledArray.length
        while (currentIndex > 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex) 
            currentIndex--
            
            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]]
        }
        return shuffledArray
    }
    let sampleArrayForRandom = ['apple', 'banana', 'orange', 'mango','watermelon', 'grapes', 'peach']
    console.log(shuffleArray(sampleArrayForRandom))

    //42.
    const factorial = (number) => {
        if (number === 0 || number === 1) {
            return 1;
        }
        let factorial = 1
        for (let i = 2; i <= number; i++) {
            factorial *= i
        }
        return factorial
    }
    console.log(factorial(5))

    //43.
    const isEmpty = (isEmptyOrNot) => {
        if (isEmptyOrNot === null || isEmptyOrNot === undefined || isEmptyOrNot === '') { 
            return ('is Empty');
        }
        else {
            return ('Not Empty')
        }
    }
    console.log(isEmpty(''))

    //44. 
    const sumOfTheNumbers = (...numbers) => {
        return numbers.reduce((sum, currentNumbers) => {
            return sum + currentNumbers 
        }, 0)
    }
    console.log(sumOfTheNumbers(5, 2 , 4, 5, 5, 20))

    //45. 
   
    const sumOfArrayItems = (array) => {
        let feedBack
         if (!Array.isArray(array)) {
                feedBack = 'Invalid Input: Agrument is not an array'
         }
        
        else if (array.every((eachItem) => typeof eachItem === 'number')) {
             const total = array.reduce((sum, currentNumber) => sum + currentNumber, 0)
             feedBack = 'All array items are of number type'
             return {total, feedBack }
         }
             
         else {
             const total = array.reduce((sum, currentNumber) => sum + currentNumber, 0)
             feedBack = 'Array contains non-number type'
             return {total, feedBack }
        }
        
    return {total: 0 ,feedBack} 
    }

    let array1234 =[2, 4, 5, 8, 4]
    console.log(sumOfArrayItems(array1234))

    //46. 
    const average = (arrayParameter) => {
        let feedBack = ''
        if (!Array.isArray(arrayParameter)) {
            feedBack = 'Invalid Input: Agrument is not an array'
        }
        else if (arrayParameter.every((eachItem) => typeof eachItem === 'number')) {
            const total = arrayParameter.reduce((sum, currentNumber) => sum + currentNumber, 0)
            const averageOfTheArray = total / arrayParameter.length
            feedBack = 'All array items are number type'
            return {averageOfTheArray, feedBack}
        }
        else {
            feedBack = 'Array contains non-number type'
        }
       return {averageOfTheArray: 0, feedBack}
    }
    const arrayParameter = [2, 4, 6, 8, 9]
    console.log(average(arrayParameter))

    //47. Question Number 1
    const modifyArray = (arrayOfFruits) => {
        if (arrayOfFruits.length >= 5) {
            arrayOfFruits[4] = arrayOfFruits[4].toUpperCase()
            return arrayOfFruits
        }
        else {
            return 'Item Not Found'
        }
    }
    arrayOfFruits = ['Avocado', 'Tomato', 'Lemon','Carrot']
    console.log(modifyArray(arrayOfFruits))

    //47.Question Number 2 
    const modifyArray1 = (arrayOfCompanies) => {
        if (arrayOfCompanies.length >= 5) {
            arrayOfCompanies = arrayOfCompanies.slice(0, 4)
            return arrayOfCompanies
        }
        else {
            return 'Not Found'
        }
    }
    itCompanies = ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    console.log(modifyArray1(itCompanies))

    //48.
    //49.
    //50.
    //51.
    //52.
    //53.
    let reverseCountries = (arrayOfCountries) => {
        let copyOfContriesReverse = arrayOfCountries
        return copyOfContriesReverse.sort().reverse()
    }
    let countriesAnotherExample = ['USA', 'Canada', 'Japan', 'England', 'United States' ]
 
    console.log(reverseCountries(countriesAnotherExample))
      console.log(countriesAnotherExample)









}

 

quizDay7()



function chatGPT() {
    const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
    const income1 = text.match(/\d+/g);
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        const char = income1[i];
        const num = parseInt(char);
        if (!isNaN(num)) {
            sum += num;
        }
    }

    console.log(`Total annual income is ${sum}.`);

    //8.Day 4
    // Prompt the user to enter a month
    const month = prompt("Enter a month:");

    // Convert the input to lowercase
    const lowercaseMonth = month.toLowerCase();

    // Initialize a variable to store the number of days
    let days;

    // Determine the number of days based on the month
    switch (lowercaseMonth) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            days = 31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            days = 30;
            break;
        case "february":
            days = 28;
            break;
        default:
            days = "Invalid month";
    }

    // Display the number of days to the user
    console.log(`${month} has ${days} days.`);

    // Example array of companies
    const companies = ['Google', 'Microsoft', 'Facebook', 'Amazon', 'Apple'];

    // Use the filter method to filter out companies with more than one 'o'
    const filteredCompanies = companies.filter(company => {
        const count = company.toLowerCase().split('o').length - 1;
        return count > 1;
    });

    // Display the filtered companies
    console.log('Filtered Companies:', filteredCompanies);


    //32.Day 5 
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic"];

    const length = countries.length;
    const middleIndex = Math.floor(length / 2);

    let firstHalf, secondHalf;

    if (length % 2 === 0) {
    firstHalf = countries.slice(0, middleIndex);
    secondHalf = countries.slice(middleIndex);
    } else {
    firstHalf = countries.slice(0, middleIndex + 1);
    secondHalf = countries.slice(middleIndex + 1);
    firstHalf.push(countries[middleIndex]); // Add the middle country to the firstHalf array
    }

    console.log("First Half:", firstHalf);
    console.log("Second Half:", secondHalf);

    //16.
        const solveLinEquation = (a, b, c, x) => {
    // Solve for y: y = (-c - ax) / b
    const y = (-c - a * x) / b;
    return y;
    }

    // Example usage
    const a = 2;
    const b = 3;
    const c = -4;
    const x = 5;
    const y = solveLinEquation(a, b, c, x);

    console.log(`For x = ${x}, the value of y is ${y}.`);


}
