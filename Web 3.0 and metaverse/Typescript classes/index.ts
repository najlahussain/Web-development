let myname : any = "Zia";
let number1 = 234;
//console.log(typeof myname);
//typescript only allows typecasting when datatype is unknown
//console.log((myname as string).length);

let newValue = myname.toString();
console.log(typeof newValue);

enum Color{Red, Green, Blue};

let x: Color = Color.Green;
console.log(x);

console.log(`Pakistn ${Color.Red}`);
console.log(`Pakistn ${Color[2]}`);

//you can also pass your own index number
enum Game1 {win = 5, lose, draw = "23"};
enum Game {win = "ss", lose = "dd", draw = "ee"};
console.log(typeof Game);
//const indexOfUK = Object.values(Game).indexOf('uk' as unknown as Country);
console.log(Object.keys(Game)[0]);
//you cannot access const enum with array index method