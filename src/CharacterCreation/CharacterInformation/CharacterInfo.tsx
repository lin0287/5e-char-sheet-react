import {Col, Form, Row} from "react-bootstrap";

export function CharacterInfo() {
  return(
    <Form>
      <Form.Group as={Row}>
        <Col>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
        <Col>
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="Age" type="number" min="18"/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="pt-3">
        <Col>
          <Form.Label>Class</Form.Label>
          <Form.Select>
            <option value="Paladin">Paladin</option>
            <option value="Fighter">Fighter</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Lawful-Chaotic</Form.Label>
          <Form.Select>
            <option value="Lawful">Lawful</option>
            <option value="Neutral">Neutral</option>
            <option value="Chaotic">Chaotic</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Good-Evil</Form.Label>
          <Form.Select>
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Evil">Evil</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  );
}
