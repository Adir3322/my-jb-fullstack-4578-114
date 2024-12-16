let num1 = prompt(`Please enter your num1`);
let num2 = prompt(`Please enter your num2`);
//we meed to convert each var value to the numeric value
//num1 = parseInt(num1)
//num2 = parseInt(num2)

//if we need to suport decima; numbers, we need to use Float instead of integers
//num1 = parseFloat(num1)
//num2 = parseFloat(num2) // Float -> מספר עשרוני

//or we can use the + sign before a string
num1 = +num1 //+ is a conversion operator if placed before a string operand
num2 = +num2

if (num1 > num2) {
    document.write(`the  biggest is ${num1}`);
}
else {
    document.write(`the  biggest is ${num2}`);
}
