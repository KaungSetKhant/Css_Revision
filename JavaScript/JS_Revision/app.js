
// //class decleration
// class Person{
//     //properties
//     name = "KSK";
//     age = 22;
//     //method
//     run(){
//         return "KSK 22";
//     }
// }
// // console.log(Person);

// //class => object ( instantiate )
// class က object ရဲ့ template || blueprint

// const person = new Person();
// console.log(person.name);
// console.log(person.age);
// console.log(person.run());




///////////////////////////////////////////////////////////////////////////




// class Student{

// }

// const st1 = new Student(); //object build || object,class ( instantiate )
// //properties
// st1.name = "KSK";
// st1.age = 22;
// st1.gender = "Male";
// st1.major = "Bio";
// console.log(st1);

// //methods
// st1.learn = function(){
//     return st1.name + "can learn everything";
// }

// const st2 = new Student();//object build || object,class ( instantiate )
// st2.name = "LHK";
// st2.age = 22;
// st2.gender = "Male";
// st2.major = "Eco";
// console.log(st2);

// //methods
// st2.learn = function(){
//     return this.name + " can learn everything";
// }
// console.log(st2.learn());


// //object build
// const obj = {
//     name : "Kaung Kaung",
//     age : 21,
//     gender : "Male",
//     major : "Bio",
//     learn(){
//         return this.name + " can learn everything";
//     }
// }
// console.log(obj);
// console.log(obj.learn());


///////////////////////////////////////////////////////////////////////////



//constructor is special method
//class ကို instantiate လုပ်တာနဲ့ constructor ကအလုပ်လုပ်တယ်

// class Student{
//     //special method
//     constructor(){
//         console.log("I am Constructor");
//     }
// }
// const st = new Student(); //object build || object,class ( instantiate )


// //parameter passing
// class Students{
//     //special method with parameter passing
//     constructor(x,y){
//         console.log("I am Constructor2",x,y);
//     }
// }
// const sts = new Students("X value","Y value"); //object build || object,class ( instantiate )



///////////////////////////////////////////////////////////////////////////




// class Student{
//     //name gender age major => properties
//     constructor(inputName,inputAge,inputGender,inputMajor){
//     // console.log(inputName)
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;


//     //profits or benefits
//     this.namePrefix = this.gender === "Male"? "Mg" : "Ma";
//     this.birthYear = 2023 - this.age;
//     this.pronoun = this.gender === "Male"? "He" : "She";

//     this.subject = ["Myanmar","English","Mathematics","Chemistry","Physics",this.major];
//     }

//     //method
//     learn(){
//         return this.name + " can learn " + this.subject;
//     }

//     //method
//     about(){
//         return `${this.name} is ${this.age} year${this.age>1 ? "s" : ""} old and ${this.pronoun} was borned in ${this.birthYear} now ${this.pronoun} is attending in ${this.major}.`;
//     }
// }
// const st1 = new Student("Hla Hla",1,"Female","Bio");
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st2 = new Student("Ya Min",16,"Female","Eco");
// console.log(st2);
// console.log(st2.learn());
// console.log(st2.about());

// const st3 = new Student("Kyaw Gyi",22,"Male","Bio");
// console.log(st3);
// console.log(st3.learn());
// console.log(st3.about());


///////////////////////////////////////////////////////////////////////////



                        //Inheritance
// class A{
//     a = "aaa";
//     x = "xxx";
//     y = "yyy";
//     run(){
//         return "This is class A run method";
//     }
// }
// class B extends A{
//     b = "bbb";
//     z = "zzz";
//     run(){
//         return "This is class B run method";
//     }
// }
// class C extends B{
//     c = "ccc";
// }
// // const a = new A();
// // console.log(a);

// // const b = new B();
// // console.log(b);
// // console.log(b.run());
// // console.log(b.go());

// const c = new C();
// console.log(c);



// class Student{
//     //name gender age major => properties
//     constructor(inputName,inputAge,inputGender,inputMajor){
//     // console.log(inputName)
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;


//     //profits or benefits
//     this.namePrefix = this.gender === "Male"? "Mg" : "Ma";
//     this.birthYear = 2023 - this.age;
//     this.pronoun = this.gender === "Male"? "He" : "She";

//     this.subject = ["Myanmar","English","Mathematics","Chemistry","Physics",this.major];
//     }

//     //method
//     learn(){
//         return this.name + " can learn " + this.subject;
//     }

//     //method
//     about(){
//         return `${this.name} is ${this.age} year${this.age>1 ? "s" : ""} old and ${this.pronoun} was borned in ${this.birthYear} now ${this.pronoun} is attending in ${this.major}.`;
//     }
// }

