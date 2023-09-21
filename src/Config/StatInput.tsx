import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

interface StatInputProps {
  label: string;
  property: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function StatInput({ label, property, value, onChange }: StatInputProps) {
  return (
    <Col>
      <FloatingLabel
        controlId={`floatingInput-${property}`}
        label={label}
        className="mb-3"
      >
        <Form.Control
          placeholder={label}
          type="number"
          required
          min="1"
          max="20"
          onChange={onChange}
        />
      </FloatingLabel>
    </Col>
  );
}

export default StatInput;
