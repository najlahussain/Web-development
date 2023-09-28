import Person from "./person.js";
export default class Student extends Person {
    name;
    constructor() {
        super();
        this.name = "";
    }
    set setName(n) {
        this.name = n;
    }
    get getName() {
        return this.name;
    }
}
