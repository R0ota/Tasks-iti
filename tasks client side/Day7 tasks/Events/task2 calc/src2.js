var answer = document.getElementById("Answer");

var currentInput = "";

function EnterNumber(value) {
  currentInput += value;
  answer.value = currentInput;
}

function EnterOperator(operator) {
  currentInput += operator;
  answer.value = currentInput;
}

function EnterEqual() {
  var result = eval(answer.value);
  currentInput = result;
  answer.value = currentInput;
  result = 0;
  currentInput = "";
}

function EnterClear() {
  answer.value = "";
  currentInput = "";
}
