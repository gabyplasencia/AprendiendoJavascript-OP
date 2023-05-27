//calcular el factorial de 10 utilizando un bucle while

let num = 10;
let factorial = num;
let i = num - 1;

while(i > 0){
    
    factorial = factorial * i;
    i--;
}

console.log(factorial);
