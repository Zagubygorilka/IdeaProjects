let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch('http://jsonplaceholder.typicode.com/users/'+id)
    .then(users => users.json())
    .then(user => {
            let div = document.createElement('div')
            div.innerText = `${user.id}`
            document.body.append(div)
        }

    )