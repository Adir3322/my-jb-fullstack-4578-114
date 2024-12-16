const grade = +prompt(`Please enter your Grade`);

// if (grade >= 1 && grade <= 5) {
//     if (grade === 1) {
//         document.write(` One`);
//     }
//     else if (grade === 2) {
//         document.write(` Two`);
//     }
//     else if (grade === 3) {
//         document.write(` Three`);
//     }
//     else if (grade === 4) {
//         document.write(` Four`);
//     }
//     else if (grade === 5) {
//         document.write(` Five`);
//     }
// }
// else {
//     document.write(` Invalid`);
// }


switch (grade) {
    case 1:
        document.write(`One`);
        break;
    case 2: document.write(`Two`);
        break;
    case 3: document.write(`Three`);
        break;
    case 4: document.write(`Four`);
        break;
    case 5: document.write(`Five`);
        break;
    default:
        document.write(`Invalid`)
}