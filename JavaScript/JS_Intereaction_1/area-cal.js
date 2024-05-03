const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const result = document.getElementById("result");
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");
const store = document.getElementById("store");
const list = document.getElementById("list");
const del = document.getElementById("delete");


//function (another way)
// const clearResult = () => {
//     console.log("clear result function");
//     result.innerText = null;
// }


//process
calculate.onclick = () => {
    const area = width.valueAsNumber * breadth.valueAsNumber;

    //calculation
    result.innerText = `w: ${width.valueAsNumber}ft * b: ${breadth.valueAsNumber}ft = ${area}sqft`;

    //remove value
    // width.value = breadth.value = null;
    width.valueAsNumber = breadth.valueAsNumber = 0;
}


clear.onclick = () => {
    result.innerText = null;
}

// clear.onclick = clearResult; another way (invoked function)
// clear.onclick = () => clearResult(); another way (invoked function)

store.onclick = () => {
    list.innerHTML  += `<li>${result.innerText}</li>`;

    //clear result data
    result.innerText =null;
    // clearResult(); another way (function within function)
}

del.onclick = () => {
    list.innerHTML = null;
}