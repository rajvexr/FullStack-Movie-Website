import React, { useEffect, useState } from 'react'
import './style/Search.css'

export default function Search() {

    const [value, setValue] = useState(''); //useState hook to have current value be an empty string within the input 
    const [result, setResult] = useState([]); //store the films in an array so it can be rendered out onto the website

    useEffect(() => { //useEffect will be triggered at the end of a rendered cycle only when the value changes
        if(value.length > 0){ //if user types into the text box
        // eslint-disable-next-line
        fetch('https://sakilaapp-1663062443073.azurewebsites.net/Home/allFilms',{ method: 'GET' }) //built in js api for http requests
        .then(res => res.json()) //once the data has been recieved, .then to convert the json into a js object
        .then(data => { //have access to the decoded js object which has been retrived from the data from the the json object
            setResult([]); //use setResult to start the loop from scratch, clears the array results
            let search = value.toLowerCase(); //have the search be written in lower-case
            for(const key in data){ //creating a for loop so i can loop through all films data 
                let movie = data[key].title.toLowerCase(); //having let movie equal to the data each iteration with the film title
//what movie.slice does is, 0 is the inital value so nothing will be displayed,
//.slice returns only the films in the search between iterartions, example, search = a then returns list of films with the letter a 
//search.length is the end value of the user typing into the search box
                if(movie.slice(0, search.length).indexOf(search) !== -1){  //there will be only -1 if there is no matching films
                    setResult(prevResult => { //using setResult to call the prevResult function
                        return [...prevResult, //including a spread ...prevResult so it shows a list of results individually otherwise it will display one result
                            <ul>
                                <li>{"Title: " + data[key].title}</li>
                                <li>{"Description: " + data[key].description}</li>
                                <li>{"Rating: " + data[key].rating}</li>
                                <li>{"Duration: " + data[key].length + " Minutes"}</li>
                            </ul>
                            ]
                    })
                }
            }
        }) .catch(error => {
            console.log(error);
        })

    }else{
        setResult([]); //if the value.length is not greater than zero then it is zero sop displays nothing
    }
    },[value])

  return (
    <div>
        <h2 id='searchTitle'>Search for your favourite movie</h2>
        <div id='searchBox'>

            <input id='search' 
            onChange={(e) => setValue(e.target.value)} //text data typed into the value will set the value
            value={value} 
            type="text" 
            placeholder='Search Movie'>
            </input>

            <div>
                {result.map((result, i) => ( //loop through the result array and display all the values
                    <a href="#/" key={i}>
                        <div>
                            {result}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
)}
