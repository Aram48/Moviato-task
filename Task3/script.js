let div = document.getElementById("my");
let display = 0;

function foo() {
    if (display == 1) {
        div.style.display = "block";
        display = 0;
    } else {
        div.style.display = "none";
        display = 1;
    }
}