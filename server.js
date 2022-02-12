const serverTeacher = require('./teacher');
const serverStudent = require('./student');
let teacher = new serverTeacher.Teacher('Alex', 19, 'female', 'dancing');
let student = new serverStudent.Student('Vic', 46, 'male', 'cooking');
console.log(teacher);
console.log(student);