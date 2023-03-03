//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

function lygineSuma(a, b) {
    if ((typeof a !== 'number' && !Array.isArray(a)) || (typeof b !== 'number' && !Array.isArray(b))) {
    return 'Error';
    }let sum = 0;if (typeof a === 'number' && typeof b === 'number') {
    sum = a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
    sum = a.length + b.length;
    } else {
    return 'Suma nelyginė';
    }
    if (sum % 2 !== 0) { 
    return 'Suma nelyginė';
    } else {
    return sum;
    }
    }