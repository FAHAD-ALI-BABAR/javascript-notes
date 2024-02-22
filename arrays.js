// let array=[2,5,8,"fahad"];
// console.log(array[3]);//we will tell which index value to be printed

// let array1=["fahad",4,6,7,8,"2","ali"];
// console.log(array1);//we printed the whole array
// array1.push(50);//we push value to our array
// console.log(array1);//we printed the array after pushing new element in it
// array1.pop()//in this we will not give any value..bcz it will pop the last element in array
// console.log(array1);
// console.table([array1]);

// //array1.unshift(10);//this value will be inserted at the start of array...
// array1.unshift(1);
// console.log(array1);
// array1.shift();//this will remove first elemnent from array
// console.log(array1);
// console.log(array1.includes(50));//this will check whether this number is present in array or not
// console.log(array1.indexOf(8));

//now comming to imp topic...slics&splice..........
 let fahad=[1,2,3,4,5,6,7];
 console.log("A", fahad);
 let fahad1=fahad.slice(0,4);//this is the range from 0 index to 3index ..4th index not included
 console.log("B", fahad1);
 let fahad2=fahad.splice(1,4);
 console.log("after splice this :",fahad);//splice will manipulate the original array
 console.log("C", fahad2);