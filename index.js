/*1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається
перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {

        const div = document.getElementsByClassName('list')[0]
            for (const user of users) {
                    let div1 = document.createElement('div')
                    div1.innerText = `${user.id} - ${user.name}`
                    div1.classList.add('div1')
                    div.appendChild(div1)

                    let bt = document.createElement('button')
                    bt.classList.add('bt')
                    bt.innerText = 'Info'
                    div1.appendChild(bt)

                    bt.onclick = () => {
                            location.href = `user-details.html?userId=${user.id}`
                    }
            }
})