function solve(grade) {

    let description = "";

    if (grade < 3) {
        description = "Fail";
        grade = 2;
        return console.log(`${description} (${grade})`);
    } else if (grade >= 3 && grade < 3.5) {
      description = "Poor";
    } else if (grade >= 3.5 && grade < 4.5) {
      description = "Good";
    } else if (grade >= 4.5 && grade < 5.5) {
      description = "Very good";
    } else if (grade >= 5.5) {
      description = "Excellent";
    }

    console.log(`${description} (${grade.toFixed(2)})`);
}

solve(3.33);