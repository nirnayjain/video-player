import PropTypes from "prop-types";
import { useState } from "react";

import {
  Card,
  Grid,
  CardContent,
  Typography,
  makeStyles,
  CardMedia
} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';


const useStyles = makeStyles((theme) => ({
  root: {
  
    transition: "transform 0.20s ease-in-out",
    height:'320px',
    width:'280px',
    border:'2px solid black',
    borderRadius:'10px',
     [theme.breakpoints.down('xs')]: {
    //    height:'140px',
    //    width:'140px'
     },
     
   
    
  },
  cardHovered: {
   transform: "scale3d(1.09, 1.09, 1)",
   

  },
  cardContent:{
marginLeft:10,
marginRight:10,
marginTop:10,
padding:0,
display:'flex',
flexDirection:'column',

   
  },
  // text:{
   
  //   display:'flex',
  //         justifyContent:'center',
  //   marginTop:'10px'
    

    
  // },
  play:{
   
    cursor:'pointer',
    width:'max-content'
  }
 
}));

export default function MoviesCard({
name,image,video,release,language
}) {
   let date = new Date(release);
let year = date.getFullYear();
let month = date.getMonth()+1;
let dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}

let releaseDate=year+'-' + month + '-'+dt;
  const [play, setPlay] = useState(false)
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} container justify='center' >
     
        <Card
          className={classes.root}
          classes={{ root: state.raised ? classes.cardHovered : "" }}
          onMouseOver={() => setState({ raised: true, shadow: 3 })}
          onMouseOut={() => setState({ raised: false, shadow: 1 })}
          raised={state.raised}
          zdepth={state.shadow}
          
          >
          {!play? 
          <>
          <div style={{position:'relative'}}>
              <img
              onClick={()=>setPlay(true)}
              src={image}
              style={{height:200,width:280,cursor:'pointer'}}
              />
              </div>
            <div className={classes.play}>
              < PlayCircleFilledIcon fontSize="large" onClick ={()=>setPlay(true)}/>
              
            </div>
            </>
              :
              <>
                       <video width="280" height="200" controls>
  <source src={video} type="video/mp4" />

 

</video>
 <div className={classes.play}>
              < PauseCircleFilledIcon fontSize="large" onClick ={()=>setPlay(false)}/>
              
            </div>
            </>
}
               {/* <CardMedia 
              src={video}
               style={{height:140}}
              /> */}
          {/* } */}

             

            
            <CardContent  className={classes.cardContent}>
             
            
              <Typography
                gutterBottom
                variant="body2"
               
               
              >
                Title:&nbsp;{name}
              </Typography>
              <div>
               <Typography
                gutterBottom
                variant="body2"
               
               
              >
                 Date :&nbsp;{releaseDate}
              </Typography>
                <Typography
                gutterBottom
                variant="body2"
               
               
              >
                Language :&nbsp;{language}
              </Typography>
              </div>

              </CardContent>
             
             
              
              
          
        </Card>
    
     
     

    </Grid>
  );
}



