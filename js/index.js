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

function taskTemplate() {
    let task = "Enter a task";
    let priority = ""
    addTaskToList(task, priority);
}

let tasksList = document.querySelector("#toDoList").children.length;
if(tasksList == 0) {
    taskTemplate();
} else {
    //do nothing;
}


function resetForm () {
    document.querySelector("#task").value = "";
    document.querySelector("#priority").value = "";
}

function deleteTask () {
    let tasksList = document.querySelector("#toDoList");

    tasksList.addEventListener("click", (e)=> {
        e.target.parentElement.parentElement.remove();
    })
}

