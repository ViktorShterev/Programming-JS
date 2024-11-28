function solve(jsonText) {

    let object = JSON.parse(jsonText);

    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');