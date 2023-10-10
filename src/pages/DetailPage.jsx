import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComicList from '../components/ComicList/ComicList';
import { Routes, Route, useParams } from 'react-router-dom';

const DetailPage = () => {
    let { id } = useParams();

  const [comicsData, setComics] = useState();

  useEffect(() => {
    axios(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=6df0441bdf6db2772930d37e50a13b8d`)
      .then((res) => {
        const comicsData = res.data.data.results;
        setComics(comicsData);
      })
      .catch((error) => {
        console.error("Error fetching comics:", error);
      });
  }, [id]);

  return (
    <div className='ComicList'>
     {comicsData.id ? <ComicList /> : null}
    </div>
  );
};

export default DetailPage;