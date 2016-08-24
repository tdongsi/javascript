"use strict";

// This is essentially a Factory function.
// Person.prototype: blue print of an object.
// Person.__proto__: blue print of the factory.
// There is not much inheritance relationship between Person (factory) and p (product).
function Person(fn, ln) {
    this.fn = fn;
    this.ln = ln;
}

// The above constructor is re-written in Java-like as follows
// function object is the only object that has "prototype" property
// that can be used to create new object
function PersonFactory(fn, ln) {
    var person = this;
    person.fn = fn;
    person.ln = ln;
    return person;
}

function Student(sid, fn, ln) {
    this._super.call(this, fn, ln);
    this.sid = sid;
}

// Person.__proto__ -> what you inherit from
// Person.prototype
// p.__proto__ = Person.prototype

var p = new Person("Bob", "Martin");
console.dir(p);

Person.prototype.getFullName = function() {
    return this.fn + " " + this.ln;
};
console.log(p.getFullName());



Student.protoype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getStudentInfo = function() {
    return this.sid + ' ' + this.ln;
}

var s = new Student("12", "John", "Doe");

console.log(s.getStudentInfo());

