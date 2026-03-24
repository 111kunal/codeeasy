const userinput = document.querySelector("#countryInput")
const searchbtn = document.querySelector("#searchBtn")
const message = document.querySelector("#status")
const result = document.querySelector("#resultCard")
const flagImg = document.querySelector("#flagImg")
const namecommon = document.querySelector("#nameCommon")
const nameofficial = document.querySelector("#nameOfficial") 
const cca2 = document.querySelector("#cca2")
const cca3 = document.querySelector("#cca3")
const regionchip = document.querySelector("#regionChip")
const subregionchip = document.querySelector("#subregionChip")
const capital = document.querySelector("#capital")
const population = document.querySelector("#population")
const area = document.querySelector("#area")
const timezone = document.querySelector("#timezones")
const languages = document.querySelector("#languages")
const currencies = document.querySelector("#currencies")
const callingcode = document.querySelector("#callingCode")
const tld = document.querySelector("#tld")
const borders = document.querySelector("#borders")
const coatimg = document.querySelector("#coatImg")
const gmaps = document.querySelector("#gmaps")
const osmaps = document.querySelector("#osmaps")
const fifa= document.querySelector("#fifa")
const carside= document.querySelector("#carSide")
let startofweek= document.querySelector("#startOfWeek")
const errorcard = document.querySelector("#errorCard")



async function myapi(){
    const input = userinput.value;

    if(input == ""){
        message.textContent = "Enter the country name....."
        return
    }

    message.textContent = ""

    const apiurl = 'https://restcountries.com/v3.1/name/'+input
    try{
        const response = await fetch(apiurl)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()

        result.classList.remove("hidden")
        errorcard.classList.add("hidden")
        tld.innerHTML = ""
        flagImg.setAttribute('src', data[0].flags.png)
        namecommon.textContent = data[0].name.common
        nameofficial.textContent = data[0].name.official
        cca2.textContent = data[0].cca2;
        cca3.textContent = data[0].cca3;
        regionchip.textContent = data[0].region;
        subregionchip.textContent = data[0].subregion;
        capital.textContent = data[0].capital
        population.textContent = data[0].population
        area.textContent = data[0].area
        timezone.textContent = data[0].timezones
        languages.textContent = Object.values(data[0].languages)
        currencies.textContent = Object.values(data[0].currencies)[0].name + '(' + Object.values(data[0].currencies)[0].symbol+ ')'
        callingcode.textContent = `${data[0].idd.root} ${data[0].idd.suffixes}`
        for(let i=0; i<data[0].tld.length; i++){
            const element = document.createElement('li')
            element.textContent = data[0].tld[i]
            tld.appendChild(element)
        }
        if(data[0].borders){
            borders.textContent = data[0].borders
        }
        else{
            borders.innerHTML = ""
        }
        coatimg.setAttribute('src',data[0].coatOfArms.png)
        gmaps.setAttribute('href',data[0].maps.googleMaps)
        osmaps.setAttribute('href',data[0].maps.openStreetMaps)
        fifa.textContent = data[0].fifa
        carside.textContent = data[0].car.side
        startofweek.textContent = data[0].startOfWeek
    }
    catch(error){
        console.error("Fetch failure:",error.message)
        result.classList.add("hidden")
        errorcard.classList.remove("hidden")
    }
    
}

searchbtn.onclick = (e)=>{
    e.preventDefault()
    const data = myapi()
    return data
}

