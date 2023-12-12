const convertToCelsius = function(fah) {
  celcius = (fah-32) * 5/9;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  fah = celcius*9/5 + 32;
  return parseFloat(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
