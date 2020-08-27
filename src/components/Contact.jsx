import React from 'react'
import ContactForm from './ContactForm';
import { Container, Image, Col, Row } from 'react-bootstrap';


const Contact = () => {
    return (
        <React.Fragment>
        <Container style={{marginTop:"2rem"}}>
            <Row>
            <Col sm={5} style={{marginTop:"200px"}}>
            <h2>Contact</h2>
            <p>You can send me a message through one of the following social media platforms or use the form bellow.</p>
            
            <h2>Contact Form</h2>
            <p>Send me a nice message, and I just might get back to you.</p>
            </Col>
            <Col className="">
            <Image sm={7} style={{height:"400px"}}src="https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" fluid />
            </Col>
            
            </Row>
           <ContactForm />
        
        </Container>
        <Container>
        <div style={{display:"inline-block"}}>
        <h2>Contact</h2>
        <p>You can send me a message through one of the following social media.</p>
        </div>
        <Image style={{display:"inline-block"}}  style={{height:"400px",float:"right"}}src="https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" fluid />
        
        </Container>

        </React.Fragment>
    )
}

export default Contact;
