document.addEventListener("DOMContentLoaded", function() {
  let hello = document.getElementById("h");
  let toggleButton = document.getElementById("myButton");

  toggleButton.addEventListener("click", function() {
    if (hello.style.display == "none") {
      hello.style.display = "block";
      toggleButton.textContent = "Hide";
    } else {
      hello.style.display = "none";
      toggleButton.textContent = "Show";
    }
  });
});