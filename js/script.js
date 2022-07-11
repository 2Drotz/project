"use strict";

// const result = confirm('Are your here?');

// console.log(result);

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const lastFilm = prompt("Один из послежних просмотренных фильмов?");

const filmGrade = prompt("На сколько оцените его?");
const lastFilm2 = prompt("Один из послежних просмотренных фильмов?");

const filmGrade2 = prompt("На сколько оцените его?");

personalMovieDB.movies[lastFilm] = filmGrade;

console.log(personalMovieDB);