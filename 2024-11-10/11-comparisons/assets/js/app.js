
let guess = prompt(`Enter a guess`).trim();
const firstWordEnd = guess.indexOf(` `)
const firstWord = guess.substring(0, firstWordEnd);

const lastWordStart = guess.lastIndexOf(` `) + 1;
const lastWord = guess.substring(lastWordStart)
document.write(`${firstWord} ${lastWord}`);