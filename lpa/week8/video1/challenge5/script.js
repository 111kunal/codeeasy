let nums = ["apple", "banana", "cherry"];

for(let i=0; i<nums.length/2; i++){
    let a;
    a = nums[i];
    nums[i] = nums[nums.length - 1 -i];
    nums[nums.length - 1 -i] = a;
}

console.log(nums);