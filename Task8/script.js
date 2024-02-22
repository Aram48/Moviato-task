let count = 0;
let output = document.getElementById("out");

function countClick() {
    ++count;
    output.innerHTML = count;
}