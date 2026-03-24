let prime = (a) => {
    let count = 0;

    for(let i=0; i<a; i++){
        if(a%i == 0){
            count++;
        }
    }

    if(count > 1){
        console.log("not prime");
    }
    else{
        console.log("prime");
    }
}

prime(7);