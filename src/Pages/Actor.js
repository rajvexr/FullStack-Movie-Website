import React from 'react'
import './style/Table.css'
import './style/actor.css'

export default function Actor() {

  return (
    <div id='actorDiv'>
      
      <h2>list of all actors</h2>
      <div id="button">
          <button onClick={allActors}>All Actors</button>
      </div>
      <div id='actorTableDiv'>
              <h2 id='ActorTableText'>Click on the button to display all the Actors</h2>
              <table id='allActorTable'>
              </table>
      </div>


      <h2>Top 3 Actors</h2>
      <p>click on the button to display the all the actors films they have particpated in</p>
      <div id="button">
        <button onClick={() => topActor(1)}>Penelope Guiness</button>
      </div>


      <div id="button">
        <button onClick={() => topActor(2)}>Nick Wahlberg</button>
      </div>


      <div id="button">
        <button onClick={() => topActor(3)}>Ed Chase</button>
      </div>

    <div id='topADiv'>
      <table id='topA'>
      </table>
    </div>

      <h2>Top Movies Actors played</h2>
      <p>click on the button to display the actors for the top current movies</p>
      <div id="button">
        <button onClick={() => topMovieActor(1)}>Academy Dinosaur</button>
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

