// Exercício 1 - Cotação do dólar
function exercicio1() {
    var dolar = Number(document.getElementById("dolar1").value);
    var resultado = "Aumento de 1%: R$ " + (dolar * 1.01).toFixed(2).replace(".", ",");
    resultado += "\nAumento de 2%: R$ " + (dolar * 1.02).toFixed(2).replace(".", ",");
    resultado += "\nAumento de 5%: R$ " + (dolar * 1.05).toFixed(2).replace(".", ",");
    resultado += "\nAumento de 10%: R$ " + (dolar * 1.10).toFixed(2).replace(".", ",");
    document.getElementById("resultado1").textContent = resultado;
    document.getElementById("resultado1").hidden = false;
}

// Exercício 2 - Ingredientes da omelete
function exercicio2() {
    var pessoas = Number(document.getElementById("pessoas2").value);
    var ovos = pessoas * 2;
    var queijo = pessoas * 50;
    var resultado = "Ovos necessários: " + ovos;
    resultado += "\nQueijo necessário: " + queijo + " gramas";
    document.getElementById("resultado2").textContent = resultado;
    document.getElementById("resultado2").hidden = false;
}

// Exercício 3 - Operações matemáticas
function exercicio3() {
    var numero1 = Number(document.getElementById("numero13").value);
    var numero2 = Number(document.getElementById("numero23").value);
    var resultado = "Soma: " + (numero1 + numero2);
    resultado += "\nSubtração: " + (numero1 - numero2);
    resultado += "\nMultiplicação: " + (numero1 * numero2);
    if (numero2 == 0) {
        resultado += "\nDivisão: não é possível dividir por zero.";
    } else {
        resultado += "\nDivisão: " + (numero1 / numero2);
    }
    document.getElementById("resultado3").textContent = resultado;
    document.getElementById("resultado3").hidden = false;
}

// Exercício 4 - Pedido de pizza
function exercicio4() {
    var sabor1 = document.getElementById("sabor14").value.trim();
    var sabor2 = document.getElementById("sabor24").value.trim();
    var sabor3 = document.getElementById("sabor34").value.trim();
    var sabor4 = document.getElementById("sabor44").value.trim();
    var refrigerantes = Number(document.getElementById("refrigerantes4").value);
    var total = 4 * 12 + refrigerantes * 7;
    var resultado = "Sabores escolhidos: " + sabor1 + ", " + sabor2 + ", " + sabor3 + " e " + sabor4;
    resultado += "\nRefrigerantes: " + refrigerantes;
    resultado += "\nTotal a pagar: R$ " + total.toFixed(2).replace(".", ",");
    document.getElementById("resultado4").textContent = resultado;
    document.getElementById("resultado4").hidden = false;
}

// Exercício 5 - Idade de três pessoas
function exercicio5() {
    var nome1 = document.getElementById("nome15").value.trim();
    var ano1 = Number(document.getElementById("ano15").value);
    var nome2 = document.getElementById("nome25").value.trim();
    var ano2 = Number(document.getElementById("ano25").value);
    var nome3 = document.getElementById("nome35").value.trim();
    var ano3 = Number(document.getElementById("ano35").value);
    var anoAtual = new Date().getFullYear();
    var idade1 = anoAtual - ano1;
    var idade2 = anoAtual - ano2;
    var idade3 = anoAtual - ano3;
    var nomeAuxiliar;
    var idadeAuxiliar;
    
    // Troca os nomes e as idades para colocar a maior idade primeiro.
    if (idade1 < idade2) {
        nomeAuxiliar = nome1;
        nome1 = nome2;
        nome2 = nomeAuxiliar;
        idadeAuxiliar = idade1;
        idade1 = idade2;
        idade2 = idadeAuxiliar;
    }
    if (idade1 < idade3) {
        nomeAuxiliar = nome1;
        nome1 = nome3;
        nome3 = nomeAuxiliar;
        idadeAuxiliar = idade1;
        idade1 = idade3;
        idade3 = idadeAuxiliar;
    }
    if (idade2 < idade3) {
        nomeAuxiliar = nome2;
        nome2 = nome3;
        nome3 = nomeAuxiliar;
        idadeAuxiliar = idade2;
        idade2 = idade3;
        idade3 = idadeAuxiliar;
    }
    var resultado = "Pessoa mais velha: " + nome1 + " - " + idade1 + " anos";
    resultado += "\nSegunda pessoa mais velha: " + nome2 + " - " + idade2 + " anos";
    resultado += "\nTerceira pessoa mais velha: " + nome3 + " - " + idade3 + " anos";
    document.getElementById("resultado5").textContent = resultado;
    document.getElementById("resultado5").hidden = false;
}

