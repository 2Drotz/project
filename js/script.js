"use strict";

// const result = confirm('Are your here?');

// console.log(result);


// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//    start: function () {
//       personalMovieDB.count = prompt("Сколько фильмов вы уже просмотрели?", '2');
//       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//          personalMovieDB.count = prompt("Сколько фильмов вы уже просмотрели?", '2');
//       }
//    },
//    rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//          const lastFilm = prompt("Один из послежних просмотренных фильмов?").trim();
//          const filmGrade = prompt("На сколько оцените его?").trim();


//          if (lastFilm != null && filmGrade != null && lastFilm != '' && filmGrade != '' && lastFilm.length < 50) {
//             personalMovieDB.movies[lastFilm] = filmGrade;
//             console.log('done');
//          } else {
//             console.log('error');
//             i--;
//          }
//       }
//    },
//    showMyDB: function (hidden) {
//       if (hidden == false) {
//          console.log(personalMovieDB);
//       }
//    },
//    detecteedPersonalLevel: function () {
//       if (personalMovieDB.count < 10) {
//          console.log("Просмотрено мало фильмов");
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          console.log("Вы классический зритель");
//       } else if (personalMovieDB.count > 30) {
//          console.log("Вы киноман");
//       } else {
//          console.log("Произошла ошибка");
//       }
//    },
//    toggleVisibleMyDb: function () {
//       if (personalMovieDB.privat) {
//          personalMovieDB.privat = false;
//       } else {
//          personalMovieDB.privat = true;
//       }
//    },
//    writeYourGenres: function () {
//       for (let i = 1; i < 2; i++) {
//          let genres = prompt(`Введите любимые жанры через запятую`).toLowerCase();

//          if (genres === '' || genres == null) {
//             console.log('Вы ввели некорректные данные или вообще');
//             i--;
//          } else {
//             personalMovieDB.genres = genres.split(", ");
//             personalMovieDB.genres.sort();
//          }
//       }
//       personalMovieDB.genres.forEach((item, i) => {
//          console.log(`Любимы жанр ${i + 1} - это ${item}`);
//       });
//    }
// };


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


// const number = {
//    a: 1,
//    b: 5,
//    c: 66,
//    x: {
//       y: 6,
//       z: 7
//    }
// };

// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
//    return objCopy;
// }
// const newNumbers = copy(number);

// newNumbers.c = 65;
// newNumbers.x.z = 5;

// console.log(newNumbers);
// console.log(number);



// const add = {
//    d: 17,
//    i: 20
// };

// console.log(Object.assign(number, add));



// const oldArray = [1, 2, 34, 5];
// const newArray = oldArray.slice();


// newArray[1] = 'ad';

// console.log(oldArray);
// console.log(newArray);


// const video = ['You', 'Ru', 'Tw'],
//    poisk = ['YA', 'GO', 'Fire'],
//    internet = [...video, ...poisk, 'mail', 'opera'];


// console.log(video);
// console.log(poisk);
// console.log(internet);

// const Arr = [1, 2, 5];
// function num(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }
// const nmb = num(...Arr);

// const array = ['12a', 'sdfs'];

// let a = [...array];
// console.log(a);

// const Obj = {
//    a: 1,
//    b: 2
// };

// let newObject = { ...Obj };

// console.log(newObject);


// const numbers = [-1, 2, -3, 4, -5, 6, -7, 0, -8];

// const signCount = function (array) {
//    let result = 0;
//    for (let i = 0; i < array.length; ++i) {
//       if (Math.sign(array[i]) !== 1 && array[i] !== 0) {
//          ++result;
//       }
//    }
//    return result;
// };
// console.log(signCount(numbers));


// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%'
//       },
//       exp: '1 month'
//    },
//    showAgeAndLangs: function (plan) {
//       const { age } = plan;
//       const { languages } = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;

//       languages.forEach(function (lang, i) {
//          str += `${lang.toUpperCase()} номер ${i}`;
//       });

//       return str;
//    }
// };

// let aasd = personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// console.log(aasd);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    let str = '';
//    arr.length === 0 ? str = "Семья пуста" : str = 'Семья состоит из:';

//    arr.forEach(function (member) {
//       str += ` ${member}`;
//    });
//    return str;
// }

