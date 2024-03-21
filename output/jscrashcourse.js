// let a=[1,2,3,4];
// let b=a;
// b.pop();
// console.log(b);
// console.log(a);//this is the difference in non-primitve values
let a=123;
let b=a;
b=321;
console.log(b);
console.log(a);

//FUNCTION JB AAp apna code foran nhi chlana chahty future mn chlana chahty ho.
//jb ap apna code baar baar reuse krna chahty ho
function fahad(a=10){
    console.log(a);
}
console.log(fahad());