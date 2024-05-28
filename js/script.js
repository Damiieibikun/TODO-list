// // // js
// // let inputted = document.getElementById("input-txt");
// // let todoList = document.getElementById("todo-list");
// // //  //initalize count each time item is added
// // let count = 0;

// // // set inputed text to sentence case
// // function properCase() {
// //   if (inputted.value !== "") {
// //     let properText = inputted.value[0].toUpperCase() + inputted.value.slice(1);
// //     inputted.value = properText;
// //   } else {
// //     console.log("Input field empty");
// //   }
// // }

// // function store_item() {
// //   let todo_List = [];
// //   if (localStorage.getItem("todo") === null) {
// //     todo_List.push(inputted.value);
// //     localStorage.setItem("todo", JSON.stringify(todo_List));
// //   } else {
// //     let currentList = JSON.parse(localStorage.getItem("todo"));
// //     currentList.push(inputted.value);
// //     localStorage.setItem("todo", JSON.stringify(currentList));
// //   }
// // }

// // function add_item() {
// //   //add items to local storage each time button is clicked
// //   create_items(count, inputted.value);
// //   count++;
// //   store_item();
// //   window.location.reload()
// // }

// // function create_items(index, value) {
// //   // create new div for list items
// //   let newEntry = document.createElement("div");
// //   newEntry.className = "new-entry flex justify-spacebtw";
// //   //append to TODO list
// //   todoList.appendChild(newEntry);

// //   // create new check text div and append to TODO list
// //   let checkText = document.createElement("div");
// //   checkText.className = "check-text flex justify-center align-center gap";
// //   document.getElementsByClassName("new-entry")[index].appendChild(checkText);

// //   //create icons div and append to TODO list
// //   let icons = document.createElement("div");
// //   icons.className = "icons flex justify-center align-center gap";
// //   document.getElementsByClassName("new-entry")[index].appendChild(icons);

// //   //create new p element for each input entry
// //   let newItem = document.createElement("p");
// //   newItem.innerText = value;
// //   //create check boxes
// //   let newCheck = document.createElement("input");
// //   newCheck.type = "checkbox";
// //   newCheck.className = "list-checkbox";
// //   newCheck.style.width = "25px";
// //   newCheck.style.height = "25px";
// //   // create images
// //   let icon1 = document.createElement("img");
// //   let icon2 = document.createElement("img");
// //   icon1.src = "images/edit.png";
// //   icon2.src = "images/remove.png";

// //   // // add elements
// //   let checkInput = document.getElementsByClassName("check-text");
// //   let iconsList = document.getElementsByClassName("icons");

// //   iconsList[index].appendChild(icon1);
// //   iconsList[index].appendChild(icon2);

// //   checkInput[index].appendChild(newCheck);
// //   checkInput[index].appendChild(newItem);
// // //   window.location.reload()
// // }

// // document.addEventListener("DOMContentLoaded", function () {
// //   let test = JSON.parse(localStorage.getItem("todo"));
// //   //Load content from local storage if it is not empty
// //   if (test !== null) {
// //     for (let i = 0; i < test.length; i++) {
// //       create_items(i, test[i]);
// //     }
// //     console.log(
// //       "existing" + document.getElementsByClassName("list-checkbox").length
// //     );
// //     // checked_boxes()

// //     // add items to exisiting list
// //     document.getElementById("add-item").addEventListener("click", function () {
// //       create_items(test.length, inputted.value);
// //       store_item();
// //       test.length++;

// //       window.location.reload();
// //       checked_boxes();

// //     });
// //   }
// //   //if local storage is empty, add new items on click
// //   else {
// //     document.getElementById("add-item").onclick = add_item;
// //     // check
// //     // window.location.reload();
// //     checked_boxes();
// //   }
// // });

// // function checked_boxes() {
// //   // add event for checkboxes
// //   let checkBoxes = document.getElementsByClassName("list-checkbox");
// //   console.log("length of class is: " + checkBoxes.length);

// //   for (var i of checkBoxes) {
// //     i.addEventListener("click", function () {
// //       if (this.checked) {
// //         this.nextElementSibling.style.textDecoration = "line-through";
// //         this.nextElementSibling.style.color = "gray";
// //       } else {
// //         this.nextElementSibling.style.textDecoration = "none";
// //         this.nextElementSibling.style.color = "rgb(21, 20, 20)";
// //       }
// //     });
// //   }
// // }
// ////////////////////////////////////////////////////

// // js
// let inputted = document.getElementById("input-txt");
// let todoList = document.getElementById("todo-list");
// //  initalize count each time item is added
// let count = 0;

// // set inputed text to sentence case
// function properCase() {
//   if (inputted.value !== "") {
//     let properText = inputted.value[0].toUpperCase() + inputted.value.slice(1);
//     inputted.value = properText;
//   } else {
//     console.log("Input field empty");
//   }
// }

// function create_items(index, value, checked) {
//   // create new div for list items
//   let newEntry = document.createElement("div");
//   newEntry.className = "new-entry flex justify-spacebtw";
//   //append to TODO list
//   todoList.appendChild(newEntry);

//   // create new check text div and append to TODO list
//   let checkText = document.createElement("div");
//   checkText.className = "check-text flex justify-center align-center gap";
//   document.getElementsByClassName("new-entry")[index].appendChild(checkText);

//   //create icons div and append to TODO list
//   let icons = document.createElement("div");
//   icons.className = "icons flex justify-center align-center gap";
//   document.getElementsByClassName("new-entry")[index].appendChild(icons);

//   //create new p element for each input entry
//   let newItem = document.createElement("p");
//   newItem.innerText = value;
//   //create check boxes
//   let newCheck = document.createElement("input");
//   newCheck.type = "checkbox";
//   newCheck.className = "list-checkbox";
//   newCheck.style.width = "25px";
//   newCheck.style.height = "25px";
//   newCheck.checked = checked;
//   // create images
//   let icon1 = document.createElement("img");
//   let icon2 = document.createElement("img");
//   icon1.src = "images/edit.png";
//   icon2.src = "images/remove.png";

//   // // add elements
//   let checkInput = document.getElementsByClassName("check-text");
//   let iconsList = document.getElementsByClassName("icons");

//   iconsList[index].appendChild(icon1);
//   iconsList[index].appendChild(icon2);

//   checkInput[index].appendChild(newCheck);
//   checkInput[index].appendChild(newItem);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let test = JSON.parse(localStorage.getItem("todo"));
//   if (test !== null) {
//     for (let i = 0; i < test.length; i++) {
//       create_items(i, test[i].text, test[i].checkbox);
//     }

//     // let checkBoxes = document.getElementsByClassName("list-checkbox");
//     // console.log(checkBoxes)
//     // for (var i of checkBoxes) {
//     //   i.addEventListener("click", function () {
//     //     if (this.checked) {
//     //       this.nextElementSibling.style.textDecoration = "line-through";
//     //       this.nextElementSibling.style.color = "gray";
//     //       store_item(true);
//     //     } else {
//     //       this.nextElementSibling.style.textDecoration = "none";
//     //       this.nextElementSibling.style.color = "rgb(21, 20, 20)";
//     //       store_item(false);
//     //     }
//     //   });
//     // }
//   } else {
//     //create something
//     console.log("local storage is empty");
//   }
// });

// document.getElementById("add-item").addEventListener("click", function () {
//   let parent = document.getElementById("todo-list");
//   let listLength = parent.children.length;
//   create_items(listLength, inputted.value, false);
//   if (listLength !== 0) {
//     let checkBoxes = document.getElementsByClassName("list-checkbox");
//     console.log(checkBoxes)
//     for (var i of checkBoxes) {
//       i.addEventListener("click", function () {
//         if (this.checked) {
//           this.nextElementSibling.style.textDecoration = "line-through";
//           this.nextElementSibling.style.color = "gray";
//           store_item(true);
//         } else {
//           this.nextElementSibling.style.textDecoration = "none";
//           this.nextElementSibling.style.color = "rgb(21, 20, 20)";
//           store_item(false);
//         }
//       });
//     }
//   } 
// //   else {
// //     create_items(count, inputted.value, false);
// //   }
  

// //   window.location.reload();
// });

// function store_item(status) {
//   let todo_List = [];
//   newListItem = {
//     text: inputted.value,
//     checkbox: status,
//   };
//   if (localStorage.getItem("todo") === null) {
//     todo_List.push(newListItem);
//     localStorage.setItem("todo", JSON.stringify(todo_List));
//   } else {
//     let currentList = JSON.parse(localStorage.getItem("todo"));
//     currentList.push(newListItem);
//     localStorage.setItem("todo", JSON.stringify(currentList));
//   }
// }




let inputted = document.getElementById("input-txt");
let todoList = document.getElementById("todo-list");

// Initialize count each time an item is added
let count = 0;

// Set input text to sentence case
function properCase() {
  if (inputted.value !== "") {
    let properText = inputted.value[0].toUpperCase() + inputted.value.slice(1);
    inputted.value = properText;
  } else {
    console.log("Input field empty");
  }
}

function create_items(index, value, checked) {
  // Create a new div for list items
  let newEntry = document.createElement("div");
  newEntry.className = "new-entry flex justify-spacebtw";
  todoList.appendChild(newEntry);

  // Create new check text div and append to the TODO list
  let checkText = document.createElement("div");
  checkText.className = "check-text flex justify-center align-center gap";
  newEntry.appendChild(checkText);

  // Create icons div and append to the TODO list
  let icons = document.createElement("div");
  icons.className = "icons flex justify-center align-center gap";
  newEntry.appendChild(icons);

  // Create new p element for each input entry
  let newItem = document.createElement("p");
  newItem.innerText = value;
  newItem.style.textDecoration = checked ? "line-through" : "none";
  newItem.style.color = checked ? "gray" : "rgb(21, 20, 20)";

  // Create checkboxes
  let newCheck = document.createElement("input");
  newCheck.type = "checkbox";
  newCheck.className = "list-checkbox";
  newCheck.style.width = "25px";
  newCheck.style.height = "25px";
  newCheck.checked = checked;

  // Create images
  let icon1 = document.createElement("img");
  let icon2 = document.createElement("img");
  icon1.src = "images/edit.png";
  icon2.src = "images/remove.png";

  // Add elements
  checkText.appendChild(newCheck);
  checkText.appendChild(newItem);
  icons.appendChild(icon1);
  icons.appendChild(icon2);

  // Add event listener for the checkbox
  newCheck.addEventListener("click", function () {
    if (this.checked) {
      newItem.style.textDecoration = "line-through";
      newItem.style.color = "gray";
    } else {
      newItem.style.textDecoration = "none";
      newItem.style.color = "rgb(21, 20, 20)";
    }
    updateLocalStorage();
  });
}

function updateLocalStorage() {
  let todo_List = [];
  let entries = document.querySelectorAll(".new-entry");
  entries.forEach(entry => {
    let text = entry.querySelector("p").innerText;
    let checked = entry.querySelector(".list-checkbox").checked;
    todo_List.push({ text: text, checkbox: checked });
  });
  localStorage.setItem("todo", JSON.stringify(todo_List));
}

document.addEventListener("DOMContentLoaded", function () {
  let storedTodos = JSON.parse(localStorage.getItem("todo"));
  if (storedTodos !== null) {
    storedTodos.forEach((todo, index) => {
      create_items(index, todo.text, todo.checkbox);
    });
  }
});

document.getElementById("add-item").addEventListener("click", function () {
  properCase();
  let value = inputted.value;
  if (value) {
    create_items(todoList.children.length, value, false);
    inputted.value = "";
    updateLocalStorage();
  }
});
