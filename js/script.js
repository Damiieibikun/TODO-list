 // js
 let inputted = document.getElementById("input-txt");
 let todoList = document.getElementById("todo-list");
//  //initalize count each time item is added
 let count = 0;

 // set inputed text to sentence case
 function properCase() {
   if (inputted.value !== "") {
     let properText =
       inputted.value[0].toUpperCase() + inputted.value.slice(1);
     inputted.value = properText;
   } else {
     console.log("Input field empty");
   }
 }


  function store_item() {
   let todo_List = [];
   if (localStorage.getItem("todo") === null) {
     todo_List.push(inputted.value);
     localStorage.setItem("todo", JSON.stringify(todo_List));
   } else {
     let currentList = JSON.parse(localStorage.getItem("todo"));
     currentList.push(inputted.value);
     localStorage.setItem("todo", JSON.stringify(currentList));
   }
 }


 function create_items(index, value){
    // create new div for list items
   let newEntry = document.createElement("div");
   newEntry.className = "new-entry flex justify-spacebtw";
   //append to TODO list
   todoList.appendChild(newEntry);

// create new check text div and append to TODO list
   let checkText = document.createElement("div");
   checkText.className = "check-text flex justify-center align-center gap";
   document.getElementsByClassName("new-entry")[index].appendChild(checkText);

//create icons div and append to TODO list
   let icons = document.createElement("div");
   icons.className = "icons flex justify-center align-center gap";
   document.getElementsByClassName("new-entry")[index].appendChild(icons);

//create new p element for each input entry
   let newItem = document.createElement("p");
   newItem.innerText = value;
   //create check boxes
   let newCheck = document.createElement("input");
   newCheck.type = "checkbox";
   newCheck.className = "list-checkbox";
   newCheck.style.width = "25px";
   newCheck.style.height = "25px";
   // create images
   let icon1 = document.createElement("img");
   let icon2 = document.createElement("img");
   icon1.src = "images/edit.png";
   icon2.src = "images/remove.png";

   // // add elements
   let checkInput = document.getElementsByClassName("check-text");
   let iconsList = document.getElementsByClassName("icons");

   iconsList[index].appendChild(icon1);
   iconsList[index].appendChild(icon2);

   checkInput[index].appendChild(newCheck);
   checkInput[index].appendChild(newItem)
 }


 document.addEventListener('DOMContentLoaded', function(){
    let test = JSON.parse(localStorage.getItem("todo"));
    //Load content from local storage if it is not empty 
   if (test !== null) {
       for (let i = 0; i < test.length; i++) {
           create_items(i, test[i])
       }

// add items to exisiting list
document.getElementById("add-item").addEventListener('click', function(){
    
    create_items(test.length,inputted.value)
    store_item()
    test.length++

} ) 
   }

   //if local storage is empty, add new items on click
   else{
    document.getElementById("add-item").onclick = add_item;
   }
 
})

 function add_item() {
    //add items to local storage each time button is clicked
    create_items(count,inputted.value)
    count++
    store_item()
 }

//  let li =  document.createElement('li')
//   li.innerText = '4'
// document.getElementById('todo-list').insertBefore(li, document.getElementById('todo-list').lastElementChild.nextElementSibling)


//  function add_item() {
//    //create new div for list items
//    let newEntry = document.createElement("div");
//    newEntry.className = "new-entry flex justify-spacebtw";
//    //append to TODO list
//    todoList.appendChild(newEntry);

//    // create new check text div and append to TODO list
//    let checkText = document.createElement("div");
//    checkText.className = "check-text flex justify-center align-center gap";
//    document.getElementsByClassName("new-entry")
//      [count].appendChild(checkText);

//    //create icons div and append to TODO list
//    let icons = document.createElement("div");
//    icons.className = "icons flex justify-center align-center gap";
//    document.getElementsByClassName("new-entry")[count].appendChild(icons);

//    //create new p element for each input entry
//    let newItem = document.createElement("p");
//    newItem.innerText = inputted.value;

//    //create check boxes
//    let newCheck = document.createElement("input");
//    newCheck.type = "checkbox";
//    newCheck.className = "list-checkbox";
//    newCheck.style.width = "25px";
//    newCheck.style.height = "25px";

//    // create images
//    let icon1 = document.createElement("img");
//    let icon2 = document.createElement("img");
//    icon1.src = "images/edit.png";
//    icon2.src = "images/remove.png";

//    // // add elements
//    let checkInput = document.getElementsByClassName("check-text");
//    let iconsList = document.getElementsByClassName("icons");

//    iconsList[count].appendChild(icon1);
//    iconsList[count].appendChild(icon2);

//    checkInput[count].appendChild(newCheck);
//    checkInput[count].appendChild(newItem);
//    count++;

//    // add event for checkboxes
//    let checkBoxes = document.getElementsByClassName("list-checkbox");

//    for (var i of checkBoxes) {
//      i.addEventListener("click", function () {
//        if (i.checked) {
//          i.nextElementSibling.style.textDecoration = "line-through";
//          i.nextElementSibling.style.color = "gray";
//        } else {
//          i.nextElementSibling.style.textDecoration = "none";
//          i.nextElementSibling.style.color = "rgb(21, 20, 20)";
//        }
//      });
//    }
//    store_item();
//    console.log(count);
//  }

//  document.getElementById("add-item").onclick = add_item;

//  function store_item() {
//    let todo_List = [];
//    if (localStorage.getItem("todo") === null) {
//      todo_List.push(inputted.value);
//      localStorage.setItem("todo", JSON.stringify(todo_List));
//    } else {
//      let currentList = JSON.parse(localStorage.getItem("todo"));
//      currentList.push(inputted.value);
//      localStorage.setItem("todo", JSON.stringify(currentList));
//    }
//  }

//  let test = JSON.parse(localStorage.getItem("todo"));
//  let amt = 0;
//  if (test !== null) {
//    for (var i of test) {
//      //create new div for list items
//      let newEntry = document.createElement("div");
//      newEntry.className = "new-entry flex justify-spacebtw";
//      //append to TODO list
//      todoList.appendChild(newEntry);
//      // create new check text div and append to TODO list
//      let checkText = document.createElement("div");
//      checkText.className =
//        "check-text flex justify-center align-center gap";
//      document
//        .getElementsByClassName("new-entry")
//        [amt].appendChild(checkText);
//      //create icons div and append to TODO list
//      let icons = document.createElement("div");
//      icons.className = "icons flex justify-center align-center gap";
//      document.getElementsByClassName("new-entry")[amt].appendChild(icons);
//      //create new p element for each input entry
//      let newItem = document.createElement("p");
//      // newItem.innerText = inputted.value
//      //create check boxes
//      let newCheck = document.createElement("input");
//      newCheck.type = "checkbox";
//      newCheck.className = "list-checkbox";
//      newCheck.style.width = "25px";
//      newCheck.style.height = "25px";
//      // create images
//      let icon1 = document.createElement("img");
//      let icon2 = document.createElement("img");
//      icon1.src = "images/edit.png";
//      icon2.src = "images/remove.png";

//      let checkInput = document.getElementsByClassName("check-text");
//      let iconsList = document.getElementsByClassName("icons");
//      newItem.innerText = i;

//      iconsList[amt].appendChild(icon1);
//      iconsList[amt].appendChild(icon2);

//      checkInput[amt].appendChild(newCheck);
//      checkInput[amt].appendChild(newItem);
//      console.log(amt);
//      amt++;
//    }
//  }