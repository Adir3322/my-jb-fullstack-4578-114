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


// const grade = [];

// for (i = 1; i <= 13; i++) {
//     randomNumber = parseInt(Math.random() * ((100 + 1) - 0));
//     grade.push(randomNumber);

// }
// document.write(`First grade is: ${grade[0]} <br>`);
// document.write(`Fifth grade is: ${grade[4]} <br>`);

// // for (i = 0; i <= grade.length - 1; i++) {
// //     document.write(`Grade ${i} is: ${grade[i]} <br>`);
// // }
// for (const item of grade) {
//     document.write(`Grade is: ${item} <br>`);
// }

// let num;
// let sum = 0;
// for (const item of grade) {
//     sum += item;
// }

// document.write(`the average grade is ${sum / grade.length} <br>`);


// //Exersize 1
// do {
//     let n = +prompt(`Please enter num`)
//     for (i = 1; i <= n; i++) {
//         document.write(`${i} `);
//     }
// } while (n <= 0);

//Exersize 2
// let n = 0;
// do {
//     n = +prompt(`Please enter num`)
//     for (i = 1; i <= n; i++) {
//         alert(`${i} `);
//     }
// } while (n > 0);

//Exersize 2
// let n = 0;
// do {
//     n = +prompt(`Please enter num`)
//     for (i = n; i >= 1; i--) {
//         alert(`${i} `);
//     }
// } while (n > 0)

//Exersize 3
// let n = 0;
// do {
//     n = +prompt(`Please enter num`)
//     for (i = 2; i <= n; i += 2) {
//         alert(`${i} `);
//     }
// } while (n > 0)

//Exersize 4
// let n = 0;
// do {
//     n = +prompt(`Please enter num`)
//     n = n % 2 != 0 ? n -= 1 : n;
//     for (i = n; i >= 2; i -= 2) {
//         alert(`${i} `);
//     }
// } while (n > 0)

//Exersize 5
// n = +prompt(`Please enter num`);
// for (i = 1; i <= n; i++) {
//     document.write(`<br>`);
//     for (j = 1; j <= n; j++) {
//         document.write(`*`);
//     }
// }

//Exersize 6
// width = +prompt(`Please enter width`);
// length = +prompt(`Please enter length`);
// for (i = 1; i <= length; i++) {
//     document.write(`<br>`);
//     for (j = 1; j <= width; j++) {
//         document.write(`*`);
//     }
// }
// //Exersize 7
// n = +prompt(`Please enter width`);
// n1 = n
// for (i = 0; i <= n; i++) {
//     document.write(`<br>`);
//    for (j = 1; j <= n1; j++) {
//         document.write(`*`);
//     }
//     n1 -= 1;
// }
//Exersize 8
// n = +prompt(`Please enter width`);
// n1 = 0
// for (i = 1; i <= n; i++) {
//     document.write(`<br>`);
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     n1 += 1;
// }

//Exersize 9
// n = +prompt(`Please enter width`);
// n1 = n
// for (i = 1; i <= n; i++) {
//     document.write(`<br>`);
//     for (j = n1; j >= 1; j--) {
//         document.write(`${j}`);
//     }
// }

//Exersize 10
// n = +prompt(`Please enter width`);
// n1 = 1
// for (i = 1; i <= n; i++) {

//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     document.write(`<br>`);
//     n1 += 1;
// }
// n1 -= 1;
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     document.write(`<br>`);
//     n1 -= 1;
// }

//Exersize 11
// n = +prompt(`Please enter width`);
// n1 = 0
// for (i = 1; i <= n; i++) {
//     n1 += 1;
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     document.write(`<br>`);

// }
// for (i = 1; i <= n; i++) {
//     n1 -= 1;
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     document.write(`<br>`);
// }

//Exersize 12
// n = +prompt(`Please enter width`);
// n1 = 1
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     n1 += 2;
//     document.write(`<br>`);
// }
// n1 -= 2;
// for (i = 1; i <= n; i++) {
//     n1 -= 2;
//     for (j = 1; j <= n1; j++) {
//         document.write(`${j}`);
//     }
//     document.write(`<br>`);
// }

