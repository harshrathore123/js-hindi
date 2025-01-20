const course = {
    coursename:"java",
    coursefees:"23000",
    instructor:"harsh"
}

console.log(course.coursefees)


//Destructured:

const {instructor:it} = course;
console.log(it);
