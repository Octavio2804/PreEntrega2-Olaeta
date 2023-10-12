// PARAMS Y HOOKS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//CSS
import "./CategoryPage.css"
// AXIOS
import axios from 'axios';
// SPINNER
import Spinner from '../../components/Spinner/Spinner';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [movieData, setMovieData] = useState(null); 

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNhYjM0MDBiM2E0YTUyMTAwZDdlYTIwYzc0MzUzMiIsInN1YiI6IjY1MjQ0MjdkZmQ2MzAwMDExYzc3ZWU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Uj83bano4FhycqLDUL_Xguhp0_dLHqIRkf0Z3S6iDs'
            }
        };

        const url = `https://api.themoviedb.org/3/trending/movie/${categoryId}?language=es-ES`;

        axios(url, options)
            .then(response => {
                setMovieData(response.data.results);
                console.log(response.data);
            })
            .catch(err => console.error(err));
    }, [categoryId]);

    return (
    <div className='moviePage'>
        {movieData && movieData.length > 0 ? (
             movieData.map(movie => (
             <div key={movie.id}>
                   <h1>{movie.original_title}</h1>
                   <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={"450px"} alt={movie.original_title}/>
                   <p>{movie.overview}</p>
             </div>
         ))
            ) : (
                <Spinner />
        )}
    </div>
    );
}

export default CategoryPage;
