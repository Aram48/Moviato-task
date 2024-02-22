function validateEmail(inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
      alert("Valid address!");
      return true;
    } else {
      alert("Invalid address!");
      return false;
    }
  }