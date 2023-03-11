let displayLS = JSON.parse(localStorage.getItem("display")) ;

const container = document.getElementById("single_movie");
function display(movie){
    
   
    movie.map((item) =>{
        container.innerHTML = null;
        const div  = document.createElement("div");
        div.setAttribute("class", "movie");
        const img = document.createElement("img");
        img.src = item.i.imageUrl; 
        const title = document.createElement("h1");
        title.innerText = item.l;
        const subtitle = document.createElement("h3");
        subtitle.innerText = item.qid;
        const cast = document.createElement("p");
        cast.innerText = item.s
        const rank = document.createElement("p");
        rank.innerText = `Rank : ${item.rank}`
        const year = document.createElement("p");
        year.innerText = `Released on : ${item.y}`
        div.append(img,title,subtitle,cast,rank,year)
        container.append(div);
    })
   
   
    console.log(movie);
}


display(displayLS);