// class Monitor extends Student{
//     room = this.major === "Bio"? "GradeA" : "GradeB";
// }
// const monitor = new Monitor("Aung Gyi",23,"Male","Bio");
// console.log(monitor);
// console.log(monitor.learn());
// console.log(monitor.about());



///////////////////////////////////////////////////////////////////////////


                    //Class => Public, Private and Protected
// "#name" => that is private properties

// class Now{
//     a = "aaa";
//     #name = "KSK"; //private properties
// }
// const now = new Now();
// console.log(now.a);
// console.log(now.x); //output undefined


///////////////////////////////////////////////////////////////////////////


                    //Static properties and method
// class Just{
//     a = "aaa";
//     static x = "xxx";
//     static y(){
//         return "yyy";
//     }
// }
// const just = new Just();
// console.log(just.a);
// console.log(just.x); //output undefined

// console.log(Just.x); //static output
// console.log(Just.y()); //static output


///////////////////////////////////////////////////////////////////////////


                    //method changing

// class A{
//     a(){
//         console.log("This is a method");
//         return this;
//     }
//     b(){
//         console.log("This is b method");
//         return this;
//     }
//     c(){
//         console.log("This is c method");
//         return this;
//     }
// }
// const a = new A();
//         //for console output
// // a.a();
// // a.b();
// // a.c();

//         //for return this output
// a.a(),a.b(),a.c();


///////////////////////////////////////////////////////////////////////////


                    //Standard built-in objects

                            //Date

// const date = new Date();
// console.dir(date);
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMilliseconds());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.getUTCDay());
// console.log(date.getFullYear());
// console.log(date.toDateString());


// const date = new Date();
// date.setHours(date.getHours() + 300);
// console.dir(date);

// const dates = new Date();
// dates.setMonth(dates.getMonth() + 4);
// console.dir(dates);

// const date1 = new Date();
// date1.setDate(date1.getDate() + 25);
// console.dir(date1);


///////////////////////////////////////////////////////////////////////////



                                //String

// const str = new String("Min Ga Lar Par");
// console.log(typeof str);
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log(str.substring(4,7));
// console.log(str.substr(4,4));
// console.log(str.search("Za"));
// console.log(str.replace("Ga","Za"));
// console.log(str.replaceAll("a","*"));

// const str1 = new String("      Ming Ga Lar Par      ");
// console.log(str1);
// console.log(str1.trim());
// //method changing and string to array
// console.log(str1.trim().split(" ")); 
// //3 is array count
// console.log(str1.trim().split(" ",3));


// const luckyNumber = new String("23R426A1");
// console.log(luckyNumber.padStart(16,"0"));
// console.log(luckyNumber.padEnd(16,"0"));

// const subString = new String("Hello World");
// console.log(subString);
// console.log(subString.slice(1,7));



///////////////////////////////////////////////////////////////////////////



                            //Number

// const num = new Number(215.436);
// console.log(typeof num);
// console.log(num);
// console.log(num.toString());

// console.log(num.toFixed());
// console.log(num.toFixed(2));

// console.log(Number("215.436"));

// console.log(num.toPrecision(2));

// const strNum = "21541.4213";
// console.log(parseInt(strNum));
// console.log(parseFloat(strNum));

// const weight = "160.324kg";
// console.log(parseInt(weight));
// console.log(parseFloat(weight));


                        //NaN
// console.log(isNaN(15 + "Kaung"));
// console.log(isNaN(15 + 15));


                        //eval
// console.log(eval("8+2")); //calculating even eval


///////////////////////////////////////////////////////////////////////////


                        //Math
// console.log(Math);
// console.log(7-5);
// console.log(5-7);
// console.log(Math.abs(5-7));

// console.log(Math.round(123.75));
// console.log(Math.round(123.15));

// console.log(Math.ceil(123.75));
// console.log(Math.floor(123.75));
// console.log(Math.random());

// console.log(Math.random()*10);
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));

// console.log(2 ** 5);
// console.log(Math.pow(2,5));

// console.log(Math.sqrt(16));


///////////////////////////////////////////////////////////////////////////


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



////////////////////////////////////////////////////////////////////////////////



// const obj = {
//         a : "aaa",
//         b : "bbbb"
// }
// console.log(obj.toString());
// console.log(obj.toLocaleString());
// console.log(obj.hasOwnProperty("e"));

// console.log(Object.keys(obj));
// console.log(Object.values(obj));



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


                                                        //object destructuring

// const obj = {
//         a : "aaa",
//         b : "bbb",
//         c : "ccc",
//         d : "ddd",
//         e : "eee",
//         f : "fff",
//         g : "ggg",
//         h : "hhh",
// };

// const {a,b,c,...x} = obj;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);





                                                        //array destructuring

const arr = [11,12,13,14,15,16,17,18,19,20];
// console.log(arr[0]);
// console.log(arr[1]);

const [a,b,c,...spreadarr] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(spreadarr);