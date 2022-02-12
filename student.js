const person = require('./person')

class Student extends person.Person {
    aboutMe() {
        console.log(`Hello, my name is ${this.name} i'm ${this.age} year old, and i am interested in ${this.interests}`);
    }
}

exports.Student = Student;