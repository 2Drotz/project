"use strict";

// const result = confirm('Are your here?');

// console.log(result);

// let numberOfFilms;


// function start() {
//    numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", '2');
//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", '2');
//    }
// }

// start();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// function showMyDB(hidden) {
//    if (hidden == false) {
//       console.log(personalMovieDB);
//    }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       let user = prompt(`Ваш любимы жанр под номером, ${i}!`);
//       personalMovieDB.genres[i - 1] = user;
//    }
//    console.log(personalMovieDB);
// }
// writeYourGenres();

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const lastFilm = prompt("Один из послежних просмотренных фильмов?").trim();
//       const filmGrade = prompt("На сколько оцените его?").trim();


//       if (lastFilm != null && filmGrade != null && lastFilm != '' && filmGrade != '' && lastFilm.length < 50) {
//          personalMovieDB.movies[lastFilm] = filmGrade;
//          console.log('done');
//       } else {
//          console.log('error');
//          i--;
//       }
//    }
// }
// rememberMyFilms();


// function detecteedPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log("Просмотрено мало фильмов");
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//    } else if (personalMovieDB.count > 30) {
//       console.log("Вы киноман");
//    } else {
//       console.log("Произошла ошибка");
//    }

// }
// detecteedPersonalLevel();


// function calc(a, b) {
//    return (a + b);
// }
// console.log(calc(1, 1));


// let logger = function () {
//    console.log('Hello');
// };
// logger();


// let filter = (a, b) => {
//    return a + b;
// };
// console.log(filter(4, 66));


// const usdCurr = 28;
// const eurCurr = 32;

// function current(amount, curr) {
//    console.log(curr * amount);
// }
// current(100, eurCurr);


// function sayHello(name) {
//    return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function getMathResult(num, number) {
//    if (typeof (number) !== 'number' || number <= 0) {
//       return num;
//    }
//    let res = "";
//    for (let i = 1; i <= number; i++) {
//       if (i === number) {
//          res += `${num * i}`;
//       } else {
//          res += `${num * i}---`;
//       }

//    }
//    return res;
// }
// getMathResult(10, 0);


// const nam = 'Dima';
// console.log(nam.substr(1, 2));

// const num = "15.5";
// console.log(Math.round(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));


// function calculateVolumeAndArea(num) {
//    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//       return 'При вычислении произошла ошибка';
//    }
//    let v = Math.pow(num, 3);
//    let p = num * num * 6;
//    return `Объем куба: ${v}, площадь всей поверхности: ${p}`;
// }
// console.log(calculateVolumeAndArea(5.5));

// function getCoupeNumber(num) {
//    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//       return 'Ошибка инф';
//    } else if (num > 36 || num === 0) {
//       return 'Таких мест нет';
//    }
//    for (let i = 4; i <= 36; i = i + 4) {
//       if (num <= i) {
//          return Math.ceil(i / 4);
//       }
//    }
// }
// console.log(getCoupeNumber(35.5));



// function findMaxNumber(a, b, c, d) {
//    if (typeof (a) !== 'number' ||
//       typeof (b) !== 'number' ||
//       typeof (c) !== 'number' ||
//       typeof (d) !== 'number') {
//       return 0;
//    } else {
//       return Math.max(a, b, c, d);
//    }

// }
// console.log(findMaxNumber(35, 4, 5, 76));



// function getTimeFromMinutes(time) {
//    if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
//       return 'Ошибка, проверьте данные';
//    }
//    else if (time < 60) {
//       return `Это 0 часов и ${time} минут`;
//    }
//    let hour = Math.floor(time / 60);
//    let minits = time % 60;
//    if (hour == 1) {
//       return `Это 1 час и ${minits} минут`;
//    }
//    if (hour > 1 && hour < 5) {
//       return `Это ${hour} часа и ${minits} минут`;
//    }
//    if (hour > 5) {
//       return `Это ${hour} часов и ${minits} минут`;
//    }
// }
// console.log(getTimeFromMinutes(180));



// function fib(num) {
//    if (typeof (num) !== 'number' || num == 0 || !Number.isInteger(num)) {
//       return '';
//    } else if (num == 1) {
//       return "0";
//    }
//    let arr = [];
//    let res = "";
//    for (let i = 0; i < num; i++) {
//       if (i == 1) {
//          arr[i] = i + arr[i - 1];
//          res += `${arr[i]}`;
//       } else if (i > 0) {
//          arr[i] = arr[i - 1] + arr[i - 2];
//          res += ` ${arr[i]}`;
//       } else {
//          arr[i] = i;
//          res += `${arr[i]} `;
//       }

//    }

//    return res;
// }
// console.log(fib(22));


// function learn(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// }
// function done() {
//    console.log(`Я учу прошел курс по JS`);
// }

// learn('C#', done);

// const obj = {
//    name: 'dima',
//    age: 23,
//    pol: true,
//    type: {
//       border: 0,
//       radius: "lefts"
//    }
// };

// const { border, radius } = obj.type;
// console.log(radius);

// console.log(Object.keys(obj).length);
// for (let key in obj) {

//    if (typeof (obj[key] === "object")) {
//       for (let i in obj[key]) {
//          console.log(`Привет я ${key}, мне ${obj[key][i]}`);
//       }
//    }
//    else {
//       console.log(`Привет я ${key}, мне ${obj[key]}`);

//    }
// }


// const arr = [1, 2, 7, 3, 4];

// arr.forEach(function (item, i, arr) {
//    console.log(`${item}, ${i}, ${arr}`);
// });


// arr.pop();
// arr.push(99);
// console.log(arr);



// const str = prompt("", "");
// const product = str.split(" ");
// product.sort();
// console.log(product.join(': '));


const number = {
   a: 1,
   b: 5,
   c: 66,
   x: {
      y: 6,
      z: 7
   }
};

function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}
const newNumbers = copy(number);

newNumbers.c = 65;
newNumbers.x.z = 5;

console.log(newNumbers);
console.log(number);



const add = {
   d: 17,
   i: 20
};

console.log(Object.assign(number, add));



const oldArray = [1, 2, 34, 5];
const newArray = oldArray.slice();


newArray[1] = 'ad';

console.log(oldArray);
console.log(newArray);


const video = ['You', 'Ru', 'Tw'],
   poisk = ['YA', 'GO', 'Fire'],
   internet = [...video, ...poisk, 'mail', 'opera'];


console.log(video);
console.log(poisk);
console.log(internet);

const Arr = [1, 2, 5];
function num(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}
const nmb = num(...Arr);

const array = ['12a', 'sdfs'];

let a = [...array];
console.log(a);

const Obj = {
   a: 1,
   b: 2
};

let newObject = { ...Obj };

console.log(newObject);