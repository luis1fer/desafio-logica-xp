const readlineSync = require('readline-sync');
let continuar = true; // var que controla o a continuação do loop

while (continuar) {
    let nome = readlineSync.question("Digite o nome do heroi: "); // var que guarda o nome do herói
    let xp = parseInt(readlineSync.question("Digite a quantidade de XP: ")); // var que guarda a quantidade de XP e converte para inteiro
    let nivel;  

    // Estrutura de decisão para classificar o herói de acordo com o XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    // Saída, aqui é mostrado o nome do herói e seu nível
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    // Adicionei esta parte para facilitar os testes para ver se todos os níveis de xp estavam sendo classificados corretamente.
    let resposta = readlineSync.question("Deseja inserir outro herói? (s/n): ");
    
    if (resposta.toLowerCase() !== 'sim' && resposta.toLowerCase() !== 's') {
        continuar = false; 
    }
}

console.log("Até mais!.");
