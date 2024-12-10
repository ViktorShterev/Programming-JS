function solve(num) {

    function row(number) {

        let result = (number.toString() + " ").repeat(number);
        return result;
    }

    for (let index = 0; index < num; index++) {
        console.log(row(num));
    }
}
solve(4)