//dropdown menu
const colorSelect = document.getElementById("color");

//get color value
let color;
colorSelect.addEventListener("change", () => {
    color = colorSelect.value;
});

//grid-container
const gridContainer = document.querySelector(".grid-container");

//grid-item
const gridItem = document.querySelectorAll(".grid-item");

//change color
let changeColor = (e) => {
    e.target.style.background = color;
}

//add event listener
gridContainer.addEventListener("mousedown", (e) => {
    e.target.style.background = color;
    //add mouseover event on grid-item
    gridItem.forEach(item => {
        item.addEventListener("mouseover", changeColor);
    });
});

//remove event listener
document.addEventListener("mouseup", () => {
    //remove mouseover event on grid-item
    gridItem.forEach(item => {
        item.removeEventListener("mouseover", changeColor);
    });
});