//Exersize 13
// width = +prompt(`Please enter width`);
// length = +prompt(`Please enter length`);
// for (i = 1; i <= length; i++) {
//     if (i === 1 || i === length) {
//         for (j = 1; j <= width; j++) {
//             document.write(`*`);
//         }
//     }
//     else {
//         for (j = 1; j <= width; j++) {
//             if (j === 1 || j === width) {
//                 document.write(`*`);
//             }
//             else {
//                 document.write(`&nbsp&nbsp`);
//             }
//         }
//     }
//     document.write(`<br>`);
// }

//Exersize 14
// let sum = 0;
// let n = +prompt(`Please enter num`);
// while (n > 0) {

//     while (n > 0) {
//         sum += n % 10;
//         n = parseInt(n / 10);
//     }
//     alert(`the sum of the digits is ${sum}`)
//     sum = 0;
//     n = +prompt(`Please enter num`);
// }

//Exersize 15
// let sum = 0;
// let n = +prompt(`Please enter num`);
// while (n > 0) {
//     while (n > 0) {
//         sum += 1;
//         n = parseInt(n / 10);
//     }
//     alert(`the sum of the digits is ${sum}`)
//     sum = 0;
//     n = +prompt(`Please enter num`);
// }

//Exersize 13
// width = +prompt(`Please enter width`);
// height = +prompt(`Please enter height`);

// for (let row = 1; row <= height; row++) {
//     for (let col = 1; col <= width; col++) {
//         document.write(row !== 1 && row !== height && col !== 1 & col !== width ? `&nbsp;&nbsp;` : `*`);
//     }
//     document.write(`<br>`)
// }

//Exersize 16
// const n = +prompt(`Please enter num`);
// for (let row = 1; row <= n; row++) {

//     for (let spaces = 1; spaces <= n - row; spaces++) {
//         document.write(`&nbsp;&nbsp;`);
//     }

//     for (let colLeft = 1; colLeft <= row; colLeft++) {
//         document.write(colLeft);
//     }
//     for (let colRight = row - 1; colRight >= 1; colRight--) {
//         document.write(colRight);
//     }

//     document.write(`<br>`)
// }
//Ex 1
// const rectangle = {
//     width: 100,
//     height: 50,
//     color: "blue",
//     x: 10,
//     y: 20
// };

// for (let property in rectangle) {
//     document.write(`${property}: ${rectangle[property]} <br> `);
// }

//Ex 2
// const employee = {
//     firstName: `Adir`,
//     lastName: `Solomon`,
//     salary: `30000`,
//     phoneNumber: `0537332200`
// };

// for (let property in employee) {
//     document.write(`${property}: ${employee[property]} <br> `);
// };

//EX3
// const clothing = {
//     manufacturer: `Nike`,
//     size: `S`,
//     color: `Red`,
//     price: `40$`
// };

// document.write(`Manufacturer: ${clothing.manufacturer} <br>`);
// document.write(`Size: ${clothing.size} <br>`);
// document.write(`Color: ${clothing.color} <br>`);
// document.write(`Price: ${clothing.price} <br><br>`);


// clothing.manufacturer = prompt("Enter the manufacturer:");
// clothing.size = prompt("Enter the size:");
// clothing.color = prompt("Enter the color:");
// clothing.price = prompt("Enter the pricer:");

// for (let property in clothing) {
//     document.write(`${property}: ${clothing[property]} <br> `);
// };

// const creditCard = {
//     cardType: `Debit`,
//     cardNumber: `1234 567 8910`,
//     expiryDate: `27/8`,
//     securityCode: `123`
// };

// document.write(`Card Type: ${creditCard.cardType} <br>`)
// document.write(`Card Number: ${creditCard.cardNumber} <br>`)
// document.write(`Expiry Date: ${creditCard.expiryDate} <br>`)
// document.write(`Security Code: ${creditCard.securityCode} <br><br>`)

// for (let property in creditCard) {
//     document.write(`${property}: ${creditCard[property]} <br>`);
// }

// const customer = {
//     firstName: `Adir`,
//     lastName: `Solomon`,
//     email: `adir3322@gmail.com`,
//     phoneNumber: `0537332200`,
//     creditCard: {
//         cardType: `Debit`,
//         cardNumber: `1234 567 8910`,
//         expiryDate: `27/8`,
//         securityCode: `123`
//     }
// };

