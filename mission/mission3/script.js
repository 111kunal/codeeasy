const marks = [45,34,78,89,56];
function total(a){
    let sum = 0;
    for(let i=0; i<a.length; i++){
        sum += a[i];
    }

    let percentage = (500/sum)*100;
    console.log("total marks:"+sum);

    let average = sum/marks.length;
    console.log("average:" + average);
    if(percentage >= 90){
        console.log("grade is : A")
    }
    else if(percentage >= 75 && percentage < 90){
        console.log("grade is : B")
    }
    else if(percentage >= 60 && percentage < 75){
        console.log("grade is : c")
    }
    else{
        console.log("grade is : D")
    }
}

let a = total(marks);