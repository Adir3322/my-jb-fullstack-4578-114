
function getInputFromUser() {
    let input = +prompt(`Please enter a number: `)
    return Number(input);
}
function userStillWantsToContinue(input) {
    return input !== 0 && !isNaN(input)
}
function inputsDivides7(input) {
    return input % 7 === 0
}
function inputContains7(input) {
    return input.toString().includes(`7`)
}
function boom() {
    document.write(`Boom `);
}
function notBoom(input) {
    document.write(`${input} `);
}

function change() {
    const colorInput = document.getElementById(`colorInput`)
    const textInput = document.getElementById(`textInput`)

    const newColor = colorInput.value
    const newText = textInput.value

    const myParagraph = document.getElementById(`myParagraph`)
    myParagraph.style.backgroundColor = newColor
    myParagraph.innerText = newText
}


// let input = getInputFromUser();
// while (userStillWantsToContinue(input)) {
//     for (let i = 1; i < input; i++) {
//         if (inputsDivides7(i) || inputContains7(i)) {
//             boom()
//         }
//         else {
//             notBoom(i)
//         }
//     }
//     input = getInputFromUser()
// }

