

function rand(min,max,times, array = []){

    /*
    min=랜덤 최소값 
    max=랜덤 최대값 
    times = 몇 개 구할 것인지
    array = 입력받지 않음
    */
    
        if(array.length===times){
            return;
        };
    
        let res = Math.random() * (max-min+1);
        res = Math.floor(res)+min;
    
        array.push(res);
    
        rand(min,max,times,array);
    
    
        return array;
    }


    