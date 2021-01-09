//dropdown menu
const colorSelect = document.getElementById("color");

//get color value and change color of all uncolored grid-item
colorSelect.addEventListener("change", () => {
    const color = colorSelect.value;
    document.querySelectorAll(".grid-item").forEach(item => {
        if (getComputedStyle(item).backgroundColor == "rgb(255, 255, 255)") {
            item.style.background = color;
        }
    });
});