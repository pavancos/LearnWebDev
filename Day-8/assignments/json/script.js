async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    for(let i =0;i<data.length;i++){
        let Tab = document.querySelector('table');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        for(let j=0;j<4;j++){
            td = document.createElement('td');
            if(j==0){
                td.innerHTML = data[i].userId;
            }
            else if(j==1){
                td.innerHTML = data[i].id;
            }
            else if(j==2){
                td.innerHTML = data[i].title;
            }
            else{
                td.innerHTML = data[i].completed;
            }
            tr.appendChild(td);
        }
        Tab.appendChild(tr);
    }
}


getPosts();