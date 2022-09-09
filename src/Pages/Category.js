import React from 'react'
import './style/Category.css'
import './style/Table.css'

export default function Category() {
  return (
    <div id='category'>

        <h2>Welcome to the film category page!</h2>

        <div id='categoryButton'>

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(1)}>Action</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(2)}>Animation</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(3)}>Children</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(4)}>Classics</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(5)}>Comedy</button>
            </div>

            
            <div id='buttonDiv'>
            <button onClick={() => eachCategory(6)}>Documentary</button>
            </div>
 

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(7)}>Drama</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(8)}>Family</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(9)}>Foreign</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(10)}>Games</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(11)}>Horror</button>
            </div>

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(12)}>Music</button>
            </div>


            <div id='buttonDiv'>
            <button onClick={() => eachCategory(13)}>New</button>
            </div>

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(14)}>Sci-Fi</button>
            </div>

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(15)}>Sports</button>
            </div>

            <div id='buttonDiv'>
            <button onClick={() => eachCategory(16)}>Travel</button>
            </div>
        </div>

            <div id='mainTableDiv'>
                <table id='mainTable'>
                </table>
            </div>
            

    </div>
  )
}

function eachCategory(id){

    let categoryDiv = document.getElementById("mainTable")

    fetch(`http://localhost:8080/Home/categoryFilm/${id}`, { method: 'GET' })
    .then(res => res.json())
    .then(categorys=> 
        {
            categoryDiv.innerHTML=""
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