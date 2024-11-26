function solve(one, two, three) {
    let array = [];

    array.push(one);
    array.push(two);
    array.push(three);

    array.reverse();

    console.log(array.join(" "));
}
solve('A', 'B', 'C');