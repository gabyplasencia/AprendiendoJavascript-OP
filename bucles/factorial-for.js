//calcular el factorial de 10 utilizando un solo bucle for

var num = 10;
let factorial = num;

for (let i = num - 1; i > 0; i--){
    
    factorial = factorial * i;
    
}

console.log(factorial);