// console.log(showFamily(family));



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    arr.forEach(function (city) {
//       let lower = city.toLowerCase();
//       console.log(`${lower}`);
//    });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {

//    if (typeof (str) !== 'string') {
//       return "Ошибка!";
//    }
//    const res = str.split("").reverse().join("");
//    return res;
// }
// console.log(reverse(someString));



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//    let str = '';
//    arr.length === 0 ? str = "Нет доступных валют" : str = 'Доступные валюты:\n';

//    arr.forEach(function (curr) {
//       if (curr !== missingCurr) {
//          str += `${curr}\n`;
//       }
//    });
//    return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// const soldier = {
//    health: 100,
//    armor: 150
// };

// const dima = Object.create(soldier);
// console.log(dima.armor);



// const shoppingMallData = {
//    shops: [
//       {
//          width: 10,
//          length: 5
//       },
//       {
//          width: 15,
//          length: 7
//       },
//       {
//          width: 20,
//          length: 5
//       },
//       {
//          width: 8,
//          length: 10
//       }
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000
// }

// function isBudgetEnough(data) {
//    let p = 0;
//    let v = 0;

//    data.shops.forEach(shop => {
//       p += shop.width * shop.length;
//    });

//    v = data.height * p;
//    if (data.budget - (v * data.moneyPer1m3) >= 0) {
//       return 'Бюджета достаточно';
//    } else {
//       return 'Бюджета недостаточно';
//    }
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {

//    arr.sort();
//    let one = [];
//    let two = [];
//    let three = [];
//    let res = [];



//    for (let i = 0; i < arr.length; i++) {
//       if (i < 3) {
//          one.push(arr[i]);
//       } else if (i < 6) {
//          two.push(arr[i]);
//       } else if (i < 9) {
//          three.push(arr[i]);
//       } else {
//          res.push(arr[i]);
//       }
//    }
//    return [one, two, three, `Оставшиеся студенты ${res.length === 0 ? '-' : res.join(", ")}`]
// }
// console.log(sortStudentsByGroups(students));


// for (let i = 1; i < 4; i++) {
//    for (let j = 1; j < 6; j++) {
//       let num = 3;
//       console.log(num);
//    }
// }


// let one = ['Hello', 'Привет'];
// let two = { ru: 'Мир', eng: 'World' };
// function foo(a, b) {
//    const [first] = a;
//    const { eng } = b;

//    return `${first}  ${eng} `;
// }

// const result = foo(one, two);
// console.log(result);


// const restorantData = {
//    menu: [
//       {
//          name: 'Salad Caesar',
//          price: '14$'
//       },
//       {
//          name: 'Pizza Diavola',
//          price: '9$'
//       },
//       {
//          name: 'Beefsteak',
//          price: '17$'
//       },
//       {
//          name: 'Napoleon',
//          price: '7$'
//       }
//    ],
//    waitors: [
//       { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
//    ],
//    averageLunchPrice: '20$',
//    openNow: true
// };

// function transferWaitors(data) {
//    const copy = Object.assign({}, data);

//    // Нам просто нужно менять весь массив данных,
//    // а не лезть напрямую менять каждого из сотрудников
//    // Так как это верхний уровень объекта, то значение
//    // будет меняться только у копии
//    copy.waitors = [{ name: 'Mike', age: 32 }];
//    return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData.waitors);


// const box = document.getElementById('box'),
//    btns = document.getElementsByTagName('button'),
//    circle = document.getElementsByClassName('circle'),
//    heart = document.querySelectorAll('.heart'),
//    one = document.querySelector('.heart');
// console.log(box);






// const links = document.querySelector('.links');


// links.addEventListener('click', (e) => {
//    e.preventDefault();
//    console.log('good');
// }, { once: true });
// // btn.addEventListener('mouseenter', () => {
// //    console.log("привет!");
// // });

// const btns = document.querySelectorAll('button');

// const func = (e) => {
//    e.preventDefault();
//    console.log(e);
// };

// btns.forEach((btnss) => {
//    btnss.addEventListener('click', func, { once: true });
// });
// console.log(document.querySelector('.overlay').Child);

// console.log(document.querySelector("[data-btn = '3']").parentElement);
// for (let node of document.body.childNodes) {
//    if (node.nodeName == "#text") {
//       continue;
//    }
//    console.log(node);
// }


// function factorial(n) {
//    if (typeof (n) !== 'number' || !Number.isInteger(n)) {
//       return "Ошибка, проверьте данные";
//    }
//    if (n >= 1) {
//       return n * factorial(n - 1);
//    } else {
//       return 1;
//    }
// }
// console.log(factorial(4));





document.addEventListener('DOMContentLoaded', () => {
   const rec = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      genre = poster.querySelector('.promo__genre'),
      addForm = document.querySelector('.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type = "checkbox"]'),
      btnAdd = addForm.querySelector('button');

   addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let newFilm = addInput.value;
      const favorite = checkbox.checked;

      if (newFilm) {
         if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
         }
         if (favorite) {
            console.log('Добовляем любимы фильм');
         }
         movieDB.movies.push(newFilm);
         sortArray(movieDB.movies);

         createMovieList(movieDB.movies, movieList);
      }


      event.target.reset();

   });

   const movieDB = {
      movies: [
         'Логан',
         "Паук",
         "Человек",
         "Книга",
         "Хоббит"
      ]
   };

   const sortArray = (arr) => {
      arr.sort();
   };
   const makeChanges = () => {
      genre.textContent = 'драма';
      poster.style.backgroundImage = 'url(../img/bg.jpg)';
   };



   const deleteAdv = (array) => {
      array.forEach(item => {
         item.remove();
      });
   };

   function createMovieList(films, parent) {
      parent.innerHTML = '';
      sortArray(films);

      films.forEach((film, i) => {
         parent.innerHTML += `
         <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
         </li>`;
      });

      document.querySelectorAll('.delete').forEach((btn, i) => {
         btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
         });
      });
   }
   createMovieList(movieDB.movies, movieList);
   deleteAdv(rec);
   makeChanges();

   btnAdd.addEventListener('touchstart', () => {
      console.log('start');
   });

   btnAdd.addEventListener('touchmove', (e) => {
      console.log(e.touches[0].pageY);
   });
   btnAdd.addEventListener('touchend', (e) => {
      console.log(e.type);
      console.log('end');
   });
});


