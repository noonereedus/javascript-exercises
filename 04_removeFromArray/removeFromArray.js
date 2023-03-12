const removeFromArray = function(array, ...taboo) {
    for (let i = 0; i < array.length;)
    {
        if (taboo.includes(array[i]))
        {
            array.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
