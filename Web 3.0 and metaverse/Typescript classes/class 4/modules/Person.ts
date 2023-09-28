export class Person{
    private age: number;
    private name: string;

    constructor(){
        this.age = 0;
        this.name = "";
    }

    setAge(age:number){
        this.age = age;
    }

    setName(name:string){
        this.name = name;
    }

    getAge(){
        return this.age;
    }

    getName(){
        return this.name;
    }

}