        // Code Test
// let jName = "Kaung Set Khant";
// console.log(jName);


// let x;
// x = "Kaung Set Khant";
// console.log(x);


// const num = 016/2;octal number
// console.log(num);


// const x=5;
// const y=[];
// console.log(x===y);


// let a=5;
// let b=a;
// console.log(b);
// a=10;
// console.log(b);


// const a=['a'];
// const b=a;
// console.log(b);
// a[1]="aa";
// console.log(b);

// let a=['a'];
// let b=a;
// console.log(b);
// a[1]="aa";
// a=[];
// console.log(b);

// const arr=[];
// arr[0]='K';
// arr[1]='S';
// arr[2]=14;
// arr[26]='z';
// console.log(arr);
// console.log(arr[1]);

// const arr = [];
// console.log(arr? true:false);

// const obj ={};
// obj.a = 'a';
// obj.b = 'b';
// console.log(obj);

// const obj = {
// name:"Kaung",
// name2:"Khant"
// };
// console.log(obj["name"]);
// console.log(obj.name2);


        // function code block
// function run(){
//        console.log("I'm a");
//        console.log("I'm b");
//        console.log("I'm c");

//        return "I am run";
// }
// run(); result = a b c
// console.log(run()); result = undefined
// console.log(run());



         // function expression 
// const answer = function (x,y){
// // console.log(x); result = undefined
// // console.log(y); result = undefined
// console.log("I'm function expression");
// return x+y;
// };
// // console.log(answer()); result = NaN 
// console.log("The result = " + answer(5,5));



// (function(){
//         console.log("I'm IIFE");
// })()


// for(let i = 1;i <10;i++){
// console.log(i + " loop");
// }


//              looping + IIFE 
// for(let i = (function(){
//         console.log("I'm IIFE or first statement");
//         return 1;
// })(); i < 10; i++){
// console.log(i + " loop");
// }



//              looping + IIFE 
// for(let i = (function(){
//         console.log("I'm IIFE or first statement");
//         return 1;
// })();
//  (function(){
//         console.log("I'm IIFE or second statement");
//         return i < 10;
//  })(); 
//  i++){
// console.log(i + " loop");
// }



//              looping + IIFE 
// for(let i = (function(){
//         console.log("I'm IIFE or first statement");
//         return 1;
// })();
//  (function(){
//         console.log("I'm IIFE or second statement");
//         let r = i < 10;
//         console.log(r);
//         return r;
//  })(); 
//  i++){
// console.log(i + " loop");
// }


// console.log(`${(function (){
// console.log("IIFE");
// return "Hello";})
// ()} World`);


                // Block Scope
// {
//         let c = 5;
//         console.log(c);
// }

        // Function Scope
// function run(){
//         let x = 6;
//         return x;
// }
// console.log(run())

        // Global Scope
// let a = 10;
// function result(){
//         console.log(a);
//        return a;
// }
// result();
// console.log(a);


// const obj = {
//         a : "a",
//         b : 2,
//         c(){console.log(this)},
//         d : function(){console.log(this)}
// }
// console.log(obj.c())
// console.log(obj)
// this = obj (current)


// if(true){
// console.log("True Code Block");
// }


// if(false){
// console.log("True Code Block")
// }
// else{
// console.log("False Code Block")
// }


        // Ternary Operators
// console.log(true? "true expression" : "false expression");
// console.log(false? "true expression" : "false expression");


// console.log(true && console.log("True Statement"))
// console.log(false && console.log("True Statement"))


// for(let i = 1; i <=10; i++){
//         // if(i == 5){break};
//         if(i == 5){continue};
// console.log(i, "loop");
// }


//while(false){console.log("False and work true statement")}

// let a = 1;
// while(a <= 10){
//         console.log(a, "While Loop");
//         a++;
// }


// let rel = 1;
// do{
// console.log(rel, "Do While Loop");
// rel++;
// }while(rel <= 10);

// const expr = 'Apple';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }




// const fruits = ["Apple","Orange","Grape","Banana","WaterMelon"];

// for(let i = 0; i<fruits.length; i++){
// console.log("This is index " + i + " =", fruits[i]);
// }


// for(fruit of fruits){
// console.log(fruit);
// }


// for(fruit in fruits){
// console.log(fruit,fruits[fruit])
// }


// const obj = {
//         a : "aaa",
//         b : "bbb",
//         c : "ccc",
//         d : "dddd",
// }
// // console.log(obj)

// for(x in obj){
// console.log(x,obj[x]);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////



//             Note-1
// let and const (ES6) = keywork
// jName = variable
// "Kaung Set Khant" = value 
// let jName = "Kaung Set Khant"; = statement 
// let x = 10 + "Kaung Set Khant" = expression;


//             7-Data Types 
            // Primitive DataType
// 1.String        = "Any Text"
// 2.Number        =  123.45
// 3.Boolean       =  true or false 
// 4.Null          =  null
// 5.Undefined     =  undefined
// 6.Symbol        =  Symbol('something')
            // Reference DataType
// 7.Object        =  {key:'value'}        - check typeof
//     Array       =  [1, "text", false]   - check typeof
//     Function    =  function name(){}    - check typeof


//         Major Datatype
// String, Number amd Object,Array 



            // Operators
// Arithmetic Operators = + - / * ** % ++ -- 
// Assignment Operators -> = += -= *= /= %= **=
// String Operators = (+)
// Comparison Operators -> == === != !== >  <   >=  <= 
// Logical Operators = && || !


        // Function Scope 
// Block Scope
// Function Scope
// Global Scope 
// Module Scope 