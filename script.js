let div = [];

//add row: add new grid-item
for (let i = 0; i < 9; i++) {
    div[i] = document.createElement("div");
    div[i].className = "grid-item";
    document.querySelector(".grid-container").append(div[i]);
}