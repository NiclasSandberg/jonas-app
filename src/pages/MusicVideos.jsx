import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import RedJacketLarge from '../assets/img/Jonas-Snitt-studio-guitar.jpg';
import RedJacketSmall from '../assets/img/Jonas-Snitt-studio-guitar-mobile.jpg';
import ReactPlayer from "react-player";
import './MusicVideos.css';

const MusicVideos = () => {

  return (

    <React.Fragment>
      <Container id="topContainerMusic">
        <Row>
          <Col xs={5} md={5} className="mt-md-0 mt-lg-4 mt-xl-5" style={{ zIndex: 9999, marginTop: "28px" }}>
            <h4>Listen To</h4>
            <h2 id="whenIWakeUp">When I Wake Up</h2>
            <iframe className="d-none d-md-block" style={{ marginTop: "28px" }} src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI"
              title="Stream When i Wake up on Spotify." width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
          <Col xs={7} md={7} xl={7}>
            <Image className="mt-0 ml-md-3 mt-lg-2 ml-xl-0 redJacket"
              src={RedJacketSmall} alt="Jonas Snitt studio photoshoot sitting down with guitar" srcSet={`${RedJacketSmall} 300w, ${RedJacketSmall} 1100w, ${RedJacketLarge} 3500w`} thumbnail />
          </Col>
        </Row>

        <Col className="d-flex" syle={{ textAlign: "center" }}>
          <iframe className="d-md-none mx-auto" style={{ alignSelf: "flex-end", marginTop: "40px" }}
            title="Stream When i Wake up on Spotify" src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Col>
      </Container>

      <Container style={{ margin: "50px auto 50px auto" }}>
        <Row>
          <Col sm={6}>
            <ReactPlayer width="auto" controls={true} className="mt-2"
              url="https://www.youtube.com/watch?v=1RLrqmWsyqY"
            />
          </Col>
          <Col sm={6}>
            <ReactPlayer width="auto" controls={true} className="mt-2"
              url="https://www.youtube.com/watch?v=-DMg87ON0f0&feature=emb_logo"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default MusicVideos;
