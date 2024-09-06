// Second Form Validation on Submit
function validateForm2() {
    let isValid = true;

    // Validate Name
    const name2 = document.getElementById('name2').value;
    if (name2 === "") {
        document.getElementById('nameError2').textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError2').textContent = "";
    }

    // Validate Hobbies (Checkboxes)
    const hobbies2 = document.querySelectorAll('input[name="hobbies2[]"]:checked');
    if (hobbies2.length === 0) {
        document.getElementById('hobbiesError2').textContent = "Please select at least one hobby.";
        isValid = false;
    } else {
        document.getElementById('hobbiesError2').textContent = "";
    }

    // Validate Gender (Radio Buttons)
    const gender2 = document.querySelector('input[name="gender2"]:checked');
    if (!gender2) {
        document.getElementById('genderError2').textContent = "Gender is required.";
        isValid = false;
    } else {
        document.getElementById('genderError2').textContent = "";
    }

    // Validate Country (Select Box)
    const country2 = document.getElementById('country2').value;
    if (country2 === "") {
        document.getElementById('countryError2').textContent = "Please select your country.";
        isValid = false;
    } else {
        document.getElementById('countryError2').textContent = "";
    }

    // Validate Message (Textarea)
    const message2 = document.getElementById('message2').value;
    if (message2 === "") {
        document.getElementById('messageError2').textContent = "Message is required.";
        isValid = false;
    } else {
        document.getElementById('messageError2').textContent = "";
    }

    // Return true if valid, false otherwise
    return isValid;
}
