// const num = 1;
// const text1 = `string with value from num : ${num}`;
// // zawartość: string with value from num: 1
// const getNum = function () {
//   return num;
// };

// const text2 = `string with value from function: ${getNum()}`;
// // zawartość (dwie linie): string with value
// // from function: 1
// console.log(text1);
// console.log(text2);

// const user = {
//   firstName: 'Łukasz',
//   lastName: 'Nowak',
//   birthYear: 1990,
// };

// const createMessage = function (u) {
//   const currYear = new Date().getFullYear();
//   const message = `${u.firstName} ${u.lastName}, obchodzi w tym roku ${
//     currYear - u.birthYear
//   } urodziny!`;

//   return message;
// };
// const message = createMessage(user);
// console.log(message);

// const fn = function (arr, arg1, arg2, arg3) {
//   console.log(arr, arg1, arg2, arg3);
//   return 'abc';
// };

// const v1 = 111;
// const v2 = 222;

// const text = fn`Ciąg znaków z ${v1} oraz ${v2} i tyle!`;
// console.log(text);

// function useHtml(str, val) {
//   return `${str[0]} <b>${val}</b>${str[1]}`;
// }

// function useMarkdown(str, val) {
//   return `${str[0]} *${val}* ${str[1]}`;
// }
// const name = 'Łukasz';
// console.log(
//   useHtml`Super programista ten ${name}!`,
//   // super programista ten <b>Łukasz</b>
//   useMarkdown`Super programista ten ${name}`
//   // Super programista ten *Łukasz*!
// );

// const sumFn = function (a, b) {
//   return a + b;
// };

// const sumFnArrow = (a, b) => {
//   return a + b;
// };

// console.log(sumFn(3, 5), sumFnArrow(4, 5));

// const arr = [1, 2, 3, 4];

// arr.forEach((num, index) => {
//   console.log(num, '=>', index);
// });

// const newArr = arr.map((item, i) => {
//   return item * i;
// });

// console.log(newArr);

// const sumFn = function (a, b) {
//   return a + b;
// };

// const sumFnArrow = (a, b) => a + b;

// console.log(sumFn(3, 5), sumFnArrow(4, 5));

// const showInfoFn = function (info) {
//   console.log(info);
// };

// const showInfoFnArrow = (info) => console.log(info);
// showInfoFn('eeee');
// showInfoFnArrow('arrrrr');

// const arr = [1, 2, 3, 4];

// arr.forEach((num) => console.log(num));
// // 1
// // 2
// // 3
// // 4

// const newArr = arr.map((item) => item * 2);
// console.log(newArr);

// const liList = document.querySelectorAll('li');
// liList.forEach((item) => {
//   //[item] wskazuje na konkretne <li/>
//   item.addEventListener('click', function () {
//     // [this] wskazuje na <li/>
//     const showText = () => {
//       // kontekst dla [this]
//       // nie został zmieniony
//       console.log(this.innerText);
//       // w konsoli zobaczymy tekst
//       // kliknietego <li/>
//     };
//     showText();
//   });
// });

// const arr = [0, 1, 2, 3];
// const [a, b] = arr;
// console.log(a, b);
// // 0 1

// const obj = {
//   firstName: 'Łukasz',
//   lastName: 'Nowak',
// };

// const { firstName } = obj;
// console.log(firstName); // Łukasz

// const arr1 = [0, 1, 2, 3];
// const [a, b] = arr1;
// console.log(a, b);
// // 0 1

// let c = 0;
// [, , c] = arr;
// console.log(c);
// // 2

// const arr = [0, 1, 2, 3];

// const fn1 = function ([a, , c]) {
//   console.log(a, c);
// };

// const fn2 = ([a, , c]) => {
//   console.log(a, c);
// };

// fn1(arr); // 0 2
// fn2(arr); // 0 2

// const obj = {
//   firstName: 'Łukasz',
//   lastName: 'Nowak',
//   age: 22,
// };

// const { firstName, lastName } = obj;
// mozna to napisac tez w jednej linii

// console.log(firstName, lastName);

// const { firstName: name, lastName: secondName } = obj;

// console.log(name, secondName);

// const sayHelloFn = function ({ firstName, lastName }) {
//   console.log(firstName, lastName);
// };

// const sayHelloFnArrow = ({ firstName, lastName }) => {
//   console.log(firstName, lastName);
// };
// sayHelloFn(obj);
// sayHelloFnArrow(obj);

// const place = {
//   name: {
//     pl: 'Kraków',
//     la: 'Cracovia',
//     de: 'Krakau',
//   },
//   position: [50.061389, 19.938333],
// };

// const {
//   name: { pl: plName },
//   position: [lat, lng],
// } = place;

// console.log(`${plName} => ${lat} ${lng}`);

// const arrNums = [1, 2, 3];
// const arrBools = [true, false];

// console.log([...arrNums, ...arrBools]);
// // [1,2,3, true, false]

// const calcSum = (...nums) => {
//   return nums.reduce((acc, num) => acc + num, 0);
// };

// console.log(calcSum(1, 2, 3, 4, 5));
// // 15

// const arr = [1, 2, 3];

// const calcSum = function (a, b, c) {
//   return a + b + c;
// };

// console.log(calcSum(arr[0], arr[1], arr[2]));
// // 6

// console.log(calcSum(...arr));
// // 6

// const arr = [111, 72, 23, 51];

// console.log(
//   Math.max(...arr),
//   Math.max.apply(null, arr),
//   Math.max(arr[0], arr[1], arr[2], arr[3])
// );

// const arr = [12, 14, 16, 18];
// const newArr = [...arr];

// console.log(newArr);
// // [12, 14, 16, 18]

// console.log(arr === newArr);
// // false
// // mimo, ze zawartosc tablicy jest taka sama,
// // to operator porownania ocenia,
// // czy elementy wskazuja
// // na ten sam adres w pamieci RAM

// console.log(arr.slice());
// // [12, 14, 16, 18]
// // .slice() tez tworzy kopie tablicy
// const liList = document.querySelectorAll('li');
// // przyjmujemy ze istnieja 4 ele <li/>
// // i zawieraja odpowiednio: 1, 2, 3, 4
// const liListArr = [...liList];
// // teraz jest to tablica, ktorej elementami są
// // poszczegolne znaczniki <li/>

// const sum = liListArr.reduce((acc, item) => {
//   return acc + parseInt(item.innerText);
// }, 0);
// // poniewaz to tablica, to moge
// // wykorzystac reduce do obliczenia sumy
// console.log(sum);

// const basicData = {
//   firstName: 'Łukasz',
//   lastName: 'Nowak',
// };

// const extendedData = {
//   weight: '82kg',
//   height: '187cm',
// };

// const person = { ...basicData, ...extendedData };
// console.log(person);
// {firstName: 'Łukasz', lastName:'Nowak', weight: '82kg', height: '187cm'}

const placeA = {
  name: {
    pl: 'Kraków',
    la: 'Cracovia',
    de: 'Krakau',
  },
  position: [50.061389, 19.938333],
};

const placeB = { ...placeA };
// tworzymy kopie płytką
placeB.name.pl = 'Warszawa';
// zmieniamy wartosc dla nowego obiekktu

console.log(placeA.name.pl);
// Warszawa
// Okazuje sie, ze zmodyfikowalismy tez [placeA]
