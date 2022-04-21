let num1 = parseInt(prompt("Introduce el primer número"), 10);
let num2 = parseInt(prompt("Introduce el segundo número"), 10);

document.getElementById("pares").addEventListener("click", () => {
    if (num1 % 2 == 0) {
        if (num2 % 2 == 0) {
            alert("Son pares");
        } else {
            alert("El 1° número es par y el 2° número impar");
        }
    } else {
        if (num2 % 2 == 0) {
            alert("El 1° número es impar y el 2° número par");
        } else {
            alert("Ambos números son impares");
        }
    }
});
document.getElementById("suma").addEventListener("click", () => {
    if (isNaN(num1) && isNaN(num2)) {
        alert("No ingresaste números");
    } else {
        alert("La suma de los números es: " + (num1 + num2));
    }
});
document.getElementById("resta").addEventListener("click", () => {
    if (isNaN(num1) && isNaN(num2)) {
        alert("No ingresaste números");
    } else {
        alert("La resta de los números es: " + (num1 - num2));
    }
});
document.getElementById("factorial").addEventListener("click", () => {
    let fnum1 = 1,
        fnum2 = 1;
    for (let i = 1; i <= num1; i++) {
        fnum1 = fnum1 * i;
    }
    for (let i = 1; i <= num2; i++) {
        fnum2 = fnum2 * i;
    }

    alert("El factorial del 1° número es: " + fnum1 + " y el factorial del 2° número es: " + fnum2);
});
document.getElementById("potencia").addEventListener("click", () => {
    alert("La potencia entre los números ingresados es: " + Math.pow(num1, num2));
});
document.getElementById("divisible").addEventListener("click", () => {
    if ((num1 / num2) == 1) {
        alert("El 1° número es dividible entre el 2°");
    } else {
        alert("Los números no son divisibles");
    }
});