const input = "240623806173552444210800582521951761967364004861435651368602402618620358018026425633230402259117978930269221362210921769678187308527269240482956171059301002";

function duSkaiciai(input) {
    const raides = input.split('');
    const poros = [];

    for (let i = 0; i < raides.length - 1; i++) {
        const pora = raides.slice(i, i + 2).join('');
        poros.push(pora);
    }

    const pasikartojimai = {};
    for (const pora of poros) {
        pasikartojimai[pora] = (pasikartojimai[pora] || 0) + 1;
    }

    let manoPoros = [];
    let maxSkaicius = 0;

    for (const pora in pasikartojimai) {
        if (pasikartojimai[pora] > maxSkaicius) {
            manoPoros = [pora];
            maxSkaicius = pasikartojimai[pora];
        } else if (pasikartojimai[pora] === maxSkaicius) {
            manoPoros.push(pora);
        }
    }

    return { poros: manoPoros, kartojimuSkaicius: maxSkaicius };
}

const rezultatai = duSkaiciai(input);

console.log('Dažniausiai pasikartojanti/-čios pora/-os:', rezultatai.poros);
console.log('Pasikartojimų skaičius:', rezultatai.kartojimuSkaicius);
