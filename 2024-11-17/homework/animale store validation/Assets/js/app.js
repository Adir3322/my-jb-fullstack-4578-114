function validation(event) {
    event.preventDefault(); // Prevent default submission initially

    const userNameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const textInput = document.getElementById('text');

    let isValid = true; // Flag to check validation status

    const username = userNameInput.value.trim();
    const password = passwordInput.value.trim();
    const text = textInput.value.trim();

    // Username validation
    if (!username) {
        alert('Missing username!');
        userNameInput.style.backgroundColor = 'pink';
        isValid = false;
    } else {s
        userNameInput.style.backgroundColor = ''; // Reset background if valid
    }

    // Password validation
    if (!password) {
        alert('Missing password!');
        passwordInput.style.backgroundColor = 'pink';
        isValid = false;
    } else {
        passwordInput.style.backgroundColor = ''; // Reset background if valid
    }

    // Textarea validation
    if (!text) {
        alert('Missing text!');
        textInput.style.backgroundColor = 'pink';
        isValid = false;
    } else {
        textInput.style.backgroundColor = ''; // Reset background if valid
    }

    //Submit the form if all inputs are valid
    if (isValid) {
        alert(`Hit`)
        document.getElementById(`ContactUsForm`).submit() // Programmatically submit the form
    }
}
