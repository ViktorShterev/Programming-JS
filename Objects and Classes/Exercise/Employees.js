function solve(array) {

    let list = [];

    for (const person of array) {

        let obj = {
            name: person,
            personameNum: person.length,
        }

        list.push(obj);
    }

    for (const line of list) {
        
        console.log(`Name: ${line.name} -- Personal Number: ${line.personameNum}`);
    }
    
}
solve(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);