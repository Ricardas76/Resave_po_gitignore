/*
IF palyginimo sakinys/salyga
Kodo šablonai:
if() {}     (salyga paprastuose skliaustuose atsakymai kitokiuose)
if() {} else {}
if() {} else {} if() {}
if() {} .... else {} .... if() {}

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini  >, <, ===, >=, <=, !==
-nanaudotini  ==, !=

Loginiai operatoriai:
&&, ||, !   // ! keicia reiksme i priesinga

*/
//nustatyti lyginis ar ne duotas skaičus  irgi lyginis, dešimtainiai nelyginiai visada

if (4>2) {
    console.log("4 yra daugiau už 2");
}

if (5<0) {
    console.log("5 yra mažiau už 0");
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}

const a = 7;
const b = 5;

if(a>b) {
    console.log("A yra daugiau už B")
} else {
    console.log("A nėra daugiau už B")
};

//  1 2  3  4  5  6  7
//  8 9 10 11 12 13 14
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28
const day = 1;

if(day % 7 == 1) {
    console.log("Pirmadienis")
}else if (day % 7 == 2) {
    console.log("Antradienis")
}else if(day % 7 == 3) {
    console.log("Trecadienis")
} else if (day % 7 == 4) {
    console.log("Ketvirtadienis")
}else if (day % 7 == 5) {
    console.log("Penktadienis")
}else if(day % 7 == 6) {
    console.log("Šeštadienis")
} else if (day % 7 == 0) {
    console.log("Sekmadienis")
} else {
    console.log("Tokia diena neegzistuoja")
};

// kodo nestinimas, kai koda rasai viduje kito kodo
console.clear();

const diena = 4;

if(diena === 1) {
    console.log("Pirmadienis")
} else {
    if(diena === 2) {
    console.log("Antradienis")
        } else {
            console.log("Astuntadienis")
                }
            };

console.clear();

// tikrinam is karto 2 salygas su &&
const parosMetas = "diena";
const arLyja = false;
/* if (parosMetas === "diena") {
    if (arLyja)
    console.log("Einam šokti lietuje")
} else {
    console.log("Eilinė diena rojuje")
}*/

if (parosMetas === "diena" && arLyja === true) {
    console.log("Einam šokti lietuje");
} else if (parosMetas === "diena" && arLyja === false) {
    console.log("Eilinė diena rojuje");
};

console.clear();
const g = "A";
const h = "a";
//== tikrina tik reiksmes o === patikrina ir kintamojo tipa
if (g === h) {
    console.log("Lygu");
} else {
    console.log("Ne lygu");
};


const abc = {
    65: "a"
}

if (abc[65] === "a") {
    console.log("aaaa"); 
    } else {
        console.log("bbb");
    }

console.clear();
const w = "ab"
const e = "ca"

if (w > e) {
    console.log(`"${w}" yra daugiau už "${e}"`);
} else {
    console.log(`"${w}" yra mažiau arba lygu už "${e}"`);
};


// sukurti funkcija kuri priima skaiciu ir atspausdina


