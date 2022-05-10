let arr = ["A군","B군","C군","D군","E군"];
arr = [1,2,3,4,5]

res=[];

function permutation(input, output, s, r){
    // console.log(`시작 ${arr}, ${s}, ${r}`);
    if(s == r){
        console.log(`결과값 : ${output}`);
        return;
    };

    // console.log(`반복전 ${[arr[s]]}, ${s}, ${r}`);



    for(let i = 0; i<input.length; i++){

        if(output.includes(input[i])){
            continue;
        }
        // console.log(`반복문 내부(1) : output = ${output}, \n s = ${s}, \n r = ${r}, \n i = ${i}`);
    

        output[s] = input[i];
        // console.log(`반복문 내부(2) : output = ${output}, \n s = ${s}, \n r = ${r}, \n i = ${i}`);
        
        permutation(input, output, s+1, r);
        // console.log(`반복문 내부(3) : output = ${output}, \n s = ${s}, \n r = ${r}, \n i = ${i}`);
    }
    

}

permutation(arr,[],0,2);

