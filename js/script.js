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

const num = '50';

switch (num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 50:
      console.log('ОК');
      break;
   default: console.log('??');
}

let number = 50;

while (number < 55) {
   console.log(number);
   number++;
}

do {
   console.log(number);
   number++;
}
while (number < 55);

for (let i = 1; i < 10; i++) {
   console.log(i);
   for (let j = 1; j < 10; j++) {
      console.log(j);
   }
}

let result2 = "";
const lenght = 7;

for (let i = 1; i < lenght; i++) {
   for (let j = 0; j < i; j++) {
      result += "*";
   }

   result += '\n';
}

console.log(result);



for (let i = 1; i < lenght; i++) {
   for (let j = 0; j < i; j++) {
      for (let j = 0; j < i; j++) {
         result += "*";
      }
   }

   result += '\n';
}

console.log(result);

for (let i = 1; i < 11; i++) {
   let a = i % 2;
   if (a === 0) {
      console.log(i);
   }
}

let a = 0;
while (a < 16) {
   if (a % 2 !== 0) {
      console.log(a);
   }
   a++;
}

const arrayOfNumbers = [];
let j = 0;
// Пишем решение вот тут
for (let i = 5; i < 11; i++) {
   {
      arrayOfNumbers[j] = i;
   }
   j++;
}
console.log(arrayOfNumbers);
// Не трогаем
return arrayOfNumbers;


const arr = [3, 5, 8, 16, 20, 23, 50];
const results = [];
for (let i = 0; i < arr.length; i++) {
   results[i] = arr[i];
}
console.log(results);

const data = [5, 10, 'Shopping', 20, 'Homework'];

// Пишем решение вот тут
for (let i = 0; i < data.length; i++) {
   if (typeof (data[i]) === number) {
      data[i] *= 2;
   } else {
      data[i] += ' - done';
   }
}

const lines = 5;

let res = "";

for (let i = 0; i < lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      res += " ";
   }
   for (let j = 0; j < 2 * i + 1; j++) {
      res += "*";
   }
   res += "\n";
}
console.log(res);