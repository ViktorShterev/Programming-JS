function solve(input) {
    
  let regex = /#[A-Za-z]+/gm;

  let arr = input.match(regex);

  for (const word of arr) {
    let output = word.substring(1);

    console.log(output);
  }
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
