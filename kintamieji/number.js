/*
number
- teigiami/neigiami
- sveikieji/dešimtainiai
- normalūs/nenormalūs

- const (default)
- let (jei kinta informacija)
- var (niekada nenaudoti)
*/


const amzius = 99;
let pinigine = 0;
var minusas = -7.599;

const x1 = 1;
const x6 = 9;
x7 = 3;
//var = 6;
console.log(x6);
console.log(x7);
console.log(amzius);
const n1 = 7;
const n2 = 5;
const sum = n1 + n2;
const diff = n1 - n2;
const multi = n1 * n2;
const div = n1 / n2;

console.log(sum);   // suma
console.log(diff);  // skirtumas
console.log(multi); // daugyba
console.log(div);   // dalyba

const complex = 2 + 2 * 2; 
console.log(complex);
const exp1 = x6*x7;
const exp2 = x6**x7;
console.log ( "Sudauginom:", exp1, "     Pakelem laipsniu:", exp2);

const txt1 = "tekstas1";
const txt2 = 'tekstas2';
skaiciai_visokie = 5-6+(-8)-(-15)-(100*2);
console.log (txt1);
console.log (txt2);
console.log ("skaiciai_visokie:", skaiciai_visokie);
const begalybe = Infinity
const minusBegalybe = - Infinity
const x = 5 / 0
const k = -5 / 0
console.log(k)
//not-a-number = NaN
const n = NaN
console.log(n, NaN)
cia = 5**5
console.log(cia)
//skaiciuojant liekana naudojamas zenklas %
const liekana = 7 % 5
console.log(liekana);

console.clear()


let piniginee = 0;
piniginee = piniginee + 5;
piniginee += 5; // += prideda prie paties saves
piniginee += 5;
piniginee += -3;
piniginee += 5;
piniginee += -8;

console.log("Pinigineje yra:" , piniginee);

let index = 0;
console.log ('index',  index);

index = index + 1;
console.log ('index',  index);

index ++;
console.log ('index',  index);

++index;
console.log ('index',  index);
// ++didina vienu vienetu , o  -- mažina
let indeks = 0;
console.log ('indeks',  indeks); //0
console.log ('indeks',  indeks++); //0 o atspausdinus prideda 1
console.log ('indeks',  indeks); //1
console.log ('indeks',  ++indeks);//1 prideda pries spausdinant ir bus 2

let indeksas = 0;
console.log ('indeksas',  indeksas--);
console.log ('indeksas',  --indeksas); 
console.log ('indeksas',  indeksas--); 
console.log ('indeksas',  indeksas);

let didinu = 0;
console.log ('didinu',  ++didinu);


test=0.2+0.5;
console.log(test.toFixed(2));  //suapvalina iki 2 skaiciu po kablelio
