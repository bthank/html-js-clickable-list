// use listItems to hold all of the list elements
var favCar = document.getElementById("fav-car");
var addNewItemBtn = document.getElementById("add-new-item-btn");
var itemList = document.querySelector("#item-list");
var listItems = document.getElementById("item-list").getElementsByTagName("li");
var cnt = 0;

/*
for (i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click",activateItem);
}
*/
itemList.addEventListener("click",activateItem)

function activateItem(e){
    if (e.target.nodeName == "LI") {
        favCar.innerHTML = e.target.innerHTML;

        for (i=0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
    
        e.target.classList.add("active");
    }
}

addNewItemBtn.addEventListener("click",createNewItem);

function createNewItem(){
    cnt++;
    itemList.innerHTML += "<li>New Car " + cnt + "</li>";
}