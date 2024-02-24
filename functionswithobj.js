//objects and arrays in functions
const user={
    name:"fahad",
    price:"100",
}
function usercart(user){
    console.log(`user name is ${user.name} and price of product is ${user.price}`);
}
console.log(usercart(user));

const newarray=[1,2,3,"fahad","ali"];
function returnvalue(newarray){
    return newarray[0];
}
console.log(returnvalue(newarray));