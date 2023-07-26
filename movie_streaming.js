const apikey="406c6fc887fcce887ed5ba85251c8e4a";
const apiEndpoint = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/original";
<<<<<<< HEAD
const youtube_api = "AIzaSyC6x5bOvvWzH0lOn0jrf6R9rLUs_q8WsDY";


const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}&language=en-US`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrending: `${apiEndpoint}/trending/all/day?api_key=${apikey}`,
    searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${youtube_api}`
}

// boots up app
function init(){
=======
const youtube_api = "AIzaSyC3VZl56JpTlevvLKvJKzVsljLpvb_i2jg";

// AIzaSyDIrCeeZqsEpqgGUH53OX8uc98WznDy4iI - youtube

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrending:`${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`,
    searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${youtube_api}`
}


// Boots up the app
function init() {
>>>>>>> 8f1b617ffff77057e62e1b3e486580ebc7ed0b18
    fetchTrendingMovies();
    fetchAndBuildAllSections();
}

<<<<<<< HEAD

function fetchTrendingMovies(){
    fetchAndbuildMovieSection(apiPaths.fetchTrending,'Trending Now')
    .then(list =>
        {
const randomIndex=parseInt(Math.random() * list.length);
buildBannerSection(list[randomIndex]);
}).catch(err=>{
    console.error(err);
});
}
function buildBannerSection(movie){
    const bannerCont=document.getElementById('banner-section');
    bannerCont.style.backgroundImage =`url('${imgPath}${movie.backdrop_path}')`;
    const div=document.createElement('div');


div.innerHTML=`
<h2 class="banner__title">${movie.title ?? ""}</h2>
<p class ="bannner__info">Trending in movies | Released -${movie.release_date ??""}</p>
<p class="banner__overview">${movie.overview && movie.overview.length > 200 ? movie.overview.slice(0,200).trim()+ '...':movie.overview }</p>
<div class="action-buttons-cont">
<button class="action-button">
<button class="action-button">
</div>

`;
div.className="banner-content container";
bannerCont.append(div);
}

=======
function fetchTrendingMovies(){
    fetchAndbuildMovieSection(apiPaths.fetchTrending, 'Trending Now')
    .then(list => {
        const randomIndex = parseInt(Math.random() * list.length);
        buildBannerSection(list[randomIndex]);
    }).catch(err=>{
        console.error(err);
    });
}

function buildBannerSection(movie){
    const bannerCont = document.getElementById('banner-section');
    
    bannerCont.style.backgroundImage = `url('${imgPath}${movie.backdrop_path}')`;

    const div = document.createElement('div');
    //check for null or undefined with nullish coalescing operator - ?? is used to check for null or undefined

    div.innerHTML = `
            <h2 class="banner__title">${movie.title ?? ""}</h2>
            <p class="banner__info">Trending in movies | Released - ${movie.release_date ?? ""} </p>
            <p class="banner__overview">${movie.overview && movie.overview.length > 200 ? movie.overview.slice(0,200).trim()+ '...':movie.overview}</p>
            <div class="action-buttons-cont">
                <button class="action-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg> &nbsp;&nbsp; Play</button>
                <button class="action-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg> &nbsp;&nbsp; More Info</button>
            </div>
        `;
    div.className = "banner-content container";

    bannerCont.append(div);
}


>>>>>>> 8f1b617ffff77057e62e1b3e486580ebc7ed0b18
function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories = res.genres;
<<<<<<< HEAD
        // check if array
        if(Array.isArray(categories) && categories.length){
            categories.forEach((category, i) => {
            // categories.slice(0,3).forEach((category, i) => {
                // fetchAndbuildMovieSection(category);
                fetchAndbuildMovieSection(
                    apiPaths.fetchMoviesList(category.id),
                     category.name);

            });
        } // check if array and not empty
        // console.table(categories);
    } )
    .catch(err => console.error('error from api',err))
}
// fetch and buildMovieSection
function fetchAndbuildMovieSection(fetchUrl,categoryName){
    // console.log('category', category, fetchUrl);
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        console.table(res.results);
        const movies = res.results;
        if(Array.isArray(movies) && movies.length){
            buildMoviesSection(movies.slice(0,6),categoryName);
        }
        // const {results} = res;
        return movies
    })
    .catch(err => console.error('error from api',err))
}

// build movies section
function buildMoviesSection(list, categoryName) {
    console.log(list, categoryName);

    const moviesCont =  document.getElementById('movies-cont');

    const moviesListHTML = list.map(item => {
        return `
        <div class="movie-item" onmouseenter="searchMovieTrailer('${item.title}', 'yt${item.id}')" >
=======
        if (Array.isArray(categories) && categories.length) {
            categories.forEach(category => {
                fetchAndbuildMovieSection(
                    apiPaths.fetchMoviesList(category.id),
                    category.name
                );
            });
        }
        // console.table(movies);
    })
    .catch(err=>console.error(err));
}

