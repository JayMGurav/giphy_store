const input = [-2, 1, -3, 4, -1, 2, 1, -5, 14];


function maxSumOfSubArray(input){
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxSumSubArrayStartIndex = 0, maxSumSubArrayEndIndex = 0;

    for(let i = 0; i < input.length; i++){
        let r = [];
        let subArraySum = 0;        
        for(let j = i; j < input.length ; j++){
            subArraySum+=input[j]
            if(subArraySum > maxSum){
                maxSumSubArrayStartIndex = i;
                maxSumSubArrayEndIndex = j;
                maxSum = subArraySum;
            }
        }
    }

    return {
        maxSum,
        maxSumSubArray: input.slice(maxSumSubArrayStartIndex, maxSumSubArrayEndIndex + 1)
    }
}

console.log(maxSumOfSubArray(input))