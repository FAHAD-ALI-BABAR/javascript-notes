const accountid = 11;
let customername = "fahad ali babar";
var customercontact = 123456789;
customername="honey";
let accountstate;
let accountballance=null;
//customername="Honey" here we change the value of let and var (but the value of const can't be changed)
//customercontact="55555555555"
//console.log(accountid + customername + customercontact);
console.table([accountid, customername, customercontact, accountstate, accountballance]);
console.log(typeof null);
*/
let score="123abc";
console.log(typeof score);
console.log(typeof (score));
let numbertype= Number(score);//here we done datatype conversion... string will be converted to number and then store in numbertype
console.log(typeof numbertype);
console.log(numbertype);
//console.table([accountid, customername, customercontact, accountstate, accountballance,numbertype])
//now lets suppose if we store null in score then what will happen ...lets check


let scoore=null;
console.log(typeof scoore);
console.log(typeof (scoore));
let numbertype1= Number(scoore);//here we done datatype conversion... string will be converted to number and then store in numbertype
console.log(typeof numbertype1);
console.log(numbertype1);//now it will give zero
console.table([accountid, customername, customercontact, accountstate, accountballance,numbertype1])
// below is some practice for number to boolean conversion......
let strin="faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad";
console.log(strin);
let  isloggedin=1; //if we store a something in string then output is true but if string is empty then output is false
console.log(typeof isloggedin);
let loggegin= Boolean(isloggedin);
console.log(typeof loggegin);
console.log(loggegin);//if the value converted to boolean is 1 then result is true or if the value converted is zero then false
*/