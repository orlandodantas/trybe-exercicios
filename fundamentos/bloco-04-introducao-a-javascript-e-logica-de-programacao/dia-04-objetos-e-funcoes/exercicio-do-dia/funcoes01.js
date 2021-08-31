function verificaPalindrome(palavra) {
    let palavraReversa = palavra.split('').reverse().join('');

    if (palavra === palavraReversa) {
        return true;
    }
    else {
        return false;
    }

    
}

console.log(verificaPalindrome('arara'));