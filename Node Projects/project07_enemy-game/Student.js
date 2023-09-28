class Student {
    static idGenerator = 10000;
    name;
    id;
    courses;
    balance;
    constructor() {
        this.name = "";
        this.id = Student.idGenerator++;
        this.courses = [];
        this.balance = 0;
    }
    enroll(courses) {
        this.courses = courses;
    }
    viewBalance() {
        return this.balance;
    }
    payTuitionFee(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Student name: ${this.name}`);
        console.log(`Student id: ${this.id}`);
        console.log(`Student enrolled courses: ${this.courses}`);
        console.log(`Student balance: ${this.balance}`);
    }
}
export default Student;
