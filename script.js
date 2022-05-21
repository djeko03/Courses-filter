let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function filterCourses (from, to) {
    if(from === null) {
        return courses.filter(course => course.prices[0] <= to &&  course.prices[0] !== null || course.prices[1] <= to &&  course.prices[1] !== null)
    } else if(to === null) {
        return courses.filter(course => course.prices[0] >= from || course.prices[1] >= from)
    } else {
        return courses.filter(course => course.prices[0] >= from && course.prices[0] <= to || course.prices[1] >= from && course.prices[1] <= to)
    }
}

let requiredRange1 = filterCourses(null, 200)
let requiredRange2 = filterCourses(100, 350)
let requiredRange3 = filterCourses(200, null);


console.log(requiredRange1);
console.log(requiredRange2);
console.log(requiredRange3);
