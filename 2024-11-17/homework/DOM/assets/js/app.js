// function calc() {

//     const numberInput = document.getElementById('numberInput')
//     const number = numberInput.value

//     alert(number ** 3)

//     numberInput.style.backgroundColor = `lightblue`;
// }

// function sum() {
//     let sum = 0
//     const numberInput1 = document.getElementById(`numberInput1`)
//     const numberInput2 = document.getElementById(`numberInput2`)
//     const numberInput3 = document.getElementById(`numberInput3`)

//     const num1 = Number(numberInput1.value)
//     const num2 = Number(numberInput2.value)
//     const num3 = Number(numberInput3.value)
//     sum = num1 + num2 + num3

//     alert(`the three numbers are ${num1}, ${num2}, ${num3} and the sum is ${sum}`)
// }

// function average() {
//     let sum = 0
//     const numberInput1 = document.getElementById(`numberInput1`)
//     const numberInput2 = document.getElementById(`numberInput2`)
//     const numberInput3 = document.getElementById(`numberInput3`)

//     const num1 = Number(numberInput1.value)
//     const num2 = Number(numberInput2.value)
//     const num3 = Number(numberInput3.value)
//     sum = num1 + num2 + num3
//     let avg = sum / 3

//     alert(`Their average is ${avg}`)
// }

// function validate() {
//     const emailInput = document.getElementById(`email`)

//     const email = emailInput.value

//     if (!email) {
//         alert(`No email was entered`)
//     } else {
//         alert(email)
//     }
// }

// function validateName() {
//     const fNameInput = document.getElementById(`fName`)
//     const lNameInput = document.getElementById(`lName`)

//     const firstName = fNameInput.value
//     const lastName = lNameInput.value

//     if (!firstName || !lastName) {
//         alert(`Something is missing`)
//     } else {
//         alert(`${firstName} ${lastName}`)
//     }
// }

// function validateEmail() {
//     const emailInput = document.getElementById(`email`)
//     const span = document.getElementById(`span`)

//     const email = emailInput.value
//     if (!email) {
//         span.style.backgroundColor = `red`
//         span.innerHTML = `Error`
//     } else {
//         alert(`${email}`)
//     }
// }

// function redBlue(id) {
//     const button = document.getElementById(id)

//     button.style.backgroundColor = `red`
//     button.style.color = `blue`
// }

// function greenWhite(id) {
//     const button = document.getElementById(id)

//     button.style.backgroundColor = `green`
//     button.style.color = `white`
// }

// function changeColor(id) {
//     textInput = document.getElementById(id)
//     const colorArr = [`red`, `green`, `blue`, `yellow`, `white`, `purple`]
//     textInput.style.backgroundColor = colorArr[parseInt(Math.random() * colorArr.length)]
// }

