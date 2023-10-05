console.clear();

const n1 = 5;
const n2 = 9;
function suma(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

//const skirtumas = function (a, b);

function sandauga(a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

//arrow rodykline funkcija
/*const function sandaugaa = (a, b) => {
   return a * b;
}
console.log(`${a} * ${b} = ${sandaugaa(a, b)}`);*/

const kvadratu = a => a**2;
//jeigu tik 1 parametras galima nerasyti skliaustu prie a
console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

const pirmaRaide = zodis => zodis[1];

console.log(pirmaRaide(5));
console.log(pirmaRaide(""));