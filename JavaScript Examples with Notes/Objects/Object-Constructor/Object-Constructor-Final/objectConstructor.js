// A constructor is a function that initializes an object
// Using Object literal and keyword new Object() only create single objects
// A constructor is useful when you want to create multiple similar objects with the same properties and methods.
// It’s a convention to capitalize the name of constructors to distinguish them from regular functions

function Person(firstname, lastname, age) {
    // When the constructor is called with the new keyword, it assigns the received parameters to the properties of the current instance
    // To add a new property to a constructor, you must add it to the constructor function
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    // Adding methods to an object constructor must be done inside the constructor function
    this.changeLastName = function (name) {
        // In JavaScript this keyword refers to the object it belongs to.
        this.lastName = name;
    }
}

// you can instantiate an object constructor by using new keyword
var personOne = new Person("John", "Doe", 50);
// You can access JavaScript Properties by objectName.(dot)propertyName or objectName[propertyName] square bracket
document.getElementById("para1").innerHTML = personOne.firstName + " " + personOne.lastName;

var personTwo = new Person("Peter", "Paul", 35);
document.getElementById("para2").innerHTML = personTwo.firstName + " " + personTwo.lastName;

// You can add new properties to an existing object by simply giving a property with a value.
personOne.nationality = "American";
document.getElementById("para3").innerHTML = personOne.firstName + " is " + personOne.nationality;

// You can also add new methods to an existing object by simply giving a method with a function definition.
personOne.fullName = function () {
    return this.firstName + " " + this.lastName;
}
// You access an object method by objectName.methodName() with Parentheses
// If you access the fullName property, without () Parentheses, it will return the function definition
document.getElementById("para4").innerHTML = "Full Name is " + personOne.fullName();

personOne.changeLastName("walker");
document.getElementById("para5").innerHTML = personOne.firstName + " " + personOne.lastName;

