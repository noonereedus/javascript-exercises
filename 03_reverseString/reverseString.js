const reverseString = function(string) {
    answer = '';
    for (let i = 1; i <= string.length; i++)
    {
        answer += string[string.length - i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
