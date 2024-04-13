//filter
let arr=[1,2,3,4,5,6,7,8,9];
let even=arr.filter(function(item){
    return item%2==0;
});

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

let G=numbers.filter((e)=>e>50);
console.log(G);

let M=numbers.map((e)=>{
    if(e%2==0) return e+10;
    else return e+20;
});
console.log(M);

numbers.forEach((element,index)=>{
    console.log(element," -> ",index);
});

//find
let f=numbers.find((e)=>e===50);
console.log(f);

//findIndex
let fi=numbers.findIndex((e)=>e===50);
console.log(fi);

//reduce
let sum=numbers.reduce((acc,e)=>{
    return acc+e;
},0);
console.log(sum);
//without reduce
let s=0;
for(let e of numbers){
    s+=e;
}
console.log(s);
//finding small number
let small=numbers.reduce((acc,e)=>{
    if(acc<e) return acc;
    else return e;
});
//arrow
let small1=numbers.reduce((acc,e)=>acc<e?acc:e);

//emp
let employees=[
    {eno:100,sname:"Ravi",age:21,salary:2000},
    {eno:200,sname:"Bhanu",age:25,salary:5000},
    {eno:102,sname:"Vikas",age:30,salary:3000},
];

let young=employees.reduce((acc,e)=>acc.age<e.age?acc:e);
console.log(young);


employees.forEach((e)=>e.salary+5000);
console.log(employees);


let Tem=employees.filter((e)=>e.age>15 && e.age<25);
console.log(Tem);


//operations on object
//key
let obj={
    name:"P",
    age:21,
    salary:2000
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
//freeze
Object.freeze(obj);
obj.name="Raj";
console.log(obj);
//assign
let ob1={
    name:"Raj",
    age:22,
    salary:3000
};
let ob2={
    name:"Ravi",
    age:21,
    salary:2000
};
let obj3=Object.assign({},ob1,ob2);
console.log(obj3);
//create
let obj4=Object.create(obj);

//class
class Student{
    constructor(roll,name){
        this.roll=roll;
        this.name=name;
    }
    display(){
        console.log(this.roll," -> ",this.name);
    }
}
let s1=new Student(101,"Ravi");
s1.display();
let s2=new Student(102,"Raj");
s2.display();
//prototype : to add properties to class after creation of object of class.
let std1=new Student(101,"Ravi");
let std2=new Student(102,"Raj");
Student.prototype.clg="PVP";
console.log(std1);
console.log(std2);
console.log(std1.__proto__);
// console.log(std2.__proto__);
console.log(std1.toString());

let stud={
    college:"PVP",
    city:"Vijayawada",
    ph:1234567890,
    display:function(){
        console.log(this.college," -> ",this.city," -> ",this.ph);
    }
}
let st1={
    name:"Ravi",
    age:21
};
let st2={
    name:"Raj",
    age:22
};
Object.setPrototypeOf(st1,stud);
Object.setPrototypeOf(st2,stud);
console.log(st1);

//inheritance
class Parent{
    college="PVP";
    city="Vijayawada";
    ph=1234567890;
}
class Child extends Parent{
    name="Pavan";
    age=18;
}
let c=new Child();
console.log(c);
function Parent1(){
    this.college="PVP";
    this.city="Vijayawada";
    this.ph=1234567890;
}
function Child1(){
    this.name="Pavan";
    this.age=18;
}
Child1.prototype=new Parent1();
let c1=new Child1();
console.log(c1);

