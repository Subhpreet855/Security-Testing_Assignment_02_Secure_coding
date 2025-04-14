// Adding event listener 
document.getElementById('cricketTeamForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Used for clear all previous error messages
    clearErrors();

    // Validate Full Name
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        showError('nameError', 'Full name is required.'); // Display error message
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        showError('emailError', 'Email is required.'); // Display error message
        isValid = false;
    }

    // Validate Player Role (radio buttons)
    const roleSelected = document.querySelector('input[name="role"]:checked');
    if (!roleSelected) {
        showError('roleError', 'Please select a preferred role.'); // Display error message
        isValid = false;
    }

    // Validate Skills (at least one checkbox)
    const skillsSelected = document.querySelectorAll('input[name="skills"]:checked');
    if (skillsSelected.length === 0) {
        showError('skillsError', 'Please select at least one skill.'); // Display error message
        isValid = false;
    }

    // Validate Batting Order (dropdown)
    const battingOrder = document.getElementById('battingOrder').value;
    if (battingOrder === "") {
        showError('battingOrderError', 'Please select a batting order.');  // Display error message
        isValid = false;
    }

    // Validate Player Code
    const playerCode = document.getElementById('playerCode').value;
    const playerCodeRegex = /^[A-Z]{3}-\d{3}$/;
    if (!playerCodeRegex.test(playerCode)) {
        showError('playerCodeError', 'Player code must be in the format ABC-123.');  // Display error message
        isValid = false;
    }

    // Validate Experience
    const experience = document.getElementById('experience').value.trim();
    if (experience === "") {
        showError('experienceError', 'Please provide details about your cricketing experience.');  // Display error message
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // It is used prevent form submission if there are validation errors
    }
});

// This function allows to display error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// This function helps to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(el) {
        el.textContent = '';
    });
}
