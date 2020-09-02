import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import AboutMobil from '../assets/img/AboutMobil.jpg';
import AboutDeskt from '../assets/img/AboutDesktop.jpg';
import KungsanDrumsMobil from '../assets/img/KungsanDrumsMobil.jpg';
import KungsanDrumsDeskt from '../assets/img/KungsanDrumsDeskt.jpg';
import KungsanGitarrerMobil from '../assets/img/KungsanGitarrerMobil.jpg';
import KungsanGitarrer from '../assets/img/KungsanGitarrer.jpg';

const About = () => {
    
        return (
            <React.Fragment>
                <Container className="mt-1">
                    <Jumbotron>
                        <h2>About</h2>
                        <Carousel>
                            
                            <Carousel.Item className="h-200" interval={300}>
                                <Image className="d-block w-100"
                                    src={AboutMobil}
                                    alt="First slide" s
                                    srcSet={`${AboutMobil} 300w, ${AboutMobil} 768w, ${AboutDeskt} 1280w`} />
                            </Carousel.Item>

                            <Carousel.Item interval={300}>
                                <Image className="d-block w-100"
                                    src={KungsanDrumsMobil}
                                    alt="First slide"
                                    srcSet={`${KungsanDrumsMobil} 300w, ${KungsanDrumsMobil} 768w, ${KungsanDrumsDeskt} 1280w`} />
                            </Carousel.Item>

                            <Carousel.Item interval={300}>
                                <Image className="d-block w-100"
                                    src={KungsanGitarrerMobil}
                                    alt="First slide"
                                    srcSet={`${KungsanGitarrerMobil} 300w, ${KungsanGitarrerMobil} 768w, ${KungsanGitarrer} 1280w`} />
                            </Carousel.Item>
                        
                        </Carousel>

                        <Row className="mx-lg-3 mt-3 mt-lg-4">
                            <Col className="" md={6}><p> Jonas Snitt, Swedish Singer / Songwriter / Guitarist / Producer. Grew up in Paris and moved to Stockholm in year 2000. He got his first guitar at the age of 13 and played a lot of Blues and Rock, listening to Eric Clapton, B.B King and Jimi Hendrix. Later on he studied classical guitar and opera in a music highschool in Stockholm called Lilla Akademien.
                            He participated in the television program The Voice Sweden 2012 and joined the team of Carola Häggkvist. She told Jonas was a ” record company’s dream ” because of his voice and live appearance. During the spring of 2012 the song "Feel The Light" was played at the Swedish national radio channel P4. Since then he recorded several EP albums, played a great number of big shows in Sweden and was the lead guitarist with Mikael Rickfors during summer 2018.
                            </p>
                            </Col>
                            
                            <Col className="" md={6}>
                                <p>After the summer tour he took a break from playing live shows and started to work hard with songwriting and production. With all of his influences from Rock, Soul, Funk, Classical Guitar Jonas Snitt found his own Pop sound in the way he sings, writes and produces songs.
                                This resulted to the new EP album with six Acoustic / Pop songs.
                                The singel ”When I Wake Up” was mastered by Randy Merrill at Sterling Sound NY (Adele, John Mayer, Taylor Swift...)  where Jonas received an email from Randy saying: ” Thank you for sending me this fantastic song to master today ”. Jonas Snitt musical journey will never stop, stay tuned!
                            </p>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </React.Fragment>
        );
    }

export default About;