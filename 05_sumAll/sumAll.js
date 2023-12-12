const sumAll = function(fnum, snum) {
    if(typeof(fnum) !='number' || typeof(snum)!="number" || fnum*snum < 0){
        return "ERROR"
    }
    if(fnum > snum){
        return sumAll(snum,fnum);
    }
    let sum = 0;
    for(let i = fnum; i<=snum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
