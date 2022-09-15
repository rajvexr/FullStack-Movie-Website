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
                  <table id='allActorTable'> {/*displays all actors from the allActors method*/}
                  </table>
              </div>
            </div>

    <div id='topText'>
      <h2>Top 3 Actors</h2>
      <p>click on the button to display the all the actors films they have particpated in</p>
      </div>

      <div id='actorButton'>

 {/* arrow function returning topActor method with its givin actor id  
 displays all the movies the actor has particpated in*/}

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

{/* arrow function returning topMovieActor method with its givin film id  
displays all actors who were involved in a specific film*/}

      <div className="buttonDiv">
        <button className='AMButton' onClick={() => topMovieActor(1)}>Academy Dinosaur</button>
      </div>

      <div className="buttonDiv">
        <button className='AMButton' onClick={() => topMovieActor(153)}>Citizen Shrek</button>
      </div>

      <div className="buttonDiv">
        <button className='AMButton' onClick={() => topMovieActor(229)}>Devil Desire</button>
      </div>

      <div className="buttonDiv">
        <button className='AMButton' onClick={() => topMovieActor(252)}>Dream Pickup</button>
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

  //actorDiv will be used as an id to display the content in the table
  let actorDiv = document.getElementById("allActorTable")

  //using fetch method by passing a url
  fetch('https://sakilaapp-1663062443073.azurewebsites.net/Home/allActors', { method: 'GET' })
  .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
  .then(actors => { //.then to display the type of data
      actors.forEach(actor => { //forEach is used to display for each actor with a given id,title and desc
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

function topActor(id){ //actor id passed as props

  //actorDiv will be used as an id to display the content in the table
  let actorDiv = document.getElementById("topA")

  //using fetch method by passing a url
  fetch(`https://sakilaapp-1663062443073.azurewebsites.net/Home/actorFilms/${id}`, { method: 'GET' })
  .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
  .then(actors => { //.then to display the type of data
  //setting the innerHTML to an empty string so a new table can be generated when clicked on a different category
      actorDiv.innerHTML=""
      actors.forEach(actor => { //forEach is used to display for each film with a given id,title and desc of each actor
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

function topMovieActor(id){ //film id passed as props

  let actorDiv = document.getElementById("MA")

  fetch(`https://sakilaapp-1663062443073.azurewebsites.net/Home/filmActorFirstLastName/${id}`, { method: 'GET' })
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

