var sum = 0;

function getValueUser() {
  do {
    var value = Number(
      prompt("Enter a number not zero and sum not exceeds 100):")
    );
    if (isNaN(value)) {
      alert("enter numeric value");
    } else {
      sum += value;
      alert("sum is" + sum);
    }
  } while (value != 0 && sum <= 100);
  return sum;
}

getValueUser();
