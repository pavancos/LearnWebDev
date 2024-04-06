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