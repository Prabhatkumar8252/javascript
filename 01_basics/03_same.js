const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allnewHeros = [...marvel_heros, ...dc_heros]
console.log(allnewHeros);

const another_array = [3, 5, 6, [8, 7, 7], 5, [4, 6, 8,[5, 8], 9], 6]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("prabhat"));
console.log(Array.from("prabhat"));
console.log(Array.from({name: "prabhat"})); // interesting case

let marks1 = 100
let marks2 = 290
let marks3 = 400
console.log(Array.of(marks1, marks2, marks3));
