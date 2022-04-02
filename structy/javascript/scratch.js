const hash = (str) => {
  let encrypted = 0;

  let num = 0;

  for (let char of str) {
    encrypted += (char.charCodeAt() << num) % 5;
  }

  return encrypted;
};

console.log(hash('oof'));
