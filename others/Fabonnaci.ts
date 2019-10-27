function fibonacci(n) {
  let n1 = 1,
    n2 = 1,
    sum = 1;
  for (let i = 3; i <= n; i += 1) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}

function memorize(f) {
  const cache = {};
  return function() {
    const key = Array.prototype.join.call(arguments, ',');
    if (key in cache) {
      return cache[key];
    } else {
      return (cache[key] = f.apply(this, arguments));
    }
  };
}

function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const factorial = memorize(n => {
  return n <= 1 ? 1 : n * factorial(n - 1);
});
