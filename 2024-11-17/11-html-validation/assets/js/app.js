function validate(event) {

    event.preventDefault()
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const ageInput = document.getElementById('age')
    const emailErrorMessage = document.getElementById('emailError')
    const passwordErrorMessage = document.getElementById('passwordError')
    const ageErrorMessage = document.getElementById('ageError')

    const email = emailInput.value
    const password = passwordInput.value
    const age = ageInput.value

    if (!email) {
        emailErrorMessage.innerHTML = 'You must enter an email'
    }
    if (password.length < 8) {
        passwordErrorMessage.innerHTML = `Password must be over 8 digits`
    }
    if (age > 13) {
        ageErrorMessage.innerHTML = `kids are not allowed`
    }
}   