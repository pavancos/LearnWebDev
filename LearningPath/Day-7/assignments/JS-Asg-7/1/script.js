let str = "aaaabbababababbbbabababaaaa";
let fA = str.split('').filter(e => e === 'a').length;
let fB = str.split('').filter(e => e === 'b').length;
console.log("Frequency of 'a':", fA);
console.log("Frequency of 'b':", fB);