// // let emp = {
// //     name: "John",
// //     age: 25,
// //     city: "New York",
// // }


// // JSON.stringify() method is used to convert a JavaScript object or value to a JSON string
// // let empy = JSON.stringify(emp);


// let empy = {
//     "name": "John",
//     "age": 25,
//     "city": "New York"
// }

// // JSON.parse() method is used to convert a JSON string to a JavaScript object
// let emp = JSON.parse(empy);
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts') //fetch is a method to get data from a server
    .then( res => {
        res.json() //json() method is used to convert the response to JSON
        console.log(res); //log the response
    } ) 
    .catch() //catch any errors
}
getPosts(); //call the function

//using async and await
async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}