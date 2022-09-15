import React from 'react'
import './style/Category.css'
import './style/Table.css'

export default function Category() {
  return (
    <div id='category'>

        <h2 id='categoryWelcome'>Welcome to the film category page!</h2>

        <div id='categoryButton'>

        {/* arrow function returning category method with its givin id  */}
            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(1)}>Action</button> 
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(2)}>Animation</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(3)}>Children</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(4)}>Classics</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(5)}>Comedy</button>
            </div>

            
            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(6)}>Documentary</button>
            </div>
 

            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(7)}>Drama</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(8)}>Family</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(9)}>Foreign</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(10)}>Games</button>
            </div>


            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(11)}>Horror</button>
            </div>

            <div className='buttonDiv'>
            <button className='cButton' onClick={() => eachCategory(12)}>Music</button>
            </div>
        </div>
        
        <div id='categoryButton'>

            <div className='buttonDiv2'>
            <button className='cButton' onClick={() => eachCategory(13)}>New</button>
            </div>

            <div className='buttonDiv2'>
            <button className='cButton' onClick={() => eachCategory(14)}>Sci-Fi</button>
            </div>

            <div className='buttonDiv2'>
            <button className='cButton' onClick={() => eachCategory(15)}>Sports</button>
            </div>

            <div className='buttonDiv2'>
            <button className='cButton' onClick={() => eachCategory(16)}>Travel</button>
            </div>
        </div>

            <div id='mainTableDiv'> 
                <table id='mainTable'> {/*display each category within the table*/}
                </table>
            </div>
            
    </div>
  )
}

//there are 16 id's for categories

function eachCategory(id){ //category id passed as props

    let categoryDiv = document.getElementById("mainTable") //CategoryDiv will be used as an id to display the content in the table

    fetch(`https://sakilaapp-1663062443073.azurewebsites.net/Home/categoryFilm/${id}`, { method: 'GET' }) //doller function used to refer to as get element by id fucntion
    .then(res => res.json()) //the url will return a promise which will contain data. use the .then to convert the data to JSON
    .then(categorys=>  //.then to display the type of data
        {
            //setting the innerHTML to an empty string so a new table can be generated when clicked on a different category
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