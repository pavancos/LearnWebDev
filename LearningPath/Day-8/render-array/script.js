let arr=[10,20,30,40,50];
let ulElement = document.createElement('ul');
document.body.appendChild(ulElement);
arr.forEach((value)=>{
    let liElement = document.createElement('li');
    liElement.textContent=value;
    ulElement.appendChild(liElement);
})
// Selecting the elements
const addNum = document.querySelector('.addNum');
// Adding event 
addNum.addEventListener('click', function addNumber(){
    let liElement = document.createElement('li');
    liElement.textContent=Math.floor(Math.random()*100);;
    ulElement.appendChild(liElement);
});
