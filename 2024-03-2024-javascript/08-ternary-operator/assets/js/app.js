const grade = +prompt(`Please enter your Grade`);
let message;
if (grade >= 60) {
    message = `pass`;
}
else {
    message = `fail`;

}

message = grade >= 60 ? `pass` : `fail`
message = grade >= 60 ? `pass` : (grade > 0 ? `fail` : `Invalid`)