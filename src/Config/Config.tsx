import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import StatInput from "./StatInput"; // Import the StatInput component
import "./Config.css";

interface StatsArray {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

interface ConfigProps {
  standardArray: StatsArray;
  setStatsArray: React.Dispatch<React.SetStateAction<StatsArray>>;
}

function Config({ standardArray, setStatsArray }: ConfigProps) {
  const [validated, setValidated] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  function setStatsChange(property: keyof StatsArray, value: number) {
    updateStatProperty(property, value);
  }

  function updateStatProperty(property: keyof StatsArray, value: number) {
    setStatsArray((prevStatsArray) => ({
      ...prevStatsArray,
      [property]: value,
    }));
  }

  return (
    <Form validated={validated} onSubmit={handleSubmit}>
      <h5>Standard Array</h5>
      <Row>
        <StatInput
          label="Strength"
          property="str"
          value={standardArray.str}
          onChange={(event) => setStatsChange('str', parseInt(event.target.value))}
        />
        <StatInput
          label="Dexterity"
          property="dex"
          value={standardArray.dex}
          onChange={(event) => setStatsChange('dex', parseInt(event.target.value))}
        />
        <StatInput
          label="Constitution"
          property="con"
          value={standardArray.con}
          onChange={(event) => setStatsChange('con', parseInt(event.target.value))}
        />
        <StatInput
          label="Intelligence"
          property="int"
          value={standardArray.int}
          onChange={(event) => setStatsChange('int', parseInt(event.target.value))}
        />
        <StatInput
          label="Wisdom"
          property="wis"
          value={standardArray.wis}
          onChange={(event) => setStatsChange('wis', parseInt(event.target.value))}
        />
        <StatInput
          label="Charisma"
          property="cha"
          value={standardArray.cha}
          onChange={(event) => setStatsChange('cha', parseInt(event.target.value))}
        />
      </Row>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}

export default Config;
