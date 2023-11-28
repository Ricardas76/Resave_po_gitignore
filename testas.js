const tekstas = "2406238061735524442108005825219517619673640048614356513686024026186203580180226425633230402259117978930269221362210921769678187308527269240482956171059301002";
function duSkaiciai(tekstas) {
    const raides = tekstas.split('');
    const poros = [];

for (let i = 0; i < raides.length - 1; i++) {
        const pora = raides.slice(i, i + 2).join('');
        poros.push(pora);
    }

const pasikartojimai = {};
    for (const pora of poros) {
        pasikartojimai[pora] = (pasikartojimai[pora] || 0) + 1;
    }

let besikartojantiPora = null;
let poruSkaicius = 0;

for (const pora in pasikartojimai) {
    if (pasikartojimai[pora] > poruSkaicius) {
        besikartojantiPora = pora;
        poruSkaicius = pasikartojimai[pora];
        }
    }
    return { pora: besikartojantiPora, kartojimuSkaicius: poruSkaicius };
}
const rezultatai = duSkaiciai(tekstas);
console.log('Dažniausiai pasikartojanti pora:', rezultatai.pora);
console.log('Pasikartojimų skaičius:', rezultatai.kartojimuSkaicius);
