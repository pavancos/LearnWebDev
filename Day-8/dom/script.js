//access head
const head = document.head;
console.log(head);
//access body
const body = document.body;
console.log(body);

//query slector by class
const classElement = document.querySelector('.class');
console.log(classElement);
//query slector by id
const idElement = document.querySelector('#id');
console.log(idElement);
//query slector by tag
const tagElement = document.querySelector('p');
console.log(tagElement);


//access title
const title = document.title;
document.querySelector('#changeTit').addEventListener('click', function () {
    //change title
    document.title = "New Title";
}
);