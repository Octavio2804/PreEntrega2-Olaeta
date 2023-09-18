import React from 'react'

import "./ItemsListcontainer.css"
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ItemListcontainer({img, title, price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600px"
          image={img}
          alt="green iguana"
        />
        <CardContent className='content'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            {price}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemListcontainer