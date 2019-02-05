"use strict";
class ToDo{
    constractor(){
    }

    save(){

    }

    remove(){

    }

    load(){

    }

    render(){
        let target = document.getElementById("todoList");
        let html = '<p>Special Exhibition To-Do List</p><br/>';
        html += '<input type="text" value="" placeholder="Tyoe here to add task">';
        html += '<input type="button" value="Add item">';
        target.innerHTML = html;
    }
}
