/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
viskas galioja tik viename cikle, o pasibaigus jam pamirstama ir ciklas tesiamas
*/

console.clear();
let a = 0;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);

//dabar ciklas
for (let i = 0; i < 5; i++) {
    console.log("labas");
}
console.clear();
console.log("START")
for (let s = 0; s <= 5; s++) {
    console.log(s, "pirmas");
    }
    console.log("PAUSE")
for (let s = 3; s < 5; s++) {
    console.log(s, "antras");
    }
console.log("FINISH")

console.clear()
for (let f = 0; f < 5; ++f) {
    const sentence = `skaicius ${f + 1}`;
    console.log(sentence);
}
console.clear();
for (let d = 3; d < 9; d++) {
    console.log(d);
}
// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3,4,5,6,7,8
const start = 3;
const finish = 8;
let numberSequence = ""
numberSequence += " 3"
numberSequence += " 4"
numberSequence += " 5"
//...
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence} .`
console.log(numberLine)

const start2 = 7;
const finish2 = 10;
let numberSequence2 = ""
for (let i = start2; i <= finish2; i++ ){
    numberSequence2 += " " + i;
}
const numberLine2 = `Skaiciai intervale nuo ${start2} iki ${finish2} imtinai yra:${numberSequence2} .`
console.log(numberLine2); 

// o dabar su kableliais
const start3 = 6;
const finish3 = 10;
let numberSequence3 = ""
for (let i = start3; i < finish3; i++ ) {
    numberSequence3 += i + ", ";
} 
numberSequence3 += finish3;
const numberLine3 = `Skaiciai intervale nuo ${start3} iki ${finish3} imtinai yra: ${numberSequence3}.`
console.log(numberLine3); 

console.clear()
/* for (let i = 0; i > 10; i++) {
    if (i % 2 === 0); 
    console.log(i);
    
}
nespausdina rezultato */
console.log("_____")
console.clear()
let i = 0;
for (let i = 4 ; i <= 10;) {
    console.log(i, "ciklas")
    i += 2;
};

console.log(i, "uz ciklo"); // issaugo reiksme kuri buvo pries

/* kazkoks paaiskinimas
console.clear()
function arTestiCikla(index) {
    if (index <= 10) {
        return true;
    } else {
        return false;
    }
}
for (let i = 0; arTestiCikla(i); i += 2;) {
    console.log(i, "ciklas");
};

console.log(i, "uz ciklo"); */

console.clear()
const word = "Žodis";
//console.log(`Raidė: ${word[8]}`); isspausdina norima zodzio raide
for (let i = 0; i < word.length; i++){
    console.log(`Raidė: ${word[i]}`);
};
console.clear();
const marks = [10, 2, 4, 5, 6, 9, 5, 9, 6]
let totalSum = 0;
const count = marks.length;
for (let i = 0; i < marks.length; i++) {
    totalSum += marks[i];
    console.log(i,")", marks[i], "=", totalSum);

};
console.clear();

//              0  1  2  3  4
const marks2 = [10, 2, 8, 4, 6, 7];

let totalSum2 = 0;
const amount = marks2.length;

for (let i = 0; i < amount; i++) {
    const mark = marks2[i];
    totalSum2 += mark;
    console.log(`${i})`, mark, '=', totalSum2);
}

const average = totalSum2 / amount;
console.log(marks2, 'vidurkis yra', average.toFixed(2));