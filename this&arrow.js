// this and arrow functions in js
// const user={
//     name:"fahad",
//     age:"10",
    

//     info:function(){
//         console.log(`${this.name} welcome to my website`);
//         console.log(this);
//     }
// }
// user.info();

//  console.log(user);
//  console.log(user.info());
//  console.log(this);//is mein result emplty parenthesis aye ga...kiun k scope sy bahr run ho rha ha
// //this current context/value to refer krta ha
// //user.info()
// //console.log(`${user.name}`);
// function num(){
//     console.log(this);
// }
// num();//is mein result bht values ain gi kium k function mn run ho rha ha

// function fahad(){
//      username:"fahad";
//      console.log(this.username);//we can't access it in this way
// }
// fahad();

// now talk about arrow functions

// const arrow1=(num1,num2)=>{
//     return num1+num2;//this is explicit return bcz we use return keyword
// }//another way of writing this function is below
// const arrow2=(num1,num2)=>  num1+num2;//this is implicit return bcz we don't use return keyword
// //another way of writing these function is below
// const arrow1=(num1,num2)=> (num1+num2)//this is more efficient and we wiill adopt this method..bcz this will be helpful in react
// console.log(arrow1(5,5));
// console.log(arrow2(5,5));
// console.log(arrow3(5,5));
// //and we want to return object 
// const arrow4=(num1,num2)=>({username:"fahad"})
// console.log(arrow4());//this is how you return an object
function someFunction(param1,parem2,...parem3) {
    console.log(param1,parem2,parem3);
   }
   someFunction("hi", "there!", "How are you?","asdf","wertyuio");