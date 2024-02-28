//we will discuss now foreach is is most used
const hero=["aquaman","spiderman","superman"];
// hero.forEach(function (items){     //call baclback function means a fuction with no name....and we can give any name in place of item it can be value,val1,val2,i,k,j
//     console.log(items);//and then we print the parameter
// })
// // niw do it with the arrow function
// hero.forEach((value)=>{
// console.log(value);}
// )
// //now we will make a function and then pass that function into foreach
// function marvel(val1){
//     console.log(val1);
// }
// hero.forEach(marvel);

// hero.forEach((item,index,val)=>{
//     console.log(item,index,val);
// })

const myobj=[{
    name:"fahad",
    id:"01",
},
{
    name:"ali",
    id:"02"
},
{
    name:"babar",
    id:"03"
}
]
myobj.forEach((items)=>{
    console.log(items.name);
})