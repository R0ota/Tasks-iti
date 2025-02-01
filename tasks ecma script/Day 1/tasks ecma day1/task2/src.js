let numbers;
function minMax(...numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return { max, min };
}
let test = minMax(10, 20, 30, 40);
console.log(test);
