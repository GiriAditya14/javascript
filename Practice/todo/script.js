document.addEventListener("DOMContentLoaded", function(){
  const addTaskButton = document.getElementById("add-task-btn");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTasks(task));

  addTaskButton.addEventListener("click", function(){
    const taskText = todoInput.value.trim();
    if(taskText == "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInput.value = "";
    console.log(tasks);
  });

  function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks(task){
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if(task.isCompleted) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    todoList.appendChild(li);

    li.addEventListener("click", function(event){
      if(event.target.tagName == "button") return;
      task.isCompleted = !task.isCompleted;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", function(event){
      event.stopPropagation();
      tasks = tasks.filter(t => t.id != task.id);
      li.remove();
      saveTasks();

    })
  }
})