function solve(text) {

    let regex = /[A-Z][a-z]*/gm;
    let arrMatch = text.match(regex);

    console.log(arrMatch.join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");