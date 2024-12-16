//EX1
// const car1 = { model: "Toyota Corolla", year: 2019, color: "White" };
// const car2 = { model: "Honda Civic", year: 2021, color: "Black" };
// const car3 = { model: "Mazda 3", year: 2020, color: "Red" };

// const cars = [car1, car2, car3];

// document.write("Displaying each car's properties separately: <br><br>");
// for (let i = 0; i < cars.length; i++) {
//     document.write(`Car ${i + 1}: <br>`)
//     document.write(`Model: ${cars[i].model} <br>`)
//     document.write(`Year: ${cars[i].year} <br>`)
//     document.write(`Color: ${cars[i].color} <br><br>`)
// }

// for (let i = 0; i < cars.length; i++) {
//     document.write(`Car ${i + 1}: <br>`);
//     for (let property in cars[i]) {
//         document.write(`${property}: ${cars[i][property]} <br>`);
//     }
//     document.write(`<br>`)
// }


//EX2
// const clothing1 = { type: `Shirt`, size: `L`, color: "White" };
// const clothing2 = { type: `Pants`, size: `S`, color: "Black" };
// const clothing3 = { type: `Socks`, size: `M`, color: "Red" };
// const clothing4 = { type: `Shoes`, size: `L`, color: "White" };
// const clothing5 = { type: `Gloves`, size: `S`, color: "Black" };


// const clothing = [clothing1, clothing2, clothing3, clothing4, clothing5];
// for (let i = 0; i < clothing.length; i++) {
//     document.write(`Clothing ${i + 1}: <br>`)
//     for (let property in clothing[i]) {
//         document.write(`${property}: ${clothing[i][property]} <br>`)
//     }
//     document.write(`<br>`)
// }

//EX3
// let geolocations = [];

// for (let i = 0; i < 3; i++) {
//     const latitude = parseInt(prompt(`Enter latitude for location ${i + 1}`));
//     const longitude = parseInt(prompt(`Enter longitude for location ${i + 1}`));
//     geolocations.push({ latitude, longitude });

// }

// for (i = 0; i < geolocations.length; i++) {
//     document.write(`Location ${i + 1} <br>`);
//     document.write(`Latitude: ${geolocations[i].latitude} <br>`);
//     document.write(`Longtitude: ${geolocations[i].longitude} <br><br>`);
// }

//EX1
// const books = [
//     { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 20 },
//     { id: 2, name: "1984", author: "George Orwell", price: 15 },
//     { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee", price: 18 }
// ];

// const booksJSON = JSON.stringify(books);

// document.write(`${booksJSON} <br><br>  `);

// const items = JSON.parse(booksJSON);
// // console.log("Original array (books):", books);
// // console.log("Converted array (items):", items);
// // console.log("Are the arrays identical?", JSON.stringify(books) === JSON.stringify(items));

// items.forEach((book) => {
//     document.write(`Book ID: ${book.id} <br>`);
//     document.write(`Book Name: ${book.name} <br>`);
//     document.write(`Book Author: ${book.author} <br>`);
//     document.write(`Book Price: ${book.price} <br>`);
//     document.write(`-------------------------<br>`);
// });


//EX2
// const cats = [
//     { name: `name1`, age: 1, color: `black`, isSterile: false },
//     { name: `name2`, age: 2, color: `white`, isSterile: false },
//     { name: `name3`, age: 3, color: `black`, isSterile: false }
// ]

// document.write(`${cats} <br><br>`);

// const catsJSON = JSON.stringify(cats);

// document.write(`${catsJSON} <br><br>`);

// const items = JSON.parse(catsJSON)

// document.write(`${cats} <br><br>`);

// items.forEach((cat) => {
//     document.write(`Name: ${cat.name} <br>`);
//     document.write(`Age: ${cat.age} <br>`);
//     document.write(`Color: ${cat.color} <br>`);
//     document.write(`Is Sterile: ${cat.isSterile} <br>`);
//     document.write(`------------------------ <br>`);
// });


//EX1
// const website = prompt(`Enter website URL:`)

// const extension = website.substring(website.lastIndexOf[`.`])

// switch (extension) {
//     case ".com":
//         document.write(`The website is a commercial international site. <br>`);
//         break;
//     case ".org":
//         document.write(`The website is an organizational international site. <br>`);
//         break;
//     case ".co.il":
//         document.write(`The website is a commercial Israeli site. <br>`);
//         break;
//     case ".org.il":
//         document.write(`The website is an organizational Israeli site. <br>`);
//         break;
//     case ".gov.il":
//         document.write(`The website is an Israeli government site. <br>`);
//         break;
//     default:
//         document.write(`The website has a different or unknown extension: ${extension} <br>`);
//         break;
// }

//EX2
// const file = prompt(`Enter website URL:`)

// const extension = file.substring(file.lastIndexOf(`.`)).toLowerCase();

// const imgEx = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp", ".webp"]

// if (imgEx.includes(extension)) {
//     document.write(`file is pic`)
// }
// else {
//     document.write(`file is not pic`)
// }

//EX3
// let num = prompt(`Enter Number:`);

// num = num.trim();

// const startsWith = num.startsWith(`05`);

// if (num.length == 10 && startsWith) {
//     document.write(`Valid`)
// } else {
//     document.write(`Not Valid`)
// }


// EX4
// const password = prompt(`Please enter a password`);
// let errors = [];

// if (password.length < 6) {
//     errors.push(`Too short`);
// }
// if (!/[A-Z]/.test(password)) {
//     errors.push(`Missing uppercase`);
// }
// if (!/[a-z]/.test(password)) {
//     errors.push(`Missing lowercase`);
// }
// if (!/[0-9]/.test(password)) {
//     errors.push(`Missing number`);
// }
// if (!/[^A-Za-z0-9]/.test(password)) {
//     errors.push(`Missing special character`);
// }

// if (errors.length === 0) {
//     document.write("The password is strong. <br>");
// } else {
//     document.write("The password is NOT strong for the following reasons: <br>");
//     errors.forEach((error) => {
//         document.write(`- ${error} <br>`);
//     });
// }