// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.clear();

console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0], 'labas'.at(0));
console.log('labas'[1], 'labas'.at(1));
console.log('labas'[2], 'labas'.at(2));
console.log('labas'[3], 'labas'.at(3));
console.log('labas'[4], 'labas'.at(4));
console.log('labas'[5], 'labas'.at(5));
console.log('labas'[-1], 'labas'.at(-1));
console.log('labas'[-2], 'labas'.at(-2));
console.log('labas'[-3], 'labas'.at(-3));
console.log('labas'[-4], 'labas'.at(-4));
console.log('labas'[-5], 'labas'.at(-5));
console.log('labas'[-6], 'labas'.at(-6));

const hi = 'labas';
console.log(hi.at(-2), hi[hi.length - 2]);

console.clear();

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('labas'.charCodeAt(0));
console.log('labas'.charCodeAt(1));
console.log('labas'.charCodeAt(2));
console.log('labas'.charCodeAt(3));
console.log('labas'.charCodeAt(4));

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str1);

let str3 = 'Hello';
const str4 = 'World';

str3 += ' ';
str3 += str4;
console.log(str3);

let str5 = 'Hello';
str5 += ' ' + str4;
console.log(str5);

console.clear();

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const start = 'Abecele: ';

let a1 = '';
a1 += start;
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];
console.log(a1);

let a2 = start + abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5];
console.log(a2);

let a3 = start;

for (let i = 0; i < abc.length; i++) {
    a3 += abc[i];
}

console.log(a3);

const a4 = start.concat(...abc);
console.log(a4);

const a5 = start.concat(abc[0], abc[1], abc[2], abc[3], abc[4], abc[5]);
console.log(a5);

console.clear();

console.log('Labas rytas'.includes('a'));
console.log('Labas rytas'.includes('A'));
console.log('Labas rytas'.includes(' '));
console.log('Labas rytas'.includes('ab'));
console.log('Labas rytas'.includes('as'));
console.log('Labas rytas'.includes('rytas'));
console.log('Labas rytas'.includes('labas'));
console.log('Labas, labas, rytas'.includes('labas'));

//           0123456
console.log('Labas rytas'.indexOf('a'));
console.log('Labas rytas'.indexOf('A'));
console.log('Labas rytas'.indexOf(' '));
console.log('Labas rytas'.indexOf('ab'));
console.log('Labas rytas'.indexOf('as'));
console.log('Labas rytas'.indexOf('rytas'));
console.log('Labas rytas'.indexOf('labas'));
console.log('Labas, labas, rytas'.indexOf('labas'));

console.log('----------');
//           0123456789
console.log('Labas rytas'.indexOf('a'));
console.log('Labas rytas'.indexOf('a', 0));
console.log('Labas rytas'.indexOf('a', 1));
console.log('Labas rytas'.indexOf('a', 2));
console.log('Labas rytas'.indexOf('a', 4));
console.log('Labas rytas'.indexOf('a', 10));

// Naudoti tik: for () {} ir if () {}
function kiek(tektas, raide) {
    return 0;
}

console.log(kiek('labas', 'a'));

console.clear();

console.log('a'.repeat(6));
console.log('labas'.repeat(6));

console.clear();

const r1 = 'Labas';
const r2 = r1.replace('a', 'x');
console.log(r1, r2);

const r3 = 'Labas rytas';
const r4 = r3.replace('rytas', 'vakaras');
console.log(r3, r4);

const r5 = r3.replace('xxx', 'yyy');
console.log(r3, r5);

const r6 = 'Labas';
const r7 = r6.replaceAll('a', '_');
console.log(r6, r7);

let r8 = 'vasara';

r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);


console.clear()
const kopustas = "kopustas";
console.log(kopustas.slice());
console.log(kopustas.slice(2, 3));  

console.clear();
const pvz = "labas rytas suraitytas";
console.log(pvz.split('x'));
console.log(pvz.split("a"));
console.log(pvz.split(" "));

console.log("sasassa".split("a"));
console.log("sasassa".split("s"));
console.log("".split("z"));
console.log("".split(""));
console.log("labas".split(""));

console.clear();
console.log("1", "Vasara".startsWith("va"));
console.log("2", "Vasara".startsWith("Vas"));
console.log("3", "Vasara".endsWith("ra"));
console.log("4", "Vasara".endsWith("s ara"));
console.log("5", "Vasara".endsWith(""));

console.clear();
const pasaka = "paSAkA";
const pasakaUppercase = pasaka.toUpperCase();
const pasakaLowercase = pasaka.toLowerCase();
console.log(pasaka);
console.log(pasakaUppercase);
console.log(pasakaLowercase);

console.clear();
const strin1 = "    labas   ";
const ats1 = "labas";
const bandymas1 = strin1.trim();
console.log(`"${bandymas1}"`, ats1);

const strin2 = "    labas       rytas   lietuva   ";
const ats2 = "labas rytas lietuva";
let bandymas2 = strin2.trim();
for (; bandymas2.includes("  ");){
    bandymas2 = bandymas2.replaceAll("  ", " ");
}
console.log(`"${bandymas2}"`, ats2);

//iskeliam i funkcija tarpu isvalymas
function isvalymas(text) {
let ats = text.trim();
return ats;
}

console.log(isvalymas(strin1), ats1);
console.log(isvalymas(strin2), ats2);
