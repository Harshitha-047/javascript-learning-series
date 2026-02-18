// Loops
// 1.for loop

for(let i=1;i<=5;i++){
    console.log("i=",i);
}

// 2.while loop

let count=1;
while(count<=5){
    console.log("count=",count);
    count++;
}

// 3.do-while loop


do{
    console.log("count=",count);
    count++;
}while(count<=10);

// 4.for-of loop

let user="harshitha";

for(let i of user){
    console.log("characters=",i);
}

// 5.for-in loop


let student={
    name:"harshitha",
    age:21,
    college:"SJB Institute of Technology",
    branch:"ECE"
};
for(let key in student){
    console.log("key= ",key," values=",student[key]);
}

//String

let str="SJB Institute of technology";

let templeteLiterals=`this is otherway of writng the string`;

let obj={
    item:"pen",
    price:10
};

console.log("The value of ",obj.item,"is",obj.price);

let output=`the value of ${obj.item}  is ${obj.price}`;
console.log(output);

//string methods

let str1="hello";
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.slice(0));
console.log(str1.replace("h","H"));

// practice

let ab="@";
let bc=user.length;
console.log(ab.concat(user).concat(bc));


//Array

let studentmarks=[85,96,79,45,95];
for(let i=0;i<=studentmarks.length;i++){
    console.log(studentmarks[i]);
}

for(let i of studentmarks){
    console.log(i);
}

//practice-01
let avgmarks=0;

for(let i of studentmarks){
    avgmarks=avgmarks+i;
}

console.log(avgmarks/studentmarks.length);

//practice-02  10% discount

let itemprice = [250, 450, 670, 500];

for (let i = 0; i < itemprice.length; i++) {
    itemprice[i] = itemprice[i] - (itemprice[i] * 0.1);
}

console.log(itemprice);


//methods in arrays

let heros=["iron man","hulk","spider man"];

let heroine=["wonder women","mulana"];

console.log(heros.push("thor"));
console.log(heros.pop());
console.log(heros.toString());

console.log(heros.concat(heroine));

console.log(heros.unshift("antman"));

console.log(heroine.shift());

let arr=[1,2,3,4,5,6,7];

console.log(arr.slice(2,5));

console.log(arr.splice(2,0,101));
