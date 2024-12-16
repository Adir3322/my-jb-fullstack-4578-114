/// MATRIX
//EX1
// const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];
// document.write(`The matrix: <br><br>`)
// for (i = 0; i <= matrix.length - 1; i++) {
//     for (j = 0; j <= matrix[i].length - 1; j++) {
//         document.write(`${matrix[i][j]} `);
//     }
//     document.write(`<br>`);
// }


// let sum = 0;
// for (row = 0; row < matrix.length; row++) {
//     for (cell = 0; cell < matrix[row].length; cell++) {
//         sum += matrix[row][cell];
//     }
// }
// document.write(`<br> The sum of the matrix is: ${sum}`);

// let counter = 0;
// for (row = 0; row < matrix.length; row++) {
//     for (cell = 0; cell < matrix[row].length; cell++) {
//         counter += 1;
//     }
// }

// document.write(`<br> the average is : ${sum / counter}`)

// let max = -Infinity;
// for (row = 0; row < matrix.length; row++) {
//     for (cell = 0; cell < matrix[row].length; cell++) {
//         max = max < matrix[row][cell] ? matrix[row][cell] : max;
//     }
// }
// document.write(`<br> The biggest number is: ${max}`)

// let min = Infinity;
// for (row = 0; row < matrix.length; row++) {
//     for (cell = 0; cell < matrix[row].length; cell++) {
//         min = min > matrix[row][cell] ? matrix[row][cell] : min;
//     }
// }
// document.write(`<br> The smallest number is: ${min} <br>`)

// document.write(`the numbers to div with 7 are: `)
// for (i = 0; i <= matrix.length - 1; i++) {
//     for (j = 0; j <= matrix[i].length - 1; j++) {
//         if (matrix[i][j] % 7 === 0) {
//             document.write(`<br> ${matrix[i][j]}`);
//         } else {
//             document.write(`<br> :D`)
//         }
//     }
// }

//EX 2
// let multiplicationBoard = []
// for (let i = 0; i <= 10; i++) {
//     let row = [];
//     for (let j = 0; j <= 10; j++) {
//         row.push(i * j);
//     }
//     multiplicationBoard.push(row);
// }

// for (i = 0; i < multiplicationBoard.length; i++) {
//     for (j = 0; j < multiplicationBoard[i].length; j++) {
//         document.write(`${multiplicationBoard[i][j]} `);
//     }
//     document.write(`<br>`);
// }

// let sum = 0;
// for (row = 0; row < multiplicationBoard.length; row++) {
//     for (cell = 0; cell < multiplicationBoard[row].length; cell++) {
//         sum += multiplicationBoard[row][cell];
//     }
// }
// document.write(`<br> The sum of the matrix is: ${sum}`);


///FUNCTIONS BIAATCH
//EX1
// function message() {
//     document.write(`Make Things Go Right <br>`)
// }

//EX2
// function fullName() {
//     document.write(`Adir Solomon <br>`);
// }
// for (let i = 0; i <= 100; i++) {
//     fullName();
// }

//Ex3
// function tenStr(str) {
//     for (let i = 0; i <= 10; i++) {
//         document.write(`${str} <br>`)
//     }
// }
// tenStr(`Adir`)
// tenStr(prompt(`Enter a name please: `))

//EX4
// function mulMessage(message, number) {
//     for (let i = 0; i < number; i++) {
//         document.write(`${message} <br>`)
//     }
// }
// mulMessage(`Adir`, 3)
// mulMessage(prompt(`Please enter a message`), +prompt(`Enter number please`))

//Ex5
// function threeAvg(n1, n2, n3) {
//     document.write((n1 + n2 + n3) / 3)
// }
// threeAvg(1, 2, 3)

//Ex6
// function threeMax(n1, n2, n3) {
//     const max = Math.max(n1, n2, n3);
//     document.write(max)
// }
// threeMax(1, 2, 3)
// const userNum1 = parseInt(prompt("Enter the first number:"));
// const userNum2 = parseInt(prompt("Enter the second number:"));
// const userNum3 = parseInt(prompt("Enter the third number:"));
// threeMax(userNum1, userNum2, userNum3);

// // קריאה שלישית: ערכים רנדומליים
// const randomNum1 = parseInt(Math.random() * 100);
// const randomNum2 = parseInt(Math.random() * 100);
// const randomNum3 = parseInt(Math.random() * 100);
// console.log(`Random numbers: ${randomNum1}, ${randomNum2}, ${randomNum3}  `);
// threeMax(randomNum1, randomNum2, randomNum3);

//Ex7
// function emoji(n) {
//     switch (n) {
//         case 1:
//             document.write(`(-:)`)
//             break;
//         case 2:
//             document.write(`)-:)`)
//             break;
//         case 3:
//             document.write(`/-:)`)
//             break;
//         case 4:
//             document.write(`(-;)`)
//             break;
//         case 5:
//             document.write(`)-;)`)
//             break;
//         default:
//             break;
//     }
// }
// function displayAll() {
//     for (let i = 0; i <= 5; i++) {
//         emoji(i);
//     }
// }
// displayAll()

//Ex8
// function displayCurrentTime() {
//     const now = new Date();
//     const time = now.toLocaleTimeString();
//     document.write(`הזמן הנוכחי: ${time}`);
// }
// // קריאה לפונקציה
// displayCurrentTime();

