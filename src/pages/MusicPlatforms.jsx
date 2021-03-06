import React from 'react'
import { Container, Row } from 'react-bootstrap';
import musicPlatforms from './MusicPlatforms.css';
import Spotify_Logo from '../assets/logo/Spotify_Logo.png';
import Deezer_Logo from '../assets/logo/Deezer_Logo.png';

const MusicPlatforms = () => {
  return (
  
      <Container className="mt-4 border border-radius streamBox">
        <Row className="justify-content-center mt-5">
          <a href="spotify:track:2pA7y8h2hsjMDpI0zyMZvI" target="_blank"
            style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}>
            <img src={Spotify_Logo}
              style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              alt="Listen to Can't Stop on Spotify" /> </a>
        </Row>

        <Row className="justify-content-center mt-5">
          <a href="https://geo.music.apple.com/us/album/when-i-wake-up-single/1496888782?itsct=music_box&amp;itscg=30200&amp;app=music&amp;ls=1"
            style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}>
            <img src="https://tools.applemediaservices.com/api/badges/listen-on-apple-music/badge/en-US?size=250x83&amp;releaseDate=1582675200&h=4f6f77d64571340a2be2ef81fdcf420e"
              style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              alt="Listen to Can't Stop on Apple Music" /> </a>
        </Row>

        <Row className="justify-content-center mt-5 mb-5">
          <a href="https://www.deezer.com/album/128848832?utm_source=deezer&utm_content=album-128848832&utm_term=0_1597159260&utm_medium=web"
            style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}>
            <img src={Deezer_Logo}
              style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              alt="Listen to Can't Stop on Deezer" /> </a>
        </Row>
      </Container>
  )
}

export default MusicPlatforms;
