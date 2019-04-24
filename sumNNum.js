const iterBucket = document.querySelector('#iterative-sum');
const recurBucket = document.querySelector('#recursion-sum');
const arithProgBucket = document.querySelector('#arith-prog-sum');

function sumToIter(n) {
  let sum = 0;

  for (let i = 1; i < n+1; i++) {
    sum += i;
  }
  
  return sum;
}

function sumToRecurs(n) {
  if (n < 0) return 'positive numbers only';
  return (n === 1) ? n : n + sumToRecurs(n - 1);
}

function sumToArithProg(n) {
  return n * (1 + n) / 2;
}

let iterSum = sumToIter(50);
iterBucket.insertAdjacentHTML('beforeend', `<h3>Sum N Numbers Iteratively</h3><p>${iterSum}</p>`);
let recurSum = sumToRecurs(50);
recurBucket.insertAdjacentHTML('beforeend', `<h3>Sum N Numbers Recursively</h3><p>${recurSum}</p>`);
let arithProgSum = sumToArithProg(50);
arithProgBucket.insertAdjacentHTML('beforeend', `<h3>Sum N Numbers Using Arithmetic Progression</h3><p>${arithProgSum}</p>`);