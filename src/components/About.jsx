import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';



class About extends Component {
    state = {  }
    render() { 
       // className="col-sm-6 col-md-8 col-lg-9 col-xl-10" 
        return ( 
            <React.Fragment>
            <Container>
                <Jumbotron>

                    <Link to="/"><h2>About Jonas</h2>
                    
                    </Link>
                </Jumbotron>
            </Container>
            
            <Row style={{border:"1px solid #333"}}>
            <Col className="p-4 item-hl col-sm-8">Flex Item1</Col>
            <Col className="p-4 item-hl col-sm-2">Flex Item2</Col>
            <Col className="p-4 item-hl col-sm-2">Flex Item3</Col>
          </Row>
          </React.Fragment>

         );
    }
}
 
export default About;