let a = 4;
let b = 5;
console.log((a ?? 200) * (b ?? 200));

function lovefunc(flower1, flower2) {

   return flower1 % 2 == 0 && flower2 % 2 == 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0 ? false : true;
}
console.log(lovefunc(4, 4));



var summation = function (num) {
   let res = 0;
   for (let i = 0; i <= num; i++) {
      res += i;
   }
   return res;
};
console.log(summation(2));


function findSmallestInt(args) {
   let min = args[0];

   args.forEach(i => {
      if (i < min) {
         min = i;
      }
   })

   return min;
}
console.log(findSmallestInt([288, 1, 112, 53, 64, 2]));



let ada = [1, 2, 3];
console.log(ada[3]);


function squareSum(numbers) {
   let res = 0;
   numbers.forEach((item) => {
      res += item * item;
   });
   return res;
}
console.log(squareSum([1, 2, 3]));


function nbYear(p0, percent, aug, p) {
   // Initialise array.   
   var finalCatch = [];
   // Early conversion.
   var percent = percent / 100;
   // Looping through.
   for (var p0; p0 < p; p0 += p0 * percent + aug) {
      currValue = p0 + p0 * percent + aug;
      finalCatch.push(currValue);
   }

   return finalCatch.length;
}


function nbYear(p0, percent, aug, p) {
   let year = 0;
   for (p0; p0 <= p; p0 += Math.min(p0 * (percent / 100)) + aug) {
      year++;
   }
   return year;
}
console.log(nbYear(1500, 5, 100, 5000));

const obj = {
   name: 'asd',
   surname: 'asdasdfsdf',
   age: 20
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


function repeatStr(n, s) {
   let string = '';
   for (let i = 0; i < n; i++) {
      string += `${s}`;
   }
   return string;
}
console.log(repeatStr(3, '*'));

function makeNegative(num) {
   return num <= 0 ? num : num *= -1;
}
console.log(makeNegative(0));

const sss = [
   { a: 5 },
   { b: 6 },
   { n: 7 }
];
const map = new Map();
const budget = [1, 2, 3];
sss.forEach((item, i) => {
   map.set(item, budget[i]);
});


console.log(map.size);

// set
const arr = ['dima', 'adnna', 'oleg', 'dasd', 'oleg'];

function unifiq(array) {
   let set = new Set(array);
   set.delete('dima');
   return Array.from(set);
}
console.log(unifiq(arr));

const sameBig = BigInt(123333333333333333333333333333);

console.log(1n + 1n);

const bigint = 3n;
const num = 3;
console.log(bigint + BigInt(num));
console.log(Number(bigint) + num);