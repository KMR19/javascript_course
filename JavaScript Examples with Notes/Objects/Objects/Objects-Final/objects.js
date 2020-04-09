// In JavaScript, an object is a standalone entity, with properties and methods.
// objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

// In JavaScript, you can define and create your own objects.

// The easiest way to create a JavaScript Object is Using an object literal.
// An object literal is a list of name:value pairs inside curly braces {}.
// creates a new JavaScript single object with three properties and one method
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    // JavaScript methods are actions that can be performed on objects.
    // A JavaScript method is a property containing a function definition.
    fullName: function () {
        // In JavaScript this keyword refers to the object it belongs to.
        return this.firstName + " " + this.lastName;
    }
};

// Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// You can access JavaScript Properties by objectName.(dot)propertyName or objectName[propertyName] square bracket
document.getElementById("para1").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old";

// You can add new properties to an existing object by simply giving a property with a value.
// You can also add new methods to an existing object by simply giving a method with a function definition.
person.nationality = "American";
document.getElementById("para2").innerHTML = person.firstName + " is " + person.nationality;

// The delete keyword deletes a property from an object
// The delete keyword deletes both the value of the property and the property itself.
// The delete operator should not be used on predefined or builtin JavaScript object properties.
delete person.age;
document.getElementById("para3").innerHTML = person.firstName + " " + person.age + " years old";

// You access an object method by objectName.methodName() with Parentheses
// If you access the fullName property, without () Parentheses, it will return the function definition
document.getElementById("para4").innerHTML = "Full Name is " + person.fullName();

// We also can create object Using the JavaScript Keyword new
// creates a new JavaScript single object with three properties
// For simplicity, readability and execution speed, use the object literal method.
var personTwo = new Object();
personTwo.firstName = "Peter";
personTwo.lastName = "Paul";
personTwo.age = 50;

document.getElementById("para5").innerHTML = personTwo.firstName + " " + personTwo.lastName;