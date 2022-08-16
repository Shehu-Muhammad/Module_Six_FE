//a function to add a task to the list
function addTaskToList(task, priority) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(`${task} --- Priority: ${priority}`);
    const imageNode = document.createElement("img");
    imageNode.setAttribute("src", "assets/delete.png");
    imageNode.setAttribute("alt", "Trash can");
    imageNode.setAttribute("width", "20px");
    imageNode.setAttribute("onclick", "deleteTask()");
    imageNode.classList.add("trashcan");
    const trashcanLink = document.createElement("a");
    trashcanLink.setAttribute("href", "#");
    trashcanLink.appendChild(imageNode);
    node.appendChild(textnode);
    node.appendChild(trashcanLink);
    document.getElementById("toDoList").appendChild(node);
}

var taskArray = [];
var priorityArray = [];

document.getElementById("toDoForm").addEventListener("submit", (e)=> {
    e.preventDefault();

    let task = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    if(task.trim() != "" || priority.trim() != "") {
        taskArray.push(task);
        priorityArray.push(priority);
        let tasksList = document.querySelector("#toDoList").children;
        if(tasksList.length > 0) {
            if(tasksList[0].textContent == 'Enter a task --- Priority: ') {
                tasksList[0].remove();
            }
        }
    } else {
        alert("Enter a task with a priority");
    }

    for(let index = 0; index < taskArray.length; index++) {
        addTaskToList(taskArray[index], priority[index]);
    }

    taskArray = [];
    priorityArray = [];

    resetForm();

});

//a function to reset form back to a template 
function taskTemplate() {
    let task = "Enter a task";
    let priority = ""
    addTaskToList(task, priority);
}

let tasksList = document.querySelector("#toDoList").children.length;
if(tasksList == 0) {
    taskTemplate();
} 

// a function to reset task form
function resetForm () {
    document.querySelector("#task").value = "";
    document.querySelector("#priority").value = "";
}

// a function to delete a task
function deleteTask () {
    let tasksList = document.querySelector("#toDoList");

    tasksList.addEventListener("click", (e)=> {
        e.target.parentElement.parentElement.remove();
    });

    tasksList = document.querySelector("#toDoList").children;
    if(tasksList.length == 1) {
        taskTemplate();
    } 
}

// a function to clear all tasks
function clearAllTasks() {
    let tasksList = document.querySelector("#toDoList");

    if(tasksList.children.length > 0) {
        if(tasksList.children[0].textContent == 'Enter a task --- Priority: ') {
            tasksList.children[0].remove();
        } else {
            for(let index = 0; index < tasksList.children.length; index++) {
                tasksList.children[index].remove();
            }
        }   
    }
    tasksList = document.querySelector("#toDoList").children;
    if(tasksList.length == 1) {
        tasksList[0].remove();
        taskTemplate();
    } 
}

