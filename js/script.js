const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
      b = prompt('На сколько его оцените?', '');
      c = prompt('Один из последних просмотренных фильмов?', '');
      d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

const newArr = []

    const movie1 = 'TERMINATOR 30000'
    const movie2 = 'Titanik'
    const movie3 = 'Отчаянные домохозяйки'

    newArr.push(movie1, movie2, movie3)

    newArr.map(film => {
        console.log(film)
    })