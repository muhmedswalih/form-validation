// First Form Validation and Submission
function validateAndSubmitForm1() {
    let isValid = true;

    // Validate Name
    const name1 = document.getElementById('name1').value;
    if (name1 === "") {
        document.getElementById('nameError1').textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError1').textContent = "";
    }

    // Validate Hobbies (Checkboxes)
    const hobbies1 = document.querySelectorAll('input[name="hobbies1[]"]:checked');
    if (hobbies1.length === 0) {
        document.getElementById('hobbiesError1').textContent = "Please select at least one hobby.";
        isValid = false;
    } else {
        document.getElementById('hobbiesError1').textContent = "";
    }

    // Validate Gender (Radio Buttons)
    const gender1 = document.querySelector('input[name="gender1"]:checked');
    if (!gender1) {
        document.getElementById('genderError1').textContent = "Gender is required.";
        isValid = false;
    } else {
        document.getElementById('genderError1').textContent = "";
    }

    // Validate Country (Select Box)
    const country1 = document.getElementById('country1').value;
    if (country1 === "") {
        document.getElementById('countryError1').textContent = "Please select your country.";
        isValid = false;
    } else {
        document.getElementById('countryError1').textContent = "";
    }

    // Validate Message (Textarea)
    const message1 = document.getElementById('message1').value;
    if (message1 === "") {
        document.getElementById('messageError1').textContent = "Message is required.";
        isValid = false;
    } else {
        document.getElementById('messageError1').textContent = "";
    }

    // Submit the form if valid and show success message
    if (isValid) {
        document.getElementById('successMessage1').style.display = 'block';
        document.getElementById('form1').reset(); // Reset form after submission
    }
}
