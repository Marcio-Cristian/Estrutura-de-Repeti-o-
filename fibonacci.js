function fibonacci(x) {
    if (x === 0 || x === 1) return 1;
    let fm1 = 1, fm2 = 1, fm;
    for (let i = 2; i <= x; i++) {
        fm = fm1 + fm2;
        fm1 = fm2;
        fm2 = fm;
    }
    return fm;
}

function fiboRec(x) {
    if (x === 0 || x === 1) return 1;
    return fiboRec(x - 1) + fiboRec(x - 2);
}

function executar() {
    var input = document.getElementById("valorX");
    var resp = document.getElementById("resp");
    var x = parseInt(input.value, 10);

    if (isNaN(x) || x < 0) {
        resp.innerHTML = "Digite um número inteiro maior ou igual a 0.";
        return;
    }

    resp.innerHTML = "Fibonacci(" + x + ") = " + fibonacci(x);
}
