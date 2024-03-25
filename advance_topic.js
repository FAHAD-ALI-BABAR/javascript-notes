//high order function:function that accept function in para meter or return a function or both

//this is high order function hello();
// function hello(value){

// }
// hello(function name(){})

//another way is

// function hello(){
//     return function name(){}
// }
// hello();

//both above function are high order function

//constructor function

// function pet(){
// this.name="arlo";
// this.age=2,
// this.breed="persian",
// this.color="white/golden"
// }
// let cat1=new pet();
// let cat2=new pet();
// let cat3=new pet();
// console.table(cat1);
//we can also accept parameters

function pet(color){
    this.name="arlo";
    this.age=2,
    this.breed="persian",
    this.color=color;
    }
    let cat1=new pet("red");
    let cat2=new pet("green");
    let cat3=new pet("yellow");
    console.log(cat1);
    console.log(cat2);
    console.log(cat3);