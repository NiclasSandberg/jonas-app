import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import JonasAlbum from '../assets/img/Jonas-Snitt-Cant-Stop-Album.jpg';
import JonasAlbumMobil from '../assets/img/Jonas-Snitt-Cant-Stop-Album-Mobile.jpg';
import HeaderPic from '../assets/img/Jonas-Snitt-Studio-portrait.jpg';
import home from './Home.css';
import LoveTemple from '../assets/img/Jonas-Snitt-Love-Is-A-Temple-cover.jpg';
import LoveTempleMobile from '../assets/img/Jonas-Snitt-Love-Is-A-Temple-cover-mobile.jpg';

const Home = () => {

  return (
    <React.Fragment>
      <Card className="bg-dark text-white mt-sm-1">
        <Card.Img className="d-none d-xl-block" src={HeaderPic} fluid alt="Jonas Snitt studio portrait" />
        <Card.ImgOverlay className="col col-xl-3 ml-auto albumpos">

          <Nav.Link as={Link} to="/MusicPlatforms" className="enlargeAlbum">
            <Card.Img id="card-bild" src={LoveTempleMobile}
              srcSet={`${LoveTempleMobile} 300w, ${LoveTempleMobile} 1100w, ${LoveTemple} 3500w`} fluid alt="Jonas Snitt Can't Stop album cover" />

            <Card.Title className="text-secondary text-center mt-3 mb-0"> <h4 className="mb-1">New Single Out Now!</h4></Card.Title>
            <Card.Text className="text-secondary text-center">
              Listen to Love Is A Temple
                </Card.Text>
          </Nav.Link>
        </Card.ImgOverlay>
    </Card>
      
      <Col style={{ textAlign: "center" }} className="mb-4 d-xl-none">
        <iframe style={{ height: "80px" }} title="Stream Can't Stop on Spotify" src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI"
          width="auto" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Col>
    </React.Fragment>
  )
}

export default Home;