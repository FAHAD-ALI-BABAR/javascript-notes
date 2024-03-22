// let a=[1,2,3,4];
// let b=a;
// b.pop();
// console.log(b);
// console.log(a);//this is the difference in non-primitve values
// let a=123;
// let b=a;
// b=321;
// console.log(b);
// console.log(a);

// //FUNCTION JB AAp apna code foran nhi chlana chahty future mn chlana chahty ho.
// //jb ap apna code baar baar reuse krna chahty ho
// function fahad(a=10){
//     console.log(a);
// }
// console.log(fahad());
// //argument are the values we give in function declaration
// //parameters are the values we accept in function defination


// let z=[1,2,3,4,5,6,7];
// z.push(10);
// console.log(z);
// z.pop();
// console.log(z);
// z.shift();
// console.log(z);
// z.unshift(20)//it is used to add value at the start of array
// console.log(z);

// z.splice(3,3);//first parameter shows which index to remove and second parameter show from that index how many next value
// console.log(z);

// let y=12;
// var x=12;
// let a=[1,2,3,4,5];
// let b=a;
// b.pop();
// console.log(b);
// console.log(a);//now the result would be change in b and akso in a to stop this we use spread operator
// //now this will pop only from t not from r
// let r=[2,3,4,5,6,7,8]
// let t=[...r];
// t.pop();
// console.log(t);
// console.log(r);
let a=[1,2,3,4,5,6,7,8,9];
a.forEach((val)=>{
    console.log(val+5);
})
//how to delete value from object

let z={
    name:"fahad",
    age:19,
    education:"bsc"
}
console.log(z);
console.table(z)
delete z.education;
console.log(z);