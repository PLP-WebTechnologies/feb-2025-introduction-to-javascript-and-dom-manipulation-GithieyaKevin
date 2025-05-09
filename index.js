let changeText = function(){
    let dynamicText = document.querySelector(".dynamicText");
    dynamicText.textContent = "TEXT HAS BEEN CHANGED!";
};

let toggleStyle = function(){
    let styling = document.querySelector(".dynamicText");
    styling.classList.toggle("highlight");
    styling.textContent = "TEXT HAS BEEN TOGGLED!";
};

let addElement = function(){
    let addContainer = document.querySelector("#addContainer");
    let newElement = document.createElement("h3");
    newElement.textContent = "NEW ELEMENT ADDED TO THE PAGE!";
    addContainer.appendChild(newElement);
};

let removeElement = function(){
    let addContainer = document.querySelector("#addContainer");
    addContainer.remove();
};
