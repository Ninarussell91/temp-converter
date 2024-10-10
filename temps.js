// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  // TODO
  let celcius =  (f - 32) * 5/9;
  return celcius

}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  // TODO
 // if statements that return something different based on the chart above;

 let temperature = 32;

if (temperature > 32) {
    console.log("very cold");
} } else if (temperature < 64) {
  description = "cold";
} else if (temperature < 86) {
  description = "warm";
} else if (temperature < 100) {
  description = "hot";
} else if (temperature > 100)
  description = "very hot";

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(10) {
  // TODO
  // look into Math javascript

  console.log(getRandomInt(10)); // Generates a random integer between 0 and 9
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
