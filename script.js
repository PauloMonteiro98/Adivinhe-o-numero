let gerado = gerarNumero();

function principal() {
    let input = $('#num');
    let palpite = +input.val();
    let retorno = comparar(palpite, gerado);
    
    let msg = $('#res');

    switch (retorno) {
        case -1: { msg.html('Tente um número maior!'); break; }
        case 0: { msg.html('Parabéns, você acertou! Aperte F5 para jogar novamente!'); break; }
        case 1: { msg.html('Tente um número menor!'); break; }
    }
}

function gerarNumero() {
    let x = Math.floor(Math.random() * 30 + 1);
    return x;
}

function comparar(p, g) {
    if (p < g) {
        return -1;
    } else if (p === g) {
        return 0;
    } else if (p > g) {
        return 1;
    }
}