/*
ARRAY - s1ra6as / masyvas/ matrica...
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);


//         index: 0,  1,  2, 3
const pazymiai = [10, 2 , 4, 5, 7 , 4, 6];
console.log(pazymiai, "sudaro", pazymiai.length, "skaiciai");

const studentai = ["Maryte", "Jonas", "Tomas"];
console.log(studentai, "yra studentai");

const pirmasPazimys = pazymiai [1]; //indeksai masyve vienetuu mazesni
console.log(pirmasPazimys);

const paskutinisPazimys = pazymiai[pazymiai.length -1];
console.log(paskutinisPazimys);

const pazymioPozicija = pazymiai.length - 1;
console.log("Iš viso pažymių:", pazymioPozicija );

//suskaiciuoti pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7.56"

//Masyvas vietovardziu:
//Mano aplankytos vietos yra ... "

console.clear();
const colors = ['geltona', 'zalia', 'raudona'];
colors[1] = 'žalia'
console.log(colors);
//masyvas virsuje ir stringas apačioje mažai skiriasi,
//stringe negalima pakeisti
//individualių simbolių o masyve galima
const name = 'Testas'
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);



