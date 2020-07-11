import { Card, Image, Carousel, Container } from 'react-bootstrap';
import React from 'react'
import Jonasbild from '../assets/img/Cover.jpg';
import JonasWebb from '../assets/img/webb_cover.jpg';
import tusen from '../assets/img/1440.jpg';
import tusentva from '../assets/img/1280.jpg';
import cp from '../assets/img/cp.jpg';
import bredare_nologo from '../assets/img/bredare_nologo.jpg';
import nologo from '../assets/img/nologo.jpg';
import nologoleft from '../assets/img/nologoleft.jpg';
import Wake from '../assets/img/Wake.jpg';
import mindrekant from '../assets/img/mindrekant.jpg';
import Cards from './Cardz.css';
import Ugly from '../assets/img/ugly.jpg';


const Cardz = () => {
  return (
    <React.Fragment>
   
     
        
        <Card className="wh-50 mt-1">
          <Card.Img  id="jonasCover1" variant="top" src={mindrekant} />
          
          <Card.Body>
            
          </Card.Body>
          <Image id="jonasCover"src={Jonasbild} fluid />
          <Card.Text className="jonasCover">
              New Single out now! Listen on Spotify.
          </Card.Text>
        </Card>
      
        //kom ihåg att kolla udemy lägga ovanpå cardet, overlay bakgrunden?
      



    
    

    
    
    
    </React.Fragment>
  )
}




export default Cardz;