function getAge(birth, death){
    if (!death){
        let currentYear = new Date().getFullYear();
        return currentYear - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => 
    {   
        return getAge(oldest.yearOfBirth, oldest.yearOfDeath)
         > getAge(person.yearOfBirth, person.yearOfDeath) ? oldest : person;
    })
};


// Do not edit below this line
module.exports = findTheOldest;
