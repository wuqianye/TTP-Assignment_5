const gridItems = document.querySelectorAll(".grid-item");

//remove row: remove grid-item
for (let i = 0; i < 6; i++) {
    gridItems[i].remove();
}