// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }
// const greetings="fahad ali babar";
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`);
    
// }
// //map use hoty hain unique values k liye or jis order mn values inserted hain usi mn print hon gi
// let map=new Map()
// map.set("Pk","pakistan")
// map.set("USA","United States of America")
// map.set("Russ","Russia")
// //map duplicates ko print ni krta
// map.set("USA","United States of America")
// map.set("Russ","Russia")
// console.log(map);
// //now apply forof loop on it
// for (const key of map) {
//     console.log(key);//yeh to array mn de rha ha ...so alag alg values k liye 
// }
// for (const [key , values] of map) {//yhan py hm ny desstructuring ki ha loop mn
//     console.log(key,"-", values);//ab yeh alag values print hon gi
// }
// //now do it with objects
// const myobj={
//     name:"fahad",
//     id:"1"
// }
// for (const [key, values] of myobj) {
//     console.log(key,values);//this means we can't iterate objects like this
// }
//for objects we have other methods that is forin loop
// const lang={
//     py:"python",
//     cpp:"c++",
//     js:"javascript",
//     ROR:"ruby on rails"
// }
// // for (const key in lang) {
// //     console.log(key);//this will print only keys
// // }
// for (const key in lang) {
//     console.log(lang[key]);//this will print values of keys
//     console.log(`${key} ->: ${lang[key]}`);//this will print keys with their values also
// }
//now do forin loop on array
const heroes=["spiderman","batman","aquaman","superman"]
for (const key in heroes) {
    // console.log(key);//ab is tarah arrays k indexes ain gy keys mn
    console.log(heroes[key]);//ab values ain gi
}

