// JavaScript strings are used for storing and manipulating text.
// A JavaScript string is zero or more sequence of characters written inside double or single quotes.
// String indexes are zero-based: The first character is in position 0, the second in 1, and so on.
// The backslash (\) escape character turns special characters into string characters 
var alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("s1").innerHTML = alphabetString;

// The length property returns the length of a string (number of characters).
// The length of an empty string is 0.
document.getElementById("s2").innerHTML = alphabetString.length;

var stringOne = "Hello Worlds!";
document.getElementById("s3").innerHTML = stringOne;

// The charAt() method returns the character at the specified index in a string.
// The index of the first character is 0, the second character is 1, and so on.
// It takes index parameter an integer representing the index of the character you want to return
document.getElementById("s4").innerHTML = stringOne.charAt(0);

var stringTwo = "Please locate where 'locate' occurs!";
document.getElementById("s5").innerHTML = stringTwo;

// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
// The indexOf() method is case sensitive.
// It Takes two parameter
// searchvalue parameter The string to search for
// start parameter At which position to start the search. Default is 0
document.getElementById("s6").innerHTML = stringTwo.indexOf("locate");

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0
// This method returns -1 if the value to search for never occurs.
// The lastIndexOf() method is case sensitive!
// It Takes two parameter
// searchvalue parameter The string to search for
// start parameter The position where to start the search (searching backwards). the default value is the length of the string
document.getElementById("s7").innerHTML = stringTwo.lastIndexOf("locate");

// The search() method searches a string for a specified value, and returns the position of the match.
// The search value can be string or a regular expression.
// This method returns -1 if no match is found.
document.getElementById("s8").innerHTML = stringTwo.search("locate");

// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// This method does not change the original string.
// It takes two parameter
// searchvalue parameter - the value, or regular expression, that will be replaced by the new value
// newvalue parameter - the value to replace the search value with
document.getElementById("s9").innerHTML = stringTwo.replace(/locate/g, "found");

var fruits = "Apple, Banana, Kiwi";
document.getElementById("s10").innerHTML = fruits;

// The slice() method extracts parts of a string and returns the extracted parts in a new string.
// Use the start and end parameters to specify the part of the string you want to extract.
// The first character has the position 0, the second has position 1, and so on.
// Use a negative number to select from the end of the string.
// It takes two parameter
// start parameter - The position where to begin the extraction. First character is at index 0
// end pararmeter - The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string
document.getElementById("s11").innerHTML = fruits.slice(0, 5);
document.getElementById("s12").innerHTML = fruits.slice(-12, -6);
document.getElementById("s13").innerHTML = fruits.slice(15);

// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is less than 0, it will start extraction from index position 0
// If "start" is greater than "end", it will swap the two parameters
// It takes two parameter
// start parameter - The position where to begin the extraction. First character is at index 0
// end pararmeter - The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string
document.getElementById("s14").innerHTML = fruits.substring(0, 5);

// The toUpperCase() method converts a string to uppercase letters.
// This method does not change the original string.
document.getElementById("s15").innerHTML = fruits.toUpperCase();

// The concat() method is used to join two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.
document.getElementById("s16").innerHTML = fruits.concat(" ", alphabetString);














