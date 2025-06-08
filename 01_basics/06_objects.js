const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "prabhat"
}
console.log(course);

const {courseInstructor} = course
console.log(courseInstructor);


const {courseInstructor: instructor} = course //  object destructing
console.log(instructor);

//{
 //   "name": "hitesh",
   // "coursename": "Js in hindi",
    //"price": "free"
//}
[
    {},
    {},
    {}
]