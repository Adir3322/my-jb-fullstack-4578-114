// for (i = -100; i <= 100; i += 2) {
//     document.write(i + ` `);
// }

/////////////////

// let num1 = +prompt(`Enter num1`);
// let num2 = +prompt(`Enter num2`);

// if (num1 > num2) {
//     for (i = num2; i <= num1; i++) {
//         document.write(i + ` `);
//     }
// }
// else {
//     for (i = num1; i <= num2; i++) {
//         document.write(i + ` `);
//     }
// }

// let first = +prompt(`Enter num1`);
// let last = +prompt(`Enter num2`);
// let helper;

// if (last > first) {
//     helper = last;
//     last = first;
//     first = helper;
// }
// for (i = first; i < last; i++) {
//     document.write(i + ` `);
// }


// let n = +prompt(`Enter num1`);

// for (i = 1; i <= n; i++) {
//     document.write((i ** 2) + ` `);
// } 
// let sum = 0;
// for (i = 1; i <= 10; i++) {
//     document.write(`<br>`)
//     for (j = 1; j <= 10; j++) {
//         document.write(`*`);
//     }
// }

// let randomNumber = Math.random();
// while (randomNumber >= 0.01) {
//     randomNumber = Math.random();
// }
// document.write(randomNumber);

// let randomNumber = Math.random();
// let randomNumberHighRange = randomNumber * 50;
// let randomNumberParsed = parseInt(randomNumberHighRange);
// let randomNumberFinal = randomNumberParsed;


// document.write(`0-50: ${randomNumberFinal} <br>`);

// randomNumber = Math.random();
// randomNumberHighRange = randomNumber * (30 - 10);
// randomNumberParsed = parseInt(randomNumberHighRange);
// randomNumberFinal = randomNumberParsed + 10;

// document.write(`10-30: ${randomNumberFinal} <br>`);


// randomNumber = Math.random();
// randomNumberHighRange = randomNumber * (50 - 20);
// randomNumberParsed = parseInt(randomNumberHighRange);
// randomNumberFinal = randomNumberParsed + 20;

// document.write(`20-50: ${randomNumberFinal}<br>`);


// randomNumber = Math.random();
// randomNumberHighRange = randomNumber * (51 - 20);
// randomNumberParsed = parseInt(randomNumberHighRange);
// randomNumberFinal = randomNumberParsed + 20;

// document.write(`20-50(inclusive): ${randomNumberFinal}<br>`);

// let n1 = +prompt(`Enter num1:`);
// let n2 = +prompt(`Enter num2:`);

// randomNumber = Math.random();
// randomNumberHighRange = randomNumber * (n1 - n2);
// randomNumberParsed = parseInt(randomNumberHighRange);
// randomNumberFinal = randomNumberParsed + n2;

// for (i = 1; i <= 100; i++) {
//     randomNumber = Math.random();
//     randomNumberHighRange = randomNumber * (n1 - n2);
//     randomNumberParsed = parseInt(randomNumberHighRange);
//     randomNumberFinal = randomNumberParsed + n2;

//     document.write(`The ${i} random number between ${n1} and ${n2} is ${randomNumberFinal}<br>`)
// }

// const emp = {
//     firstName: `Adir`,
//     lastName: `Solomon`,
//     salary: 30000
// };

// for (const property in emp) {
//     document.write(`Employee ${property} is: ${emp[property]} <br>`)
// }
// delete emp.salary;

// for (const property in emp) {
//     document.write(`Employee ${property} is: ${emp[property]} <br>`)
// }
// emp.address = `hertzliya`;

// for (const property in emp) {
//     document.write(`Employee ${property} is: ${emp[property]} <br>`)
// }

// document.write(`Employee address: ${emp.addres} <br>`)


// const grades = [99, 66, 32, 32, 43, 43, 32];
// document.write(`${grades} <br> `);
// document.write(`${grades[1]} <br> `);

// grades.push(10);

// document.write(`${grades} <br> `);


// const grades = [99, 66, 32, 54, 43, 23, 32];

// for (i = 0; i <= 5; i++) {
//     document.write(`Grade is: ${grades[i]} <br>`);
// }

// for (const item of grades) {
//     document.write(`Grade is: ${item} <br>`)
//     item += 6;
// }

// document.write(grades);


const grade = [];

for (i = 1; i <= 13; i++) {
    randomNumber = parseInt(Math.random() * ((100 + 1) - 0));
    grade.push(randomNumber);

}
document.write(`First grade is: ${grade[0]} <br>`);
document.write(`Fifth grade is: ${grade[4]} <br>`);

// for (i = 0; i <= grade.length - 1; i++) {
//     document.write(`Grade ${i} is: ${grade[i]} <br>`);
// }
for (const item of grade) {
    document.write(`Grade is: ${item} <br>`);
}

let num;
let sum = 0;
for (const item of grade) {
    sum += item;
}

document.write(`the average grade is ${sum / grade.length} <br>`);