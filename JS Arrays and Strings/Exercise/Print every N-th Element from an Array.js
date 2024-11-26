function solve(arr, step) {
    let newArr = [];

    for (let index = 0; index < arr.length; index += step) {
        
        newArr.push(arr[index]);
    }
    return newArr;
}
solve(["5", "20", "31", "4", "20"], 2);