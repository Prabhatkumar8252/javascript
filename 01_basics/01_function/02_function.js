 // ... rest operator
 // ...spread operator

 function calculateCartPrice(value1, value2, ...num1)
 {
    return num1
 }

 console.log(calculateCartPrice(600, 456, 689, 900));

 const user = {
    username: "hitesh",
    price: 399
 }
 function handleObject(anyobject)
 {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }
 handleObject(user);
 handleObject(
    {
        username: "sam",
        price: 5099
    }
 )

 const myNewArray = [300, 569, 900, 678, 456]
 function returnsecondvalue(getArray)
 {
    return getArray[3]
 }
 console.log(returnsecondvalue(myNewArray));