import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const TopMovieCard = ({ props }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movies.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movies.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating de votacion: {movies.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopMovieCard;