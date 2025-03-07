document.addEventListener("DOMContentLoaded", function(){         // when DOM gets loaded, then I would like to do my tasks
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];    // [localStorage.getItem("tasks")] this is a string, so parse it from string to the original data structure
  // If we dont find anything inside it(there is nothing to parse), then in the very first lot it will be acting as an empty array

  // If there is something to display 
  tasks.forEach((task) => renderTask(task));          // foreach loop runs for every single element
 

  // Adding a new task in an Array:
  addTaskButton.addEventListener("click", function(){
    const taskText = todoInput.value.trim();          // trim(): removes extra spaces added at the end
    if(taskText == "") return;                        // if somebody hits 'Add Task' button without writing anything then return
    
    const newTask = {   // object
      id: Date.now(),   // property1  // Date.now() gives a unique string based on the date
      text: taskText,
      isCompleted: false  
    };
    tasks.push(newTask);
    saveTasks();            // After pushing the task and before clearing the input, store the task into local storage
    renderTask(newTask);    // to add/render the task immediately on the DOM
    todoInput.value = "";   // clearing the input
    console.log(tasks);
  })

  // Adding tasks into local storage:
  // Local storage API gets invoked using 'localStorage' keyword
  // To add things to local storage use (.setItem(key: string, value: string))
  // To convert array into string use JSON 
  // JSON has 2 methods:
  // 1. parse() : parses it back from string to whatever the original data type was
  // 2. stringify() : converts into string

  function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  // It is not updating the tasks here. 
  // It actually updates the whole local storage once at a time
  // Whole array is going up there, and the next time we say to write it into local storage, it actually rewrites the whole thing

  // To read from local storage and render the task to the DOM:
  // Render: Display the things on the DOM 
  function renderTask(task){
    // console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
      
    if(task.isCompleted) li.classList.add('completed');   // adding class 'completed', if task is completed
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    todoList.appendChild(li);

    // click listener who is avoiding the 'delete' button
    li.addEventListener("click", function(event){
      if(event.target.tagName == "button") return;  // if user is clicking on the delete button, then do nothing and return
      task.isCompleted = !task.isCompleted;         // if user is clicking anywhere on the whole list item, then change the status of the task
      li.classList.toggle("completed");             // after status change, toggle to Add a class 'completed' or Remove a class 'completed' 
      saveTasks();                                  // as some properties are being modified, so again save them into local storage
    })

    // another click listener specifically just for 'delete' button
    // not going to listen on the whole 'li', but only on the tag specifically named 'button'
    li.querySelector("button").addEventListener("click", function(event){
      event.stopPropagation();                       // to stop the default behaviour of 'Event bubbling up(Event propagation)'   // similar to 'preventDefault' in the forms
      tasks = tasks.filter(t => t.id !== task.id);   // All 'li's should come back, except the 'li' whose id matches with the 'tasks' array  // Only true element comes back
      li.remove();
      saveTasks();
    })
  }
})

/*
// Array.filter() method: Only true element comes back
const words = ['aditya', 'giri', 'mudliar'];
const result = words.filter((word) => word.length>4);
console.log(result);
// Expected output: Array ['aditya', 'mudliar']
*/
