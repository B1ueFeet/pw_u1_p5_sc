const btn_uno = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 1 "
const btn_dos = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 2 "
const btn_tres = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 3 "
const btn_cuatro = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 4 "
const btn_cinco = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 5 "
const btn_seis = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 6 "
const btn_siete = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 7 "
const btn_ocho = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 8 "
const btn_nueve = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 9 "
const btn_cero = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " 0 "
const btn_suma = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " + "
const btn_resta = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " - "
const btn_mult = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " * "
const btn_div = () => document.getElementById("lbl_prev").innerText = document.getElementById("lbl_prev").innerText + " / "
const btn_AC = () => document.getElementById("lbl_prev").innerText = ""
const resultado = () => {
    let arr = document.getElementById('lbl_prev').innerText.split(' ');
    console.log(arr)
    if (arr[arr.length - 1] === "") {
        console.log(arr.pop())
    }

    if (arr[0] === "" || arr[0] === '+' || arr[0] === '-' || arr[0] === '/' || arr[0] === '*') {
        btn_AC()
        document.getElementById('lbl_res').innerText = 'error'
    } else {
        let numeros = []
        let signos = []
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && !isNaN(arr[i]) && !isNaN(arr[i - 1])) {
                numeros[numeros.length - 1] += arr[i];
            } else if (!isNaN(arr[i])) {
                numeros.push(arr[i]);
            } else {
                signos.push(arr[i]);
            }
        }
        console.log(numeros)
        console.log(signos)
        let resultado = parseInt(numeros[0]);

        for (let i = 1; i < numeros.length; i++) {
            const signo = signos[(i - 1) % signos.length];
            const numero = parseInt(numeros[i]);
            if (signo === '+') {
                resultado += numero;
            } else if (signo === '*') {
                resultado *= numero;
            } else if (signo === '/') {
                resultado /= numero;
            } else if (signo === '-') {
                resultado -= numero;
            }
        }
        document.getElementById('lbl_res').innerText = resultado
        console.log(resultado);

    }
}




/* 
else {
    let num;
    let operator;
    for (let element of arr) {
        if (!isNaN(element)) {
            if (num === undefined) {
                num = parseInt(toString(num) + element);
                console.log(num)
            } else {
                if (operator === "+") {
                    num += parseInt(element);
                } else if (operator === "-") {
                    num -= parseInt(element);
                } else if (operator === "*") {
                    num = num * parseInt(element);
                } else if (operator === "/") {
                    num = num / parseInt(element)
                }
            }

        } else {
            operator = element;
        }
    }
    document.getElementById('lbl_res').innerText = num
} */