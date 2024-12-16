const grade = +prompt(`Please enter your Grade`);

if (grade >= 0 && grade <= 100) {
    document.write(`Grade legal`);
    if (grade == 100) {
        document.write(` Amazing`);
    }
    else if (grade >= 60) {
        document.write(` Passed`);
    }
    else if (grade <= 59) {
        document.write(` Failed`);
    }
}
else {
    document.write(` Grade Illegal`);
}
