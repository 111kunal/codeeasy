let nums = [5, 12, 8, 30, 2];

let max = nums[0]
for(let num of nums){
    if(max < num){
        max = num;
    }
}

console.log(max);