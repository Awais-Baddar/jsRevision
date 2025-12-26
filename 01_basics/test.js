// Variable Declaration

// let 
// const
// var  ->  we dont use it due to block and fuction scope


// JavaScript data types:
// Number.
// String.
// Boolean.
// Null.
// Undefined.
// BigInt.
// Symbol.
// Object


//data type conversion

// toString
//Number(target)
//NaN



// funcitons
// typeof

// let score  = true;
// console.log(typeof score);

// let score2  = "33abc";
// console.log(typeof score2);

// let score3 = {a:1};
// console.log(typeof score3);


//to convert 

// let valueInNum = Number(score2)
// console.log(valueInNum);
// console.log(typeof valueInNum);


// let valueinStr = score.toString()
// console.log(valueinStr);
// console.log(typeof valueinStr);

// let InBoolean= Boolean ()

//NaN has type of number but value can be different than number like 22abc




//operations 

// ++ ,- , plus minus etc

//comparison and equality
// ==  comapres value , === compares datatype as well 



// summary 

// // primitive datatypes 
// String number boolean null undefined symbol BigInt

// non primitive (call by reference )
// array . object . functions 


// types of memories  -->  heap . stack .


//Strings


// .concat() , + to do same thing , ` backtics` used for string interpolation  `${score} is the best number 
// const string1 = new String(' string ')
//cahrAt. lowercase, upprercase , indexOf , valueOf
//substring, slice, splice  , split, trim , includes 

//numbers , maths, maths.random . floor , ceil , 


//array push pop unshift shift spread ... , array.flat(depth e.g infinty)



//objects

// const juser={
//     name:'awais',
//     age:12
// }

//can be accessed by dot . operator  or can be done by [] e.g juser[age], .freeze to avoid changes , obj.assign()
// object.keys, object.values, object.entries

//hasOwnProperty


//DESTRUCTURING OF VALUES ;

//
//   const course ={
//     courseName: 'ssss',
// coursePrice:2223,
// coursedays:['monday','tuesday',['monday','tuesday',['monday','tuesday']]]
// }

// const {coursedays : days} = course;
// console.log(days.flat(Infinity
// ));


//hoisting
//call stack
//IIFE 
// closures

//arrow function and this keyword
// arrow removes 'function' keyword


// const play =()=>{
//     console.log('playing arrow');
// }
// play();


//IIFE

// (
//     () => {
//         console.log('i am IIFE');
//     }


// )()



// //THIS KEYWORD 

// const obj = {
//     name : 'awais ',
//     greet: function (){
//        console.log(`hello ${this.name} wasup`);
//     }

// }
// obj.greet();

// const obj2 = {
//     name : 'tahir ',
//     greet: ()=> {
//        console.log(`hello ${this.name} wasup`);
//     }

// }
// obj2.greet();


//CALL STACK  JS is single threaded 
// Global Execution Context  THIS CONTEXT
            // Function Execution Context  This  Context
                    // Eval execution Context

// memory creation phase -- memory allocation phase - values undefined
        //Execution phase --  value intialization 
                // execution thread + new env variables 

                //function is held with definition 


                //lifo type


// control flow 
// if. else , switch , nested if else  , conditions . break , continue !, ==,===  
// a>b? true : false


// let a=2 ,b =3;

// a>b? console.log('yes'): console.log('no');



// const obj= {}

// if(!obj.keys){
//     console.log('empty');
//     console.log(typeof obj.keys);
// }
// else " not empty"


// const object1 ={
//     user1 : ' Off-Duty '
// }

// console.log(Object.keys(object1) + '  is ' + Object.values(object1));




//null coalesencing works b/w null n undefined