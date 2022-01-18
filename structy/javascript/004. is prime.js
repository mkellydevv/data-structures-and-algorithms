const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
    if (n % i === 0) return false;
  }

  return true;
};

module.exports = {
  isPrime,
};
