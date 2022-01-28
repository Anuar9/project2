"use strict";


// const obj = {
//     a:56
// };
                                                // ПРЯМЫХ КОНСТАНТ В JS НЕ БЫВАЕТ
// obj.a = 10;
// console.log (obj);


// cons МЕНЯТЬ НЕЛЬЗЯ


// {
//     var result = 50;
// }
                                                                                        // VAR МОБИЛЬНЫЙ ОСЫНЫН ОРНЫНДА LET ИЛИ CONST БОЛГАНДА НЕ РАБОТАЛА БЫ 
// console.log(result);







// alert('hello');

// const result = confirm("Are you here?");
// console.log(result)

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);                                                               

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));










// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);                       ИНТЕРПОЛЯЦИЯ

// const user = "Ivan";

// alert(`Привет, ${user}`);


// console.log('arr' + " - object");
// console.log(4 + +"5");
// console.log(4 + "5");

// let incr = 10,
//     decr = 10;
                                                    // ИКРЕМЕНТО И ДЕКРЕМЕНТО
// incr++;                                                                 
// decr--;

// console.log(++incr);
// console.log(--decr);


// console.log(5%2);


// = - ПРИСВАИВАНИЕ
// == - СРАВНЕНИЕ
// === - СТРОГОЕ СРАВНЕНИЕ ДАЖЕ ПО ТИПАМ ДАННЫМ СРАВНИВАЕТ




// console.log(2 + 2 * 2 !== '6');

// != - НЕ РАВЕН
// = - РАВЕН


// &&  -   И  Если только оба правдивы то только тогда true, если же один false то false
// ||  -   ИЛИ  если одна правда то будет полюбому true

// ! - оператор отрицание
// const isChecked = false,
//       isClose = false;
      
// console.log(isChecked || !isClose);


// const isChecked = true,
//       isClose = false;
      
// console.log(isChecked && isClose);



// const isChecked = true,
//       isClose = false;
      
// console.log(isChecked || isClose);


// let numberOfFilms

// function start() {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

//         while (numberOfFilms == '' || numberOfFilms == null  ||  isNaN(numberOfFilms)) {
//                 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
//         }
// }

// start();

// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };



// function rememberMyFilms() {
//         for (let i = 0; i < 2; i++) {
//                 const   a = prompt('Один из последних просмотренных фильмов?', ''),
//                         b = prompt('На сколько оцените его?', '');
        
//                 if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                         personalMovieDB.movies[a] = b;
//                         console.log('done');
//                 } else {
//                         console.log('error');
//                         i--;
//                 }
//         }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//         if (personalMovieDB.count < 10) {
//                 console.log("Посмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//                 console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//                 console.log("Вы киноман");
//         } else {
//                 console.log("Произошла ошибка");
//         }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//         if (!hidden) {
//                 console.log(personalMovieDB);
//         }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//         for(let i = 1; i <= 3; i++) {
//                 personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
// }

// writeYourGenres();

// (personalMovieDB.count <= 10) ? console.log('Посмотрено довольно мало фильмов') : console.log(),
// (personalMovieDB.count < 30) ? console.log('Вы классический зритель') : console.log(),
// (personalMovieDB.count >= 30) ? console.log('Вы киноман') : console.log();





// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// Тернарный оператор
// (num == 50) ? console.log('Ok!') : console.log('Error');      

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
        // break;
//         continue;
//     }

//     console.log(i);
// }








// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//     break;
// }


// function ClickMe(){
//     prompt('сколько раз ты это использовал?');
    
//     let x = 0
    
//     if (x > 50 && x < 50)  {
//         alert('неверно');
//     } else {
//         alert('верно');
//     }
// };




// ФУНКЦИИ




// let num = 20;

// function showFirstMessage(text) {
//         console.log(text);
//         let num = 10;
//         console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);




// function calc(a, b) {
//         return (a + b);
// }

// console.log(calc(5, 4));
// console.log(calc(30, 40));
// console.log(calc(15, 15));




// function ret() {
//         let num = 50;
//         return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);






// const logger = function () {
//         console.log("Hello");
// };
                                                                // FUNCTION EXPRESSION
                                                                // СОЗДАЕТСЯ ТОЛЬКО ТОГДА, КОГДА ДОХОДИТ ПОТОК КОДА,
                                                                // МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЬЯВЛЕНИЯ
// logger();






                                                                // СТРЕЛОЧНАЯ ФУНКЦИЯ
// const calc = (a, b) => {
//         console.log('1');
//         return a + b;
// };






// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

// const str = "test";

// const arr = [1, 2, 4];


// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);




// const fruit = "Some fruit";
                                                                // ПОИСК СТРОКИ И С КАКОЙ ПОЗИЦИИ ОНО НАЧИНАЕТСЯ
// console.log(fruit.indexOf("fruit"));


// const logg = "Hello world";
                                                                // ОТРЕЗАТЬ СТРОКУ
// console.log(logg.slice(6, 11));
                                                                // ТАКЖЕ МОЖНО ОТРЕЗАТЬ СТРОКУ И МОЖНО НАЧАТЬ С БОЛЬШЕГО НО НЕ ПОДДЕРЖИВАЕТ ОТРИЦАТЕЛЬНЫЙ ВАРИАНТ
// console.log(logg.substring(6, 11));
                                                                // СПРАШИВАЕТ СКОЛЬКО СИМВОЛОВ НЕОБХОДИМА ВЫРЕЗАТЬ
// console.log(logg.substr(6, 5));



                                                                // ОКРУГЛЕНИЕ ЧЕРЕЗ MATH
// const num = 12.2;
// console.log(Math.round(num));


                                                                // PARSEINT ДЕЛАЕТ ИЗ СТРОКИ В ЧИСЛО ТАКЖЕ ОКРУГЛЯЕТ
// const test = "12.2px";
// console.log(parseInt(test));
                                                                // PARSEFLOAT ТОЖЕ САМОЕ НО НЕ ОКРУГЛЯЕТ
// console.log(parseFloat(test));






// function first() {
//         // do something
//         setTimeout(function() {
//                 console.log(1);
//         }, 500);
// }

// function second() {
//         console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//         console.log(`Я учу: ${lang}`);
//         callback();
// }

// function done() {
//         console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);





