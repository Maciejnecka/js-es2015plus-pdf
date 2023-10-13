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
