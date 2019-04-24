const factBucket = document.querySelector('#factorial');

function factorial(n) {
  return (n === 1) ? n : n * factorial(n - 1);
}

let factAmt = factorial(5);
factBucket.insertAdjacentHTML('beforeend', `<h3>Factorial</h3><p>${factAmt}</p>`);