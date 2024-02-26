//Immediately invoked function expression(IIFE)
//why we use IIFE?
//global scope k variable sy pollution ho jati ha program mn to us pollution ko hatany k liye IIFE use krty hain

function fahad(){
    console.log("Database connected");
}
fahad();//this function is not iife

(function fahad(){//this function has name so it is named IIFE
    console.log("Database connected");
})();//now this is IIFE function(NOTE:always use semicolon after IIFE)
//syntax
//(function definition)(execution call)
//example: execution call can be written as either ways, fahad(); or ();
((name)=>{//this function doesnot have any name so it is simple IIFE function
   console.log(`Database 2 connected with ${name}`);
})("Fahad Ali Babar")