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
    if (arr[0] === "" || arr[0] === '+' || arr[0] === '-' || arr[0] === '/' || arr[0] === '*') {
        btn_AC()
        document.getElementById('lbl_res').innerText = 'error'
    } else {
        let result;
        let num;
        let operator;
        for (let element of arr) {
            if (!isNaN(element) ) {
                if (num === undefined) {
                    num = parseInt(element);
                } else {
                    if (operator === "+") {
                        num += parseInt(element);
                    } else if (operator === "-") {
                        num -= parseInt(element);
                    } else if (operator === "*") {
                        num = num * parseInt(element);
                    }else if (operator === "/") {
                        num = num / parseInt(element)
                    }
                }
            } else if(element === ''){

            }else {
                operator = element;
            }
        }
        document.getElementById('lbl_res').innerText = num
    }
}

