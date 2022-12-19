let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch('http://jsonplaceholder.typicode.com/users/'+id)
    .then(users => users.json())
    .then(user => {
            let divUser = document.createElement('div')
            divUser.innerText =
 `id: ${user.id},
  name: ${user.name},
  username: ${user.username},
  email: ${user.email},
  address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} 
  geo: ${user.address.geo.lat}, ${user.address.geo.lng}`

            const button1 = document.createElement('button')
            button1.innerText = 'post of current user'
            document.body.append(divUser, button1)

            button1.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(posts => posts.json() )
                    .then(posts => {
                        for (const post of posts) {
                            const divPost = document.createElement('div')
                            divPost.innerText = `${post.title}`

                            const button2 = document.createElement('button')
                            button2.innerText = 'post info'
                            button2.onclick = function (){ open('post-deteils.html?id='+post.id)}
                            document.body.append(divPost, button2)
                        }
                    })
            }

    }
    )