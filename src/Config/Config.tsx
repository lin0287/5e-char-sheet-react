import React, { useEffect, useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import './Config.css';
import StandardArray from './StandardArray';
import { useStats } from '../StatsContext';

function Config() {
  const { statsArray, setStatsArray } = useStats();
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (statsArray.str !== 0) {
      setValidated(true);
    }
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    event.preventDefault();
    setValidated(true);
  }

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Standard Array</Accordion.Header>
        <Accordion.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <StandardArray validated={validated}/>
            {!validated ? (
              <Button type="submit" variant="primary">
                Submit
              </Button>
            ) : (
              ''
            )}
          </Form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Config;
