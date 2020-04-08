var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("para1").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old";

person.nationality = "American";
document.getElementById("para2").innerHTML = person.firstName + " is " + person.nationality;

delete person.age;
document.getElementById("para3").innerHTML = person.firstName + " " + person.age + " years old";

document.getElementById("para4").innerHTML = "Full Name is " + person.fullName();

var personTwo = new Object();
personTwo.firstName = "Peter";
personTwo.lastName = "Paul";
personTwo.age = 50;

document.getElementById("para5").innerHTML = personTwo.firstName + " " + personTwo.lastName;