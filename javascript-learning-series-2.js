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