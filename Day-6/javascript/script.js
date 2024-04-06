//global scope
const a=100;
function fun(){
    //function scope
    const b=200;
    console.log(a);
    console.log(b);
    function inFun(){
        //inner function scope
        const c=300;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inFun();
}
fun();
if(true){
    //block scope
    const d=400;
    console.log(a);
    console.log(d);
    for(let i=0;i<5;i++){
        //block scope
        console.log(a);
        console.log(d);
        console.log(i);
    }
}

//hoisting
console.log(x);
var x=10;

//hoisting converts the above code to
// var x;
// console.log(x);
// x=10;

//TDZ
// console.log(y);
// let y=20;


//insertions
let array=[1,2,3,4,5];
console.log(array);
array.splice(2,0,6,7);
console.log(array);
array.push(8,9);
console.log(array);
array.unshift(0,-1);
console.log(array);

//deletion methods

array.pop();
console.log(array);
array.shift();
console.log(array);
array.splice(2,2);
console.log(array);


//object

let obj={
    name:'John',
    age:25,
    city:'New York'
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
obj.country='USA';
console.log(obj);
//for-in
for(let key in obj){
    console.log(key,obj[key]);
}
//deletyion
delete obj.city;
console.log(obj);
