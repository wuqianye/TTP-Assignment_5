//dropdown menu
const colorSelect = document.getElementById("color");

//get color value
let color;
colorSelect.addEventListener("change", () => {
    color = colorSelect.value;
});