// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function Plosha(a,b){
//     let resalt = a * b
//     return resalt
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function Kolo(r){
//     let resalt = 3.14 * r ** 2
//     return Plosha
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function Cylinder(h,r){
//     return  2*3.14*r*(h+r)
// }
//
// console.log(Cylinder(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function Caunter(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function Paragraf(text){
//     document.write(`<p>${text}</p>`)
// }
// Paragraf('asdasdasdasd')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function Spusok(text){
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>
//     `)
// }
//
// Spusok('sxasxasxa')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function Spysok(text, number){
// document.write(`<ul>`)
//     for (let j = 0; j < number; j++) {
//        document.write(`
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
// `)
//
//     }
// document.write(`</ul>`)
// }
// Spysok('jshdkahsd', 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// function foo(){
//     document.write(`<ul>`)
//     for (let i = 0; i < arguments.length; i++){
// document.write(`<li>${arguments[i]}</li>`)}
// document.write(`</ul>`)
// }
//
// foo(true, 'asds', 123)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [{id: 1, name: 'Max', age:12}, {id: 2, name: 'Jon', age:12}]
//
// function foo (){
//     for (const mass1 of arr) {
//         document.write(`<div>${mass1.id}, ${mass1.name}, ${mass1.age} </div>`)
//     }
// }
// foo(arr)

// - створити функцію яка повертає найменьше число з масиву

// let array = [2,1,6,7,-89]
//
// function minimum(arguments){
//     let min = arguments[0]
//     for (const argument of arguments) {
//         if (argument<min){
//             min = argument;
//         }
//     }
// return min
// }
//
// console.log(minimum(array));


// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1,2,3,5]
//
// function suma(array){
//     let x = 0
//     for (const arrayElement of array) {
//         x += arrayElement
//     }
// return x
// }
//
//
// console.log(suma(array));