import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'

const StyledCardMedia = styled(CardMedia)`
  transition: transform 0.15s ease-in-out;
`

const StyledButton = styled(Button)`
  border-radius: 0;
  position: absolute;
  transition: bottom 0.25s ease-in-out 0s;
`

export default function ImgMediaCard(props) {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <Card sx={{width:300, borderRadius:3}}
    onMouseOver={()=>setMouseOver(true)} 
    onMouseOut={()=>setMouseOver(false)} 
    >
      <CardActionArea>
        <StyledCardMedia
          component="img"
          alt={props.alt}
          height="300"
          image={props.img}
          title={props.title}
          sx={ mouseOver ? { transform: 'scale3d(1.05, 1.05, 1)' } : {}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.caption}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{position: 'relative', padding: '0px', height: '36.5px'}}>
        <StyledButton variant="contained" fullWidth
          sx={ mouseOver ? { bottom: '0px' }: { bottom: '-50px' }}>
          Buy now
        </StyledButton>
      </CardActions>
    </Card>
  );
}