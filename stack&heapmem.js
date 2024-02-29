//primitive daatypes will go to stack
let userone="fahad"
let anotheruser=userone
 anotheruser="Ali"
 console.log(userone);
 console.log(anotheruser);
//non-primitive datatypes will go to heap
 let obj1={
    email:"fahad@google.com",
    id:"fahad.upi",
 }
 console.log(obj1.email);
 let obj2=obj1;
 obj2.email="alibabar@google.com";
 obj2.id="ali.upi";
 console.log(obj1.email,obj1.id);//in non-primitive datatype changes will be made in original instead of copy
 console.log(obj2.email,obj2.id);