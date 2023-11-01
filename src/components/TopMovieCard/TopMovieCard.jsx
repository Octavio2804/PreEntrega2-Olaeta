import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./TopMovieCard.css";

const TopMovieCard = ({ movie }) => { 
  return (
    <Card sx={{ margin: "16px"}} className='card-container'>
      <CardActionArea>
        <CardMedia
          className='card-media'
          component="img"
          height="440"
          image={movie.img} 
          alt={movie.title}
          style={{height: "500px", width: "100%"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {movie.name} 
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-rating">
            Rating de votacion: {movie.rating} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopMovieCard;
