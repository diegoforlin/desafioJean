var salario = 1200;
function aumento(salario) {

    if (salario <= 280) {
        return salario * 1.2;
    } else if (salario <= 700) {
        return salario * 1.15;
    } else if (salario <= 1500) {
        return salario * 1.1;
    } else {
        return salario * 1.05;
    }
}

console.log(Math.round(aumento(salario)))