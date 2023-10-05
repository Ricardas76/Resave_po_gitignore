console.clear();
console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][-1]);
console.log([10, 2, 8, 4, 6].at(-2)); //antra is galo grazina
const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
const a123 = a1.concat(a2, a3); //sujungia masyvus
console.log(a123);

console.clear();
const flowers = ["kardelis"];

flowers.push ("roze"); //prideda elementa masyvo gale
console.log (flowers); 
flowers.push ("narcizas");
console.log (flowers);
flowers.push ("tulpe");
console.log (flowers);
flowers.shift(); //nuima pirma elementa

flowers.unshift("ruta"); //prideda priekyje elementa

console.log (flowers);
console.log (flowers.reverse()); //apsuka visa masyva nuo galo iki priekio
console.log (flowers.reverse());
flowers.push ("gelyte", "gele", "gvazdikas"); //prideda elementus masyvo gale
console.log (flowers);
console.log (flowers.reverse()); //apsuka visa masyva nuo galo iki priekio
console.log (flowers.reverse());

console.clear();
const numbers = [1, 2, 3, 4, 5, 6];
const numbers22 = numbers.slice(1, 4);// paima masyvo gabala nuo 1 iki 3 (4 nebeima)
console.log(numbers22);
const numbers23 = numbers.slice(4);// paima nuo 4 iki ... galo
console.log(numbers23);
numbers.splice(3, 2, 9)  //kur pradeti, kiek elementu istrinti, kuo pakeisti istrinta vieta
console.log(numbers);