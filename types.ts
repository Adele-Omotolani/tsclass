//string :

//The string type is used for text (words or letters).
//Example scenario: Use string to store user names, email addresses, or any kind of text data.

let mysch: string = "Kode10x"
console.log(mysch);


//number :

// number represents both whole numbers and decimals.
// Scenario: Use number to store things like age, scores, or prices.

let myscore: number = 100
console.log(myscore);


//boolean:

// boolean means true or false.
// Scenario: Use it to check if a user is logged in, a button is clicked, or a condition is met.

let isloggedIn: boolean = true
console.log(isloggedIn);

//any:

// any can hold any type of value—string, number, object, etc.
// Scenario: Useful when you're getting data from an unknown source (like an API), but use it with caution.

let mydata: any = "tolani"
mydata = 1234
console.log(mydata);

//array (number[] or Array<string>):

// array holds multiple values of the same type.
// Scenario: Use arrays to store lists—like scores, usernames, or product IDs.

let list: Array<number | string> = ["olamide", 19]
let scores: number[] = [80, 90, 100];
console.log("First score:", scores[0]);

// or

let seclist: (number | string)[]=["grace",123]

//enum:

//enum is short for enumeration. It lets you define a set of named constants.
// Scenario: Perfect when you have a limited number of options, like order status, days of the week, or user roles.


enum userRole{
    supreAdmin,
    Admin,
    Student,
    Teacher
}
let role : userRole = userRole.supreAdmin
console.log(role);

enum weekDays{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let days : weekDays = weekDays.Sunday
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

function greet(name: string): void {
  console.log("Hello, " + name);
}


//null
//null is a special value that means empty on purpose.

// Use null when something is intentionally empty, like no user is logged in yet.

//undefined
//undefined means no value has been assigned yet.

// Variables are undefined when they are declared but not assigned a value yet.

//object
//This won't work.You can't access it directly
// let user: object = { name: "Tola", age: 25 };
// You're telling TypeScript:
// “Hey, this user is just an object. I don’t care what’s inside it.”
// So TypeScript says:
// “Cool. But if you didn’t tell me what’s inside, I won’t let you access .name or .age.”
// Because all TypeScript knows is that user is some kind of object — it could be anything.
//object means any non-primitive value (like {} or an object with properties).
// Use object when you're storing a group of related values (like user details).


// Option 1: Use type

type UserData = {
  name: string;
  age: number;
};

let user: UserData = { name: "Tola", age: 25 };
console.log(user.name);

// Option 2: Use inline type

let title: { author: string; page: number } = {
  author: "Cal Newport",
  page: 30000
};

console.log(title.author);

// tuple
//tuple is a fixed-size array with specific types for each position.
// Use tuple when the position matters, like a name and age, or latitude and longitude:

let userInfo: [string, number] = ["Tola", 25];

console.log(userInfo[0]);
console.log(userInfo[1]);