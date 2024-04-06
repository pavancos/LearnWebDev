let array=[1,2,3,4]
let i=0;
let newArr=array.map((e)=>{
    i+=10;
    return e+i;
});
console.log(newArr);