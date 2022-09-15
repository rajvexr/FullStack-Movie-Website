import React, { useEffect, useState } from 'react'
import './style/Table.css'
import './style/Film.css'


export default function Film() {

  //film is the first value and is the current state, film is set to null
  const [film,setFilm] = useState(null); //useState is a Hook whicha allows to have state variables in functional components

  const [filmRating,setFilmRating] = useState(null);
  const [returnFilm, setReturnFilms] = useState([]);

  useEffect(() =>{ //useEffect will be triggered at the end of a rendered cycle only when the value changes
    
    //if there is a film rating then the condition will be executed
    if(filmRating){ 
      console.log(filmRating)
      fetch(`https://sakilaapp-1663062443073.azurewebsites.net/Home/Rating/${filmRating}`, { method: 'GET' })
      .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
      .then(films => { //.then to display the type of data
        setReturnFilms(films) //setReturnFilms will update the state
          
          });
    }  
  }, [filmRating]);



  return (
    
<div id="film">


    <h2>All Films</h2>
    <p>click the button to view all the films available. Once clicked on the button, you would be able to
      see each film with a given id, title and a film description </p>

      <div id="allFilmBox">

        <div id='filmButtonDiv'> {/*onclick event is used to display all films when button is clicked*/}
          <button onClick={allFilms}>All Films</button> 
        </div>

            <div id='filmTableDiv'>
              <table id='allFilmTable'> {/*table given the id from allFilms method to contain the data in a table*/}
              </table>
            </div>
      </div>



    <div id='randomText'>
    <h2 id='randomTitle'>Random Film</h2>
    <p>click the button to get a random film. Once clicked on the button, you will be able to
      see a film with a given id, title, description, rating and many more unquie information</p>
      </div>
    <div id='randomFilmDiv'>

      <div id='randomDiv'>
        <button onClick = {() => randomFilm(setFilm) }>Random Film</button> {/*using the arrow function to return the randomFilm fucntion*/}
      </div>

{/*using the ternary operator, film (current state is null) is the condition, if the first condition is true*/} 
        {film ? <p>Film Id: {film.filmId}</p> : <div></div>} {/*then it will be executed.*/}
        {film ? <p>Title: {film.filmTitle}</p> : <div></div>}
        {film ? <p>Description: {film.filmDescription}</p> : <div></div>}
        {film ? <p>Rating: {film.filmRating}</p> : <div></div>}
        {film ? <p>Length (Minutes): {film.filmLength}</p> : <div></div>}
        {film ? <p>Release Year: {film.filmReleaseYear}</p> : <div></div>}
        {film ? <p>Special Features: {film.filmSpecial}</p> : <div></div>}

    </div>



    <div id='ratingText'>
    <h2>Film Rating</h2>
    <p>click the button to view all the films available. Once clicked on the button, you would be able to
      see each film with a given id, title and a film description</p>
      </div>

    <div id='filmRatingDiv'>
    {/* select used to create a drop down box for film ratings */}
      <select onChange={(e) => setFilmRating(e.target.value)}> {/*onChange event is used when the value of an element has been changed*/}
            <option value={0}></option> {/*setFilmRating will be setting and tracking the value using onChange*/}
            <option value={1}>G</option> {/*the values are the id for each film rating*/}
            <option value={2}>PG</option>
            <option value={3}>PG-13</option>
            <option value={4}>R</option>
            <option value={5}>NC-17</option>
      </select>

    <ul> 
    {/* .map creates a function to be run for each array element */}
      {returnFilm && returnFilm.map((film, i) => ( //map the film to display each film array with an id, title and desc
        <li key={i} id='ratingLi'> 
          <div id='rateTableDiv'>
            <table id='rateTable'> {/*displaying film data from each film rating in a table*/}
              <tbody>
                <tr>
                  <td>{film.film_id}</td> 
                  <td>{film.title}</td>
                  <td>{film.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}


function randomFilm(setFilm){ //setFilm is used as props and is used to update the state

  let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1) //letting the film id be random, there are 1000 films

  fetch(`https://sakilaapp-1663062443073.azurewebsites.net/Home/Film/${id}`, { method: 'GET' }) //doller function used to refer to as get element by id fucntion
  .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
  .then(film => { //.then to display the type of data
    setFilm({ //setFilm will update the state and use the following data below:
              filmId : film.film_id,
              filmTitle : film.title,
              filmDescription : film.description,
              filmRating : film.rating,
              filmLength : film.length,
              filmReleaseYear : film.release_year,
              filmSpecial : film.special_features,
            
      }) 
    })
  }


function allFilms(){

    let filmDiv = document.getElementById("allFilmTable") //filmDiv will be used as an id to display the content in the table

    //using fetch method by passing a url
    fetch('https://sakilaapp-1663062443073.azurewebsites.net/Home/allFilms', { method: 'GET' }) 
    .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
    .then(films => { //.then to display the type of data
        films.forEach(film => { //forEach is used to display for each film with a given id,title and desc
            filmDiv.innerHTML += `
                                  <tr>
                                  <td>${film.film_id}</td>
                                  <td>${film.title}</td>
                                  <td>${film.description}</td>
                                  </tr>
                                  `
        });
    })
}


