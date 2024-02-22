function toggleText() {
    let x = document.getElementById("my");
    if (x.innerHTML == 'Hello') {
        x.innerHTML = "Goodbye";
    } else {
        x.innerHTML = 'Hello';
    }
}