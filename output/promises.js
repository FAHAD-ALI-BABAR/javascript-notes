// this is how the promises works in javascript

// let a=new Promise(function (resolve,reject){
//    let b= Math.floor(Math.random()*10);
//    console.log(`this is random number: ${b}`);
//    if(b>=5){
//     return resolve();
//    }else{
//     return reject();
//    }
// })
// a.then(() => {
//     console.log("error is resolved");
// })
// a.catch(function(){
//     console.log("the error solution is rejected");
// })

async function user(){
   fetch("https://randomuser.me/api/")
   .then(function(raw){
     return raw.json();
   })
   .then(function(data){
    console.log(data);
   })
}
user();
    
