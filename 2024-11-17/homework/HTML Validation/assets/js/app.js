function validation(event) {
    event.preventDefault()
    const firstNameInput = document.getElementById(`Fname`)
    const lastNameInput = document.getElementById(`Lname`)
    const emailInput = document.getElementById(`email`)
    const phoneInput = document.getElementById(`phone`)
    const textInput = document.getElementById(`text`)

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const phone = phoneInput.value
    const text = textInput.value


    alert(`${firstName} ${lastName} \n ${email} \n ${phone} \n ${text} \n`)
}