//async programming

console.log("one")
/ console.log("two")
setTimeout(()=>{
    console.log("i am api");
},5000)
console.log("three")

//callback function

function greeting(name ,from){
    setTimeout(()=>{
        console.log("welcome " + name);
        from();
    },2000)
}
function from(){
    console.log("from harshitha");
}
greeting(prompt("enter your name"),from);


//callback hell

function userId(data,callback){
    if(callback){
        setTimeout(()=>{
            console.log("welcome " + data);
            callback();
        },2000) 
    }
    
}
userId(1,function(){
    userId(2,function(){
        userId(3,function(){
            userId(4,function(){
                userId(5,function(){
                    console.log("welcome to the callback hell");
                })
            })
        })              
})})

// promise

let promise=new Promise((resolve,reject)=>{
    console.log("promise is pending");//pending state
    //resolve("promise is resolved");//fullfilled state
    reject("promise is rejected");//rejected state
})


promise.then((data)=>{  //fullfilled state
    console.log(data);

}).catch((error)=>{    //rejected state
    console.log(error);
})


function add(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{if(a>0 && b>0){
            resolve(a+b);
        }else{
            reject("invalid input");
        }   },2000)        
    })
}
add(5,2).then((data)=>{
    console.log(data);
    console.log("waiting for second data");
    add(3,4).then((data)=>{
        console.log(data);
        console.log("waiting for third data");
    })
}).catch((error)=>{
    console.log(error);
})  

//async await

function hello(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello world");
        },2000)         
    })
}
async function greet(){
    let data=await hello();
    console.log(data);  
}