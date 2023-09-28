/*
BOOLEAN - logine reiksme
galimos reiksmes true/false

true yra (1) / false (0)

Operacijos:
-  &&   (and) visi turi buti true kad gauti true
- ||   (arba) nors 1 turi burt true kad gauti true
*/

console.clear();

const arPilnametis = true;
const arLyja = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);
const count = true + true + false + false
console.log(">>>", count);


const a = true && true;
console.log(a);

const b = true || false || false; //nes yra nors 1 true
console.log(b);

const c = true && false;
console.log(c);

const d = true && (true || false); //nes skliaustuose gaunam true
console.log(d);

const e = true && true || false; //nes veiksmai is eiles gaunam true
console.log(e);