
const marks = [10, 2, 4, 8, 22];
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}

console.log('FOR:sum=', sumFor);


let sumForOf = 0;
for (const mark of marks){
    sumForOf += mark;
}
console.log('FOR:sumOF=', sumForOf);

//WHILE

let sumWhile = 0;
let iWhile =0;
while (iWhile < marks.length){
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile++;
}
console.log('FOR:sumWhile', sumWhile);