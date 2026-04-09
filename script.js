let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

let selected = null;

document.addEventListener("dragstart", function(e) {
    if (e.target.classList.contains("list")) {
        selected = e.target;
    }
});

document.addEventListener("dragend", function() {
    selected = null;
});

[rightBox, leftBox].forEach(box => {
    box.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function(e) {
        if (selected) {
            box.appendChild(selected);
        }
    });
});