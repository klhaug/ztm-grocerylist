var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ulList");


enterButton.addEventListener("click", function(){
    var liWrapper = document.createElement("div");
    liWrapper.classList.add("li-wrapper");
    var newLi = liWrapper.appendChild(document.createElement("li"));
    newLi.appendChild(document.createTextNode(input.value));
    var newButton = liWrapper.appendChild(document.createElement("button"));
    newButton.classList.add("del-btn");
    newButton.setAttribute("img","images/bin.png" );
    ul.appendChild(liWrapper);
})







// NOTES
// Godtar 2 parametere/argumenter ; addEventListener("event", "function")
// Man kan ikke bruke en metode på en array, man må accesse
// createElement
// appendChild