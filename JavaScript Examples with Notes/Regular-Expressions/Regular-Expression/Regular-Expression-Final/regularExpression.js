// A regular expression is a sequence of characters that forms a search pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// A regular expression can be a single character, or a more complicated pattern.
// In JavaScript, regular expressions are represented by RegExp object
// In JavaScript, regular expressions are often used with the string methods search(), replace(), match() and split() that takes a regular expression as a parameter.

var string1 = "Please locate where 'locate' occurs Locate !@#$% 123456789";
document.getElementById("span1").innerHTML = string1;

var string2 = "re, green, red, green, gren, gr, blue, yellow";
document.getElementById("span2").innerHTML = string2;

// You can create a new RegExp object using the literal syntax
// The literal syntax uses forward slashes /pattern/ to wrap the regular expression pattern,
var pattern1 = /LoCaTe/;
document.getElementById("mod1").innerHTML = string1.match(pattern1);

// The i modifier is used to perform case-insensitive matching.
var pattern2 = /LOCATE/i;
document.getElementById("mod2").innerHTML = string1.match(pattern2);

// The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
//  To perform a global, case-insensitive search, use "g" modifier together with the "i" modifier.
var pattern3 = /Locate/gi;
document.getElementById("mod3").innerHTML = string1.match(pattern3);

// The [abc] expression is used to find any character between the brackets.
// [A-Z] - Any character from uppercase A to uppercase Z
// [a-z] - Any character from lowercase a to lowercase z
var pattern4 = /[a-z]/gi;
document.getElementById("b1").innerHTML = string1.match(pattern4);

// The [0-9] expression is used to find any numbers between the brackets.
// [0-9] - Any numbers from 0 to 9
var pattern5 = /[1-9]/gi;
document.getElementById("b2").innerHTML = string1.match(pattern5);

// The (x|y) expression is used to find any of the alternatives specified.
var pattern6 = /(red|blue)/gi;
document.getElementById("b3").innerHTML = string2.match(pattern6);

// The \d metacharacter is used to find a digit from 0-9.
var pattern7 = /\d/gi;
document.getElementById("m1").innerHTML = string1.match(pattern7);

// The \D metacharacter is used to find a non-digit character.
var pattern8 = /\D/gi;
document.getElementById("m2").innerHTML = string1.match(pattern8);

// The \w metacharacter is used to find a word character.
// A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
var pattern9 = /\w/gi;
document.getElementById("m3").innerHTML = string1.match(pattern9);

// The \W metacharacter is used to find a non-word character.
var pattern10 = /\W/gi;
document.getElementById("m4").innerHTML = string1.match(pattern10);

// The \b metacharacter is used to find a match at the beginning or end of a word.
// Search for the pattern at the beginning of a word
var pattern11 = /\blo/gi;
document.getElementById("m5").innerHTML = string1.match(pattern11);

// Search for the pattern at the end of a word
var pattern12 = /se\b/gi;
document.getElementById("m6").innerHTML = string1.match(pattern12);

// The . metacharacter is used to find a single character, except newline or other line terminators.
var pattern13 = /l../gi;
document.getElementById("m7").innerHTML = string1.match(pattern13);

var string3 = "Hellooo World! Hello Universe Hello";
document.getElementById("span3").innerHTML = string3;

var string4 = "1, 10, 100, 1000, 10000";
document.getElementById("span4").innerHTML = string4;

var string5 = "One day Gogo will go to school";
document.getElementById("span5").innerHTML = string5;

// The n+ quantifier Matches any string that contains at least one or more n.
// the quantifier + is applied only to its previous character
var pattern14 = /o+/gi;
document.getElementById("q1").innerHTML = string3.match(pattern14);

// The n* quantifier matches any string that contains zero or more occurrences of n.
// the quantifier * is applied only to its previous character
var pattern15 = /lo*/gi;
document.getElementById("q2").innerHTML = string3.match(pattern15);

// The n? quantifier matches any string that contains zero or one occurrences of n.
// // the quantifier ? is applied only to its previous character
var pattern16 = /lo?/gi;
document.getElementById("q3").innerHTML = string3.match(pattern16);

// The ^n quantifier matches any string with n at the beginning of it.
var pattern17 = /^hello/gi;
document.getElementById("q4").innerHTML = string3.search(pattern17);

// The n$ quantifier matches any string with n at the end of it.
var pattern18 = /hello$/gi;
document.getElementById("q5").innerHTML = string3.search(pattern18);

// The n{X} quantifier matches any string that contains a sequence of X n's.
// X must be a number.
var pattern19 = /\d{5}/gi;
document.getElementById("q6").innerHTML = string4.match(pattern19);

// The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's.
// X and Y must be a number.
var pattern20 = /\d{4,5}/gi;
document.getElementById("q7").innerHTML = string4.match(pattern20);

// Regular expressions use parentheses to group subexpressions
// Parentheses allow a quantifier like +,*,? etc to be applied to an entire subexpression.
var pattern21 = /(go)+/gi;
document.getElementById("s1").innerHTML = string5.match(pattern21);

// The methods exec() and test() are Regular Expression methods that takes a string as a parameter
var pattern22 = /world/gi;

// The test() method tests for a match in a string.
// This method returns true if it finds a match, otherwise it returns false.
if (pattern22.test(string4)) {
    document.getElementById("s2").innerHTML = "Match Found";
} else {
    document.getElementById("s2").innerHTML = "Match Not Found";
}

// The exec() method tests for a match in a string.
// This method returns the matched text if it finds a match, otherwise it returns null.
var result = pattern22.exec(string3);
if (result) {
    document.getElementById("s3").innerHTML = "Found " + result + " in position " + result.index + " - " + result.input;
} else {
    document.getElementById("s3").innerHTML = "Match Not Found";
}

