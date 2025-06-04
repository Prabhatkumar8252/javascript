// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log( typeof myDate);

let myCreatedDate = new Date(2025, 5, 6, 3)
console.log(myCreatedDate.toString());

let myCreatedDate1 = new Date("01-15-2025")
console.log(myCreatedDate1.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default', {
    weekday: "long"
})

