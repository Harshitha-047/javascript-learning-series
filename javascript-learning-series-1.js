//first cammand in javascript

console.log("hello welcome to world of JavaScript")

//declaration of variable with help of Let and Const

let username="Harshitha";
const usn=47;

//primitive data type in javascript number,string,boolean,undefined,null,bigint,symbol

let num=7;
let college="SJB Institute of Technology";
let  working=true;
let cost=BigInt("125");
let letter=Symbol("a");

//non-primitive datatype object-arrays,functions

const profile={
    campany:"ParkerJolter",
    color:"black",
    cost:BigInt("270"),
    rating:4,
    isdeal:true
};
//Arithmetric operations

let a=2;
let b=5;
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);

console.log("a++ =",++a);
console.log(a);
console.log("a + =",a+=2);
console.log("b - =",b-=2);
console.log("a * =",a*=2);
console.log("b % a =",b%=a);

//comparision operators

const c=9;
const d=c;

//logical operators

const e=1;
const f=2;

console.log((e<0)&&(f===2));
console.log((e<0)||(f===2));
console.log(!(e<0));


//conditional statements  if ,if else ,else if ,switch

let mode="dark-mode";
let color;

if(mode=="dark-mode"){
    color="black";
}
if(mode=="light-mode"){
    color="white";
}


console.log(color);
let name=prompt("hello!");
console.log(name);
let number=prompt("numbers");
console.log(number);
if(number % 5===0){
    console.log("the number is multiple of 5");
}else{
   console.log("the number is not multiple of 5"); 
}
let marks=prompt("enter your marks:");
if(marks >= 80){
    console.log("your grade is A");
}else if((marks<80)&&(marks>=70)){
    console.log("your grade is B");
}else if((marks<70)&&(marks>=60)){
    console.log("your grade is C");
}else if((marks<60)&&(marks>=50)){
    console.log("your grade is D");
}else{
    console.log("just pass");
}



let expr="IceCream";
switch(expr){
    case "fruits":
        console.log("cast 10$");
    break;
    case "cake":
        console.log("cast 20$");
    break;
    case "IceCream":
        console.log("cost30$")
    break;
    default:
        console.log("cost 0$")
}