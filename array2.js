let marvel=["thor","ironman","capt america","dr strange"];
let dc_hero=["superman","batman","aquaman"];
marvel.push(dc_hero);
console.log(marvel);//problem in this is it is taking a second array as a single element
console.log(marvel[4][2]);//this is to access the 2nd element of 4th element 
marvel.concat(dc_hero);
console.log(marvel);
console.table([marvel]);//this is the perfect example to understand the concat of 2 arrays
//to tackle this issue we will push our concat array to new array
let new_array=marvel.concat(dc_hero);
console.log(new_array);
console.table([new_array]);//now you will see that in new array the the previous arrays have been concatenated
//new way of doing this is by using spread function
let new_arr=[...marvel,...dc_hero];//ab yeh arrays nhi rhi blky in k element ab individually behave krein gy
console.log(new_arr);
console.table([new_arr]);//this is better than concatenation
//now lets suppose we take arrays inside an array
let old_array1=[1,2,3,4,[3,6,8],5,[9,"fahad",["ali,10,11,29,",23,24,26,["babar"]]]];
let new_array1=old_array1.flat(Infinity);//this flat will merge all nested arrays inside a single array
console.log(new_array1);
console.table([new_array1]);
console.log(Array.from("fahad"));//this will convert the string to array
let a=500;
let b=100;
let c=400;
console.log(Array.of(a,b,c));
console.log(Array.isArray("fahad Ali Babar"));//to check whether its array or not



