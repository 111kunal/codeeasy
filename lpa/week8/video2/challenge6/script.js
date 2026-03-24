function calculateBMI(weight , height){
    let bmi = weight/(height * height);

    if(bmi > 25){
        console.log("overweight");
    }
    else{
        console.log("normal");
    }
}

calculateBMI(88, 1.9);