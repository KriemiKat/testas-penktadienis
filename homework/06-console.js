//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [];
let newArray = [];

for (let i = 0; i<rand(20,30); ++i){
    array[i]=rand(10,30);
    newArray.push(array[i]); 
}
console.log('Naujas masyvas',newArray);

