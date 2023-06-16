// /*На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//  */


let userId = new URL(location.href).searchParams.get('userId')

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then((respons) => respons.json())
    .then((user) => {
        let div = document.getElementsByClassName('list1')[0]
        div.classList.add('div')
        let ul = document.createElement('ul')
        let bt = document.createElement('button')
        bt.classList.add('bt')
        bt.innerText = 'Post of current user'
        rec(user, ul)
        div.append(ul, bt)
        bt.onclick = () =>{
            fetch(`http://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then((respons) => respons.json())
                .then((posts) => {
                    let div1 = document.createElement('div')
                    div1.classList.add('div1')
                    for (const post of posts) {
                        let div2 = document.createElement('div')
                        div2.classList.add('div2')
                        let button = document.createElement('button')
                        button.classList.add('button')
                        button.innerText = 'Info'
                        let div21 = document.createElement('div')
                        div21.innerText = `TITLE - ${post.title}`
                        div21.classList.add('div21')
                        div2.append(div21, button)
                        div1.appendChild(div2)
                        document.body.appendChild(div1)
                        //7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
                        //8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
                        button.onclick = () => {
                            location.href = `post-details.html?postId=${post.id}`
                        }
                    }
                    bt.onclick = () =>{
                        document.body.removeChild(div1)
                    }
                })
        }

    })

function ulBild(key, user, ul){
    let li = document.createElement('li')
    li.innerText = `${key}:`
    let ul1 = document.createElement('ul')

    ul.appendChild(li)
    li.appendChild(ul1)
    rec(user, ul1)
}

function liBild(key, user, ul){

    let li = document.createElement('li')
    li.innerText = `${key}: ${user}`
    ul.appendChild(li)
}

function rec(user, ul){
    for (const key in user) {
        if(typeof user[key] === 'object'){
            ulBild(key, user[key], ul)
        }
        else{
            liBild(key, user[key], ul)
        }
    }

}

let bat = document.getElementById('b')
bat.onclick = () => {
    location.href = `index.html`
}




















