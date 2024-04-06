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

let student={
    name:'Pavan',
    age:18,
    city:'VJA',
    marks:{
        maths:90,
        science:80,
        english:85
    },
    getAvg:function(){
        return (this.marks.maths+this.marks.science+this.marks.english)/3;
    }
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.marks);
console.log(student.marks.maths);
console.log(student.marks.science);
console.log(student.marks.english);
console.log(student.getAvg());

//this key word
let stud={
    name:'Pavan',
    age:18,
    city:'VJA',
    marks:{
        maths:90,
        science:80,
        english:85
    },
    getMarks:function(){
        return this.marks;
    },
};

console.log(stud.getMarks());
console.log(stud.getMarks().maths);

function call(){
	console.log("Pavan");
}
function ask( X ){
	X();
}
ask(call);
//filter
//define filter: filter method creates a new array with all elements that pass the test implemented by the provided function.
let arr=[1,2,3,4,5,6,7,8,9];
let even=arr.filter(function(item){
    return item%2==0;
});

//find all the elements greater than 50
//without filter
let numbers=[10,20,30,40,50,60,70,80,90];
let gr=[];
for(let e of numbers){
    if(e>50)
        gr.push(e);
}
console.log(numbers);
console.log(gr);
let g=numbers.filter(function(item){
    return item>50;
});
console.log(gr);

let G=numbers.filter((e)=>{
    e>50;
});
console.log(G);