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
function tutorials(){
    console.log("YOOOO");
    //window.alert("This is a alert example");
    var a = "Hi";
    let a3 = a; 
    if (a3 == "Yoo"){
        console.log("This console run");
        document.getElementById("p2").innerHTML = a3;
    }
    else if (a3 == "Yoood"){
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
    for(i=0;i < 20; i++){
    console.log(extrascore);
    }
    score *= 1;
    console.log(score);
    let problem = 2 + 22*2 * ((3-4)/23);
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

function tutorialof30DaysOfDay1 (){


    //This is use to print something like primative and non-primative 
    console.log('Hello', 'World' ,'!');
    console.log('Happy', 'New', 'Year', 2023);
    console.log('Welcome','to', 30, 'Days', 'of', 'JavaScript');

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
    console.log(2+2);//Addtion
    console.log(2-2);//Subtraction
    console.log(2/2);//Division
    console.log(2*2);//Multiplication
    console.log(2%2);//Modulus - find the remainder
    console.log(3 ** 2 );//Exponentiation

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
    
    console.log('Person 1:'+ person1,'Person 2:'+ person2, age, location );

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
    
    console.log(sampleString,trueAndFalse,ob,nothing);

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
    sampleLet = 'This is a let sample' ; 
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
    console.log(first_name1,last_name1,marital_status1,age3);
    
    //10.
    const myAge = 22;
    const yourAge = 30;
    console.log('I am ' + myAge + ' years old');
    console.log('You are '+ yourAge+ ' years old');
}

// # Day 2 
function tutorialOf30DaysOfDay2(){
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
    console.log(age,Pi,temperature,force, bodyTemperature, freezingPoint);
    console.log(Math.round(Pi));
    console.log(Math.round(2.423));
    console.log(Math.floor(232.234));
    console.log(Math.ceil(Pi));
    console.log(Math.min(2, -2, 3, 4, 0 , 23));
    console.log(Math.max(2, -2, 3, 4, 0 , 23));
    const randomNumbers = Math.random(); 
    const rand = Math.floor(Math.random()*11)
    console.log('This is random number:' + randomNumbers);
    console.log('This is the random number range from 0-10: ' + rand );
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
    console.log('I lived in ' + country + 'and I know some of ' + language + 'also my job is '+ job);
    
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
    let frLetter = javaScript [3]; //a
    let fifLetter  = javaScript[4] //S
    let lIndex = javaScript.length-1;
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
    let secondToLastIndex = javaScript.length-2;
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
    let numInt  = parseInt(num);
    console.log(numInt);//10
    let newNumInt = Number(numInt);
    console.log(newNumInt);//10
    let anotherNewNumInt = +newNumInt;
    console.log(anotherNewNumInt);//10
    
    let floatNum = '23.21';
    let numFloat  = parseFloat(floatNum);
    console.log(numFloat);//23.21
    let newNumFloat = Number(numFloat);
    console.log(newNumFloat);//23.21
    let anotherNewNumFloat = +newNumFloat;
    console.log(anotherNewNumFloat);//23.21

    let numConvert = parseInt(floatNum);
    console.log(numConvert);//23
}  

function quizDay2 (){
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
    console.log(declare.substring(2,21));
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
    console.log(declare.replace('30 Days Of JavaScript' , '30 Days Of Python'));
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
    let javaSample ='       30 Days Of JavaScript';
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
    let extention =  '\'There is no exercise better for the heart than reaching down and lifting people up.\' ';
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
    let wordSample = 'Pyton',wordSample1 = 'Jargon'; 
    console.log(wordSample.match('on'));
    console.log(wordSample1.match('on'));

    //6.
    let sampleSentence = 'I hope this course is not full of jargon';
    console.log(sampleSentence.match('jargon'));

    //7. 
    let random_number = Math.floor(Math.random()*101);
    console.log(random_number);

    //8. 
    let random_number_another = Math.floor(Math.random()*(100 - 51))+50;
    console.log(random_number_another);

    //9. 
    let random_number_range = Math.floor(Math.random()*255);

    //10. 
    let letter = 'JavaScript'
    console.log (Math.floor(Math.random()*letter.length));

    //11. 
    console.log('1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64\n5 1 5 25 125');

    //12. 
    let because_2 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(because_2.substr(31, 24));
    
    //13. 
    const loveFacts = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    let count = (loveFacts.match(/love/gi)|| []).length
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
    const income =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
    const income1 = income.match(/\d+/g);
    const mSalary = parseInt(income1[0]);
    const bSalary = parseInt(income1[1]);
    const cSalary = parseInt(income1[2]);

    let add_totalSalary = mSalary + bSalary + cSalary;
    console.log(`Total annual income is ${add_totalSalary}`);
    
}



function quizDay3 () {
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
    var z5 = x/=y;
    //console.log(z); // 27 is more likely to 3^3
    //console.log(z1); // 9 is just multiplication 
    //console.log(z2); // 6 is just addtion
    //console.log(z3); // 0 modulus
    //console.log(z4); // -3 difference 
    console.log(z5); // 0 division 

    const PI = 3.14; 
    let radius = 100; 
    
    //Let us calculate area of circle
    const areaOfCircle = PI * radius * radius ;
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
    
    console.log (`This is first check ${check}, \n second ${check1} , \n third ${check2}`)

    const pipe = 4 < 2 || 0 == false
    const pipe1 = 'a' == 1 || 3 > 2 
    const pipe2 = undefined == null || NaN === NaN
    
    console.log (`This is first pipe ${pipe}, \n second ${pipe1}, \n third ${pipe2}`)

    const negate = !true 
    const negate1 = !negate
    const change = !isLigthOff
    
    console.log (`First negation ${negate}, \n second ${negate1} \n third ${change}`)

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
        ? console.log ('You need a rain coat. ')
        : console.log ('No need for a rain coat. ')
    
    let isRaining1 = false
    isRaining1
        ? console.log ('You need a rain coat. ')
        : console.log ('No need for a rain coat. ')

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
     let lastName  = 'Solana'
     let country = 'Philippines'
     let city = 'Zamboanga Sibugay'
     var age = 21 
     let status = 'Complicated'
     var year = 2023
     let arr = [firstName, lastName, country, city, age, status, year]
     console.log(typeof(firstName))
     console.log(typeof(lastName))
     console.log(typeof(country))
     console.log(typeof(city))
     console.log(typeof(age))
     console.log(typeof(status))
     console.log(typeof(year))
     //2.
     console.log('10' == 10)
     //3.
     const par = parseInt('9.8')
     console.log(par == 10)
     //4. 
     console.log('Trutly')
     console.log(10 === 10)
     console.log( '1.111' == 1.111) 
     console.log(1 == true)
     console.log('Falsely')
     console.log(NaN === NaN)
     console.log(null == ' ')
     console.log(''== undefined)
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
     console.log(i, ii, iii, iv, v , vi, vii, viii, ix, x0, xi, xii)
    //6. 
    let i1 = 4 > 3 && 10 < 12
    let ii1 = 4 > 3 && 10 > 12 
    let iii1 = 4 > 3 || 10 < 12 
    let iv1 = 4 > 3 || 10 > 12 
    let v1 = !(4>3)
    let vi1 = !(4<3)
    let vii1 = !(false)
    let viii1 = !(4 > 3 && 10 < 12)
    let ix1 = !(4 > 3 && 10 > 12 )
    let x1 = !(4 === 4)
    let dar = 'dragon'
    const res = dar.includes('on') && py.includes('on')
    console.log(i1, ii1, iii1, iv1, v1, vi1, vii1,viii1, ix1, x1, res)
    //7.
    const dayDate = new Date()
    console.log('Today year is'  + dayDate.getFullYear())
    console.log('The month today as a number is ' + dayDate.getMonth())
    console.log('The Date today is ' + dayDate.getDate())
    console.log('Day today as a number ' + dayDate.getDay())
    console.log('The hours now is ' + dayDate.getHours())
    console.log('The minutes now is ' + dayDate.getMinutes())
    console.log('To find out the number of seconds elapsed from Jan 1, 1970 to now ' + Math.floor(Date.now()/1000))

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
   if (firstName_example.length > lastName_example.length){ 
    let condition = 'is longer than your family name'
    console.log(`Your first name, ${firstName_example} ${condition}, ${lastName_example}`)
   }
   else{
    let condition_one = 'is shorter than your family name'
    console.log(`Your first name, ${firstName_example} ${condition_one}, ${lastName_example}`)
   }
   //12.
   let myAge = 250 
   let yourAge = 25
   let error_or_trick = myAge - yourAge
   if(error_or_trick < 0){
    let error_or_trick1 = yourAge - myAge
    console.log(`I am ${error_or_trick1} years older than you. `)
    }
   else if (myAge > yourAge){
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


function quizDay4(){
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
    }*/
    let isRaining = 'sunny'
    console.log(isRaining === 'cloudy' ?'You need a rain coat' :'No need for a rain coat')
}



quizDay4()


function chatGPT()
{
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
    

}
