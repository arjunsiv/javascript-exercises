const findTheOldest = function(people) {
    return people.reduce((oldestObject,currentobject) =>{
        let oldestAge;
        if(!("yearOfDeath" in oldestObject)){
            oldestAge = new Date().getFullYear() - oldestObject.yearOfBirth;
        }
        else{
            oldestAge = oldestObject.yearOfDeath - oldestObject.yearOfBirth;
        }
        let age = 0;
        if(!("yearOfDeath" in currentobject)){
            age = new Date().getFullYear() - currentobject.yearOfBirth;
        }
        else{
            age = currentobject.yearOfDeath - currentobject.yearOfBirth;
        }
        if(age > oldestAge){
            oldestObject = currentobject;
        }
        return oldestObject;
    },people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
