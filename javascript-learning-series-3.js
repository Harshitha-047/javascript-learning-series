//Functions
function myfunction(){
    console.log("this is my function");
}
myfunction();

//PARAMETERS AND ARGUMENTS
function add(a,b){
    return a+b;
}

console.log(add(10,20));

function welcome(name){
    return `welcome ${name}`;
}
console.log(welcome("world of javascript"));

function sum(x,y,z){
    return x+y+z;
}

const arrowsum=(x,y,z)=>{
    return x+y+z;
}

function numvowels(str){
    let count=0;
    for(let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++;
        }
    }       
    return count;
}
console.log(numvowels("madegowda"));

const arrownumvowels=(str)=>{
    let count=0;        
    for(let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++;
        }           
    }

    return count;
}           
console.log(arrownumvowels("harshitha"));


let arr=[1,2,3,4,5];

arr.forEach((element)=>{    
    console.log(`square of element is ${element*element}`);
});

let newarr=arr.map((element)=>{
    return element*element;
});
console.log(newarr);

let filterarr=arr.filter((element)=>{
    return element%2==0;
}
);
console.log(filterarr);

let reducearr=arr.reduce((accumulator,element)=>{
    return accumulator+element;
}
);
console.log(reducearr);
    