const increase = document.querySelector("#increase")
const reset = document.querySelector("#reset")
const value2 = document.querySelector("#value")


increase.addEventListener("click",()=>{
    value2.textContent++;

})

reset.addEventListener("click",()=>{
     value2.textContent = 0;
})