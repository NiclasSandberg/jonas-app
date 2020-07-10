import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Cardz from './Cardz';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            
            <Cardz />
            </React.Fragment>
         );
    }
}
 
export default Home;