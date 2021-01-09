//dropdown menu
const colorSelect = document.getElementById("color");

//get color value
let color;
colorSelect.addEventListener("change", () => {
    color = colorSelect.value;
});

//grid-item
const gridItem = document.querySelectorAll(".grid-item");
gridItem.forEach(itme => {
    itme.addEventListener("click", (e) => {
        e.target.style.background = color;
    })
});