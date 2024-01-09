import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const HeroSection = ({ onFormatJson }) => {
    const [jsonInput, setJsonInput] = useState('');

    const handleInputChange = (event) => {
        setJsonInput(event.target.value);
    };

    const handleButtonClick = () => {
        onFormatJson(jsonInput);
    };

    return (
        <div className="hero-section py-5 bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <h1>Welcome to JSON Formatter</h1>
                        <p className="lead">Easily format and beautify your JSON data. Just paste your JSON below and click the button.</p>
                        <Form.Group controlId="jsonInput">
                            <Form.Control 
                                as="textarea" 
                                rows={6} 
                                placeholder="Paste your JSON here" 
                                value={jsonInput}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4} className="text-lg-right mt-3 mt-lg-0">
                        <Button variant="primary" size="lg" onClick={handleButtonClick}>
                            Format JSON
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
