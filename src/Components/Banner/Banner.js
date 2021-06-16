import "./Banner.css";
import React,{ useEffect, useState } from "react";
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           console.log(response.data.results[0]);
           setMovie(response.data.results[0])
       })
    }, [])

    return (
        <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
            
            <div className="content">
                <h1 className="title">{movie? movie.title : ""}</h1>
                <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">MyList</button>
            </div>
            <h1 className="description"> {movie? movie.overview : null}</h1>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    );
}

export default Banner;
