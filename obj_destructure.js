//object de-structuring
const course={
    courseteacher:"fahad",
    courseprice:"1000",
    courseduration:"Month"
}
console.log(course.courseteacher);
const {courseteacher}=course;//this is the way of destructuring an object
console.log(courseteacher);
const {courseteacher: teacher}=course;//in this we have destructured the object and change the name of courseteacher to teacher and then printed it
console.log(teacher);
//above all methods are correct but you have to understand the concept of destructuring an object