// Exercício 6 - Nota final
function exercicio6() {
    var nota = Number(document.getElementById("nota6").value);
    var resultado;
    if (nota < 6 && nota > 4) {
        resultado = "precisa fazer prova substitutiva";
    } else if (nota > 6) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    document.getElementById("resultado6").textContent = resultado;
    document.getElementById("resultado6").hidden = false;
}

// Exercício 7 - Comparação de números
function exercicio7() {
    var numero1 = Number(document.getElementById("numero17").value);
    var numero2 = Number(document.getElementById("numero27").value);
    var resultado;
    if (numero1 > numero2) {
        resultado = "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
        resultado = "O primeiro número é menor que o segundo.";
    } else {
        resultado = "O primeiro número é igual ao segundo.";
    }
    document.getElementById("resultado7").textContent = resultado;
    document.getElementById("resultado7").hidden = false;
}

// Exercício 8 - Divisão de turmas
function exercicio8() {
    var alunos = Number(document.getElementById("alunos8").value);
    var turmas = Number(document.getElementById("turmas8").value);
    var resultado;
    if (alunos < 0 || turmas <= 0 || alunos % 1 != 0 || turmas % 1 != 0) {
        resultado = "Digite uma quantidade inteira de alunos e uma quantidade inteira de turmas maior que zero.";
    } else {
        var pessoasPorTurma = Math.floor(alunos / turmas);
        var semTurma = alunos % turmas;
        resultado = "Pessoas por turma: " + pessoasPorTurma;
        resultado += "\nPessoas sem turma: " + semTurma;
    }
    document.getElementById("resultado8").textContent = resultado;
    document.getElementById("resultado8").hidden = false;
}

// Exercício 9 - Metas de vendas
function exercicio9() {
    var vendido = Number(document.getElementById("vendido9").value);
    var meta = Number(document.getElementById("meta9").value);
    var metaMinima = Number(document.getElementById("metaMinima9").value);
    var resultado;
    if (meta <= 0 || metaMinima <= 0) {
        resultado = "As metas devem ser maiores que zero.";
    } else {
        if (vendido >= meta) {
            resultado = "Atingiu a meta.";
        } else if (vendido >= metaMinima) {
            resultado = "Atingiu a meta mínima.";
        } else {
            resultado = "Não atingiu nenhuma das metas.";
        }
        var percentualMeta = vendido / meta * 100;
        var percentualMinima = vendido / metaMinima * 100;
        resultado += "\nPercentual de atingimento da meta: " + percentualMeta.toFixed(2).replace(".", ",") + "%";
        resultado += "\nPercentual de atingimento da meta mínima: " + percentualMinima.toFixed(2).replace(".", ",") + "%";
    }
    document.getElementById("resultado9").textContent = resultado;
    document.getElementById("resultado9").hidden = false;
}

// Executa cada exercício quando o formulário é enviado.
document.getElementById("form1").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio1();
});

document.getElementById("form2").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio2();
});

document.getElementById("form3").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio3();
});

document.getElementById("form4").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio4();
});

document.getElementById("form5").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio5();
});

document.getElementById("form6").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio6();
});

document.getElementById("form7").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio7();
});

document.getElementById("form8").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio8();
});

document.getElementById("form9").addEventListener("submit", function(evento) {
    evento.preventDefault();
    exercicio9();
});

