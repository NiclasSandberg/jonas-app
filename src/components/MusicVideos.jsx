import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import RedJacketLarge from '../assets/img/RedJacket-Large.jpg';
import RedJacketSmall from '../assets/img/RedJacket-Small.jpg';
import ReactPlayer from "react-player";
import './MusicVideos.css';



const MusicVideos = () => {

    return (
        <React.Fragment>
          
        <Container id="topContainerMusic" className="">
        <Row>
          <Col className=""xs={5} md={5} style={{zIndex:9999, marginTop:50}}>
          <h4>Listen To</h4>
          <h2 id="whenIWakeUp">When I Wake Up</h2>
          <iframe style={{ marginTop:"10px"}} src="https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
          <Col xs={7} md={7}>
          <Image className="ml-1 redJacket" src={RedJacketSmall} srcSet={`${RedJacketSmall} 300w, ${RedJacketSmall} 768w, ${RedJacketLarge} 1280w`} thumbnail/>
           {/*<Image src={RödJacka}
            thumbnail className="mb-2" /> */}
          
          </Col>
         
        </Row>
      </Container>
      
      <Container style={{margin: "50px auto 50px auto"}}>
        <Row>
        {/* ANVÄND  MDB  https://mdbootstrap.com/docs/react/utilities/embeds/    BRA FÖRKLARING istället för reactboostrap kanske??  LINJE MED VIDEOS??? separerar*/}
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
