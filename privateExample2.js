var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.display = function () {
        return ("My unique code: " + this.studCode + ", my name: " + this.studName + ".");
    };
    return Student;
}());
var student = new Student(1, "JoeRoot");
console.log(student.display());
