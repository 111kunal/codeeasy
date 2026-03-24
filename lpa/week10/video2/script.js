const userinput = document.querySelector("#userinput")
const searchbtn = document.querySelector(".searchbtn")
const message = document.querySelector(".message")
const result = document.querySelector(".result")

async function myapi(){
    const input = userinput.value;
    
    if(input == ""){
        message.textContent = "Enter the Name of the city...."
        return
    }
    result.innerHTML = ""
    message.textContent = "Searching...."

    const apikey = 'af81929be1b3b02cf59ea82d61fdc1c8'
    const apiurl = `https://api.weatherstack.com/current?access_key=${apikey}&query=${input} `
    const response = await fetch(apiurl)
    const data = await response.json();

    if(data.seccess == false){
        message.textContent = "city not found try a new city....."
    }

    message.textContent = ""
    
    result.innerHTML='<p>'+`city:${data.location.name}`+'</p>'+
    '<p>'+`temperature:${data.current.temperature}`+'</p>'+
    '<p>'+`windspeed:${data.current.wind_speed}`+'</p>'
}

searchbtn.onclick = function(){
        myapi();
}