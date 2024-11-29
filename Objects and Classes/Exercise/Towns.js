function solve(input) {

    for (const city of input) {
        
        let line = city.split(" | ");

        cityName = line[0];
        cityLatitude = Number(line[1]);
        cityLongitude = Number(line[2]);

        let obj = {
          town: cityName,
          latitude: cityLatitude.toFixed(2),
          longitude: cityLongitude.toFixed(2),
        };

        console.log(obj);
    }
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);