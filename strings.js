//strings
let name="fahad";
let lname='ali';
console.log(name+lname);//this is old way...not recommended
console.log(name , lname);//this is old way and not recoomended
console.log(`my name is ${name} and my last name is ${lname}`);//this is the modern and effiecient way
console.log(`${name} ${lname}`);//this is modern and effiecient way
//now we will see new and effiecient way of declaring strings
let myname= new String("fahad");
console.log(myname);
console.log(myname[0]);//this will tell me at 0 index what character it is
console.log(myname.length);//this will tell you the length of string
console.log(myname.charAt('2'));//this will tell us which character is at index 2
console.log(myname.indexOf("d"));//this will tell us our character is at which index
console.log(myname.toUpperCase(myname));
console.log(myname.substring(0,4));//this will give us the name starting from index 0 to index 3
console.log(myname.slice(-4,5));//this will print from back that's why we have given neg value

let fahad="     new_user     "
console.log(fahad);//this will print the string with spaces
console.log(fahad.trim());//this will remove spaces in string..mostly used in forms
console.log(fahad.split("_"));//this method has split string on the basis of underscore

let url="https://github.com%001.com";
console.log(url.replace("%001", "ppp"));//this has replaced %001 value with ppp.
console.log(url.includes("git"));//this will check whether git is present in my url or not