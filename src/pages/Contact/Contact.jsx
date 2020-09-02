import React from 'react'
import ContactForm from '../../components/ContactForm';
import { Container, Card } from 'react-bootstrap';
import contact from './Contact.css';


const Contact = () => {
    return (
            <Container className="mb-5 mt-3 mt-md-4 contactContainer">
                <Card className="bg-dark">
                    <Card.Img style={{opacity:"0.5"}}
                        src="https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        alt="Stockholm City View" fluid alt="Card image" />
                    <Card.ImgOverlay className="contactOverlay">

                        <Card.Text >
                            <h2>Contact</h2>
                            <p>I am currently based in Stockholm, Sweden.</p>
                            <p>Message me through one of the social media platforms, or use the form bellow.</p>
                        </Card.Text>

                       <ContactForm />
                    </Card.ImgOverlay>
                </Card>
            </Container>
    )
}

export default Contact;
