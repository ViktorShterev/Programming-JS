function solve(num) {
    console.log(num * 2);
}

solve(5);

function printStudentDetails(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
printStudentDetails("Viktor", 25, 5);


function solveGrade(grade) {
    if(grade>=5.50) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}
solveGrade(5.0);

