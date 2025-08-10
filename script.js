const inputSection = document.querySelector(".input-section");
const inputTask = document.querySelector(".input-task");
const btnSaveTask = document.querySelector(".btn-save-task");
const btnAddTask = document.querySelector(".btn-add-task");
const listTasks = document.querySelector(".list-tasks");

btnSaveTask.addEventListener("click", () => {
    const task = inputTask.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
        listTasks.appendChild(li);
       inputSection.classList.toggle("hidden");
        btnAddTask.style.display = "inline";
        inputTask.value = "";
    }
});

btnAddTask.addEventListener("click", () => {
    inputSection.classList.toggle("hidden");
    
    btnAddTask.style.display = "none";
});

