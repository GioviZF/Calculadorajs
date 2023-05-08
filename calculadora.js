function Display() {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    this.signos = {
        sumar: '+',
        dividir: '%',
        multiplicar: 'x',
        restar: '-'
    }
}

Display.prototype.borrar = function () {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
};

Display.prototype.borrarTodo = function () {
    this.valorActual = '';
    this.valorAnterior = '';
    this.tipoOperacion = undefined;
    this.imprimirValores();
};

Display.prototype.computar = function (tipo) {
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.imprimirValores();
};

Display.prototype.agregarNumero = function (numero) {
    if (numero === '.' && this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
};

Display.prototype.imprimirValores = function () {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
};

Display.prototype.calcular = function () {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return
    this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
};

function Calculadora() {
}
Calculadora.prototype.sumar = function (num1, num2) {
    return num1 + num2;
};

Calculadora.prototype.restar = function (num1, num2) {
    return num1 - num2;
};

Calculadora.prototype.dividir = function (num1, num2) {
    return num1 / num2;
};

Calculadora.prototype.multiplicar = function (num1, num2) {
    return num1 * num2;
};

Calculadora.prototype.coseno = function (num1) {
    return Math.cos(num1);
}

Calculadora.prototype.seno = function (num1) {
    return Math.sin(num1);
}

Calculadora.prototype.tangente = function (num1) {
    return Math.tan(num1);
}

Calculadora.prototype.arcotangente = function (num1) {
    return Math.atan(num1);
}

Calculadora.prototype.raizc = function (num1) {
    return Math.sqrt(num1);
}

Calculadora.prototype.pi = function (num1) {
    return Math.PI;
}

var displayValorAnterior = document.getElementById('valor-anterior');
var displayValorActual = document.getElementById('valor-actual');
var botonesNumeros = document.querySelectorAll('.numero');
var botonesOperadores = document.querySelectorAll('.operador');

var display = new Display(displayValorAnterior, displayValorActual);
 var calculadora=new Calculadora();
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});