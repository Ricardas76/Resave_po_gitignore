 //Jonas turėjo 9 jubiliejus
 const userName1 = "Jonas";
 const userAge1 = 99;

const user1Jubiliejai = (userAge1 - userAge1 % 10)/10
const user1Str = `${userName1} turėjo ${user1Jubiliejai} jubiliejus!`
console.log(user1Str)

const userName2 = "Ona";
const userAge2 = 47;

const user2Jubiliejai = (userAge2 - userAge2 % 10)/10
const user2Str = `${userName2} turėjo ${user2Jubiliejai} jubiliejus!`
console.log(user2Str)


console.clear();
function jubiliejai(username, age){
    const count = (age - age % 10)/10;
    return `${username} turėjo ${count} jubilieju/-s!`;
}
console.log(jubiliejai("Jonas", 99));
console.log(jubiliejai("Ona", 47));

console.clear();
function studentAverage(name, marks) {
    let totalSum = 0;
    totalSum += marks[0];
    totalSum += marks[1];
    totalSum += marks[2];
    totalSum += marks[3];
    totalSum += marks[4];
    totalSum += marks[5];
   const average = totalSum / marks.length;
    return  ` ${name}: pazymiu vidurkis yra ${average.toFixed(2)}.`
}
console.log(studentAverage("Jonas", [1, 5, 6 ,9, 7, 8]));
console.log(studentAverage("Ona", [7, 6, 7, 9, 8, 9]));
