function solve(input) {

    let heroes = [];

    for (const line of input) {
        
        let hero = line.split(" / ");
        let heroName = hero[0];
        let heroLevel = hero[1];
        let heroItems = hero[2];

        let object = {
            Hero: heroName,
            level: heroLevel,
            items: heroItems,
        };
        
        heroes.push(object);
    }
    
    function compare(a, b) {
        return a.level - b.level;
    }

    heroes.sort(compare);

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);