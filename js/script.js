

let inputted = document.getElementById("input-txt");
let todoList = document.getElementById("todo-list");

// Initialize count each time an item is added
let count = 0;
let editedIndex = null;

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
  newEntry.dataset.index = index;
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
  icon1.className = "edit-icon";
  icon2.className = "remove-icon";

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

  // Add event listener for the edit icon of that entry
  icon1.addEventListener("click", function () {
    editItem(index);
  });

  // Add event listener for the remove icon of that entry
  icon2.addEventListener("click", function () {
    removeItem(index);
  });
}

// create and update local storage
function updateLocalStorage() {
  let todo_List = [];
let entries = document.getElementsByClassName('new-entry')
for (var i of entries){
    let text = i.getElementsByTagName("p")[0].innerText;
    let checked = i.getElementsByClassName("list-checkbox")[0].checked;
    todo_List.push({ text: text, checkbox: checked });
}
  localStorage.setItem("todo", JSON.stringify(todo_List));
}

function editItem(index_position_parsed) {
let entry = document.querySelector(`.new-entry[data-index='${index_position_parsed}']`);
let textElement = entry.getElementsByTagName("p")[0];
inputted.value = textElement.innerText
let newText = inputted.value;
  if (newText !== null) {
    textElement.innerText = newText;
    //get index of edited entry
    editedIndex = index_position_parsed
    console.log('edit index on edit: ' + editedIndex)

  }
}

function removeItem(index_position_parsed) {
  let entry = document.querySelector(`.new-entry[data-index='${index_position_parsed}']`);
  todoList.removeChild(entry);
  updateLocalStorage();
}

document.addEventListener("DOMContentLoaded", function () {
  let storedTodos = JSON.parse(localStorage.getItem("todo"));
  if (storedTodos !== null) {
    for (var i = 0; i< storedTodos.length; i++){
        create_items(i, storedTodos[i].text, storedTodos[i].checkbox)
    }
  }
});

document.getElementById("add-item").addEventListener("click", function () {

  
  let value = inputted.value;
  if (value !== '') {
    document.getElementById('error').style.display = 'none'
    if (editedIndex !==null){
      console.log('edit index on add before remove: ' + editedIndex)
      let editedEntry = document.getElementsByClassName('new-entry')[editedIndex]
      editedEntry.querySelectorAll('p')[0].innerText = value
       console.log('edit index on add after remove: ' + editedIndex)
   
      editedIndex = null

      
    }
    else{
      create_items(todoList.children.length, value, false);
    }


    
    
    inputted.value = "";
    updateLocalStorage();
  }
  else{
    document.getElementById('error').innerText = 'Enter an Item'
  }
});

document.getElementById('remove-items').addEventListener('click', function(){
    localStorage.removeItem("todo");
    //reload page once list is cleared
    window.location.reload()
})



// function reorderArrayByIndexes(originalArray, indexesArray) { 
//   return indexesArray.map( 
//       index => originalArray[index]); 
// } 
function reorderItems(originalArray, indexesArray){
  return indexesArray.map( 
          index => originalArray[index]);
}