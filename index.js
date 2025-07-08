// alert("Welcome to your bank's website")
// var deposit = prompt("How much would you like to deposit?")
// alert("You have deposited: " +deposit+ " kr into your account")
// console.log("You are a cool person!")



// var hot = false;
// var temp = 30;

// if(temp>40){
//     hot = true
// }

// console.log(hot);

// temp = 35

// if(temp>45){
//     console.log("Hot outside");
// }
// else{
//     console.log("Its not too hot today")
// }

// temp = 75;

// if(temp>80){
//     console.log("Its toooo hot!")
// }
// else if(temp <= 80 && temp>= 50){
//     console.log("Super hot");
// }
// else if(temp <= 50 && temp >= 32){
//     console.log("It's a bit cooler")
// }
// else{
//     console.log("It's cooler!")
// }

// var ham = 10
// var cheese = 10

// var report = "blank"

// if(ham >= 10 && cheese >= 10){
//     report="strong sales of both items"
// }
// else if( ham === 0 && cheese === 0){
//     report="Nothing sold!"
// }
// else{
//     report = "we had some sales"
// }

// console.log(report)




// var x = 0

// while(x < 5){
//     console.log("x is currently " + x);
//     console.log("x is still less than 5, adding 1 to x")

//     x = x + 1
// }


// var x = 0

// while(x < 5){
//     console.log("x is currently " + x);

//     if(x===3){
//         console.log("x is equal to 3, BREAK")
//         break;
//     }
//     console.log("x is still less than 5, adding 1 to x")

//     // x = x + 1
//     x++
// }


/*

for(statement 1; statement 2; statement 3;)
    code block to be executed


statement 1 is executed before the loop starts
statement 2 defines the condition for running the loop
statement 3 is executed each time after the loop has been executed.

*/


// for(i = 0; i < 5; i++){
//     console.log("Number is " + i)
// }


// var word = "ABCDEFGHIJK"

// for(i=0; i<word.length; i++){
//     console.log(word[i])
// }

// var word = "ABABABABABABABA"

// for(i=0; i<word.length; i=i+2){
//     console.log(word[i])
// }

// function hello(){
//     console.log("Hello World")
// }

// hello()


// function helloYou(name){
//     console.log("Hello " + name);
// }

// helloYou("Bob")


// function addNum(num1, num2){
//     console.log(num1+num2)
// }

// addNum(30, "20")

// function helloSomeone(name="Aladdin"){
//     console.log("Hello "+name)
// }

// helloSomeone("Bob")

/*

def hello_someone(name="Aladdin"):
    print("Hello", name)

hello_someone()

*/

// console.log("Hello World")

// var country1 = "Sweden"
// var country2 = "Finland"
// var country3 = "Germany"

// var countries = [
//     "Sweden", 
//     "Finsland", 
//     "Germany"
// ];

// var myString= "ABCDEFG";
// console.log(myString[1])

// var mixed = [true, 20, "string"]
// console.log(mixed.length)

// print(len(mixed))



// var myArr = ["One", "Two", "Three"];
// myArr.pop()
// myArr.splice(1,1);
// myArr.push("New Item");
// myArr.splice(1,1,"New Item")
// myArr.splice(1,0,"New Item")

// console.log(myArr);

// var lastItem = myArr[myArr.length -1]
// console.log(lastItem)

// var matrix = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(matrix)


// var arr = ["A", "B", "C"]

// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i])
// };


//for-in:
// for(letter in arr){
//     console.log(letter)
// }

// for-of:
// for(letter of arr){
//     console.log(letter)
// }



// for(letter in arr){
//     console.log(arr[letter])
// }


// function Adder(name){
//     console.log(name+" is awesome")
// };

// var topics = ["Python", "JavaScript", "C#"];

// topics.forEach(Adder);

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["Reading", "Traveling", "Cycling"],
//     adress:{
//         street: "Street 123",
//         city: "Anytown"
//     },
//     greet: function(){
//         console.log("Hello, my name is "+ this.firstName);
//     },
//     isAdult: true
// };

// console.log(person.hobbies[1]);
// console.log(person.adress.city);
// person.greet();

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// };

// person.job = "Developer"
// person['Country'] = "Sweden"
// person["lastName"] = "Smith"

// for(var key in person){
//     console.log(key + ': ' + person[key]);
// }

// console.dir(person)

// var header = document.querySelector("h1");

// header.style.color = "red";

// function getRandomColor(){
//     var letters = "123456789ABCDEF"
//     var color = "#"
//     for( var i=0; i<6; i++){
//         color += letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }

// function changeHeaderColor(){
//     colorInput = getRandomColor();
//     header.style.color = colorInput;
// }

// setInterval("changeHeaderColor()",500);


//Synchronous (Sync) code

// console.log("Start")
// for(let i = 1; i<=3; i++){
//     console.log(i)
// }
// console.log("End")


// Asynchronous (Async) code:

// console.log("Start")
// setTimeout(function(){
//     console.log("We are inside setTimeout")
// },1000) //One Second
// console.log("End")


// Promise:
// pending, resolved, rejected

// console.log("Start");

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

// delay(1000)
// .then(()=> {
//     console.log("Inside promise")
// })
// .then(()=>{
//     console.log("end")
// })


// var add = function(x, y){
//     return x + y;
// };


// // arrow f.

// var add = (x, y) => x + y;

// // Traditional function:

// function Person() {
//     this.age = 0;
//     setInterval(function growUp(){
//         this.age++; //"this" does NOT refer to the Person object (leading to error)
//     },1000);
// }

// // Arrow function

// function Person(){
//     this.age=0;
//     setInterval(()=>{
//         this.age++; //"this" properly refer to the Person object
//     },1000)
// }


// console.log("Traditional Function:");
// const array = [1,2,3,4];
// const squares = array.map(function (x) {return x * x;});
// console.log(squares)

// console.log("Arrow Function:");
// const squaresArrow = array.map(x => x*x);
// console.log(squaresArrow)


// class User {
//     constructor(firstName, lastName,email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.loggedIn = false;
//     }
//     login(){
//         this.loggedIn = true;
//         console.log(`${this.firstName} has logged in`);
//     }
//     logout(){
//         this.loggedIn = false;
//         console.log(`${this.firstName} has logged out`);

//     }
// }

// let userOne = new User('John', 'Smith', 'email@email.com');
// let userTwo = new User('Marie', 'Curie', 'marie@email.com');

// userOne.login();
// // userTwo.logout();

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//         console.warn('Changed the name')
//     }
// }

// const p1 = new Person('John', 'Doe');

// console.log(p1.fullName);
// p1.fullName = "Bob Bobson";
// console.log(p1.fullName);


class UserService{
    constructor(uri){
        this.baseUri = uri;
    }

    static signUp(user){
        console.log("Registering user");
        console.log(user);
    }
static signIn(email, password){
        console.log(`Logging in user with ${email} and password is: ${password}`);
    }
}

UserService.signUp({firstName: 'John', lastNAme: 'Smith'});
UserService.signIn('john@gmail.com', 'pocahontas123');