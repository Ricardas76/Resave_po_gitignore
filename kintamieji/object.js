/*
OBJECT - objektas
*/

console.clear();
//vartotojas: vardas, amžius, ar vedęs

const jonasData = ['Jonas', 99, true];
const petrasData = ['Petras', 88, false];
//kai duomenu tipai skiriasi masyvai nera tinkami
const jonasName = jonasData[0];
const jonasAge = jonasData[1];
const jonasVedes = jonasData[2];
//console.log(jonasName, jonasAge, jonasVedes);

const petrasName = 'Petras';
const petrasAge = 88;
const petrasVedes = false;

//kadangi masyvai netinkami tam naudojami objektai
const jonas = {
name: 'Jonas',
age: 99,
arvedes: true,
};
console.log(jonas);
//galime is objekto istraukti konkrecia reiksme
console.log(jonas['age']);
//arba 
console.log(jonas.age);


let a = 1;
let b = a;
a = 2;
console.log("a=", a, "b=", b);

const c = [1 ,2];
const d = c;
c[0] = 111;
d[1] = 333;
console.log("c:", c, "d:", d);
const e = {name: "Edgaras", age: 99};
const f = e;
e.name = "Fiona";
console.log("e:", e);
console.log("f:", f);