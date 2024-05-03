
                       //Simple function with parameter passing
// function run(x,y){
//         return x+y;
// }
// console.log(run(5,5));



                        //function expressioni
// const exp = function run(x,y){
//         return x - y;
// }
// console.log(exp(6,2));



                        //function invoked function or callback function
// function run(x,y){
//         return y(x);
// }
// console.log(run(5,function(x){
//         return x + 2;
// })
// );
// console.log(run(5,function(x){
//         return x * 2;
// })
// );


                        //arrow function with two parameters
// const run = (x,y) => x + y;
// console.log(run(11,2));


                        //arrow function with one parameter
// const run = x => "This is Arrow Function" + x;
// console.log(run(" One Parameter"));


                        //arrow function with no parameter
// const run = () => "This is no parameter Arrow Function";
// console.log(run());


                        //arrow function sample
// const run = (x,y) => "This is Arrow Function " + (x + y);
// console.log(run(6,6));


                        //arrow function with code block and statement
// const test = (x,y) =>{
//         let rel = x * y; //statement
//         return "This is Arrow Fun with Code Block " + rel;
// }
// console.log(test(12,5));


                        //object with function
// const test = {
//         a : "a",
//         b(){
//                 console.log(this);
//                 return "this is b";
//         },
//         c: function(){
//                 console.log(this);
//                 return "this is c";     
//         },
//         d : () => {
//                 console.log(this); //window object
//                 return "this is d";   
//         },
//         e : (x,y) => {
//                 return "this is e = " + (x % y);
//         }
// }
// // test.b();
// console.log(test.b());
// console.log(test.c());
// console.log(test.d());
// console.log(test.e(13,5));


                        //function object
// const fun = new Function("a,b","return 'this is ' + (a + b)");
//console.dir(fun);
// console.log(fun(12,2));



                        //function prototype
// function run(x,y){
//         console.log(arguments);
//         return x + y;
// }
// console.dir(run);
// console.log(run.call()); //output NaN because no agrument passing
// console.log(run.bind(null,12,12,12,12,12,12).call());



// const fck = function run(x,y){
//     return x + y;
// };
// console.log(fck.toString());



// const fck = function run(x,y){
//     console.log(arguments); //properties
//     return x + y;
// };
// console.log(fck(10,20));
// console.log(fck.call()); //output NaN because no parameter passing
// console.log(fck.bind(null,10,20).call()); //bind() is parameter passing and call() is running status




                                    //rest parameter (function)
// function run(...x){
//         console.log(x);
//         return "aaa";
// }
// console.log(run(1234,235,44,32,57));


// function sum(x,y,...nums){
//         console.log(`This is x value = ${x}`);
//         console.log(`This is y value = ${y}`);
//         console.log(nums);
//         return nums.reduce((prev,num) => prev + num, 0);
// }
// console.log(sum(1,2,3,4,5));