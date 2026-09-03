let aumento = 0;
let novoSalario = 0;

function executarMenu() {
    console.log("Menu de opções:");
    
    // Switch desconmentado para receber a opção do usuário
    let opcao = prompt("Escolha uma opção: \n1 - Novo salário \n2 - Férias \n3 - Décimo terceiro \n4 - Sair");

    switch (opcao) {
        case "1":
            opcao1();
            break;

        case "2":
            opcao2();
            break;

        case "3":
            opcao3();
            break;

        case "4":
            alert("Obrigado por usar nosso app");
            break;

        default:
            alert("Opção inválida! Tente novamente.");
            break;
    }
}

function opcao1() {
    let salario = Number(prompt("Digite o salário:"));

    // Correção dos blocos condicionais do aumento:
    if (salario <= 350) {
        aumento = salario * 0.15;
    } else if (salario <= 600) { // Corrigido o operador e lógica
        aumento = salario * 0.10;
    } else {
        aumento = salario * 0.05;
    }

    novoSalario = salario + aumento;
    alert("O novo salário é: R$ " + novoSalario.toFixed(2));
}

function opcao2() {
    let salario2 = Number(prompt("Digite o salário:"));
    // Férias é o salário mais 1/3 do salário (salario2 / 3)
    let ferias = salario2 + (salario2 / 3);
    alert("O valor das férias é: R$ " + ferias.toFixed(2));
}

function opcao3() {
    let salario3 = Number(prompt("Digite o salário:"));
    let mesesTrabalhados = Number(prompt("Quantos meses foram trabalhados (1 a 12): "));
    
    let decimoTerceiro = (salario3 * mesesTrabalhados) / 12;
    alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
}