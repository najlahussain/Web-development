//Demonstrating modules
import {Person} from './modules/Person.js' 
import city from './index2.js'

let p = new Person();
p.setAge(30);
console.log(p.getAge());
console.log(city);
//export example
import {myName as name} from "./index2.js"
import * as data from "./index2.js";
console.log(data);//will display all data in the file index2.js
console.log(name);
let myName = "Raza";

//selection sort
function sort(arr: string[])
   {
       for(let i = 0; i < arr.length - 1; i++)
       {
           let min = i;
           
           for(let j = i + 1; j < arr.length; j++)
           {
               if(arr[j] < arr[min])
               {
                   // Choose the lesser of the two:
                   min = j;
               }
           }
           // In-place swap:
           const tmp = arr[min];
           arr[min] = arr[i];
           arr[i] = tmp;
       }
   }
let arry = ["Usman", "Zia", "Wania"];
sort(arry);
console.log(arry);
