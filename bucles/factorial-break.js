//calcular el factorial de 10 utilizando 
//un bucle while, una bifurcación if y una sentencia break

let num = 10;
let factorial = num;
let i = num - 1;
let noEsCero = true;


while(noEsCero){
    
    if(i > 0){
        factorial = factorial * i;
        i--;
    }else {
        noEsCero = false;
        break;
    }
    
}

console.log(factorial);