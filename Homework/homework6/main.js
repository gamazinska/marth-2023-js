//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str = ['hello world','lorem ipsum','javascript is cool' ];
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let str3 = 'hello world';
console.log(str3.toUpperCase());
let str4 = 'lorem ipsum';
console.log(str4.toUpperCase());
let str5 = 'javascript is cool';
console.log(str5.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str6 = 'HELLO WORLD';
console.log(str6.toLowerCase());
let str7 = 'LOREM IPSUM';
console.log(str7.toLowerCase());
let str8 = 'JAVASCRIPT IS COOL';
console.log(str8.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str9 =  ' dirty string   ';
console.log(str9.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str10 = 'Ревуть воли як ясла повні';
const stringToarray = (string) => string.split(' ');
let arr = stringToarray(str10);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
 const arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
 console.log(arr1.map((num) => num.toString()));


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
 let nums = [11, 21, 3];
 const sortNums = (arr, order) => {
  switch (order) {
   case 'ascending':
     return arr.sort((a, b) => a - b);
    case 'descending':
     return arr.sort((a, b) => b - a);
   }
 }
 console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));



