import Person from "./person.js";

export default class Student extends Person{
    private name : string;
    
    constructor(){
        super();
        this.name = "";
    }

    set setName(n:string){
        this.name = n;
    }

    get getName(){
        return this.name;
    }
}