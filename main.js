let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa38d88c30msh4a7a241dc6ee35ep16f613jsn465e8a99d3cb',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=fast%20', options)
	.then(response => response.json())
	.then(data => {
    const movie = data.d;
    console.log(movie);
    append(movie)
  })
	.catch(err => console.error(err));



  const search = async() =>{
    try { 
      const q = document.getElementById("query").value;
      const response = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${q}`, options)
      const data = await response.json();
      const actual_data = data.d;
      append(actual_data);
    } catch (error) {
      console.log("error: " + error);
    }
    
    
    
  }

  let displayLS = JSON.parse(localStorage.getItem("display")) || [];
  const append = (data) =>{
      const container = document.querySelector(".movies");

      container.innerHTML = null;

      data.map((item) =>{
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(3,1fr)";
        container.style.gap = "30px";
         const name = document.createElement("h1")
         name.innerText = item.l;
         const poster = document.createElement("img")
         poster.src = item.i.imageUrl
       
        const movie = document.createElement('div');
        movie.addEventListener("click", () =>{
          addMovies(item)
        })
        movie.append(poster,name)
        container.append(movie)
      })
     
  }
  
  function addMovies(item){
     displayLS.push(item);
     localStorage.setItem("display",JSON.stringify(displayLS))
     console.log(displayLS);
     window.location.href = "singleMovie.html";
  }