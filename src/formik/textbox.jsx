import React from 'react';
import { Form } from 'react-bootstrap';

export const Textbox = ({
  label, name, type, value, handleChange, error, ...props
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={label} name={name} value={value} onChange={handleChange} isInvalid={error} {...props} />

    {error && (
    <Form.Control.Feedback type="invalid">
      {error}
    </Form.Control.Feedback>
    )}
  </Form.Group>
);
