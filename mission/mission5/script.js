const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const modal = document.querySelector("#modal");
const closebtn = document.querySelector("#closebtn");
const modalcontent = document.querySelector("#modal_content")
const body = document.querySelector("body");

async function searchmovies(){
    const input = searchinput.value.trim();
    const apikey = '63cf737a';

    if(input == ""){
        message.textContent = "Enter the movie name ....";
        return
    }

    message.textContent = "Searching.....";

    result.innerHTML = "";

    

    const apiurl = `https://www.omdbapi.com/?s=${ input }&apikey=${apikey}`;

    try{
        const response = await fetch(apiurl)

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        message.textContent = "";

        if(data.Response == "False"){
        message.textContent = "no movies found";
        return
        }

        for(let i=0; i<data.Search.length; i++){
        let movie = data.Search[i];
        let moviecard = document.createElement('div');
        moviecard.className = "movie-card"
        moviecard.id = movie.imdbID;
        moviecard.id = data.Search[i].imdbID;

        moviecard.innerHTML = '<img src="' + movie.Poster + '"alt="' + movie.Title + '">' +
        '<div class="movie-info">' +
        "<h3>"+ movie.Title +"</h3>" +
        "<p>" + "Release:" +movie.Year+"</p>" +
        '<p>' + "Type: "+ movie.Type +'</p>'
        "</div>";

        

        moviecard.addEventListener("click",async ()=>{
            const movieid = moviecard.id;
            const apiurl2 = `https://www.omdbapi.com/?i=${movieid}&apikey=${apikey}`;
            const response2 = await fetch(apiurl2);
            const data2 = await response2.json();
            console.log(data2)

            modal.style.display = "flex";
            body.classList.add("modal-open");

            closebtn.onclick = ()=> {
                modal.style.display = "none";
                body.classList.remove("modal-open");
            }

            modalcontent.innerHTML = '<img src="'+data2.Poster+'" alt="'+data2.Title+'">'+
            '<div class="modalinfo">'+
            '<h3>'+data2.Title+'</h3>'+
            '<p>'+'Year:'+data2.Year +'</p>' + '<p>'+ 'Rated:'+data2.Rated+'</p>'+
            '<p>'+'Runtime:'+data2.Runtime + '</p>' + '<p>'+ 'Language:'+data2.Language+'</p>'+
            '<p>'+'Genre:'+data2.Genre+'</p>'+
            '<p>'+'Plot:'+data2.Plot+'</p>'+
            '</div>'

        })

        result.appendChild(moviecard);
    }
    }
    catch(error){
        console.error("Fetch failure:",error.message)
    }

}

searchbtn.onclick = function(){
    searchmovies();
}