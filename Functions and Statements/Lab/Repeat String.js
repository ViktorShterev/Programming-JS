function solve(text, count) {

    let result = "";

    for (let index = 0; index < count; index++) {
        result += text;
    }
    return result;
}

solve("abc", 3);