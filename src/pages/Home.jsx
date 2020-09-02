import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import JonasAlbum from '../assets/img/JonasAlbum.jpg';
import JonasAlbumMobil from '../assets/img/JonasAlbumMobil.jpg';
import HeaderPic from '../assets/img/HeaderPic.jpg';
import home from './Home.css';

const Home = () => {

  return (
    <React.Fragment>
      <Card className="bg-dark text-white mt-sm-1">
        <Card.Img className="d-none d-xl-block" src={HeaderPic} fluid alt="Jonas Snitt portrait" />
        <Card.ImgOverlay className="col col-xl-3 ml-auto albumpos">

          <Nav.Link as={Link} to="/MusicPlatforms" className="enlargeAlbum">
            <Card.Img id="card-bild" src={JonasAlbumMobil}
              srcSet={`${JonasAlbumMobil} 300w, ${JonasAlbumMobil} 768w, ${JonasAlbum} 1280w`} fluid alt="Can't Stop album cover" />

            <Card.Title className="text-secondary text-center mt-3"> <h4>New Single Out Now!</h4></Card.Title>
            <Card.Text className="text-secondary text-center">
              Listen to Can't Stop
                </Card.Text>
          </Nav.Link>
        </Card.ImgOverlay>
    </Card>
      
      <Col style={{ textAlign: "center" }} className="d-xl-none">
        <iframe style={{ height: "80px" }} title="Stream Can't Stop on Spotify" src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI"
          width="auto" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Col>
    </React.Fragment>
  )
}

export default Home;