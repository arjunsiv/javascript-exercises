

const palindromes = function (string) {
    let i = 0;
    let j = string.length-1;
    while(i<j){
        if(string[i]=="!" || string[i] =="," || string[i] == "." || string[i] ==" "){
            i++;
            continue;
        }
        else if (string[j]=="!" || string[j] =="," || string[j] == "." || string[j] ==" "){
            j--;
            continue;
        }
        if(string[i].toLowerCase() != string[j].toLowerCase()){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
