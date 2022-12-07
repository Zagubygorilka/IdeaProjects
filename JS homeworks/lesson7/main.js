// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname , email, phone){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
// let User1 = new User(1,'Max','Maxin','asxasxas@asxasx',1209318398123)
// let User2 = new User(2,'Vova','Xasdasd','asdas@sasd',123123123)
// let User3 = new User(3,'Eva','ASASDASD','ASDFsdfds@ASDSD',13123124124)
// let User4 = new User(4,'Jack', 'asdasd', 'asdasdas@asdasd',123123123)
// let User5 = new User(5,'Liza','Lmlanidc','asdasd@wuriert',679786765)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = []

// arr.push(User1,User2,User3,User4,User5)
// console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrFilter = arr.filter(User => User.id % 2 === 0 )
// console.log(arrFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrFilter2 = arr.sort(function (a,b){
//     return b.id-a.id
// })
// console.log(arrFilter2);

// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = [order]
//     }
// }
//
// let arrClient = []
// let Clien1 = new Client(1,'max','asdasd','asdasd@sad',3243445,['asdad','asdasd','asdsad'])
// let Clien2 = new Client(2,'Ivan','fghngfhn','afdgb@fxbf',45645645,['hmjhmj','ascascasc'])
// let Clien3 = new Client(3,'Igor','Igohsdc','jvjdnfv@okto',398767,['asdad','asdasd'])
// arrClient.push(Clien1,Clien2,Clien3)
//
// const sortClient = arrClient.sort(function (a, b){
//     if (a.order.length>b.order.length){
//         return 1
//     }
//     if (a.order.length<b.order.length){
//         return -1
//     }
//     else {return 0}
// })
// console.log(sortClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car (model, year, maxspeed, valueengine, drivername, driveryear){
//     this.model = model
//     this.year = year
//     this.maxspeed = maxspeed
//     this.valueengine = valueengine
//     this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)}
//     this.info = function (){console.log(`Mодель == ${this.model}, Pік випуску == ${this.year}, Mаксимальна швидкість == ${this.maxspeed}, Oб'єм двигуна == ${this.valueengine}`)}
//     this.increaseMaxSpeed = function (newSpeed){this.maxspeed = newSpeed}
//     this.changeYear = function (newValue){this.year = newValue}
//     this.driver = {name:drivername, age:driveryear}
//
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Main{
//     constructor (model, year, maxspeed, valueengine, drivername, driveryear){
//         this.model = model
//         this.year = year
//         this.maxspeed = maxspeed
//         this.valueengine = valueengine
//         this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)}
//         this.info = function (){console.log(`Mодель == ${this.model}, Pік випуску == ${this.year}, Mаксимальна швидкість == ${this.maxspeed}, Oб'єм двигуна == ${this.valueengine}`)}
//         this.increaseMaxSpeed = function (newSpeed){this.maxspeed = newSpeed}
//         this.changeYear = function (newValue){this.year = newValue}
//         this.driver = {name:drivername, age:driveryear}
////     }
//     }

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popeluska{
//     constructor(name, year, size) {
//         this.name = name
//         this.year = year
//         this.size = size
//     }
// }
//
// class Prince extends Popeluska{
//     constructor(name, year, size) {
//         super(name, year, size);
//     }
// }
//
// let Prince1 = new Prince('Max', 33,35)
//
// let arrPopeluska = []
// let Popeluska1 = new Popeluska('alex',23,44)
// let Popeluska2 = new Popeluska('Lena',28,39)
// let Popeluska3 = new Popeluska('Nataliya',20,35)
// let Popeluska4 = new Popeluska('Ira',21,32)
// let Popeluska5 = new Popeluska('Masha',25,40)
// arrPopeluska.push(Popeluska1,Popeluska2,Popeluska3,Popeluska4,Popeluska5)

// for (let i = 0; i < arrPopeluska.length; i++) {
//     const popeluskaElement = arrPopeluska[i];
//     if (Prince1.size === popeluskaElement.size ){
//         console.log(popeluskaElement);
//     }
//
// }

// let findpopeluska = arrPopeluska.find(Popeluska => Popeluska.size === Prince1.size)
// console.log(findpopeluska);