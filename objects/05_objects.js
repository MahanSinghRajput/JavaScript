//de-structuring
const course = {
    courseName: "JS",
    coursePrice: 999,
    courseInstructor: "abcd"
}

/*
    if we want to use courseInstructor several times, we dont need to write
    course.courseInstructor again and again. Instead we can do ->
    const {propertyName: nameYouWant} = ObjectName
    
    this is called de-structuring
*/
const {courseInstructor: inst} = course
console.log(inst)