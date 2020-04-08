// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Returns PI value approximately 3.14
document.getElementById("para1").innerHTML = Math.PI;

// The max() method returns the number with the highest value.
// It takes parameter of One or more numbers to compare
document.getElementById("para2").innerHTML = Math.max(150, 30, 20, -8, -200);

// The min() method returns the number with the lowest value.
// It takes parameter of One or more numbers to compare
document.getElementById("para3").innerHTML = Math.min(150, 30, 20, -8, -200);

// The pow() method returns the value of x to the power of y.
// It Takes two parameter x the base and y the exponent.
document.getElementById("para4").innerHTML = Math.pow(2, 4);

// The sqrt() method returns the square root of a number.
document.getElementById("para5").innerHTML = Math.sqrt(64);

// The sin() method returns the sine of a number.
document.getElementById("para6").innerHTML = Math.sin(90);

// The tan() method returns a number that represents the tangent of an angle.
// It takes parameter a number representing an angle (in radians)
document.getElementById("para7").innerHTML = Math.tan(45);

// The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
// If the passed parameter is an integer, the value will not be rounded.
document.getElementById("para8").innerHTML = Math.floor(20.8);

// The log() method returns the natural logarithm (base E) of a number.
// If the parameter x is negative, NaN is returned.
// If the parameter x is 0, -Infinity is returned.
document.getElementById("para9").innerHTML = Math.log(20.8);

// The round() method rounds a number to the nearest integer.
document.getElementById("para10").innerHTML = Math.round(20.8);

// The exp() method returns the value of Ex where E is Euler's number (approximately 2.7183) and x is the number passed to it.
document.getElementById("para11").innerHTML = Math.exp(10);

// The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
document.getElementById("para12").innerHTML = Math.random();

// Return a random number between 1 and 99
document.getElementById("para13").innerHTML = Math.floor(Math.random() * 100);