function fetchAndbuildMovieSection(fetchUrl, categoryName){
    // console.log(fetchUrl,categoryName);
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        // console.table(res.results);
        const movies = res.results;
        if (Array.isArray(movies) && movies.length) {
            buildMoviesSection(movies.slice(0,6), categoryName);
        }
        return movies;
    })
    .catch(err=>console.error(err))
}

function buildMoviesSection(list, categoryName){
    console.log(list, categoryName);

    const moviesCont = document.getElementById('movies-cont');
    
    const moviesListHTML = list.map(item => {
        return `
        <div class="movie-item" onmouseenter="searchMovieTrailer('${item.title}', 'yt${item.id}')">
>>>>>>> 8f1b617ffff77057e62e1b3e486580ebc7ed0b18
            <img class="move-item-img" src="${imgPath}${item.backdrop_path}" alt="${item.title}" />
            <div class="iframe-wrap" id="yt${item.id}"></div>
            <span class="movie-name">${item.title}</span>
        </div>`;
    }).join('');

    const moviesSectionHTML = `
        <h2 class="movie-section-heading">${categoryName} <span class="explore-nudge">Explore All</span></span></h2>
        <div class="movies-row">
            ${moviesListHTML}
        </div>
    `

    const div = document.createElement('div');
    div.className = "movies-section"
    div.innerHTML = moviesSectionHTML;

    // append html into movies container
    moviesCont.append(div);
}

function livesearch(){
    //Locate the card elements
    let cards=document.querySelectorAll('.movie-item');
    //Locate the search input
    let search_query = document.getElementById('Searchbox').value;
    //Loop through the cards
    for (var i=0; i<cards.length; i++)
    {
        if(cards[i].innerText.toLowerCase()
            .includes(search_query.toLowerCase()))
            {
            cards[i].classList.remove("is-hidden");
            }
            else {
                cards[i].classList.add("is-hidden");
            }
    }
}

function searchMovieTrailer(movieName,iframeId){
    if (!movieName) return;

    fetch(apiPaths.searchOnYoutube(movieName))
    .then(res => res.json())
    .then(res => {
        const bestResult=res.items[0];
        
        const elements= document.getElementById(iframeId);
        console.log(elements, iframeId);
        
        const div = document.createElement('div');
<<<<<<< HEAD
        div.innerHTML = `<iframe width= "245 px" height= "150 px" allowfullscreen= "true" src="https://www.youtube.com/embed/${bestResult.id.videoId}?&autoplay=1&mute=1&controls=1"> </iframe>`
=======
        div.innerHTML = `<iframe width="245px" height="150px" allowfullscreen= “true” src="https://www.youtube.com/embed/${bestResult.id.videoId}?&autoplay=1&mute=1&controls=1"></iframe>`

>>>>>>> 8f1b617ffff77057e62e1b3e486580ebc7ed0b18
        elements.append(div);
    })
    .catch(err=>console.log(err));
}

<<<<<<< HEAD
window.addEventListener("load", function(){
    init();
    livesearch()
window.addEventListener("scroll",function(){
const header=this.document.getElementById('header');
if (window.scrollY >5) header.classList.add('black-bg');
else header.classList.remove('black-bg');
})

})

=======
// Search
function liveSearch() {
    // Locate the card elements
    let cards = document.querySelectorAll('.movie-item')
    // Locate the search input
    let search_query = document.getElementById("searchbox").value;
    // Loop through the cards
    for (var i = 0; i < cards.length; i++) {
      // If the text is within the card...
      if(cards[i].innerText.toLowerCase()
        // ...and the text matches the search query...
        .includes(search_query.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          cards[i].classList.remove("is-hidden");
      } else {
        // Otherwise, add the class.
        cards[i].classList.add("is-hidden");
      }
    }
  }


window.addEventListener('load',function() {
    init();
    liveSearch();
    window.addEventListener('scroll', function(){
        // header ui update
        const header = document.getElementById('header');
        if (window.scrollY > 5) header.classList.add('black-bg')
        else header.classList.remove('black-bg');
    })
})
>>>>>>> 8f1b617ffff77057e62e1b3e486580ebc7ed0b18
