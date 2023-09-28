/*
STRING
inicijavimas kabut4mis " " arba ' ' 
*/
//isvalomas visas terminalo ekranas

console.clear();  
const txt1 = "tekstas1";
const txt2 = 'tekstas2';
console.log (txt1);
console.log (txt2);
//vienguba kabute
const kabute1 = "vienguba kabute: (').";
console.log (kabute1);
const kabute2 = 'dviguba kabute: (").';
console.log (kabute2);
//const kabute12 = "vienguba (') ir dviguba (\") kabutes:";
// va šiuo ženklu \ ignoruojama kabute ir paliekama kaip tekstas
//console.log (kabute12);

// \n = new line
// \r = return ir grizta i eilutes pirma simboli
const formatuotasTekstas = "Labas\ntestas\rrytas\n\rLietuva";
//r raso nuo pradzios eilutes ant virsaus
//todel lieka s nuo testas
console.log (formatuotasTekstas);
// zenklas \n eilutes gale veikia kaip enter
const formatuotasTekstas2 = "\nLabas\nrytas\nLietuva";
console.log (formatuotasTekstas2);
// kabute po esc ` padaro taip kaip parasom su enteriais
const backtickTekstas = `
Labas
rytas
Lietuva`;
console.log (backtickTekstas);

//teksto apimtis ilgis  yra kintamasis.length
const vardas = 'Chuck';
console.log(vardas, "vardą sudaro",  vardas.length, "simboliai");

const pavarde = "Norris";
const pilnasVardas = "Chuck Norris";
console.log(pilnasVardas, "pilną vardą sudaro",  pilnasVardas.length, "simbolių");
const fullname = vardas + " " + pavarde;
console.log ("Jo vardas ir pavardė", fullname);
const  lrl = "labas";
console.log(lrl);
// teksto isvedimas su backtick ` ir kintamaisiais skliaustuose ${} 
const labas = "Labas";
const parosMetas = "vakaras";
const lietuva = "Lietuva";
const lrl3 = `${labas} ${parosMetas}, ${lietuva}!`;
console.log(lrl3);

console.clear();
//skaiciai ir tekstas kintamajame

const n1 = 5 + 7;
console.log(n1);

const n2 = 5 + "7";
console.log(n2);

const n3 = "5" + 7;
console.log(n3);

const n4 = "5" + "7";
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = "7" - 5;
console.log(n6);

const n7 = 7 - "5";
console.log(n7);

const n8 = "7" - "5";
console.log(n8);

const ll = "labas" - "l";
console.log(ll);