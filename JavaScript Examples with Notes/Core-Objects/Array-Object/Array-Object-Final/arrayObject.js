var cars = ["Audi", "BMW", "Mercedes", "Jaguar"];
document.getElementById("s1").innerHTML = cars;
document.getElementById("s2").innerHTML = cars[0];
document.getElementById("s3").innerHTML = cars[1];

var fruits = new Array("Grapes", "Apple", "Orange", "Musk Melon");
document.getElementById("s4").innerHTML = fruits;
document.getElementById("s5").innerHTML = fruits[1];

cars[0] = "Toyota";
document.getElementById("s6").innerHTML = cars;

var mixedArray = ["Guava", "Apple", 1, 2, 3];
document.getElementById("s7").innerHTML = mixedArray;

var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var numbers = [1, 2, 3, 4, 5];

document.getElementById("para1").innerHTML = days;
document.getElementById("para2").innerHTML = days.length;
document.getElementById("para3").innerHTML = days[days.length - 1];
document.getElementById("para4").innerHTML = numbers;
document.getElementById("para5").innerHTML = days.concat(numbers);
document.getElementById("para6").innerHTML = days.join(numbers);
days.push("saturday");
document.getElementById("para7").innerHTML = days;
document.getElementById("para8").innerHTML = days.pop();
document.getElementById("para9").innerHTML = days.reverse();
document.getElementById("para10").innerHTML = days.shift();
document.getElementById("para11").innerHTML = days.sort();

document.getElementById("para12").innerHTML = fruits;
var removed = fruits.splice(2, 2, "Mango", "Kiwi");
document.getElementById("para13").innerHTML = fruits;
document.getElementById("para14").innerHTML = removed;
fruits.splice(2, 0, "Banana");
document.getElementById("para15").innerHTML = fruits;
document.getElementById("para16").innerHTML = fruits.slice(2);

