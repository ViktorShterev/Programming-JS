function solve(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    
    let n = arr.length / 2;
    let newArr = [];

    while (n-- > 0) {
        let smallest = sortedArr.shift();
        let biggest = sortedArr.pop();

        newArr.push(smallest);
        newArr.push(biggest);
    }
    return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);