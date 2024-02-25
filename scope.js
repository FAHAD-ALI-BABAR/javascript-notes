//local and global scope in javascript
//scope level and minihoistting

// function one(){
//     const a="afahad";
//     function two(){
//         const b="ali";
//         console.log(a);//child function can access the variable of parent function
//     }
//     //console.log(b);// it's scope level is local so can't be accessed outside the function
//     two();
// }
// one();
//---------Concept of Hoisting ---beginner level

one1(5);//isko hm function sy pehly or function k bd bhi access kr skty hain...hoisting concept
function one1(num1){
   return num1+1;
}
one1(5);//this will also execute

alpha(5);//agr hm isko function sy pehly access krein gy to error aye ga..hoisting concept 
const alpha=function(num2){
    return num2+10;
}
alpha(5);//this will execute


