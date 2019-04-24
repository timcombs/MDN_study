const fibBucket = document.querySelector('#fibonnaci');

function fibonnaci(n) {
  // fib(n) = fib(n-1) + fib(n-2) but the following is too slow
  // return (n === 1 || n === 2) ? 1 : fibonnaci(n - 1) + fibonnaci(n - 2);
  // cases where recursion doesn't work as well as iteration

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let fibNum = fibonnaci(77);
fibBucket.insertAdjacentHTML('beforeend', `<h3>Fibonnaci</h3><p>${fibNum}</p>`);