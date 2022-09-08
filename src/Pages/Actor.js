import React from 'react'
import './style/Table.css'

export default function Actor() {

  return (
    <div id='actorDiv'>
      
      <h2>list of all actors</h2>
      <div id="button">
        <button onClick={allActors}>All Actors</button>
      </div>
      <table id='allActor'>
        <tr>
          <th id='hiddenTable'>ID</th>
          <th id='hiddenTable'>First Name</th>
          <th id='hiddenTable'>Last Name</th>
        </tr>
      </table>

      <h2>Top 3 Actors</h2>
      <p>click on the button to display the all the actors films they have particpated in</p>
      <div id="button">
        <button onClick={topActor1}>Penelope Guiness</button>
      </div>
      <table id='topA1'>
        <tr>
          <th id='hiddenTable'>ID</th>
          <th id='hiddenTable'>First Name</th>
          <th id='hiddenTable'>Last Name</th>
        </tr>
      </table>

      <div id="button">
        <button onClick={topActor2}>Nick Wahlberg</button>
      </div>
      <table id='topA2'>
        <tr>
          <th id='hiddenTable'>ID</th>
          <th id='hiddenTable'>First Name</th>
          <th id='hiddenTable'>Last Name</th>
        </tr>
      </table>

      <div id="button">
        <button onClick={topActor3}>Ed Chase</button>
      </div>
      <table id='topA3'>
        <tr>
          <th id='hiddenTable'>ID</th>
          <th id='hiddenTable'>First Name</th>
          <th id='hiddenTable'>Last Name</th>
        </tr>
      </table>

      <h2>Top Movies Actors played</h2>
      <p>click on the button to display the actors for the top current movies</p>
      <div id="button">
        <button onClick={topMovieActor1}>Academy Dinosaur</button>
      </div>
      <table id='topMA3'>
        <tr>
          <th id='hiddenTable'>ID</th>
          <th id='hiddenTable'>First Name</th>
          <th id='hiddenTable'>Last Name</th>
        </tr>
      </table>

    </div>
  )
}

function allActors(){

  let actorDiv = document.getElementById("allActor")

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

function topActor1(){

  let actorDiv = document.getElementById("topA1")

  fetch('http://localhost:8080/Home/actorFilms/1', { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
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

function topActor2(){

  let actorDiv = document.getElementById("topA2")

  fetch('http://localhost:8080/Home/actorFilms/2', { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
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

function topActor3(){

  let actorDiv = document.getElementById("topA3")

  fetch('http://localhost:8080/Home/actorFilms/3', { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
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

function topMovieActor1(){

  let actorDiv = document.getElementById("topMA3")

  fetch('http://localhost:8080/Home/filmActorFirstLastName/1', { method: 'GET' })
  .then(res => res.json())
  .then(actors => {
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

