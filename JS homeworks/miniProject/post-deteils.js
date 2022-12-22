const container = document.createElement('div')
container.className = 'container'

const container2 = document.createElement('div')
container2.className = 'container2'
document.body.append(container, container2)

let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => post.json())
    .then(post => {

            const div = document.createElement('div')
            div.className = 'infoPost'
            div.innerText = `
            userId: ${post.userId},
            id: ${post.id},
            title: ${post.title},
            body: ${post.body}`
            container.append(div)

    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(comments => comments.json())
.then(comments => {
    for (const comment of comments) {
        const div2 = document.createElement('div')
        div2.className = 'infoComments'
        div2.innerText =
       `postId: ${comment.postId},
        id: ${comment.id},
        name: ${comment.name},
        email: ${comment.email},
        body: ${comment.body}`
container2.append(div2)
    }
})