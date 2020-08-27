import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Cardz from './Cardz';
import News from './News';
import MusicVideos from './MusicVideos';
import About from './About';


class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <Cardz />
                {/*<MusicVideos />
                <About /> */}
               
            </React.Fragment>
        );
    }
}

export default Home;