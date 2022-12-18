let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch('http://jsonplaceholder.typicode.com/users/'+id)
    .then(response => response.json())
    .then(value => {
        let div = document.createElement('div')
        div.innerText = `${value.id}.${value.name} ${value.username} -- ${value.email}`
        document.body.append(div)
        }

    )