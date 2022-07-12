"use strict";

// const result = confirm('Are your here?');

// console.log(result);

let numberOfFilms;


function start() {
   numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", '2');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", '2');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function showMyDB(hidden) {
   if (hidden == false) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      let user = prompt(`Ваш любимы жанр под номером, ${i}!`);
      personalMovieDB.genres[i - 1] = user;
   }
   console.log(personalMovieDB);
}
writeYourGenres();

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const lastFilm = prompt("Один из послежних просмотренных фильмов?");
      const filmGrade = prompt("На сколько оцените его?");


      if (lastFilm != null && filmGrade != null && lastFilm != '' && filmGrade != '' && lastFilm.length < 50) {
         personalMovieDB.movies[lastFilm] = filmGrade;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}
rememberMyFilms();


function detecteedPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }

}
detecteedPersonalLevel();


function calc(a, b) {
   return (a + b);
}
console.log(calc(1, 1));


let logger = function () {
   console.log('Hello');
};
logger();


let filter = (a, b) => {
   return a + b;
};
console.log(filter(4, 66));


const usdCurr = 28;
const eurCurr = 32;

function current(amount, curr) {
   console.log(curr * amount);
}
current(100, eurCurr);


function sayHello(name) {
   return `Привет, ${name}!`;
}

sayHello('Alex');

function getMathResult(num, number) {
   if (typeof (number) !== 'number' || number <= 0) {
      return num;
   }
   let res = "";
   for (let i = 1; i <= number; i++) {
      if (i === number) {
         res += `${num * i}`;
      } else {
         res += `${num * i}---`;
      }

   }
   return res;
}
getMathResult(10, 0);


const nam = 'Dima';
console.log(nam.substr(1, 2));

const num = "15.5";
console.log(Math.round(num));
console.log(parseInt(num));
console.log(parseFloat(num));
