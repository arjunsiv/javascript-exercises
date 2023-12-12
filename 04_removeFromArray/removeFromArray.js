const removeFromArray = function(array, ...elements) {
    const answer = array.filter((item)=>{
        for(element of elements){
            if(item === element){
                return false;
            }
        }
        return true;
    })
    return answer;

};

// Do not edit below this line
module.exports = removeFromArray;
