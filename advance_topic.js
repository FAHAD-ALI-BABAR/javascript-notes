// high order function:function that accept function in para meter or return a function or both

// this is high order function hello();
// function hello(value){

// }
// hello(function name(){})

// another way is

// function hello(){
//     return function name(){}
// }
// hello();

// both above function are high order function

// constructor function

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
// we can also accept parameters

// function pet(color){
//     this.name="arlo";
//     this.age=2,
//     this.breed="persian",
//     this.color=color;
//     }
//     let cat1=new pet("red");
//     let cat2=new pet("green");
//     let cat3=new pet("yellow");
//     console.log(cat1);
//     console.log(cat2);
//     console.log(cat3);

// function prototype

// let dog={
//     canfly:false,
//     cantalk:false,
//     canbark:true,
//     canrun:true,
// }
// let mydog={
//     whitecolor:true,
//     caneat:true,
//     name:"arlo",
//     age:19,
// }
// // mydog.__protype__=dog;//prototype is used to inherit the properties
// // console.log(mydog);
// Object.keys(mydog);
// console.log(Object.keys(mydog));
// console.log(Object.values(mydog));
// console.log(Object.entries(mydog));

// this keyword
//  function name(){
//     console.log(this);
//  }
//  name();

// let pet={
//     name:"arlo",
//     qualities:function(){ //now thos is method because the function inside an object is caallled a method
//         console.log(this);
//     }
// }
// pet.qualities();//

// call
// function abcd(){
//     console.log(this);
// }
// let pet={
//     name:"arlo",
// }
// abcd.call(pet);

// apply

// function ab(a,b,c){
//      console.log(this,a+b+c);
// }
// let obj={
//     name:"fahad",
// }
// ab.apply(obj,[5,8,9]);
// let status = "new";
// let scared = true;
// if (status === "neww") {
// console.log("Welcome to JavaScript!");
// if (scared) {
// console.log("Don't worry you will be fine!");
// } else {
// console.log("You're brave! You are going to do great!");
// }
// } else {
// console.log("Welcome back, I knew you'd like it!");
// }
// console.log(Math.floor( Math.random()*100));
// let a="fahad"
// a="ali";
// const b="alii"
 
// var c="aa"
// var c="bb"
// console.log(a,b,c);
// console.log(a+b+c);
// let funActivity = "Let's learn JavaScript";
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is not fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);
// let a=undefined;
// let b;
// if(a==b){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }
// let nr1 = "2";
// let nr2 = 2;
// console.log(nr1 * nr
// let strToNr2 = null;
// strToNr2 = Number(strToNr2);
// console.log(strToNr2, typeof strToNr2);
// let a=null;
// console.log(typeof(a));
// let str1 = "Hello ";
// let str2 = "addition";

// console.log(str1","+str2);
// let miles=209.2142;
// let km=miles*1.6;
// console.log(`total km in 20 miles are : ${km}`);
// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars.length);
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(0,2);
// console.table(arrOfShapes);
// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// let findValue2 = arr8.find(function(a) { return a === 10});
// console.log(findValue, findValue2);
// arr8 = [ 2, 6, 7, 8 ];
// let findIndex3 = arr8.indexOf(6,0);
// console.log(findIndex3);
// let ages = [18, 72, 33, 56, 40];
// console.log(ages.reverse());
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [...someValues1, ...someValues2, someValues3];
// console.log(arrOfArrays);
// let dog = { dogName: "JavaScript",
//  weight: 2.4,
//  color: "brown",
//  breed: "chihuahua",
//  age: 3,
//  burglarBiter: true
//  };
//  console.log(Object.keys(dog));
//  console.log(Object.values(dog));
//  console.log(Object.entries(dog));
//  // Log keys
// console.log("Keys:");
// for (let key in dog) {
//     console.log(key);
// }

// // Log values
// console.log("Values:");
// for (let key in dog) {
//     console.log(dog[key]);
// }

// // Log keys and values combined
// console.log("Keys and Values:");
// for (let key in dog) {
//     console.log((key) ,dog[key]);
// }


// function someFunction(...param1) {
//     console.log(param1);
//    }
//    someFunction("hi", "there!", "How are you?");
// function addTwoNumbers(x, y) {
//     return x + y;
//    }
// // let result = addTwoNumbers(4, 5);
// // console.log(result);
// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i, 2*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr);
// function sum(num1,num2){
//     return num1+num2
// }
// let arr=[];
// for(i=0;i<10;i++){
//     let result=sum(i*5,i*i);
//     arr.push(result);
// }
// console.log(arr);
// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
//    }
//    let result = addTwoNumbers(12, 15);
// console.log(result);
// function testAvailability(x) {
//     console.log("Available here:", x);
//      v=10;
//    }
//    testAvailability("Hi!");
//    console.log("Not available here:", v);
// function doingStuff() {
//     if (true) {
//     var x = "local";
//     }
//     console.log(x);
//    }
//    doingStuff();
// function doingStuff() {
//     if (true) {
//     console.log(x);
//     var x = "local";
//     }
//    }
//    doingStuff();
//    let x = "global";
// function doingStuff(x) {
//  console.log(x);
// }
// doingStuff("param");

// let arr="1000";
// (function(){
// let arr="2000";
// console.log(arr);
// })();
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//     getRecursive(--nr);
//     }
//    }
//    getRecursive(3);
function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }
    console.log("Ended function:", nr);
   }
   logRecursive(3);




