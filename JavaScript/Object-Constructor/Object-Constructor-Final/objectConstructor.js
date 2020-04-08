function Person(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.changeLastName = function (name) {
        this.lastName = name;
    }
}

var personOne = new Person("John", "Doe", 50);
document.getElementById("para1").innerHTML = personOne.firstName + " " + personOne.lastName;

var personTwo = new Person("Peter", "Paul", 35);
document.getElementById("para2").innerHTML = personTwo.firstName + " " + personTwo.lastName;

personOne.nationality = "American";
document.getElementById("para3").innerHTML = personOne.firstName + " is " + personOne.nationality;

personOne.fullName = function () {
    return this.firstName + " " + this.lastName;
}
document.getElementById("para4").innerHTML = "Full Name is " + personOne.fullName();

personOne.changeLastName("walker");
document.getElementById("para5").innerHTML = personOne.firstName + " " + personOne.lastName;

