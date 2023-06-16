//7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
//8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let bat = document.getElementById('b')
bat.onclick = () => {
    location.href = `index.html`
}
let postId = new URL(location.href).searchParams.get('postId')

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((respons) => respons.json())
            .then((post) => {
            let div = document.getElementsByClassName('list1')[0]
                let div1 = document.createElement('div')
                let ul = document.createElement('ul')


                div.classList.add('div')
                div.appendChild(div1)
                rec(post, ul)
                div1.appendChild(ul)
                fetch(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then((respons) => respons.json())
                    .then((post) => {
                        let div2 = document.createElement('div')
                        let div21 = document.createElement('div')
                        div2.classList.add('div21')
                        div2.classList.add('div2')
                        for (const post2 of post) {
                            let ul1 = document.createElement('ul')
                            rec(post2, ul1)
                            let div2 = document.createElement('div')
                            div2.classList.add('div2')
                            div21.classList.add('div21')
                            div2.appendChild(ul1)
                            div21.appendChild(div2)
                            document.body.appendChild(div21)
                        }
                        })
    })

function ulBild(key, posts, ul){
    let li = document.createElement('li')
    li.innerText = `${key}:`
    let ul1 = document.createElement('ul')

    ul.appendChild(li)
    li.appendChild(ul1)
    rec(posts, ul1)
}

function liBild(key, posts, ul){

    let li = document.createElement('li')
    li.innerText = `${key}: ${posts}`
    ul.appendChild(li)
}

function rec(posts, ul){
    for (const key in posts) {
        if(typeof posts[key] === 'object'){
            ulBild(key, posts[key], ul)
        }
        else{
            liBild(key, posts[key], ul)
        }
    }

}





















