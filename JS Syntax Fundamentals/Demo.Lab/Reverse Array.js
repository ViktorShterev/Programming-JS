function reverse(count, arr) {
    let reverseArr = [];
    reverseArr = arr.slice(0, count).reverse().join(" ");
    console.log(reverseArr);
}
reverse(3, [10, 20, 30, 40, 50]);