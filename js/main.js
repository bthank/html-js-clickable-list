// use listItems to hold all of the list elements
var listItems = document.getElementById("item-list").getElementsByTagName("li");

for (i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click",activateItem);
}

function activateItem(){
    alert("Click detected");
}