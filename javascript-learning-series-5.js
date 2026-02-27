// async programming in js

console.log("one")
console.log("two")
console.log("three")
function hello(){
    console.log("hello")    
}
setTimeout(hello, 2000)

setTimeout(()=>{
    console.log("hello");
},4000)


function greeting(name,callback){
    console.log("welcome "+name);
    callback();
}
function saybye(){
    console.log("bye");
}
greeting("john",saybye)

let age=18;
if(age>=18){
    if(age>60){
        console.log("senior citizen");
    }else{
        console.log("adult");
    }
}else{
    console.log("child");
}

let repeat=(data)=>{
    setTimeout(()=>{    
        console.log(data);
    },5000)         
}
repeat("hello world");
repeat("welcome to nodejs");
repeat("javascript is fun");



for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str+="j ";
    }    console.log(i,str);
}
