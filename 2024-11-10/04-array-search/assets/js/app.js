const min = -100;
const max = 100

const randomNumbers = []

for (let i = 1; i <= 100; i++) {
    const randomnumber = randomNumbers.push(parseInt(Math.random() * (max - min)) + min);
    randomNumbers.push(randomnumber);

}
alert(randomNumbers);

const guess = +prompt(`Guess a number in the array`)
let isBingo = false;
for (const randomnumber of randomNumbers) {
    if (randomnumber === guess) {
        isBingo = true;
    }
}
alert(isBingo ? `Bingo` : `No Bingo`)
