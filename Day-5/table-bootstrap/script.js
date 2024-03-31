let a;
console.log("Value of a is: ",a);
console.log("Data type of a is: ",typeof a); // undefined
a=10;
console.log("Value of a is: ",a);
console.log("Data type of a is: ",typeof a); // 10
a="Hello";
console.log("Value of a is: ",a);
console.log("Data type of a is: ",typeof a); // Hello
a=true;
console.log("Value of a is: ",a);
console.log("Data type of a is: ",typeof a); // true
a=null;
console.log("Value of a is: ",a);
console.log("Data type of a is: ",typeof a); // null

//Data types and Fucntionns?
function fun(where){
    console.log("Function is called "+where);
}
fun("Here");
console.log(typeof fun);
//array?
let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(typeof arr);
// objects?
let obj={
    name: "Abc",
    age: 11
}
console.log(obj);
console.log(typeof obj);
//strings
let str="Hello";
console.log(str);
console.log(str[1]);
console.log(str.charAt(1));
console.log(typeof str);

