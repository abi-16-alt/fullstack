/*let favourite=["FullStack","Python","Java","C++"];
console.log(favourite.length);  //return length
console.log(favourite.toString()); //return the values without quotations
console.log(favourite.at(2));   //return the alue at the index 2
console.log(favourite.join("|"));  //join the values with separator(|)
console.log(favourite.pop()); // pop up the last value
console.log(favourite.push("MySQL"));  //add or push the value at the end of the array
console.log(favourite);  //print the array after pop and push


console.log(favourite.shift()); //remove the 1st element in the array & shift all other elements to a lower index and return the value that was shifted out
console.log(favourite.unshift("Javascript")); //add a new elements to an array(at the beginning) and retuns the  new array length
console.log(favourite);  //print the array after shift and unshift

console.log(delete favourite[3]);// delete the element in an array
console.log(favourite);
console.log(favourite.pop());

const language=["PhP","Django","SQL"] //add set of elements to an array
console.log(favourite.concat(language)); //do not change the existing array. It always return a new array

console.log(language.copyWithin(0,2));//copy the value at the index 2 and paste it to the other index 0

const flatArray=[[ 'Javascript',"NodeJS"], ['Python', 'Java'], ['PhP', 'Django', 'SQL' ]];
console.log(flatArray.flat()); //convert 3D into 1d

favourite.splice(3,0,"C++","MySQL"); //add new elements to an array . 3 define the index that the value to be added, 0 define no. of elements to be deleted
console.log(favourite);

console.log(favourite.slice(4)); //slice out a piece of an array into a new array
console.log(favourite.slice(1,4)); 

*/
/*
//Iteration Methods:
//forEach
const vehicle=["car","bike","cycle","bus"];
let list="";

vehicle.forEach(myfun);
function myfun(value){
    list+=value;
    
}
console.log(list +" ");

//map
const num=[56,93,34,3,21];

num.map(myfun);
function myfun(value){
    console.log(value*2) ;
    
}
   

//flatMap
const num=[56,93,34,3,21];
let newarr=num.flatMap(x => [x,x*2]);
console.log(newarr);


//filter

const num=[56,93,34,3,21];
const newNum=num.filter(myfun)

function myfun(value){
    return value>25 ;
    
}
console.log(newNum);



//reduce

const num=[56,93,34,3,21];
let sum=num.reduce(myfun);//add all values from left to right


function myfun(total,value){
    return total+value ;
    
}
console.log(sum);

//reduceRight

const number=[56,93,34,3,21];
let sums=number.reduceRight(myfun);//add all values from  right to left


function myfun(total,value){
    return total+value ;
    
}
console.log(sums);
*/


//every
const number=[56,93,34,3,21];
let sums=number.every(myfun); //checks if all array values pass a test
function myfun(value){
    return value >10;
    
}
console.log(sums);

//some
const numbers=[56,93,34,3,21];
let sum=numbers.some(myfun); //checks if some array values pass a test

function myfun(value){
    return value>10 ;
    }
console.log(sum);

//from
const myname=Array.from("Gobika");//returns an array object from any object with a length property or any itratable object
console.log(myname);

//keys
const vehicle=["car","bike","cycle","bus"];
const keys=vehicle.keys();//returns an array iterator object with the keys of an array
let text="";
for(let x of keys){
    text+=x + "   ";
}
console.log(text);

//entries
const vehicles=["car","bike","cycle","bus"];

const txt=vehicle.entries();//returns an array iterator object with the keys /alue pairs
for(let x of txt){
    console.log(x); 
}

//with
const vehi=["car","bike","cycle","bus"];
const myvehicle=vehi.with(2,"aeroplane");//update elements in the array without altering the original array
console.log(myvehicle);

//spread ... operator
const motors=["car","bike","cycle","bus"];
const favourite=["FullStack","Python","Java","C++"];
const language=["PhP","Django","SQL"] ;

const mine=[...motors,...favourite,...language];//the ...operator expands an iteratable(an array) into more elements
console.log(mine);