// The Date object is used to work with dates and times.
// Date objects are created with new Date() constructor with the current date and time
// Date objects are static. The computer time is ticking, but date objects are not.
var date = new Date();

// By default, JavaScript will use the browser's time zone and display a date as a full text string
document.getElementById("para1").innerHTML = date;

// The getDate() method returns the day of the month (from 1 to 31) for the specified date.
document.getElementById("para2").innerHTML = date.getDate();

// The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
// anuary is 0, February is 1, and so on.
document.getElementById("para3").innerHTML = (date.getMonth() + 1);

// The getFullYear() method returns the year of the specified date.
document.getElementById("para4").innerHTML = date.getFullYear();

// The getHours() method returns the hour (from 0 to 23) of the specified date and time.
document.getElementById("para5").innerHTML = date.getHours();

// The getMinutes() method returns the minutes (from 0 to 59) of the specified date and time.
document.getElementById("para6").innerHTML = date.getMinutes();

// The getSeconds() method returns the seconds (from 0 to 59) of the specified date and time.
document.getElementById("para7").innerHTML = date.getSeconds();

// The toUTCString() method converts a Date object to a string, according to universal time.
// The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
//  UTC time is the same as GMT time.
document.getElementById("para8").innerHTML = date.toUTCString();

// The toDateString() method converts the date (not the time) of a Date object into a readable string
document.getElementById("para9").innerHTML = date.toDateString();

// The setFullYear() method sets the year of the date object.
// This method can also be used to set the month and day of month.
date.setFullYear(2025);
document.getElementById("para10").innerHTML = date;

// The setHours() method sets the hour of a date object.
// This method can also be used to set the minutes, seconds and milliseconds.
date.setHours(18);
document.getElementById("para11").innerHTML = date;

// new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond in order
// JavaScript counts months from 0 to 11. January is 0 and December is 11.
var newDate = new Date(2025, 3, 24, 10, 33, 30, 0);
document.getElementById("para12").innerHTML = newDate;

// new Date(dateString) creates a new date object from a date string
var newDateString = new Date("April 23, 2025 11:15:00");
document.getElementById("para13").innerHTML = newDateString;

// new Date(ISO Date) creates a new date object from a ISO Date format.
// ISO 8601 is the international standard for the representation of dates and times.
// The ISO 8601 syntax (YYYY-MM-DD) is preferred JavaScript date format
var newDateISO = new Date("2025-05-15");
document.getElementById("para14").innerHTML = newDateISO;












