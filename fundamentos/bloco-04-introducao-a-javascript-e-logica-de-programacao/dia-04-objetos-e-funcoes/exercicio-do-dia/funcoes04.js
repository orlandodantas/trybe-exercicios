function maxName(values) {
    let nome = '';
    for (value of values) {
        if (value.length > nome.length) {
            nome = value;
        }
    }
    return nome;
}

console.log(maxName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));