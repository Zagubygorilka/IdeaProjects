let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => post.json())
    .then(post => {

            const div = document.createElement('div')
            div.innerText = `
            userId: ${post.userId},
            id: ${post.id},
            title: ${post.title},
            body: ${post.body}`
            document.body.append(div)

    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(comments => comments.json())
.then(comments => {
    for (const comment of comments) {
        const div2 = document.createElement('div')
        div2.innerText =
       `"postId": ${comment.postId},
        "id": ${comment.id},
        "name": ${comment.name},
        "email": ${comment.email},
        "body": ${comment.body}`
document.body.append(div2)
    }
})