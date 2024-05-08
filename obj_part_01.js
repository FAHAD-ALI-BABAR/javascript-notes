//our topic is: Objects
//basically there are two ways of declaring objects.
//first one is object literals
// const user_data={
//     name:"fahad",//objects mn wo name jo k key value ha usy bhi as a string ly ga
//     "lastname":"ali",// now you will see you can't access last name with dot method
//     age:18,
//     email:"fahadali931@gmail.com",
//     contact:12345678,
//     isloggedin:true,
//     lastloggedin:["monday","tuesday","wednesday"]
// }
// console.log(user_data.name);//not effiecient way of accessing object
// console.log(user_data["name"]);
// console.log(user_data["last name"])
// console.log(user_data["lastname"]);//now you can't access last name with dot method...so this is efficient way
// console.log(user_data.lastloggedin.slice(0,2));
// //if i want to change the value
// user_data.email="rajafahadali931@gmail.com";
// console.log(user_data);
// //if i want that no one change the email then i have to freeze it
// Object.freeze(user_data);
// user_data.email="alibabar@facebook.com";
// console.log(user_data);
//make a symbols and ,access it in object and print it
// const mysymb=Symbol("ali");
// let user1={
//     [mysymb]:"fahad",//this is the way to take symbol as a key
// }
// // console.log(user1.mysymb);//now the problem is that this is not the way to access symbol becauses if you check the datatype of mysym is string not symbol
// // console.log(typeof user1.mysymb);//as you see the datatype is string not symbol
// console.log(typeof user1[mysymb]);
// console.log(user1[mysymb]);
//now make a function
const greetings=function(){
    console.log("hellow world");
}
greetings();
