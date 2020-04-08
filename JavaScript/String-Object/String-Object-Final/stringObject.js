var alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("s1").innerHTML = alphabetString;
document.getElementById("s2").innerHTML = alphabetString.length;

var stringOne = "Hello Worlds!";
document.getElementById("s3").innerHTML = stringOne;
document.getElementById("s4").innerHTML = stringOne.charAt(0);

var stringTwo = "Please locate where 'locate' occurs!";
document.getElementById("s5").innerHTML = stringTwo;
document.getElementById("s6").innerHTML = stringTwo.indexOf("locate", 15);
document.getElementById("s7").innerHTML = stringTwo.lastIndexOf("locate");
document.getElementById("s8").innerHTML = stringTwo.search("locate");
document.getElementById("s9").innerHTML = stringTwo.replace(/locate/g, "found");

var fruits = "Apple, Banana, Kiwi";
document.getElementById("s10").innerHTML = fruits;
document.getElementById("s11").innerHTML = fruits.slice(0, 5);
document.getElementById("s12").innerHTML = fruits.slice(-12, -6);
document.getElementById("s13").innerHTML = fruits.slice(15);
document.getElementById("s14").innerHTML = fruits.substring(0, 5);
document.getElementById("s15").innerHTML = fruits.toUpperCase();
document.getElementById("s16").innerHTML = fruits.concat(" ", alphabetString);














