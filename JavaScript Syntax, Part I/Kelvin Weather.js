/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.
*/


// The forecast today is 293 in Kelvin
const kelvin = 293;
//Convert from kelvin to celsius
let celsius = kelvin - 273;
//Convert to Fahrenheit
let fahrenheit = (celsius *(9/5) + 32);
//Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
//Print the result to the screen
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



