const palindromes = function (originalWord) {
    word = '';
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < originalWord.length; i++){
        if (letters.includes(originalWord[i])){
            word += originalWord[i].toLowerCase();
        }
    }
    reverseWord = '';
    for (let i = 0; i < word.length; i++){
        reverseWord += word[word.length - 1 - i];
    }
    if (reverseWord == word){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
