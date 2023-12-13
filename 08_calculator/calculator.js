const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let sum = array.reduce((total, item)=>{
    total+=item;
    return total
  },0);
  return sum;
};

const multiply = function(array) {
  let sum = array.reduce((total, item)=>{
    total = total*item;
    return total
  },1);
  return sum;
};

const power = function(a ,b) {
	return a**b;
};

const factorial = function(a) {
	if(a == 0 || a==1){
    return 1;
  }
  return a*factorial(a-1);
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
