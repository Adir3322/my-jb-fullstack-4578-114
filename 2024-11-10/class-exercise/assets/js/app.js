
const students = [
    {
        firstName: `Adir`,
        lastName: `Solomon`,
        grade: [45, 67, 78]
    },
    {
        firstName: `Yoav`,
        lastName: `Gute`,
        grade: [74, 98, 100]

    },
    {
        firstName: `osher`,
        lastName: `cohen`,
        grade: [65, 100, 90]

    },
]

for (const student of students) {

    let sum = 0;
    for (const grade of student.grade) {
        sum += grade;
    }
    document.write(`Name of student is ${student.firstName} and their average is ${sum / student.grade.length} <br>`)
}