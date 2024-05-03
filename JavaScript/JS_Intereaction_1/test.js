
// JS 
const arr = ["a","b","c","d"];
const obj = {brand:"Apple",model:"Macbook Pro",spec:{cpu:"i7",ram:"16GB",ssd:"128"},};

// JSON is like an object, JSON woks for server and client with request and response
const j1 = '["a","b","c","d"]';
const j2 = `{"brand":"Apple","model":"Macbook Pro","spec":{"cpu":"i7","ram":"16GB","ssd":"128"}}`;
console.log(typeof j1);
console.log(typeof j2);


// JSON to JS 
//PHP called json_decode
console.log(JSON.parse(j1));
console.log(JSON.parse(j2).spec.ssd);

//JS to JSON
//PHP called json_encode
console.log(JSON.stringify(arr));
console.log(JSON.stringify(obj));


//XMLHTTPRequest
function run(){
    const req = new XMLHttpRequest();
    // console.log(req);
    req.open("GET","test.json");
    req.send();
    req.addEventListener("load",(event) => {
        // console.log(JSON.parse(event.target.responseText));
        console.log(event.target.responseText);
        const json1 = JSON.parse(event.target.responseText);
        console.log(json1);
    })

    //fetch
    // fetch("https://fakestoreapi.com/products/")
    // .then((data) => data.json())
    // .then((json) => {
    //     console.log(json);
    // });
}


//LocalStorage
localStorage.setItem("myName","Kaung Set Khant");
localStorage.setItem("myAge",22);


//SessionStorage
sessionStorage.setItem("nickName","Pro");


//cookie
document.cookie = "name=kaungsetkhant";
document.cookie = "laptop=mac";