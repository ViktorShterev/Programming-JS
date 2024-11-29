function solve(input) {

    let movies = [];

    for (const line of input) {

        if (line.includes("addMovie")) {
           
            let movie = line.split("addMovie ")[1];
            movies.push({ name: movie });
        
        } else if (line.includes("directedBy")) {

            let [movie, director] = line.split(" directedBy ");
            let ifMovieExists = movies.find((element) => element.name === movie);

            if (ifMovieExists) {
                ifMovieExists["director"] = director;
            }
        
        } else if (line.includes("onDate")) {

            let [movie, date] = line.split(" onDate ");
            let ifMovieExists = movies.find((element) => element.name === movie);

            if (ifMovieExists) {
              ifMovieExists["date"] = date;
            }
        }
    }
    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);