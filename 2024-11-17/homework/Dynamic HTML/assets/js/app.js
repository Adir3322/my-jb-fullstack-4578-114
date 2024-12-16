// function validation(event) {
//     event.preventDefault()

//     const ingredientInput = document.getElementById(`ingredient`)
//     const amountInput = document.getElementById(`amount`)
//     const list = document.getElementById(`ingredientList`)


//     list.innerHTML += `<li> Ingredient: ${ingredientInput.value} amount: ${amountInput.value}</li>`
// }

// let sum = 0
// let counter = 0

// function validation(event) {
//     event.preventDefault()

//     const studentFirstNameInput = document.getElementById(`studentFname`)
//     const studentLastNameInput = document.getElementById(`studentLname`)
//     const gradeInput = document.getElementById(`grade`)
//     const gradeList = document.getElementById(`gradeList`)
//     const averageGrade = document.getElementById(`averageGrade`)

//     const firstName = studentFirstNameInput.value
//     const lastName = studentLastNameInput.value
//     const grade = parseInt(gradeInput.value)

//     sum += grade
//     counter += 1

//     gradeList.innerHTML += `Student ${firstName} ${lastName}'s grade is ${grade} <br>`
//     averageGrade.innerHTML = sum / counter
// }

function addColor(event) {
    event.preventDefault()

    const colorInput = document.getElementById(`color`)
    const colorTable = document.getElementById(`colorTable`)

    const color = colorInput.value
    colorTable.innerHTML += `
            <tr>
                <td>${color}</td>
                <td style="background-color:${color}; height: 50px;"></td>
            </tr>
        `
}
