const createBtn = document.querySelector("#createBtn");
const lists = document.querySelector("#lists");
const textInput = document.querySelector("#textInput");


//counter
const total = document.querySelector("#total");
const done = document.querySelector("#done");

const counter = () => {
    const totalCount = lists.children.length;
    const doneCount = [...lists.children].filter(
        (el) => el.querySelector(".form-check-input").checked === true
    ).length;
    total.innerText = totalCount;
    done.innerText = doneCount;
};


//create li with function
const createLi = (text) => {
    const li = document.createElement("li");

    // const dynamicId = "flexCheck" + Date.now();// generate dynamic id (original id for label and input type = flexCheckChecked)
    const dynamicId = "flexCheck" + Math.random();// generate dynamic id (original id for label and input type = flexCheckChecked)


    // li.addEventListener("dblclick", edit);//edit data and Date.now() work together

    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="" id="${dynamicId}" onchange="delDone(event)">
                        <label for="${dynamicId}" class="form-check-label">${text}</label>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-outline-dark btn-sm" onclick="edit(event)">
                            <i class="bi bi-pencil pe-none"></i>
                        </button>
                        <button class="btn btn-outline-dark btn-sm" onclick="del(event)">
                            <i class="bi bi-trash3 pe-none"></i>
                        </button>
                    </div>
                   `;
    return li;
};
// lists.append(createLi("Apple")); 
// lists.append(createLi("Apple"));


//add value in created li and clear search data input
const addList = () => {
   if(textInput.value.trim()){
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
   }else{
    alert("This message box is empty");
   }
};


//show data after clicked button
createBtn.addEventListener("click", addList);


//show data after clicked "Enter"
textInput.addEventListener("keyup",event => {
    if(event.keyCode === 13){
        addList();
    }
    // console.log(event);
});


//delete data after click delete btn
const del = (event) => {
    if(confirm("Are you sure to delete?")){
        // event.target.parentElement.remove();
        event.target.closest("li").remove();
    }
    counter();
};



//checkbox on / off with data line through
const delDone = (event) => {
    event.target.nextElementSibling.classList.toggle(
        "text-decoration-line-through"
    );
    counter();
};


// edit data
const edit = (event) => {
    const old = event.target.closest(".list-group-item").querySelector(".form-check-label");
    const newText = prompt("Enter New Text", old.innerText);
    // console.log(newText);
    if(newText && newText.trim()){

        old.innerText = newText;
    }
};


window.addEventListener("load",counter);



//another way 1
// <div class="btn-group">
// <button class="btn btn-outline-dark btn-sm edit-btn">
//     <i class="bi bi-pencil pe-none"></i>
// </button>
// <button class="btn btn-outline-dark btn-sm del-btn">
//     <i class="bi bi-trash3 pe-none"></i>
// </button>
// </div>

// [...lists.children].forEach((li) => {
//     li.querySelector(".edit-btn").addEventListener("click",edit);
//     li.querySelector(".del-btn").addEventListener("click",del);
// });



//another way 2
// <div class="btn-group">
// <button class="btn btn-outline-dark btn-sm edit-btn">
//     <i class="bi bi-pencil pe-none"></i>
// </button>
// <button class="btn btn-outline-dark btn-sm del-btn">
//     <i class="bi bi-trash3 pe-none"></i>
// </button>
// </div>

// lists.addEventListener("click", (event) => {
//     console.log(event.target);
//     if(event.target.classList.contains("del-btn")){
//         del(event);
//     }else if(event.target.classList.contains("edit-btn")){
//         edit(event);
//     }
// })