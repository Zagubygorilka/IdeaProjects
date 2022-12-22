const container = document.createElement('div')
container.className = 'container'

const container2 = document.createElement('div')
container2.className = 'container2'
document.body.append(container, container2)



let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch('http://jsonplaceholder.typicode.com/users/'+id)
    .then(users => users.json())
    .then(user => {
            let divUser = document.createElement('div')
            divUser.className = 'divUser'
            divUser.innerText =
 `id: ${user.id},
  name: ${user.name},
  username: ${user.username},
  email: ${user.email},
  address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} 
  geo: ${user.address.geo.lat}, ${user.address.geo.lng}`

        const buttonDiv = document.createElement('div')
        buttonDiv.className = 'buttonDiv'

        const button1 = document.createElement('button')
        button1.className = 'button1'
        button1.innerText = 'post of current user'
        buttonDiv.append(button1)
            container.append(divUser, buttonDiv )

            button1.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(posts => posts.json() )
                    .then(posts => {
                        for (const post of posts) {
                            const postInfo = document.createElement('div')
                            postInfo.className = 'postInfo'
                            container2.append(postInfo)

                            const divPost = document.createElement('div')
                            divPost.className = 'divPost'
                            divPost.innerText = `${post.title}`

                            const button2 = document.createElement('button')
                            button2.innerText = 'post info'
                            button2.onclick = function (){ open('post-deteils.html?id='+post.id)}
                            postInfo.append(divPost, button2)
                        }
                    })
            }

    }
    )