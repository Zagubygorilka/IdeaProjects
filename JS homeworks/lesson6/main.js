// - Знайти та вивести довижину настипних стрінгових значень
// let x = 'hello world'
// let y = 'lorem ipsum'
// let z = 'javascript is cool'
//
// console.log(x.length);
// console.log(y.length)
// console.log(z.length)

// - Перевести до великого регістру наступні стрінгові значення
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trimEnd());
// console.log(str.trimStart());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// const stringToarray = (str) => str.split(' ')
// console.log(stringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити
// всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let arrTostring = arr.map(value => value.toString())
// console.log(arrTostring);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// let sortNums = (direction, arr) =>{
//     if (direction === "ascending"){
//         arr.sort(
//             (a, b) =>{return a-b}
//                     )
//     }
//     else if  (direction === 'descending'){
//         arr.sort(
//             (a, b) => {return b-a}
//         )    }
//     return arr
// }
//
// console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort(function (a, b){
//     return a.monthDuration-b.monthDuration
// })
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filter);

// описати колоду карт

// let deck = [
//     {cardSuit:'Spade', value: 6, color:'Black'},
//     {cardSuit:'Clubs', value: 6, color:'Black'},
//     {cardSuit:'Hearts', value: 6, color:'Red'},
//     {cardSuit:'Diamonds', value: 6, color:'Red'},
//     {cardSuit:'Spade', value: 7, color:'Black'},
//     {cardSuit:'Clubs', value: 7, color:'Black'},
//     {cardSuit:'Hearts', value: 7, color:'Red'},
//     {cardSuit:'Diamonds', value: 7, color:'Red'},
//     {cardSuit:'Spade', value: 8, color:'Black'},
//     {cardSuit:'Clubs', value: 8, color:'Black'},
//     {cardSuit:'Hearts', value: 8, color:'Red'},
//     {cardSuit:'Diamonds', value: 8, color:'Red'},
//     {cardSuit:'Spade', value: 9, color:'Black'},
//     {cardSuit:'Clubs', value: 9, color:'Black'},
//     {cardSuit:'Hearts', value: 9, color:'Red'},
//     {cardSuit:'Diamonds', value: 9, color:'Red'},
//     {cardSuit:'Spade', value: 10, color:'Black'},
//     {cardSuit:'Clubs', value: 10, color:'Black'},
//     {cardSuit:'Hearts', value: 10, color:'Red'},
//     {cardSuit:'Diamonds', value: 10, color:'Red'},
//     {cardSuit:'Spade', value: 'Jack', color:'Black'},
//     {cardSuit:'Clubs', value: 'Jack', color:'Black'},
//     {cardSuit:'Hearts', value: 'Jack', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
//     {cardSuit:'Spade', value: 'Queen', color:'Black'},
//     {cardSuit:'Clubs', value: 'Queen', color:'Black'},
//     {cardSuit:'Hearts', value: 'Queen', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
//     {cardSuit:'Spade', value: 'King', color:'Black'},
//     {cardSuit:'Clubs', value: 'King', color:'Black'},
//     {cardSuit:'Hearts', value: 'King', color:'Red'},
//     {cardSuit:'Diamonds', value: 'King', color:'Red'},
//     {cardSuit:'Spade', value: 'Ace', color:'Black'},
//     {cardSuit:'Clubs', value: 'Ace', color:'Black'},
//     {cardSuit:'Hearts', value: 'Ace', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Ace', color:'Red'},
//     {value: 'Joker', color: 'Red'},
//     {value: 'Joker', color: 'Black'}
// ];

// - знайти піковий туз
// deck.find(value => value.value === 'Ace' && value.color === 'Black' && value.cardSuit === 'Spade' )
// - всі шістки
// let filt = deck.filter(value => value.value === 6)
// - всі червоні карти
// deck.filter(value => value.color === 'Red')
// - всі буби
// deck.filter(value => value.cardSuit === 'Diamonds')
// - всі трефи від 9 та більше
// deck.filter(value => value.value >= 9 || value.value === 'Jack' || value.value === 'Queen' || value.value === 'King' || value.value === 'Joker'
// )


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = deck.reduce(function (acumulator, value){
//     if (value.cardSuit === 'Diamonds'){
//         acumulator.diamonds.push(value)
//     }
//     else if (value.cardSuit === 'Clubs'){
//         acumulator.clubs.push(value)
//     }
//     else if (value.cardSuit === 'Hearts'){
//         acumulator.hearts.push(value)
//     }
//     else if (value.cardSuit === 'Spade'){
//         acumulator.spades.push(value)
//     }
//     return acumulator
// },{
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
//
// console.log(reduce);