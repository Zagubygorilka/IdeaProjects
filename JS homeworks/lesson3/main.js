// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt("enter number")
// if (x<0){
//     console.log("Virno");
// }
// if (x>0){
//     console.log("virno");
// }
// else {
//     console.log("Nevirno");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

// let time = +prompt("Ведіть число")
// if (time>=0 && time<15){
//     console.log("first");
// }
// else if (time>14 && time<30){
//     console.log("second");
// }
// else if (time >29 && time<45){
//     console.log("three");
// }
// else if (time>44 && time<60){
//     console.log("four");
// }
// else{
//     console.log("error");
// }
//

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("enter number")
// if (day>0 && day<11){
//     console.log("first");
// }
// else if (day>10 && day<20){
//     console.log("second");
// }
// else if (day>19 && day<32){
//     console.log("three");
// }
// else {
//     console.log("error");
// }

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt("enter weekanday")){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("error");
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt("enter number")
// let b = +prompt("enter number")
//
// if (a<=b){
//     console.log(b);
// }
// else if (a>b){
//     console.log(a);
// }
// else {
//     console.log("error");
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = null || "default"
// console.log(x);