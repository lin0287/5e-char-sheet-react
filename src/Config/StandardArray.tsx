import React from 'react';
import Row from 'react-bootstrap/Row';
import StatInput from './StatInput';
import { useStats } from '../StatsContext';

interface StandardArrayProps {
  validated: boolean; // Define the prop here
}

function StandardArray({ validated }: StandardArrayProps) {
  const { statsArray, setStatsArray } = useStats();

  function setStatsChange(property: keyof typeof statsArray, value: number) {
    updateStatProperty(property, value);
  }

  function updateStatProperty(property: keyof typeof statsArray, value: number) {
    setStatsArray((prevStatsArray) => ({
      ...prevStatsArray,
      [property]: value,
    }));
  }

  return (
    <Row>
      <StatInput
        label="Strength"
        property="str"
        value={statsArray.str}
        disabled={validated}
        onChange={(event) => setStatsChange('str', parseInt(event.target.value))}
      />
      <StatInput
        label="Dexterity"
        property="dex"
        value={statsArray.dex}
        disabled={validated}
        onChange={(event) => setStatsChange('dex', parseInt(event.target.value))}
      />
      <StatInput
        label="Constitution"
        property="con"
        value={statsArray.con}
        disabled={validated}
        onChange={(event) => setStatsChange('con', parseInt(event.target.value))}
      />
      <StatInput
        label="Intelligence"
        property="int"
        value={statsArray.int}
        disabled={validated}
        onChange={(event) => setStatsChange('int', parseInt(event.target.value))}
      />
      <StatInput
        label="Wisdom"
        property="wis"
        value={statsArray.wis}
        disabled={validated}
        onChange={(event) => setStatsChange('wis', parseInt(event.target.value))}
      />
      <StatInput
        label="Charisma"
        property="cha"
        value={statsArray.cha}
        disabled={validated}
        onChange={(event) => setStatsChange('cha', parseInt(event.target.value))}
      />
    </Row>
  );
}

export default StandardArray;
