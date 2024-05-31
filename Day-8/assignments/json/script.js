async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    let Tab = document.querySelector('table');
    let table = document.querySelector('table tbody');


    let grid = document.querySelector('#Grid');
    data.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        let p = document.createElement('p');
        p.textContent = element.userId;
        card.appendChild(p);
        p = document.createElement('p');
        p.textContent = element.id;
        card.appendChild(p);
        p = document.createElement('h3');
        p.textContent = element.title;
        card.appendChild(p);
        p = document.createElement('p');
        p.textContent = element.completed;
        card.appendChild(p);
        grid.appendChild(card);
    });

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        for (let j = 0; j < 4; j++) {
            td = document.createElement('td');
            if (j == 0) {
                td.textContent = data[i].userId;
            }
            else if (j == 1) {
                td.textContent = data[i].id;
            }
            else if (j == 2) {
                td.textContent = data[i].title;
            }
            else {
                td.textContent = data[i].completed;
            }
            tr.appendChild(td);
        }
        Tab.appendChild(tr);
    }
}

getPosts();