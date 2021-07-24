// use listItems to hold all of the list elements
var favCar = document.getElementById("fav-car");
var addNewItemBtn = document.getElementById("add-new-item-btn");
var itemList = document.getElementById("item-list");
var listItems = document.getElementById("item-list").getElementsByTagName("li");
var cnt = 0;

for (i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click",activateItem);
}

function activateItem(){
    favCar.innerHTML = this.innerHTML;
}

addNewItemBtn.addEventListener("click",createNewItem);

function createNewItem(){
    cnt++;
    itemList.innerHTML += "<li>New Car " + cnt + "</li>";
}