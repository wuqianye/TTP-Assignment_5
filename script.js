//dropdown menu
const colorSelect = document.getElementById("color");

//get color value and change color of all grid-item
colorSelect.addEventListener("change", () => {
    const color = colorSelect.value;
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.background = color;
    });
});