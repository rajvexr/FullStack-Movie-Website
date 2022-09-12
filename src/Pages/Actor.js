import React from 'react'
import './style/Table.css'
import './style/actor.css'

export default function Actor() {

  return (
    <div id='actorDiv'>

<h2>All Actors</h2>
    <p>click the button to view all the actor available. Once clicked on the button, you would be able to
      see each film with a given id, title and a film description </p>
      <div id='allActorBox'>

        <div id="allActorButton">
            <button onClick={allActors}>All Actors</button>
        </div>

        <div id='actorTableDiv'> 
            <table id='allActorTable'>
            </table>
        </div>
      </div>

    <div id='topText'>
      <h2>Top 3 Actors</h2>
      <p>click on the button to display the all the actors films they have particpated in</p>
      </div>

      <div id='actorButton'>

        <div className="button">
          <button className="aButton" onClick={() => topActor(1)}>Penelope Guiness</button>
        </div>


        <div className="button">
          <button className="aButton" onClick={() => topActor(2)}>Nick Wahlberg</button>
        </div>


        <div className="button">
          <button className="aButton" onClick={() => topActor(3)}>Ed Chase</button>
        </div>
      </div>

    <div id='topADiv'>
      <table id='topA'>
      </table>
    </div>

    <div id='movieActorText'>
      <h2>Top Movies Actors played</h2>
      <p>click on the button to display the actors for the top current movies</p>
    </div>
    <div id='actorMovieButton'>

      <div className="buttonDiv">
        <button className='AMButton' onClick={() => topMovieActor(1)}>Academy Dinosaur</button>
      </div>

    </div>

      <div id='MADiv'>
        <table id='MA'>
        </table>
      </div>

    </div>
  )
}

function allActors(){

  let actorDiv = document.getElementById("allActorTable")

  fetch('http://localhost:8080/Home/allActors', { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
      actors.forEach(actor => {
          actorDiv.innerHTML += `
                                <tr>
                                <td>${actor.actor_id}</td>
                                <td>${actor.actorFirstName}</td>
                                <td>${actor.actorLastName}</td>
                                </tr>
                                `
      });
  })
}

function topActor(id){

  let actorDiv = document.getElementById("topA")

  fetch(`http://localhost:8080/Home/actorFilms/${id}`, { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
      actorDiv.innerHTML=""
      actors.forEach(actor => {
          actorDiv.innerHTML += `
                                <tr>
                                <td>${actor.film_id}</td>
                                <td>${actor.title}</td>
                                <td>${actor.description}</td>
                                </tr>
                                `
      });
  })
}

function topMovieActor(id){

  let actorDiv = document.getElementById("MA")

  fetch(`http://localhost:8080/Home/filmActorFirstLastName/${id}`, { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
    actorDiv.innerHTML=""
      actors.forEach(actor => {
          actorDiv.innerHTML += `
                                <tr>
                                <td>${actor.actor_id}</td>
                                <td>${actor.actorFirstName}</td>
                                <td>${actor.actorLastName}</td>
                                </tr>`
      });
  })
}

