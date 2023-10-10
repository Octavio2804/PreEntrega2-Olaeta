import React from 'react';
import "./ComicList.css"
import { Link } from 'react-router-dom';

const ComicList = ({ comic }) => {
  return (
    <div className="comic-item">
      <h2>{comic.title}</h2>
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={"250px"}/>
      <p>{"Proximamente"}</p>
    </div>
  );
};

export default ComicList;