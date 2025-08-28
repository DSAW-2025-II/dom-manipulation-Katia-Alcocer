console.log("JavaScript working!");
let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#DynamicList");

function addTask() {
    if (input.value.trim() !== "") {
        let listItem = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let taskText = document.createElement("span");
        taskText.textContent = input.value;
    
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Borrar";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function() {
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
