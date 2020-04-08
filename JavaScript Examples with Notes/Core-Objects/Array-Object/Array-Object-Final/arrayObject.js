// JavaScript arrays are used to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time and you can access the values by referring to an index number.

// Using an array literal is the easiest way to create a JavaScript Array.
var cars = ["Audi", "BMW", "Mercedes", "Jaguar"];

// the full array can be accessed by referring to the array name  
document.getElementById("s1").innerHTML = cars;

// You access an array element by referring to the index number.
// Array indexes start with 0. [0] is the first element. [1] is the second element so on.
document.getElementById("s2").innerHTML = cars[0];
document.getElementById("s3").innerHTML = cars[1];

// Using the JavaScript Keyword new Array() also creates an Array, and assigns values to it
// The two ways array literal and JavaScript Keyword new Array() do exactly the same.
// For simplicity, readability and execution speed, use the the array literal method.
var fruits = new Array("Grapes", "Apple", "Orange", "Musk Melon");
document.getElementById("s4").innerHTML = fruits;
document.getElementById("s5").innerHTML = fruits[1];

// changes the value of the first element in cars array
cars[0] = "Toyota";
document.getElementById("s6").innerHTML = cars;

// Arrays are a special type of objects because of this, you can have variables of different types in the same Array.
// You can have Numbers, Strings, Objects, and functions in an Array and You can also have arrays in an Array:
var mixedArray = ["Guava", "Apple", 1, 2, 3];
document.getElementById("s7").innerHTML = mixedArray;

var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var numbers = [1, 2, 3, 4, 5];

// the full array can be accessed by referring to the array name 
document.getElementById("para1").innerHTML = days;

// The length property sets or returns the number of elements in an array.
document.getElementById("para2").innerHTML = days.length;

// Accessing the Last Array Element
document.getElementById("para3").innerHTML = days[days.length - 1];

// the full array can be accessed by referring to the array name 
document.getElementById("para4").innerHTML = numbers;

// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
// The Parameter are the arrays to be joined
document.getElementById("para5").innerHTML = days.concat(numbers);

// The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// this method will not change the original array.
// We have specified numbers array as separator.
document.getElementById("para6").innerHTML = days.join(numbers);

// The push() method adds new items to the end of an array, and returns the new length. This method changes the length of the array.
// The parameter are the item(s) to add to the array
days.push("saturday");
document.getElementById("para7").innerHTML = days;

// The pop() method removes the last element of an array, and returns that element. This method changes the length of an array.
document.getElementById("para8").innerHTML = days.pop();

// The reverse() method reverses the order of the elements in an array.
// this method will change the original array.
document.getElementById("para9").innerHTML = days.reverse();

// The shift() method removes the first item of an array.
// This method changes the length of the array.
// this method will change the original array.
document.getElementById("para10").innerHTML = days.shift();

// The sort() method sorts the items of an array.
// The sort order can be either alphabetic or numeric, and either ascending or descending.
// By default, the sort() method sorts the values as strings in alphabetical and ascending order. Because of this, the sort() method will produce an incorrect result when sorting numbers.
// This method changes the original array.
document.getElementById("para11").innerHTML = days.sort();

document.getElementById("para12").innerHTML = fruits;

// The splice() method adds or removes items to or from an array, and returns the removed item(s).
// This method changes the original array.
// It takes three parameter 
// index parameter - An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array.
// howmany parameter - the number of items to be removed. If set to 0, no items will be removed
// Third parameter are The new item(s) to be added to the array.
var removed = fruits.splice(2, 2, "Mango", "Kiwi");
document.getElementById("para13").innerHTML = fruits;
document.getElementById("para14").innerHTML = removed;

fruits.splice(2, 0, "Banana");
document.getElementById("para15").innerHTML = fruits;

// The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// The original array will not be changed.
// It takes two parameter
// start parameter - An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array. If omitted, it acts like "0"
// end parameter - An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array
document.getElementById("para16").innerHTML = fruits.slice(2);

