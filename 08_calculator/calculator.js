const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  answer = 0;
	for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer;
};

const multiply = function(array) {
  answer = 1;
	for (let i = 0; i < array.length; i++) {
    answer *= array[i];
  }
  return answer
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num1) {
	answer = 1
  for (let i = 1; i <= num1; i++){
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
