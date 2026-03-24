function max_num(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
}

let nums = [5,2,7,90,45,10];

max_num(nums);