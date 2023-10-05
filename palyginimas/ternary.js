console.clear();

const amzius = 17;
const limitas = 18;
let zinute = "";

//pilnametis uzeik
//nepilnametis sorry

if (amzius < limitas) {
    zinute = "sorry";
} else {
    zinute = "uzeik";
}
console.log(">>>11", zinute);
/*let zinute1 = "sorry";
    else


if (amzius < zinute) {
    zinute2 = "sorry";
}
let zinute2 = "uzeik";
if (amzius < zinute) {
    zinute2 = "sorry";
}
console.log(">>>", zinute2);*/

//ternary yra trejybe, ji sudaro 3 dalys   salyga ? if true : else false
const zinute3 = amzius < limitas ? "sorry" : "uzeik"
console.log(">>>33", zinute3);

const q1 = 0 > 1 ? 3 : 7;
console.log(">>>3>>q>>", q1);

const q21 = (0 > 1) 
                ? 2 
                    ? 3
                    : 5 
                : 9;
console.log(">>>3>>q>>", q21);