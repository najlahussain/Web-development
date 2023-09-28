class Person{
    private personality : string;
    constructor(){
        this.personality = 'Nystery';
    }

    askQuestion(answer:number){
        if(answer==1)
            this.personality = "Extrovert";
        else if(answer==2)
            this.personality="Introvert";
        
    }

    get getPersonality() {
        return this.personality;
    }
}

export default Person;