console.log(user_data.name);//not effiecient way of accessing object
// console.log(user_data["name"]);
// console.log(user_data["last name"])
// console.log(user_data["lastname"]);//now you can't access last name with dot method...so this is efficient way
// console.log(user_data.lastloggedin.slice(0,2));
// //if i want to change the value
// user_data.email="rajafahadali931@gmail.com";
// console.log(user_data);
// //if i want that no one change the email then i have to freeze it
// Object.freeze(user_data);
// user_data.email="alibabar@facebook.com";
// console.log(user_data);