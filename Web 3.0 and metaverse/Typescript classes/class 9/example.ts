//solve this: 50 + 6 / 2 * 9 = 50 + (6/2) * 9 = 50 + (3 * 9) = 50 + 27 =77
//1. divid: 6 by 2
// 2. multiply answer with 9
//3. add anser to 50
/*
function divide(num1:number, num2:number, multiply:(result:number, num3:number , addition:any)=>void){
    let result = num1/num2;
    console.log("Result of division is: ", result);
    multiply(result, 9, addition);
}

function multiply(result:number, num3:number , addition:any){
    let result1 = result * num3;
    console.log("Result of multiplication is: ", result1);
    addition(result1, 50);
}

function addition(result:number, num4:number){
    console.log("answer is: ", result + num4);
}

//divide(6,2,multiply);
divide (6,2,
    function (result:number, num3:number , 
        addition:any){
        let result1 = result * num3;
        console.log("Result of multiplication is: ", result1);
        addition(result1, 50);
});
*/
//promises
function divide(num1:number, num2:number){
    let result : Promise<number> = new Promise((myresolve)=>{
        myresolve(num1/num2);
    });
    return result;
}

function multiply(num1:number, num2:number){
    let result : Promise<number> = new Promise((myresolve)=>{
        myresolve(num1*num2);
    });
    return result;
}

function addition(num1:number, num2:number){
    let result  : Promise<number> = new Promise((myresolve)=>{
        myresolve(num1+num2);
    });
    return result;
}

let answer = divide(6,2);
answer.then((result:number)=>{
    console.log("result of division is: ", result);
    return multiply(result,9);
}).then((result:number)=>{
    console.log("result of multiplication is: ", result);
    return addition(result,50);
}).then((result:number)=>{
    console.log("result of addition is: ", result);
})