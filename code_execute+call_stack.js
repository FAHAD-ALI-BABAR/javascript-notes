//EXECUTION CONTEXT:
//1: Global execution context
//2: Functional execution context
//3: Eval execution context
let val1=10
let val2=15
function add(num1,num2){
    let total=num1+mun2
    return total
}
let result1=add(val1,val2)
let result2=add(12,13)//now make execution context of this code
/*first global execution ..jo bhi function run hona ho wo global execution sy run hota ha isy this k andar allocate kia jata ha
Memory allocation phase:
val1 ko memory allocat ki jaye gi or is k andr jaye ga undefined
val2 ko memory allocat ki jaye gi or is k andr jaye ga undefined
add function ko memory allocat ki jaye gi or is k andr jaye ga definition
result1 ko memory allocat ki jaye gi or is k andr jaye ga undefined
result2 ko memory allocat ki jaye gi or is k andr jaye ga undefined

Execution phase:

 */
