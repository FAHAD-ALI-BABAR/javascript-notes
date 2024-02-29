//primitive datatypes: are allways called by value

//example:string,number,boolean,null,undefined,symbol,bignint

//non-primitive datatypes: always called by reference
//example: object,functions,arrays

const Name= "fahad" //string
const phone= 123456789 //number
const isloggedin=true //boolean
 const ballance=null //null
 const email=undefined // or //undefined
 let emaill; //undefined

 let password= Symbol("12345")//symbol...it is mostly used for passing unique or confidential value e.g passwords etc;
 let password1= Symbol("12345")
 let bignum=123n; //for big values we use bigint
//  console.table([Name,phone,isloggedin,ballance,email,emaill,password,password1,bignum]);
 console.log(password===password1);

// var x=123;
//  x=2;
// console.log(x);
