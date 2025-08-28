console.log("JavaScript working!");
let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#DynamicList");

addButton.addEventListener("click", function() {
    if(input.value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        taskList.appendChild(listItem);
        input.value = "";
    

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Borrar";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.cursor = "pointer";
            
        deleteBtn.addEventListener("click", function() {
            listItem.remove();
        });

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            input.value = "";
        
    }
});

input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addButton.click();
    }
});
