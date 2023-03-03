//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

function lygineSuma(a,b){

    if (Array.isArray(a) == false && Array.isArray(b) == false) {
        return `Pateikta tinkama reikšmė abu masyvai.`;
    } 
    else if (typeof number !== a || typeof number !== b ) {
        return `Pateika tinkama reikšmė abu skaiciai.`;
    }
   else  return 'Blogas duomenu tipas';
}