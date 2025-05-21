function fibsRec(n){
  console.log("This was printed recursively");

  if(n === 0) return [];
  if(n === 1) return [0];
  if(n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length -2];

  prev.push(next);
  return prev;
}

console.log(
  fibsRec(8)
);

// 4 - [0, 1, 1, current] 
//   (current = arr[3] = arr[2] + arr[1] = 1 + 1 = 2)
// 3 - [0, 1, current]     
//   (current = arr[2] = arr[1] + arr[0] = 1 + 0 = 1)
// 2 - [0, 1]             
// 1 - [0]
// 0 - []