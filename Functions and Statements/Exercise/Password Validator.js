function solve(input) {

    function isValidLength(text) {
        return input.length >= 6 && input.length <= 10;
    }
    if (!isValidLength(input)) {
        console.log("Password must be between 6 and 10 characters");
    }

    function isAlphanumerical(text) {
        let regexLettersAndNums = /^[a-zA-Z0-9]+$/gm;
        let result = regexLettersAndNums.test(text);
        return result;
    }
    if (!isAlphanumerical(input)) {
        console.log("Password must consist only of letters and digits");
    }
   
    function checkDigits(text) {
        let counter = 0;

        for (const digit of text) {
            if (!isNaN(digit)) {
                counter++;
            }
        }

        return counter >= 2;
    }
    if (!checkDigits(input)) {
        console.log("Password must have at least 2 digits");
    }

    if (isValidLength(input) && isAlphanumerical(input) && checkDigits(input)) {
        console.log("Password is valid");
    }
}