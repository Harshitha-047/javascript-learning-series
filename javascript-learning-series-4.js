const student={
    fullname:"harshitha",
    age:20,
    marks:94,
    printmarks:function(){
        console.log(this.marks);
    }
    }
    const display=()=>{
        for(let i in student){
            console.log(i,student[i]);
        }
    }

    let printdetails=function(){
        console.log(`my name is ${student.fullname} and my age is ${student.age} and my marks are ${student.marks}`);
    }

    const harshitha = {
        usn:7
    };

    harshitha.__proto__=student;

    class Student{
        constructor(fullname,age,marks){
            this.fullname=fullname;
            this.age=age;
            this.marks=marks;
        }
        printmarks(){
            console.log(this.marks);
        }

    }
    const student1=new Student("harshitha",20,94);

    class car{
        constructor(brand,milage){
            console.log("creating a car collecting data");
            this.brand=brand;
            this.milage=milage;
        }
        start(){
            console.log("car started");
        }
        stop(){
            console.log("car stopped");
        }
        brands(type){
            console.log(`the brand of the car is ${type}`);
        }
    }
    const audi=new car("audi",80);
    audi.brands("audi");
    const bmw=new car("bmw",70 );
    bmw.brands  ("bmw");

   class shape{
    property(){
        console.log("i am one of geometrical shape ");
    }
   }
   class circle extends shape{

   }
   const figure=new circle();
    figure.property();