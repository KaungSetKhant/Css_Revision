//Web APIs
// DOM and BOM


                                                    //BOM (Browser Object Model)
// window.prompt();
// window.alert();
// window.confirm();
// console.log();



// const outputResult = window.prompt();
// window.alert(outputResult);



                //calculation area
// const width = window.prompt("Input Width");
// const breadth = window.prompt("Input Breadth");
// const area = width * breadth;
// window.alert("Area is "+ area + " sqft");



// const run = (x,y) => {
//    window.alert(typeof x);
//    window.alert(typeof y);
//     return parseFloat(x) + parseFloat(y);
// };

// const inputX = window.prompt("Input X...");
// const inputY = window.prompt("Input Y...");
// window.alert(run(inputX,inputY));


// const answer = window.confirm("ထမင်းစားပြီးပြီလား...!");
// window.alert(answer? "စားပြီးပြီ" : "မစားရသေးဘူး");



// const myName = window.prompt("What's your name...!");
// console.log(`My name is ${myName}`);



                                                //Event Handling

// const btn = document.querySelector("#btn");


                //Simple Way
// btn.onclick = () => alert("hello world");

// btn.addEventListener('click', () => alert("hello world"));



                //function declaration
// const alertOutput = () => alert("hello world");
// btn.onclick = alertOutput;
// btn.addEventListener('click',alertOutput);



                //function declaration with parameter and binding
// const alertOutput = (event,text) => alert(text);
// btn.onclick = alertOutput.bind(null,event,"Parameter Binding or Passing");
// btn.addEventListener('click',alertOutput.bind(null,event,"Binding"));




////////////////////////////////////////////////////////////////////////////////////////////////////////////




                                                    //DOM (Document Object Model)

//1. select an element --- document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName()


//2. get text --- selected.innerHTML, selected.innerText, selected.value


//3. set text --- selected.innerText = "new text"


//4. event --- onclick = fun(), ondblclick = fun()




////////////////////////////////////////////////////////////////////////////////////////////////////////////




// const h1 = document.getElementsByTagName("h1")[0];
// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);



////////////////////////////////////////////////////////////////////////////////////////////////////////////




                                                        //More about DOM (Document Object Model)

//1. querySelector = catch "class,id and tagname", 1.1. querySelectorAll = catch  "class all,id all and tagnameall"
//2. style and class
//3. attribute get and set
//4. input value, files



////////////////////////////////////////////////////////////////////////////////////////////////////////////



                                                        //Basic Event 

//mouse --- onclick, ondblclick, mouseover, mouseout
//keyboard --- keyup, keydown, keypress


                                                        //Event Handling

//1. HTML attributes
//1.e.g. <button id="btn" onclick="alert("Hello Btn attribute")"></button>

//2. methods
//2.e.g. const btn = document.querySelector("#btn"); 
//2.e.g. btn.addEventListener('click', () => alert("Hello Btn method"));

//3. property
//3.e.g. const btn = document.querySelector("#btn"); 
//3.e.g. btn.onclick = () => alert("Hello Btn property");



////////////////////////////////////////////////////////////////////////////////////////////////////////////



                                                        //HTML DOM Elements (Nodes)
//1. document.createElement("p");
//2. document.createTextNode("This is new.");
//3. append(node);
//4. prepend(node);
//5. remove();
//6. removeChild();