//DOM (Document Object Model) Manipulation

//selecting elements

//1. getElementById

let heading = document.getElementById("heading");
console.log(heading);

//2.getElementsByClassName

let paragraph=document.getElementsByClassName("paragraph");
console.log(paragraph);

//3.getElementsByTagName

let divs=document.getElementsByTagName("div");
console.log(divs);

//4.querySelector

let query=document.querySelector("div");
console.log(query);

//5.querySelectorAll

let queryAll=document.querySelectorAll("div");
console.log(queryAll);

//methods to manipulate elements

//1.innerText

console.log(heading.innerText);
console.log(heading.innerText +" Welcome to JavaScript!");//concatenation

//2.innerHTML

console.log(heading.innerHTML);

//3.textContent

console.log(heading.textContent);


//parent children siblings

let parent=document.documentElement;
console.log(parent);

let child=parent.children;
console.log(child);

let child1=child[0];
console.log(child1);

let child2=child1.nextElementSibling;
console.log(child2);

let grandchild1=child2.children[0];
console.log(grandchild1);
