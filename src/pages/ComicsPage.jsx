import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComicList from '../components/ComicList/ComicList';
import { Link } from 'react-router-dom';

const ComicsPage = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios("https://gateway.marvel.com:443/v1/public/comics?apikey=6df0441bdf6db2772930d37e50a13b8d")
      .then((res) => {
        const comicList = res.data.data.results;
        setComics(comicList);
      })
      .catch((error) => {
        console.error("Error fetching comics:", error);
      });
  }, []);

  return (
    <div className='ComicList'>
      {comics.map((comic) => {
        return (
          <Link to={`/detail/${comic.id}`}>
          <ComicList key={comic.id} comic={comic} />
          </Link>
        );
      })}
    </div>
  );
};

export default ComicsPage;