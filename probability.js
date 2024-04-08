function rand (a) {
let x = 0; 
let y = 0; 
let z = 0; 
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
for(let i=1; i <=a; i++){
    z = randomInteger(100, 1000);
    if (z%2 != 0){
        x = x + 1
    }
    else {
        y = y + 1
    }
}  
console.log ("Кількість згенерованих чисел ", a)
console.log ("Кількість парних чисел ", y)
console.log ( "Кількість непарних чисел ", x)
console.log ("Відсоток парних до не парних: ", Math.round(x/a*100), "%-", Math.round(y/a*100),'%');
}
rand(50)