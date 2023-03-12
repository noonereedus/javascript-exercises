const repeatString = function(word, number) {
    let answer = '';
    if (number >= 0) {for (let i = 0; i < number; i++)
    {
        answer += word;
    }
    return answer;}
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
