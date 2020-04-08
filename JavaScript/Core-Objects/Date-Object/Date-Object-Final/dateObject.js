var date = new Date();

document.getElementById("para1").innerHTML = date;
document.getElementById("para2").innerHTML = date.getDate();
document.getElementById("para3").innerHTML = (date.getMonth() + 1);
document.getElementById("para4").innerHTML = date.getFullYear();
document.getElementById("para5").innerHTML = date.getHours();
document.getElementById("para6").innerHTML = date.getMinutes();
document.getElementById("para7").innerHTML = date.getSeconds();
document.getElementById("para8").innerHTML = date.toUTCString();
document.getElementById("para9").innerHTML = date.toDateString();

date.setFullYear(2025);
document.getElementById("para10").innerHTML = date;
date.setHours(18);
document.getElementById("para11").innerHTML = date;

var newDate = new Date(2025, 3, 24, 10, 33, 30, 0);
document.getElementById("para12").innerHTML = newDate;

var newDateString = new Date("April 23, 2025 11:15:00");
document.getElementById("para13").innerHTML = newDateString;

var newDateISO = new Date("2025-05-15");
document.getElementById("para14").innerHTML = newDateISO;












