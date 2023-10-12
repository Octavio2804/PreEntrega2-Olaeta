// ROUTER DOM
import { useParams } from 'react-router-dom';
// HOOKS
import React, { useState, useEffect } from 'react';
// AXIOS
import axios from 'axios';
// ESTILOS
import "./DetailPage.css"
// COMPONENTS
import Spinner from '../../components/Spinner/Spinner';

const DetailPage = () => {
    let { id } = useParams();

    const [comic, setComic] = useState();

    useEffect(() => {
        axios(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=6df0441bdf6db2772930d37e50a13b8d`)
            .then((res) => {
                const comicDetail = res.data.data.results[0];
                setComic(comicDetail);
            })
            .catch((error) => {
                console.error("Error fetching comic:", error);
            });
    }, [id]);

    return (
        <div className='ComicDetail'>
            {comic ? (
                <div>
                    <h1>{comic.title}</h1>
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={"450px"}/>
                    <p>{comic.description}</p>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default DetailPage;