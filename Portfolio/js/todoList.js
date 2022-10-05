var IDNumber = 1;
const list = document.getElementById("list");
var textbox = document.querySelector("#textbox");

function addListItem(){
    
    var todoItem = document.createElement('li');
    todoItem.setAttribute("id", IDNumber)
    todoItem.textContent = textbox.value;
    IDNumber++;

    var div = document.createElement('div');
    var checkButton = document.createElement('button');
    checkButton.setAttribute("onclick", "finished(event)")
    checkButton.classList.add("btn","btn-secondary",  "fa" ,"fa-check")

    var deleteButton = document.createElement('button');
    deleteButton.textContent= "X";
    deleteButton.setAttribute("onclick", "removeThis(event)")
    deleteButton.classList.add("btn","btn-danger")

    div.append(checkButton)
    div.append(deleteButton)

    todoItem.appendChild(div)
    list.appendChild(todoItem);
    textbox.value = ""
}

function finished(e){
    var thisElement = e.target;
    if (thisElement.classList.contains("btn-success")) {
        thisElement.classList.remove("btn-success")
        thisElement.classList.add("btn-secondary")
    }else{
        thisElement.classList.add("btn-success")
        thisElement.classList.remove("btn-secondary")
    }
    
    var parent = e.target.parentElement.parentElement;
    if (parent.classList.contains("finished")) {
        parent.classList.remove("finished")
    }else{
        parent.classList.add("finished")
    }
}

function removeThis(e){
    var parent = e.target.parentElement.parentElement;
    parent.remove();
}