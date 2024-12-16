const matrix = [];

for (let rowCount = 0; rowCount < 5; rowCount++) {
    const row = []
    for (let colCount = 0; colCount < 5; colCount++) {
        const randomNumber = parseInt(Math.random() * 100)
        row.push(randomNumber)
    }
    matrix.push(row)
}
console.log(matrix)

// let maxRow = 0;
// let maxCol = 0;
// let max = -Infinity;
// for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//         if (matrix[row][col] > max) {
//             max = matrix[row][col];
//             maxRow = row;
//             maxCol = col;
//         }
//     }
// }

// document.write(`Max value is ${max}, located at row: ${maxRow}, cpl: ${maxCol}`)



const maxi = {
    row: 0,
    col: 0,
    value: -Infinity
}

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] > maxi.value) {
            maxi.value = matrix[row][col];
            maxi.row = row;
            maxi.row = col;
        }
    }
}

document.write(`Max value is ${maxi.value}, located at row: ${maxi.row}, col: ${maxi.col}`);