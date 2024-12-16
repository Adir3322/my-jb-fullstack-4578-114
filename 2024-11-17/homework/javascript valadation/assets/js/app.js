function validation(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById(`email`)
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    emailError = document.getElementById(`emailError`)


    firstName = firstNameInput.value
    lastName = lastNameInput.value
    email = emailInput.value

    if (!firstName) {
        alert(`Missing first name!`)
        firstNameInput.style.backgroundColor = `pink`
        firstNameError.innerHTML = 'Add first name'
    }

    if (!lastName) {
        alert(`Missing last name!`)
        lastNameInput.style.backgroundColor = `pink`
        lastNameError.innerHTML = 'Add last name'
    }

    if (!email) {
        alert(`Missing email!`)
        emailInput.style.backgroundColor = `pink`
        emailError.innerHTML = 'Add email'
    }

    if (firstName && lastName && email) {
        alert(`${firstName} ${lastName} \n ${email}`)
        firstNameError.innerHTML = ``
        lastNameError.innerHTML = ``
        emailError.innerHTML = ``
    }
}

function Error(input) {
    alert(`Missing ${input}`)
        emailInput.style.backgroundColor = `pink`
        emailError.innerHTML = 'Add email'
    
}