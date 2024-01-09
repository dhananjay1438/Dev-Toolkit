import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FormattedJsonDisplay from './components/FormattedJson';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const App = () => {
    const [formattedJson, setFormattedJson] = useState('');

    const handleFormatJson = async (jsonInput) => {
        try {
            const response = await fetch('http://localhost:8000/format-json/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonInput
            })
            const data = await response.json()
            if (response.ok) {

                setFormattedJson(JSON.stringify(data, null, 4))
                console.log(data)
            } else {
                console.log('Server error:', data.error)
            }
        } catch (error) {
            console.error("Following error occured:", error);
            // Handle invalid JSON input here (e.g., show an error message)
        }
    };
    return (
        <div>
            <NavigationBar />
            <HeroSection onFormatJson={handleFormatJson} />
            {formattedJson && (
                <Row className="mt-3">
                    <Col md={12}>
                        <FormattedJsonDisplay formattedJson={formattedJson} />
                    </Col>
                </Row>
            )}
        </div>
    );
};


export default App;
