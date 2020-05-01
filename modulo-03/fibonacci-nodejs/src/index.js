'use strict'

const fibonacci = (limit = 350) => {
    const sequence = Array(0, 1);
    let number = 0;

    for (let i = 2; number < limit; i++) {
        number = sequence[i - 2] + sequence[i - 1];
        sequence.push(number);
    }

    return sequence;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
