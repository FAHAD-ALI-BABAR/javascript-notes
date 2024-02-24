// function addtwonum(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// addtwonum("10",12,"10");//all numbers after string will be treated as a string..and all numbers before string will be added or subtracted according to the condition
// //jb hum fuction ki defination bnaty hain or jo numbers input ly rhy hoty hain unhy parameters bolty hain
// //or jb function ko call kraty hain us mein jo values pass krty hain unhy arguments bolty hain

// //
// function addtwo(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// const result=addtwonum("10",12,"10");
// console.log("result is:",result);//result will be undefined to correct this we will do...

// function addtwo(num1,num2,num3){
//    let result1=num1+num2+num3;
//     return result1;
// }
// const result1=addtwo("10",12,"10");
// console.log("result is :",result1);//now the result is okay
// //there is another twist

// function addtwo(num1,num2,num3){
//     let result1=num1+num2+num3;
//      return result1;
//      console.log("fahad ali babar");//this line will not be executed because in javascript anything in function after the return statement will not be executed
//      //it is basically unreachable
//  }
//  const result1=addtwo("10",12,"10");
//  console.log("result is :",result1);

// function isloggedIn(name2="fahad"){//giving the value is the value always executed if user passes no value it is a default value
//     if(name2===undefined){
//         console.log("please enter your name");
//         return;
//     }
//     return `${name2} just logged in`;
// }
// console.log(isloggedIn("ali"));
