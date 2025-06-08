// const tinderUser = new Object() // singeleton object

const tinderUser = {}// non singeleton object
    tinderUser.id ="123abc",
    tinderUser.name = "sanny",
    tinderUser.isLoggedIn = false

console.log(tinderUser);
//console.log(tinderUser1);

const anotherUser = {
    email : "hp@852gmail.com",
    name : "vivaan",
    age:26,
      newUser: {
                newUserfullname: {
                    firstname: "pranav",
                    lastname: "singh"
                }
        }
}

console.log(anotherUser.newUser.newUserfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj3 ={5: "e", 6: "f"}

//const obj4 = {obj1, obj2, obj3}
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

const obj5 ={...obj1, ...obj2}
console.log(obj5);


const users = [
    {
      id: 1,
      email: "gf55468@gmail.com"   
    },
    {
      id: 6,
      email: "kf55468@gmail.com" 
    }
]

users[1].email
console.log(Object.keys(users));
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));