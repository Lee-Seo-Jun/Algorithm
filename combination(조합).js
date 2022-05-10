let input = ["A군", "B군", "C군", "D군", "E군"];
let output = [];
let count = 1;
let list = ["A군","C군"];

function combination(arr, data, s, idx, r, list/*반드시 포함되어야 하는 값*/){

        //combination(input, [], 2, 0, 2, list);//
        /* arr = ["A군", "B군", "C군", "D군", "E군"]
        data = []
        s = 2
        idx = 0
        r = 2
        list = ["A군","C군"]
        */


    if( s+list.length == r ){  /* 초기 s=2, 2-2=0, s가 1씩 증가하면 1씩 증가, r=2 */
        for(let k = 0; k<list.length; k++){
            data[k] = list[k];
        }
        console.log("결과값 : " + data );/* [] */ 
        return;
    }

    
    
    let nonessentialArray = arr.filter(item => ! list.includes(item))
        /* nonessentialArray = ["B군","D군","E군"] */

        //console.log(`반복 전_${count} : arr = ${arr} data = ${data} s = ${s} idx = ${idx} r = ${r} list = ${list}`);
        
        for(let i = idx; arr.length - i  >= r - s; i++){  
            /* 3>2 수행, */

             data[s+list.length] = nonessentialArray[i]; 
            /* data[2] = essentialArray[i],  */
            //console.log(`반복 중 ${count} : arr = ${arr} data = ${data} s = ${s} idx = ${idx} r = ${r} list = ${list}`);
            count++;

            combination(arr,data,s+1,i+1,r,list);
            /* data = [A,C,B], s = 1, i = 1, */


            }
        }


    combination(input, [], 0, 0, 4, list);
  


    