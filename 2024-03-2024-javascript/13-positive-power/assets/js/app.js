num = +prompt(`Please enter your num1`);

while (num != 0) {
    num = num > 0 ? `positive` : `negative`;
    alert(num);
    num = +prompt(`Please enter your num1`);
}