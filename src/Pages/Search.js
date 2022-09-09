import React, { useEffect, useState } from 'react'
import './style/Search.css'

export default function Search() {

    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if(value.length > 0){
        // eslint-disable-next-line
        fetch('http://localhost:8080/Home/allFilms',{ method: 'GET' })
        .then(res => res.json())
        .then(data => {
            setResult([]);
            let search = value.toLowerCase();
            for(const key in data){
                let movie = data[key].title.toLowerCase();
                if(movie.slice(0, search.length).indexOf(search) !== -1){
                    setResult(prevResult => {
                        return [...prevResult, 
                            <ul>
                                <li>{"Title: " + data[key].title}</li>
                                <li>{"Description: " + data[key].description}</li>
                                <li>{"Rating " + data[key].rating}</li>
                                <li>{"Duration " + data[key].length + " Minutes"}</li>
                            </ul>
                            ]
                    })
                }
            }
        }) .catch(error => {
            console.log(error);
        })

    }else{
        setResult([]);
    }
    },[value])

  return (
    <div>
        <div>
            <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Search Movie'></input>
            <div>
                {result.map((result, i) => (
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
