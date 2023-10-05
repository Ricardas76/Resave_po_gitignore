// Vardai buna is didziosios raides

//Jonas -->true
// Maryte --> true
// labas - false
// 12345 --> false


function looksLikeName(text) {
    //jeigu pirma raide mazoji grazinti -> false (!== nera lygus)
    if (text[0] !== text[0].toUpperCase()) {
        return "Klaida, pirma raide ne didzioji";
    } 
    //jeigu yra skaitmuo 1,2,3... ->false
        const neleistiniSimboliai = '0123456789_,.?!@$%'; 
            for (let i=0; i<neleistiniSimboliai.length; i++) {
            const simbolis = neleistiniSimboliai[i];
            if (text.includes(simbolis)) {
            return "Klaida";
            }
 }
    //jeigu visi simboliai apart pirmo ne mazosios
    // graziname _>false
    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return "Visos likusios raides turi buti mazosios";  
}
    
//jeigu nerandu prie ko prikibti tada graziname ->true

return(true);
}
console.log(looksLikeName("Jo3as"), true);
console.log(looksLikeName("MaryPte"), true);
console.log(looksLikeName("labas"), false);
console.log(looksLikeName("A5ZU0las"), false);

console.clear();

function isName() {
return "ok";
}
console.log(isName());
console.log(isName("Jonas"));