//Ex9
// function showArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`${arr[i]} `)
//     }
//     document.write(`<br>`)
// }
// showArray([1, 2, 3, 4, 5])
// let arr = []
// for (let i = 0; i < 5; i++) {
//     arr.push(parseInt(Math.random() * 10));
// }
// showArray(arr)

//Ex10
// function arrAvg(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     document.write(sum / arr.length)
// }
// arrAvg([1, 2, 3])


//Ex11
// function randRang(start, end) {
//     document.write(`${parseInt(Math.random() * (end - start) + start)} <br>`)
// }
// let start = +prompt("Enter start start:")
// let end = +prompt("Enter start end:")
// randRang(start, end);
// for (let i = 0; i < 100; i++) {
//     randRang(-10, 10);
// }

//Ex12
// function square(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             document.write(`*`)
//         }
//         document.write(`<br>`)
//     }
// }

// square(+prompt(`Please enter num:`))


//Ex13
// function square(height, width) {
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             document.write(`*`)
//         }
//         document.write(`<br>`)
//     }
// }

// square(+prompt(`Please enter height:`), +prompt(`Please enter width:`))
// square(parseInt(Math.random() * 100), Math.random() * 100)

//Ex14
// function mulSquare(count) {
//     for (let i = 0; i < count; i++) {
//         square(Math.random() * 10, Math.random() * 10)
//         document.write(`<br><br><br>`)
//     }
// }

// n = +prompt(`enter number please:`)
// mulSquare(n)

//Ex15
// function hollowSquare(height, width) {
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
//                 document.write(`*`)
//             } else {
//                 document.write(`&nbsp&nbsp`)
//             }
//         }
//         document.write(`<br>`)
//     }
// }

// hollowSquare(+prompt(`Enter height:`), +prompt(`Enter width`));

//Ex16
function allNum(n) {
    for (let i = n; i > 0; i--) {
        document.write(`${i} `);
    }
}

function allNumDown(size) {
    for (let i = size; i > 0; i--) {
        allNum(i);
        document.write(`<br>`)
    }
}

//Ex17
function allAss(n) {
    for (let i = n; i > 0; i--) {
        document.write(`*`);
    }
}

function allAssDown(size) {
    for (let i = size; i > 0; i--) {
        allAss(i);
        document.write(`<br>`)
    }
}

//Ex18
function allAssNum(n) {
    for (let i = n; i > 0; i--) {
        document.write(`${i}`);
    }
    for (let i = n; i > 0; i--) {
        document.write(`*`);
    }
}

function allAssNumDown(size) {
    for (let i = size; i > 0; i--) {
        allAssNum(i);
        document.write(`<br>`)
    }
}


//Ex19
function allAssUp(size) {
    for (let i = 1; i < size; i++) {
        allAss(i);
        document.write(`<br>`)
    }
}

//Ex20
function pyramid(n) {
    for (let row = 1; row <= n; row++) {
        for (let spaces = 1; spaces <= n - row; spaces++) {
            document.write(`&nbsp;&nbsp;`);

            for (let colLeft = 1; colLeft <= row; colLeft++) {
                document.write(colLeft);
            }
            for (let colRight = row - 1; colRight >= 1; colRight--) {
                document.write(colRight);
            }

            document.write(`<br>`)
        }
    }
}

//Ex1
function arrMin(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        min = min > arr[i] ? arr[i] : min;
    }
    return min;
}


//Ex2
function strLen(arrStr) {
    let long = ``;
    for (const str of arrStr) {
        long = str.length > long.length ? str : long;
    }
    return long.length;
}

//document.write(strLen([`adir`, `solomon`, `sskafhqkwjfi`]));

//Ex3
function strLen1(arrStr) {
    let long = ``;
    for (const str of arrStr) {
        long = str.length > long.length ? str : long;
    }
    return long;
}
//Ex5
function largeNum(numArr) {
    let counter = 0;
    let sum = 0;
    for (const num of numArr) {
        sum += num;
        counter += 1;
    }
    const avg = sum / counter;
    let howManyLarge = 0;
    for (const num of numArr) {
        if (num >= avg) {
            howManyLarge += 1;
        }
    }
    return howManyLarge;
}

//Ex6
function indexMin(arr) {
    let min = Infinity;
    let indexMin = 0;
    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            indexMin = i;
        }
        min = min > arr[i] ? arr[i] : min;
    }
    return indexMin;
}
// document.write(indexMin([1, 2, 3, 0, 4, 0, -3]))


function matMax(matrix) {
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (max < matrix[i][j]) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}

// document.write(matMax(matrix = [
//     [1, 2, 3],  // First row
//     [4, 100, 6],  // Second row
//     [7, 8, 9]   // Third row
// ]));

function multTable(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== (i + 1) * (j + 1)) {
                return false;
            }
        }
    }
    return true;
}

const validMatrix = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
];

const invalidMatrix = [
    [1, 2, 3],
    [2, 5, 6],
    [3, 6, 10]
];
// document.write(multTable(invalidMatrix))

function isPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function arrIsPrimeNumber(arr) {
    let result = false;
    for (const num of arr) {
        if (!isPrimeNumber(num)) {
            return false;
        }
    }
    return true;
}
// document.write(arrIsPrimeNumber([3, 7, 11, 17]))

function retRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min)
}

// document.write(retRandom(10, 20))
// document.write(`<br>`)
// document.write(retRandom(100, 200))
// document.write(`<br>`)
// document.write(retRandom(1000, 2000))




