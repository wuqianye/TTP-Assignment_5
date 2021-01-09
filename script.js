//dropdown menu
const colorSelect = document.getElementById("color");

//get color value and change color of all grid-item
colorSelect.addEventListener("change", () => {
    const color = colorSelect.value;
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.background = color;
    });
});

//create a restore button
const restore = document.createElement("button");
restore.innerText = "Restore";
restore.style.marginLeft = "10px";
//restore grid-item to initial color when button is clicked
restore.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.background = "rgb(255, 255, 255)";
    });
})
//append the restore button
document.querySelector("body").append(restore);
document.querySelector("select").after(restore);