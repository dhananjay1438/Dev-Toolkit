import React from 'react';
import { Form } from 'react-bootstrap';

const FormattedJsonDisplay = ({ formattedJson }) => {
    return (
        <Form.Group controlId="formattedJson">
            <Form.Control 
                as="textarea" 
                rows={6} 
                value={formattedJson}
                readOnly
                className="formatted-json-textarea"
            />
        </Form.Group>
    );
};

export default FormattedJsonDisplay;