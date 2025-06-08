// scope start with three variable let, var, const

// global scope
let a = 900
if(true)
{
let a = 40
const b = 30  //  inside if whatever we written called block scope
var c =34
 console.log( "inner: ", a);
 console.log("inner: ", b);
}
 console.log(a);
// console.log(b);
console.log(c);

// nested scope
function one()
{
    const username = "lallu"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


/********************************************/
console.log(addone(7));
function addone(num)
{
    return num + 2;
}

 const addTwo = function(num)
{
    return num + 6
}
console.log(addTwo(7));