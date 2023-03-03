//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let galutinis = 0
while(galutinis !=5){
    galutinis = rand(1, 10);
    if (galutinis == 5 )break;
    console.log(galutinis);
}; 
console.log(galutinis);