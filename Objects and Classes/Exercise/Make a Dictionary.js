function solve(input) {

    let dictionary = {};

    for (const string of input) {
        
        let property = JSON.parse(string); 

        let name = Object.keys(property).toString();
        let definition = Object.values(property).toString();

        if (!dictionary.hasOwnProperty(name)) {
            dictionary["term"] = name;
            dictionary["description"] = definition;
        } else {
            dictionary[name] = definition;
        }      
    }

    

    for (const key in dictionary) {
      console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}
solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ])