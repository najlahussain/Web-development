//examples of callbacks
function calculate(calculateCallBack:(result:number)=>void, x:number){
    calculateCallBack(x*5);    
}

function calculateCallBack(result:number){
    console.log("calculated value: ",(result/2));
}

calculate(calculateCallBack,10);
//class will start when teacher will arrive
function teacherArrival(cb:(result:string)=>void){
    cb("Teacher arrived.....");    
}

function startClass(result:string){
    console.log(result);
    console.log("Start class");
}

teacherArrival(startClass);