import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactPage = () => {
    return (
        <div>
            <div className="contact-us-details">
                <div>
                    <h3>Send Us A Message</h3>
                    <Form className="contact-us-form">
                        <Form.Group class="form-text">
                            <Form.Label >First Name</Form.Label>
                            <span class="required">*</span>
                            <Form.Control type="text"
                                placeholder="Enter your first name" required />
                            <Form.Control.Feedback type="invalid" />
                        </Form.Group>
                        <Form.Group class="form-text">
                            <Form.Label >Last Name</Form.Label>
                            <span class="required">*</span>
                            <Form.Control type="text" placeholder="Enter last name" required />
                            <Form.Control.Feedback type="invalid" />
                        </Form.Group>
                        <Form.Group class="form-text">
                            <Form.Label >Email</Form.Label>
                            <span class="required">*</span>
                            <Form.Control type="email"
                                placeholder="Enter your email address" required />
                            <Form.Control.Feedback type="invalid" />
                        </Form.Group>
                        <Form.Group class="form-text">
                            <Form.Label >Message</Form.Label>
                            <span class="required">*</span>
                            <Form.Control type="textarea"
                                placeholder="Leave us a message here" className="message-box" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Form>
                </div>

                <div>
                    <h3>Contact Details</h3>
                    <h5>Email us</h5>
                    <p>abc@abc.ca</p>
                    <h5>Connect with us</h5>
                    <div className='col item social'>
                        <a href='#'>
                            <i className='icon ion-social-facebook'></i>
                        </a>
                        <a href='#'>
                            <i className='icon ion-social-twitter'></i>
                        </a>
                        <a href='#'>
                            <i className="icon ion-social-google"></i>
                        </a>
                        <a href='#'>
                            <i className='icon ion-social-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className="icon ion-social-linkedin"></i>
                        </a>
                        <a href='#'>
                            <i className="icon ion-social-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;