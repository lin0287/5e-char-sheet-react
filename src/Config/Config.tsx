import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {FloatingLabel} from "react-bootstrap";
import {useEffect, useState} from "react";
import {StatsArray} from "../StatsArray";

interface ConfigProps {
  StandardArray: StatsArray;
  setStatsArray: (arg0: (prevStatsArray: StatsArray) => StatsArray) => void;
}

function Config({StandardArray, setStatsArray }: ConfigProps){

  function setStatsChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: keyof StatsArray) {
    const newValue = parseInt(event.target.value);
    updateStatProperty(property, newValue);
  }

  function updateStatProperty(property: keyof StatsArray, value: number) {
    setStatsArray((prevStatsArray) => ({
      ...prevStatsArray,
      [property]: value,
    }));
  }

  return (
    <Form>
      <Row>
        <Form.Label>Standard Array</Form.Label>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Strength"
            className="mb-3"
          >
            <Form.Control
              placeholder="Strength"
              onChange={(event) => setStatsChange(event, 'str')}
              type="number"/>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Dexterity"
            className="mb-3"
          >
            <Form.Control
              placeholder="Dexterity"
              type="number"
              onChange={(event) => setStatsChange(event, 'dex')}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Constitution"
            className="mb-3"
          >
          <Form.Control
            placeholder="Constitution"
            type="number"
            onChange={(event) => setStatsChange(event, 'con')}
          />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Intelligence"
            className="mb-3"
          >
          <Form.Control
            placeholder="Intelligence"
            type="number"
            onChange={(event) => setStatsChange(event, 'int')}
          />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Wisdom"
            className="mb-3"
          >
          <Form.Control
            placeholder="Wisdom"
            type="number"
            onChange={(event) => setStatsChange(event, 'wis')}
          />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Charisma"
            className="mb-3"
          >
          <Form.Control
            placeholder="Charisma"
            type="number"
            onChange={(event) => setStatsChange(event, 'cha')}
          />
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
}

export default Config;
