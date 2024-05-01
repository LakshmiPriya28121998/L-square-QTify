import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from "./QtifyCard.module.css"
import {
  Grid
} from "@mui/material";

export default function QtifyCard({ qtifycard , type}) {
  if(type === "album"){
    return (
      // <Grid key={qtifycard._id} item lg={2}>
      <div className={styles.wrapperdiv}>
      <Card  key={qtifycard.id} sx={{ maxWidth: 200 }} height="205" className={styles.card}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="170"
            image={qtifycard.image}
            alt="green iguana"
          />
          <CardContent className={styles.content}>
 
             <Chip label={qtifycard.follows + " Follows"}   className={styles.chip}/>
          </CardContent>
        </CardActionArea>
      </Card>
      <p >{qtifycard.title}</p>
      </div>
      // </Grid>
    );
  }
  else if(type === "song"){
    return (
      <div className={styles.wrapperdiv}>
      <Card  key={qtifycard.id} sx={{ maxWidth: 200 }} height="205" className={styles.card}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="170"
            image={qtifycard.image}
            alt="green iguana"
          />
          <CardContent className={styles.content}>
   
             <Chip label={qtifycard.likes + " Likes"}   className={styles.chip}/>
          </CardContent>
        </CardActionArea>
      </Card>
      <p >{qtifycard.title}</p>
      </div>
    );
  }
  
}