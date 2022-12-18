
// // зробити файл users.html
// // з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// //     вивести їх id + name списком та додати посилання з href = user-deteils.html?id=XXX (замість ХХХ - айді юзера)
// // при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)



fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {
            const div = document.createElement('div')
            const a = document.createElement('a')
            a.innerText = `${valueElement.id} --- ${valueElement.name} ${valueElement.username}`
            a.href = 'user-deteils.html?id='+valueElement.id
            div.appendChild(a)
            document.body.appendChild(div)

        }
    })
