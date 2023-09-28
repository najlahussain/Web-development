"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
        this.age = 0;
        this.name = "";
    }
    setAge(age) {
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
exports.Person = Person;
