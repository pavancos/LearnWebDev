let number = [1, 5, 2, 7, 11, 28];
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) 
    if (n % i == 0)
        return false;
  return true;
}
let prime = number.filter((e) => {
  if (isPrime(e)) console.log(e);
});
