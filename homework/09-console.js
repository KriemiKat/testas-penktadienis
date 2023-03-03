//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function test(skaicius) {
    if (typeof skaicius !== 'number' || skaicius < 2 || !Number.isInteger(skaicius)) {
   return false;
    }for (let i = 2; i <= Math.sqrt(skaicius); i++) {
    if (skaicius % i === 0) {
    return false;}}
    return true;}