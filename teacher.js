const person = require('./person')

class Teacher extends person.Person {
    constructor(name, age, gender, interests, subject) {
        super(name, age, gender, interests);
        this.subject = subject;
    }
 
    aboutMe() {
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old, my hobby is ${this.interests}. I teach ${this.subject}`);
    }
}

exports.Teacher = Teacher;