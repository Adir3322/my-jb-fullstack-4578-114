// function printMax(n1, n2) {

//     document.write(n1 > n2 ? n1 : n2);

// }

// printMax(9, 3)


function mul(n) {
    for (let i = 0; i < n; i++) {
        document.write(`*`)
    }
    document.write(`<br>`)
}

function squ(m) {
    for (let i = 0; i < m; i++) {
        mul(m)
    }
}


function arraryMax(arr) {
    let max = -Infinity
    for (const number of arr) {
        max = number > max ? number : max;
    }
    document.write(max)
}
function isPositive(num) {
    return num >= 0 ? true : false;
}


function absNum(num) {
    return num < 0 ? -num : num;
}

function isPrime(n) {
    if (!isNaN) {
        return undefined;
    }

    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function getReversed(str) {
    let result = ``;
    for (i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function isPalindrom(str) {

    return str === getReversed(str);
}

document.write(isPalindrom(`tamtimat`))