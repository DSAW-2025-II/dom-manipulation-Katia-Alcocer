console.log("JavaScript working!");
let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#DynamicList");
let taskSet = new Set();

function addTask() {
    let newTask = input.value.trim();
    if (newTask !== "") {
        if (taskSet.has(newTask.toLowerCase())) {
            alert("Esa tarea ya existe ");
            input.value = "";
            return;
        }
        taskSet.add(newTask.toLowerCase());

        let listItem = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let taskText = document.createElement("span");
        taskText.textContent = newTask;
    
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.classList.add("delete-btn");
        deleteBtn.setAttribute("title", "Borrar");

        deleteBtn.addEventListener("click", function() {
            taskSet.delete(newTask.toLowerCase());
            listItem.remove();
        });  

        checkbox.addEventListener("change", function() {
            listItem.classList.toggle("done", checkbox.checked);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        input.value = "";
    }
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
