variav = true

var exibirTexto = function() {
    if(variav == true) {
        var textoIf = "Var dentro do IF"
        console.log(textoIf)
    }
    else {
        var textonaoIf = "Var fora do IF"
        console.log(textonaoIf)
    }
}

function alterarTitulo() {
    var novoTitulo = prompt("Digite um titulo: ");
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = novoTitulo
}

function alterarBackground() {
    aleatNum = Math.floor(Math.random() * 3);

    if(aleatNum == 0) {
        document.getElementById("corpo").style.backgroundColor = "red";
    }
    else if(aleatNum == 1) {
        document.getElementById("corpo").style.backgroundColor = "green";
    }
    else if(aleatNum == 2) {
        document.getElementById("corpo").style.backgroundColor = "blueviolet";
    }

    document.log(aleatNum)
}

exibirTexto();
