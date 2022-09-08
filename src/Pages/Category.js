import React from 'react'
import { useState } from 'react'
import './style/Category.css'
import './style/Table.css'

export default function Category() {
    const [category,setCategory] = useState(null);
  return (
    <div id='category'>

        <h2>Welcome to the film category page!</h2>

        <div id='button'>

            <div id='buttonDiv'>
            <button onClick={Action}>Action</button>
            </div>
            <table id='actionDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Animation}>Animation</button>
            </div>
            <table id='animationDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Children}>Children</button>
            </div>
            <table id='childrenDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Classics}>Classics</button>
            </div>
            <table id='classicsDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Comedy}>Comedy</button>
            </div>
            <table id='comedyDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>
            
            <div id='buttonDiv'>
            <button onClick={Documentary}>Documentary</button>
            </div>
            <table id='documentaryDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Drama}>Drama</button>
            </div>
            <table id='dramaDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Family}>Family</button>
            </div>
            <table id='familyDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Foreign}>Foreign</button>
            </div>
            <table id='foreignDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Games}>Games</button>
            </div>
            <table id='gamesDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Horror}>Horror</button>
            </div>
            <table id='horrorDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Music}>Music</button>
            </div>
            <table id='musicDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={New}>New</button>
            </div>
            <table id='newDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={SciFi}>Sci-Fi</button>
            </div>
            <table id='scifiDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Sports}>Sports</button>
            </div>
            <table id='sportsDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

            <div id='buttonDiv'>
            <button onClick={Travel}>Travel</button>
            </div>
            <table id='travelDiv'>
                <tbody >
                    <tr>
                        <th id='hiddenTable'>ID</th>
                        <th id='hiddenTable'>TITLE</th>
                        <th id='hiddenTable'>DESCRIPTION</th>
                    </tr>
                </tbody>
            </table>

                <h2>Have Fun finding a random category film :) </h2>

    <button onClick = {() => randomCategory(setCategory) }>Random Category Film</button>

      {category ? <p>Film Id: {category.filmId}</p> : <div></div>}
      {category ? <p>Title: {category.filmTitle}</p> : <div></div>}
      {category ? <p>Description: {category.filmDescription}</p> : <div></div>}
      {category ? <p>Rating: {category.filmRating}</p> : <div></div>}
      {category ? <p>Length (Minutes): {category.filmLength}</p> : <div></div>}
      {category ? <p>Release Year: {category.filmReleaseYear}</p> : <div></div>}
      {category ? <p>Special Features: {category.filmSpecial}</p> : <div></div>}

        </div>
    </div>
  )
}


function Action(){

    let categoryDiv = document.getElementById("actionDiv")

    fetch('http://localhost:8080/Home/categoryFilm/1', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Animation(){

    let categoryDiv = document.getElementById("animationDiv")

    fetch('http://localhost:8080/Home/categoryFilm/2', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Children(){

    let categoryDiv = document.getElementById("childrenDiv")

    fetch('http://localhost:8080/Home/categoryFilm/3', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Classics(){

    let categoryDiv = document.getElementById("classicsDiv")

    fetch('http://localhost:8080/Home/categoryFilm/4', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Comedy(){

    let categoryDiv = document.getElementById("comedyDiv")

    fetch('http://localhost:8080/Home/categoryFilm/5', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Documentary(){

    let categoryDiv = document.getElementById("documentaryDiv")

    fetch('http://localhost:8080/Home/categoryFilm/6', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Drama(){

    let categoryDiv = document.getElementById("dramaDiv")

    fetch('http://localhost:8080/Home/categoryFilm/7', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Family(){

    let categoryDiv = document.getElementById("familyDiv")

    fetch('http://localhost:8080/Home/categoryFilm/8', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

    function Foreign(){

        let categoryDiv = document.getElementById("foreignDiv")
    
        fetch('http://localhost:8080/Home/categoryFilm/9', { method: 'GET' })
        .then(res => res.json())
        .then(categorys=> 
            {
                categorys.forEach(category => {
                    categoryDiv.innerHTML += `
                                            <tr>
                                            <td>${category.film_id}</td>
                                            <td>${category.title}</td>
                                            <td>${category.description}</td>
                                            </tr>`
                });
            })
        }
    
function Games(){

    let categoryDiv = document.getElementById("gamesDiv")

    fetch('http://localhost:8080/Home/categoryFilm/10', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Horror(){

    let categoryDiv = document.getElementById("horrorDiv")

    fetch('http://localhost:8080/Home/categoryFilm/11', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Music(){

    let categoryDiv = document.getElementById("musicDiv")

    fetch('http://localhost:8080/Home/categoryFilm/12', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function New(){

    let categoryDiv = document.getElementById("newDiv")

    fetch('http://localhost:8080/Home/categoryFilm/13', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function SciFi(){

    let categoryDiv = document.getElementById("scifiDiv")

    fetch('http://localhost:8080/Home/categoryFilm/14', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Sports(){

    let categoryDiv = document.getElementById("sportsDiv")

    fetch('http://localhost:8080/Home/categoryFilm/15', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

function Travel(){

    let categoryDiv = document.getElementById("travelDiv")

    fetch('http://localhost:8080/Home/categoryFilm/16', { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categorys.forEach(category => {
                categoryDiv.innerHTML += `
                                        <tr>
                                        <td>${category.film_id}</td>
                                        <td>${category.title}</td>
                                        <td>${category.description}</td>
                                        </tr>`
            });
        })
    }

    function randomCategory(setCategory){


        let id = Math.floor(Math.random() * (16 - 1 + 1) + 1)
      
        fetch(`http://localhost:8080/Home/categoryFilm/${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(category => {
          setCategory({
                    filmId : category.film_id,
                    filmTitle : category.title,
                    filmDescription : category.description,
                    filmRating : category.rating,
                    filmLength : category.length,
                    filmReleaseYear : category.release_year,
                    filmSpecial : category.special_features,
                    
      
            }) 
          })
      
        }