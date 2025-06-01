export function getRandomArray(size = 10, max = 100) {
  const numbers = [];

  while (numbers.length < size) {
    const random = Math.floor(Math.random() * max);
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
}

export function printTraversal(title, callback) {
  const result = [];
  callback((node) => result.push(node.data));
  console.log(`${title}:`, result.join(', '));
}