// document.write(`First Name: ${customer.firstName} <br>`)
// document.write(`Last Name: ${customer.lastName} <br>`)
// document.write(`Email: ${customer.email} <br>`)
// document.write(`Phone: ${customer.phoneNumber} <br>`)
// document.write(`Card Type: ${customer.creditCard.cardType} <br>`)
// document.write(`Card Number: ${customer.creditCard.cardNumber} <br>`)
// document.write(`Card Ex date: ${customer.creditCard.expiryDate} <br>`)
// document.write(`Card Sec code: ${customer.creditCard.securityCode} <br>`)

// for (let property in customer) {
//     if (property === creditCard) {
//         for (let subProperty in customer[property]) {
//             document.write(`${subProperty}: ${customer[property][subProperty]} <br>}`)
//         }
//     }
//     else {
//         document.write(`${property}: ${customer[property][subProperty]} <br>`);
//     }
// }

//Ex1
// const names = [];

// for (let i = 0; i < 5; i++) {
//     names.push(prompt(`Enter a name:`));
// }

// document.write(`First name: ${names[0]} <br> and last name is: ${names[names.length - 1]} <br>`)

// for (i = names.length - 1; i >= 0; i--) {
//     document.write(`Name in place ${i + 1} is ${names[i]} <br>`);
// }

// Ex2
// const songs = [];
// for (let i = 0; i <= 2; i++) {
//     songs.push(prompt(`Enter a song:`));
// }

// for (let i = 0; i <= songs.length - 1; i++) {
//     document.write(`song in place ${i + 1} is ${songs[i]} <br>`);
// }

// document.write(`${songs} <br>`);
// songs.splice(1, 1);

// for (i = 0; i <= songs.length - 1; i++) {
//     document.write(`song in place ${i + 1} is ${songs[i]} after delete <br>`);
// }

// document.write(`${songs} <br>`);

// // Ex3
// const grades = [];
// for (let i = 0; i <= 9; i++) {
//     grades.push(prompt(`Enter a Greade:`));
// }

// for (const property in grades) {
//     if (grades[property] >= 0 && grades[property] <= 100) {
//         document.write(`The grade ${grades[property]} and its legal <br>`)
//     }
//     else {
//         document.write(`The grade ${grades[property]} and its not legal <br>`)
//     }

// }

//Ex 4
// randomNumber = Math.random();
// randomNumberHighRange = randomNumber * (100 - 0);
// randomNumberParsed = parseInt(randomNumberHighRange);
// randomNumberFinal = randomNumberParsed + 0;
// const numbers = [];

// for (let i = 0; i <= 100; i++) {
//     let rnd = parseInt(Math.random() * (100 - 0) + 0);
//     numbers.push(rnd);
// }

// for (const property in numbers) {
//     document.write(`${numbers[property]} | `)
// }
// document.write(`<br> <br>`);

// for (i = numbers.length - 1; i >= 0; i--) {
//     document.write(`${numbers[i]} | `);
// }

// document.write(`<br> <br>`);

// let sum = 0;

// for (let i = 0; i <= numbers.length - 1; i++) {
//     sum += numbers[i];
// }
// avg = sum / 100;

// document.write(`The sum of all of the grades is ${sum} and the average is ${avg}`)
// document.write(`<br> <br>`);

// for (const property in numbers) {
//     if (numbers[property] % 2 !== 0) {
//         document.write(`Not Valid `)
//     } else {
//         document.write(`Valid - ${numbers[property]} `)
//     }
// }
// document.write(`<br> <br>`);

// let count = 0;
// for (const property in numbers) {
//     if (numbers[property] % 2 !== 0) {
//         count += 1;
//     }
// }
// document.write(`There are ${count} uneven numbers`)
// document.write(`<br> <br>`);

// let max = 0;
// for (const property in numbers) {
//     if (numbers[property] >= max) {
//         max = numbers[property];
//     }
// }
// document.write(`Biggest number is ${max}`);

// document.write(`<br> <br>`);

// let min = 101;
// for (const property in numbers) {
//     if (numbers[property] <= min) {
//         min = numbers[property];
//     }
// }

// document.write(`Smallest number is ${min}`);
// document.write(`<br> <br>`);

// for (const property in numbers) {
//     if (numbers[property] >= avg) {
//         document.write(`Numbers above avrage ${numbers[property]} `)
//     }
// }

// document.write(`<br> <br>`);
// let Acount = 0;

// for (const property in numbers) {
//     if (numbers[property] <= avg) {
//         Acount += 1;
//     }
// }
// document.write(`The amount of numbers below average is ${Acount}`);