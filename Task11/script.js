document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("emailError").innerText = "";

    let nameInput = document.getElementById("name").value.trim();
    if (nameInput === "") {
        alert("Name cannot be empty");
        return;
    }

    let emailInput = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        return;
    }
    alert("Form submitted successfully!");
});