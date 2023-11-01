import React, { useEffect, useState } from 'react';
import "./TopPages.css"
import { db } from '../../firebase/firebase'
import { collection, query, getDocs } from "firebase/firestore";
import TopMovieCard from '../../components/TopMovieCard/TopMovieCard';

const TopPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const q = query(collection(db, "movies"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMovies(docs);
    };
    getMovies();
  }, []);

  return (
    <div className='TopPage'>
      <h1>Todas las semanas hacemos encuestas en nuestras redes sociales para elegir las peliculas favoritas de la semana</h1>
      <h2>Las 3 más votadas son mostradas en esta pagina y reciben un precio por tiempo limitado</h2>
      <div className='card-container'>
        {movies.map((movie) => {
          return <TopMovieCard key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  )
}

export default TopPage;
