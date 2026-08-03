let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    lancamentos++;
    console.log(`{Lançamentos ${lancamentos} : Resultado do dado: ${lancamentos}`);
}

console.log(`Finalmente! 0 número 6 foi obitido após ${lancamentos} lançamnetos.`);