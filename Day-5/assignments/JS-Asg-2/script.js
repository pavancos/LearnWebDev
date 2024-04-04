let a=7;
let b=18;
let c=25;
console.log(a+" "+b+" "+c)
console.log("Greatestof two: ", a>b?a:b);
console.log("Greatestof three: ", a>b?(a>c?a:c):b>c?b:c);

let n=18;
console.log(n);
console.log("Factors Of " +n+ " :")
for(let i=1;i<=n;i++)
    if(n%i==0)
        console.log(i);


console.log("Prime or Not");
let cnt=0;
for(let i=1;i<=n;i++)
    if(n%i==0)
        cnt++;
(cnt==2)?console.log(n+" is prime"):console.log(n+" is not prime");


console.log("Even factors of " +n+ " are:");
for(let i=1;i<=n;i++){
    if(n%i==0 && i%2==0){
        console.log(i);
    }
}

console.log("Sum of Digits");
let numb=1234;
console.log("The number is: "+numb);
let s=0;
for(let i=0;i<n;i++){
    s+=numb%10;
    numb=Math.floor(numb/10);
}
console.log("The sum of digits is: "+s);