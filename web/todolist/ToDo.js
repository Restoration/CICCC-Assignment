"use strict";
class ToDo{

    constructor(){
        this.render();
        this.init();
    }

    saveList() {
        localStorage.storedList = document.getElementById("list").innerHTML;
    }

    loadList() {
        document.getElementById("list").innerHTML = localStorage.storedList;
    }


    addItem(){
        var newItem = document.createElement("div");
        newItem.innerHTML = document.getElementById("box").value;
        newItem.onclick = this.removeItem;
        document.getElementById("list").appendChild(newItem);
        localStorage.box = newItem;
        this.saveList();
    }

    save(){
        var savedDiv = document.getElementById("list");
        //savedDiv.innerHTML = localStorage.box;
        savedDiv.innerHTML = '<p>Save your data.</p>';
    }

    removeItem(item) {
        document.getElementById("list").removeChild(this);
        this.saveList();
    }

    load(){
        document.getElementById("list").innerHTML = localStorage.storedList;
        for(var i = 0; i < list.children.length; i++) {
            list.children[i].onclick = this.removeItem;
        }
    }

    render(){
        let target = document.getElementById("todoList");
        let html = '<p>Special Exhibition To-Do List</p><br/>';
        html += '<input type="text" id="box" value="" placeholder="Tyoe here to add task">';
        html += '<input type="button" value="Add item" id="addBtn">';
        html += '<br /><input type="button" value="Save" id="saveBtn">';
        html += '<br /><input type="button" value="Load" id="loadBtn">';
        html += '<br /><div id="list">Buy Ernest a new collar</div>';
        target.innerHTML = html;
        document.getElementById('addBtn').addEventListener('click', () => this.addItem());
        document.getElementById('saveBtn').addEventListener('click', () => this.save());
        document.getElementById('loadBtn').addEventListener('click', () => this.load());
    }

    init(){
        if(localStorage.storedList) {
            this.loadList();
        }
    }
}
