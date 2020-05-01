function soma(numA, numB) {
    return numA + numB;
}

function subtraco(numA, numB) {
    return numA - numB;
}

function multiplicacao(numA, numB) {
    return numA * numB;
}

function divisao(numA, numB) {
    if (numB != 0) return numA / numB;
    else return undefined;
}

module.exports = {
    soma,
    subtraco,
    multiplicacao,
    divisao,
}