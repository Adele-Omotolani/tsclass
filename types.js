//string :
//The string type is used for text (words or letters).
//Example scenario: Use string to store user names, email addresses, or any kind of text data.
var mysch = "Kode10x";
console.log(mysch);
//number :
// number represents both whole numbers and decimals.
// Scenario: Use number to store things like age, scores, or prices.
var myscore = 100;
console.log(myscore);
//boolean:
// boolean means true or false.
// Scenario: Use it to check if a user is logged in, a button is clicked, or a condition is met.
var isloggedIn = true;
console.log(isloggedIn);
//any:
// any can hold any type of value—string, number, object, etc.
// Scenario: Useful when you're getting data from an unknown source (like an API), but use it with caution.
var mydata = "tolani";
mydata = 1234;
console.log(mydata);
//array (number[] or Array<string>):
// array holds multiple values of the same type.
// Scenario: Use arrays to store lists—like scores, usernames, or product IDs.
var list = ["olamide", 19];
var scores = [80, 90, 100];
console.log("First score:", scores[0]);
// or
var seclist = ["grace", 123];
//enum:
//enum is short for enumeration. It lets you define a set of named constants.
// Scenario: Perfect when you have a limited number of options, like order status, days of the week, or user roles.
var userRole;
(function (userRole) {
    userRole[userRole["supreAdmin"] = 0] = "supreAdmin";
    userRole[userRole["Admin"] = 1] = "Admin";
    userRole[userRole["Student"] = 2] = "Student";
    userRole[userRole["Teacher"] = 3] = "Teacher";
})(userRole || (userRole = {}));
var role = userRole.supreAdmin;
console.log(role);
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 0] = "Sunday";
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
})(weekDays || (weekDays = {}));
var days = weekDays.Sunday;
console.log(days);
//To get the value:
// let todayName: string = weekDays[today];
// console.log(todayName);
// Or this way:
// let daynum: number = 0
// let dayName: string =weekDays[daynum]
// console.log(dayName);
// Now TypeScript automatically creates this behind the scenes:
// ts
// Copy code
// WeekDays["Sunday"] === 0
// WeekDays[0] === "Sunday"
//unknown:
//unknown means: I don’t know the type yet, but I’ll figure it out later.
// It’s safer than any because you must check the type before using it.
// Use case:
// When you're getting data from an API or user input and you're not sure what type it will be.
// void
// void means a function does not return anything.
// Use case:
// Use void for functions that only do something, like logging or sending data, but don’t return a result.
function greet(name) {
    console.log("Hello, " + name);
}
var user = { name: "Tola", age: 25 };
console.log(user.name);
// Option 2: Use inline type
var title = {
    author: "Cal Newport",
    page: 30000
};
console.log(title.author);
// tuple
//tuple is a fixed-size array with specific types for each position.
// Use tuple when the position matters, like a name and age, or latitude and longitude:
var userInfo = ["Tola", 25];
console.log(userInfo[0]);
console.log(userInfo[1]);
