let num;
while (num !== 0) {
    alert(num % 7 === 0 ? `boom` : `doesnt dvide`);
    num = +prompt(`Please enter number`)
}