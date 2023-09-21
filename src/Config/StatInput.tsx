import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';

interface StatInputProps {
  label: string;
  property: string;
  value: number;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function StatInput({ label, property, disabled, value, onChange }: StatInputProps) {
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
          value={value||""}
          min="1"
          disabled={disabled}
          max="20"
          onChange={onChange}
        />
      </FloatingLabel>
    </Col>
  );
}

export default StatInput;
