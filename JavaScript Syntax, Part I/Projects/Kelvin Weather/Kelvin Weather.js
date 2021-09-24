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



