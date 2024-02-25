document.getElementById('myForm').addEventListener('input', function() {
    let formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', (event) => {
    let savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('username').value = formData.username;
        document.getElementById('email').value = formData.email;
    }
});

document.getElementById('myForm').addEventListener('input', function() {
    let formData = new FormData(document.getElementById('myForm'));
    fetch('/saveFormData', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Data saved', data))
    .catch(error => console.log('Error saving data', error));
});
