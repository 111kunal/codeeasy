const jokebtn = document.querySelector("#joke")
const punchbtn = document.querySelector(".pu")
const div1 = document.querySelector("#div1")
const div2 = document.querySelector(".punch")



async function myapi(){
    const apiurl = 'https://official-joke-api.appspot.com/random_joke'
    const response = await fetch(apiurl)
    const data = await response.json();


    jokebtn.addEventListener("click",()=>{
        div1.textContent = `joke:${data.setup}`;
    })

    punchbtn.addEventListener("click",()=>{
        div2.textContent = `punchline:${data.punchline}`;
    })
}

myapi();