let mynum=[1,2,3,4,5,6,7,8,9]
// const a =mynum.filter((nums)=>(nums>6));
// console.log(a);
const a=mynum.filter((nums)=>{//nums is an example we can take any name in argumnet
    return nums>5  //we will use return keyword if we are doing arrow function in curly bracesotherwise it will give empty array
}
)
console.log(a);
//now study map
let mynums=[1,2,3,4,5,6,7,8,9]
const b=mynums.map((num)=>(num+10))
console.log(b);