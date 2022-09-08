import React, { useEffect, useState } from 'react'
import './style/Table.css'
import './style/Film.css'


export default function Film() {

  const [film,setFilm] = useState(null);

  const [filmRating,setFilmRating] = useState(null);
  const [returnFilm, setReturnFilms] = useState([]);

  useEffect(() =>{

    if(filmRating){
      console.log(filmRating)
      fetch(`http://localhost:8080/Home/Rating/${filmRating}`, { method: 'GET' })
      .then(res => res.json())
      .then(films => {
        setReturnFilms(films)
          
          });
    }  

  }, [filmRating]);


  return (
    
<div id="film">

    <h2>Have Fun finding a random film :) </h2>

    <button onClick = {() => randomFilm(setFilm) }>Random Film</button>

      {film ? <p>Film Id: {film.filmId}</p> : <div></div>}
      {film ? <p>Title: {film.filmTitle}</p> : <div></div>}
      {film ? <p>Description: {film.filmDescription}</p> : <div></div>}
      {film ? <p>Rating: {film.filmRating}</p> : <div></div>}
      {film ? <p>Length (Minutes): {film.filmLength}</p> : <div></div>}
      {film ? <p>Release Year: {film.filmReleaseYear}</p> : <div></div>}
      {film ? <p>Special Features: {film.filmSpecial}</p> : <div></div>}

    <h2>Click on the button to display all films</h2>
      <div id="button">
          <button onClick={allFilms}>All Films</button>
      </div>
      <table id='divFilm'>
        <tbody >
          <tr>
            <th id='hiddenTable'>ID</th>
            <th id='hiddenTable'>TITLE</th>
            <th id='hiddenTable'>DESCRIPTION</th>
          </tr>
        </tbody>
      </table>

    <h2>Film Ratings</h2>

    <div>
      <select onChange={(e) => setFilmRating(e.target.value)}>
            <option value={0}></option>
            <option value={1}>G</option>
            <option value={2}>PG</option>
            <option value={3}>PG-13</option>
            <option value={4}>R</option>
            <option value={5}>NC-17</option>
      </select>

    <ul>
      {returnFilm && returnFilm.map((film, i) => (
        <li key={i} id='ratingTable'>
          <table >
            <tbody>
              <tr>
                <td>{film.film_id}</td>
                <td>{film.title}</td>
                <td>{film.description}</td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}


function randomFilm(setFilm){

  let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

  fetch(`http://localhost:8080/Home/Film/${id}`, { method: 'GET' })
  .then(res => res.json())
  .then(film => {
    setFilm({
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

    let filmDiv = document.getElementById("divFilm")

    fetch('http://localhost:8080/Home/allFilms', { method: 'GET' })
    .then(res => res.json())
    .then(films => {
        films.forEach(film => {
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


