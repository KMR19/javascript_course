var string1 = "Please locate where 'locate' occurs Locate !@#$% 123456789";
document.getElementById("span1").innerHTML = string1;

var string2 = "re, green, red, green, gren, gr, blue, yellow";
document.getElementById("span2").innerHTML = string2;

var pattern1 = /LoCaTe/;
document.getElementById("mod1").innerHTML = string1.match(pattern1);

var pattern2 = /LOCATE/i;
document.getElementById("mod2").innerHTML = string1.match(pattern2);

var pattern3 = /Locate/gi;
document.getElementById("mod3").innerHTML = string1.match(pattern3);

var pattern4 = /[a-z]/gi;
document.getElementById("b1").innerHTML = string1.match(pattern4);

var pattern5 = /[1-9]/gi;
document.getElementById("b2").innerHTML = string1.match(pattern5);

var pattern6 = /(red|blue)/gi;
document.getElementById("b3").innerHTML = string2.match(pattern6);

var pattern7 = /\d/gi;
document.getElementById("m1").innerHTML = string1.match(pattern7);

var pattern8 = /\D/gi;
document.getElementById("m2").innerHTML = string1.match(pattern8);

var pattern9 = /\w/gi;
document.getElementById("m3").innerHTML = string1.match(pattern9);

var pattern10 = /\W/gi;
document.getElementById("m4").innerHTML = string1.match(pattern10);

var pattern11 = /\blo/gi;
document.getElementById("m5").innerHTML = string1.match(pattern11);

var pattern12 = /se\b/gi;
document.getElementById("m6").innerHTML = string1.match(pattern12);

var pattern13 = /l../gi;
document.getElementById("m7").innerHTML = string1.match(pattern13);

var string3 = "Hellooo World! Hello Universe Hello";
document.getElementById("span3").innerHTML = string3;

var string4 = "1, 10, 100, 1000, 10000";
document.getElementById("span4").innerHTML = string4;

var string5 = "One day Gogo will go to school";
document.getElementById("span5").innerHTML = string5;

var pattern14 = /o+/gi;
document.getElementById("q1").innerHTML = string3.match(pattern14);

var pattern15 = /lo*/gi;
document.getElementById("q2").innerHTML = string3.match(pattern15);

var pattern16 = /lo?/gi;
document.getElementById("q3").innerHTML = string3.match(pattern16);

var pattern17 = /^hello/gi;
document.getElementById("q4").innerHTML = string3.search(pattern17);

var pattern18 = /hello$/gi;
document.getElementById("q5").innerHTML = string3.search(pattern18);

var pattern19 = /\d{5}/gi;
document.getElementById("q6").innerHTML = string4.match(pattern19);

var pattern20 = /\d{4,5}/gi;
document.getElementById("q7").innerHTML = string4.match(pattern20);

var pattern21 = /(go)+/gi;
document.getElementById("s1").innerHTML = string5.match(pattern21);


var pattern22 = /world/gi;

if (pattern22.test(string4)) {
    document.getElementById("s2").innerHTML = "Match Found";
} else {
    document.getElementById("s2").innerHTML = "Match Not Found";
}

var result = pattern22.exec(string3);
if (result) {
    document.getElementById("s3").innerHTML = "Found " + result + " in position " + result.index + " - " + result.input;
} else {
    document.getElementById("s3").innerHTML = "Match Not Found";
}

