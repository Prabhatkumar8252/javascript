// singleton

// object literals

const mySymbol = Symbol("hello World")

const Jsuser = {
    name : "prabhat",
    age : 21,
    location : "Kolkata",
    email : "hc@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "saturday"],
    "full name" :"prabhat singh",
    mySymbol : "hello World",
    [mySymbol] : "hello World"
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mySymbol);
console.log(typeof Jsuser.mySymbol);
console.log(Jsuser[mySymbol]);

Jsuser.email = "pk34@gmail.com"
console.log(Jsuser);

Jsuser.name = "ayaan"
//Object.freeze(Jsuser)
Jsuser.name = "ayaanshh"
console.log(Jsuser);

Jsuser.greeting = function()
{
    console.log("Hello JS user")
}
console.log(Jsuser.greeting());
// same object reference by using this.
Jsuser.greeting2 = function()
{
    console.log(`Hello JS user ${this.name}`); // string interpolation
}
console.log(Jsuser.greeting2());

