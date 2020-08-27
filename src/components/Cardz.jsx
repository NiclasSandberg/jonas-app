import { Card, Image, Carousel, Container, Jumbotron, Col, Row, Table, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import JonasAlbum from '../assets/img/JonasAlbum.jpg';
import JonasAlbumMobil from '../assets/img/JonasAlbumMobil.jpg';
import JonasWebb from '../assets/img/webb_cover.jpg';
import tusen from '../assets/img/1440.jpg';
import tusentva from '../assets/img/1280.jpg';
import cp from '../assets/img/backup/cp.jpg';
import bredare_nologo from '../assets/img/bredare_nologo.jpg';
import nologo from '../assets/img/nologo.jpg';
import nologoleft from '../assets/img/nologoleft.jpg';
import Wake from '../assets/img/Wake.jpg';
import HeaderPic from '../assets/img/HeaderPic.jpg';
import Cards from './Cardz.css';
import Ugly from '../assets/img/ugly.jpg';
import News from '../components/News';


const Cardz = () => {

  function sayHello(){
    
  }

  return (
    <React.Fragment>

      <Card className="bg-dark text-white mt-sm-1">
        <Card.Img className="d-none d-lg-block" src={HeaderPic} fluid alt="Card image" />
        
        <Card.ImgOverlay className="col col-lg-3 ml-auto albumpos">
          
          
        <Nav.Link as={Link} to="/News" className="enLarge2"> 
          <Card.Img  id="card-bild" src={JonasAlbumMobil}
            srcSet={`${JonasAlbumMobil} 300w, ${JonasAlbumMobil} 768w, ${JonasAlbum} 1280w`} fluid />
           
                <Card.Title className="text-secondary text-center mt-3"> <h4>New Single Out Now!</h4></Card.Title>
                <Card.Text className="text-secondary text-center">
                Listen to Can't Stop 
              </Card.Text>
              
        </Nav.Link>
        
        </Card.ImgOverlay>
        

      </Card>
      <Col style={{ textAlign: "center" }} className="d-lg-none">
        <iframe style={{ height: "80px" }} src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI" width="auto" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Col>
    

     
      {/*
<section id="table-bg">a
  
<Table className="mt-5 text-center" hover borderless variant="dark">
  <thead>
    <tr style={{height:"100px"}}> 
      <th className="">Upcoming shows</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <th>SolStugan</th>
      <th>25 maj</th>
      <th>21-23 clock</th>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</Table>

</section>
*/}








      {/*<Container>

      <Image src={HeaderPic} fluid/>

      <Card className="col-lg-3 ml-auto mt-5">
        <Card.Img id="" src={Jonasbild} fluid />
        <div className="card text-center">

          <div className="card-body">

            <h3>Singel out now</h3>
            <p>Please fill out this form to register</p>
          </div>
        </div>
      </Card>
      </Container>





     
        <Card className="wh-50 mt-1">
          <Card.Img  id="jonasCover1" variant="top"  />
          

          
          <Card.Body>
            
          
          <Card.Text className="jonasCover">
              New Single out now! Listen on Spotify.
          </Card.Text>
          </Card.Body>
        </Card>
        //kom ihåg att kolla udemy lägga ovanpå cardet, overlay bakgrunden?
        // mindre kant är rätt bild
  

<div className="container">
  <h2>Apach - Tool for Hadoop</h2>
  <div className="card img-fluid">
    <img className="card-img-top" src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg" alt="Card image"/>
    <div className="card-img-overlay">
      <h4 className="card-title">Avro</h4>
      <Card.Img id="ml-auto" src={Jonasbild} fluid />
      <p className="card-text">Tutorial for Apache Avro</p>
      
    </div>
    
  </div>
</div>
*/}
    </React.Fragment>










  )
}




export default Cardz;