function renderOneFilm(film){
    let card= document.createElement('li')
    let capacity=`${film.capacity}`
    let sold= `${film.tickets_sold}`
    const available_tickets=capacity-sold
    card.className='card'

    card.innerHTML=
    `

    <img id="img" src="${film.poster}">
    <div class ="content">
        <h2>${film.title}</h2>
        Runtime: <h4>${film.runtime} minutes</h4>
        Showtime:<h4>${film.showtime}</h4>
        Number of available tickets:<output type=numner id= demoInput min=0 ></output>
    </div>
    <div>
    <button onclick="decrement()">Buy Ticket</button>
    </div>



    `
    document.querySelector('#films').appendChild(card)
}





function getAllFilms(){
    fetch('http://localhost:3000/films/')
    .then(res => res.json())
    .then(films => films.forEach(film =>renderOneFilm(film)))
}

function initialize(){
    getAllFilms()
}
initialize()



function decrement() {
     document.getElementById('demoInput').stepDown();
    }



