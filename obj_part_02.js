//let combine two objects in an array
const obj1={
    name:"fahad",
    email:"some@gmail.com"
}
const obj2={
    name1:"Ali",
    email1:"any@gmail.com",
}
// const obj3=Object.assign({},obj1,obj2);//it is better to give empty parenthesis before objects.
// //in this way the empty parenthesis will ct as target and others will act as a source
// //this means all the source are storing in the target that is empty parenthesis..so it;s good practice
// //another way of doing this is by using spread function
// const obj4={...obj1,...obj2};//spread function
// console.log(obj4);

// console.table([obj3])
// console.log(Object.keys(obj2));//in this we have accessed keys of obj2
// console.log(Object.values(obj2));//in this we have accessed values of obj2
// console.log(Object.entries(obj2));//it will seprator key and their value from others in an array
console.log(obj1.hasOwnProperty("name"));//this will show whether this key exist or not