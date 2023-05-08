function cosenoHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.coseno(num);
    displayValorAnterior.innerText="cos("+num+")";
}

function senoHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.seno(num);
    displayValorAnterior.innerText="sen("+num+")";
}

function arcotangenteHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.arcotangente(num);
    displayValorAnterior.innerText="atan("+num+")";
}

function tangenteHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.tangente(num);
    displayValorAnterior.innerText="tan("+num+")";
}

function raizCHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.raizc(num);
    displayValorAnterior.innerText="√("+num+")";
}

function piHTML(){
    var num=document.getElementById("valor-actual").innerText;
    displayValorActual.innerText=calculadora.pi(num);
    displayValorAnterior.innerText="";
}