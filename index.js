const filmNames=document.getElementById('films')

function renderOneFilm(films){
    let card= document.createElement('li')
    card.className='films-details'
    card.textContent= films.title
    filmNames.append(card)

    card.addEventListener('click', ()=>{
        createFilmContent(films)

    })
}
    function createFilmContent(films){
    const filmTitle=document.getElementById('film-title')
    const filmImg=document.getElementById('film-img')
    const runtime=document.getElementById('film-run')
    const showtime=document.getElementById('film-show')
    const filmTick=document.getElementById('film-tick')
    const buyTick=document.getElementById('buy-tick')
    let capacity=films.capacity
    let sold=films.tickets_sold
    let available_tickets=capacity-sold
    filmTitle.textContent=films.title
    filmImg.src=films.poster
    runtime.textContent=`Runtime: ${films.runtime} minutes`
    showtime.textContent=`Showtime: ${films.showtime}`
    filmTick.textContent=`Available Tickets:${available_tickets}`

    buyTick.addEventListener('click', ()=>{
        if(available_tickets>0){
            filmTick.textContent=`Available Tickets: ${--available_tickets}`
        }
        else if(available_tickets<=0){
            buyTick.innerText="Tickets Sold Out"
            buyTick.style.backgroundColor= 'red';
        }

    })
}

function displayFilm(){
    fetch('https://abdub2.github.io/db.json')
    .then(res => res.json())
    .then((data => createFilmContent(data.films[0])))
}


function getAllFilms(){
    fetch('https://abdub2.github.io/db.json')
    .then(res => res.json())
    .then((data => data.films.forEach(films =>renderOneFilm(films))));
}

function initialize(){
    getAllFilms()
}
initialize()

displayFilm()






