
function forloop_arithmeticSequence(s/*초기값*/, t/*등차값*/, number/*반복할 횟수*/){
    let acc = 0;
    
    for(let i =1; i<=number; i++){
        if(i == 1){
            acc += s;
        }else{
            acc += t;
        }

    }
    return acc;
}

function recursive_arithmeticSequence(s, t, number){
    if(number == 1){
        return s;
    }

    return recursive_arithmeticSequence(s,t,number-1) + t;
};


function forloop_geometricSequence(s/*초기값*/, t/*등차값*/, number/*반복할 횟수*/){
    let acc = 0;
    
    for(let i =1; i<=number; i++){
        if(i == 1){
            acc *= s;
        }else{
            acc *= t;
        }

    }
    return acc;
}

function recursive_geometricSequence(s, t, number){
    if(number == 1){
        return s;
    }

    return recursive_geometricSequence(s,t,number-1) * t;
};


function recursive_factorial(number){
    if(number == 1){
        return number;
    }

    return recursive_factorial(number - 1) * number ;
};



function recursive_FibonacciSequence(number){
    if(number == 1 || number == 0){
        return number;
    }

    return recursive_FibonacciSequence(number-2) + recursive_FibonacciSequence(number-1); 
}

console.log(recursive_FibonacciSequence(5));
console.log(recursive_factorial(5));






