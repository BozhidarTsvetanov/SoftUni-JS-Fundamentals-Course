function movies(input) {
    let movies = [];

    for (let element of input) {

        if (element.startsWith('addMovie')) {

            let token = element.split('addMovie ');
            let movieName = token[1];

            let movieObj = { name: movieName };

            movies.push(movieObj);

        } else if (element.includes('directedBy')) {

            let token = element.split(' directedBy ');
            let [movieName, movieDirector] = token;

            let movieFound = movies.find(movie => movie.name === movieName);

            if (movieFound) {
                movieFound.director = movieDirector;
            }

        } else if (element.includes('onDate')) {

            let token = element.split(' onDate ');
            let [movieName, movieDate] = token;

            let movieFound = movies.find(movie => movie.name === movieName);

            if (movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    for (let movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
