import React from 'react';
import Row from 'react-bootstrap/Row';
import StatInput from './StatInput';
import { useGlobalContext } from '../GlobalContext';

interface StandardArrayProps {
  validated: boolean; // Define the prop here
}

function StandardArray({ validated }: StandardArrayProps) {
  const { stdArray, setStdArray } = useGlobalContext();

  function setStatsChange(property: keyof typeof stdArray, value: number) {
    updateStatProperty(property, value);
  }

  function updateStatProperty(property: keyof typeof stdArray, value: number) {
    setStdArray((prevStatsArray) => ({
      ...prevStatsArray,
      [property]: value,
    }));
  }

  return (
    <Row>
      <StatInput
        label="Strength"
        property="str"
        value={stdArray.str}
        disabled={validated}
        onChange={(event) => setStatsChange('str', parseInt(event.target.value))}
      />
      <StatInput
        label="Dexterity"
        property="dex"
        value={stdArray.dex}
        disabled={validated}
        onChange={(event) => setStatsChange('dex', parseInt(event.target.value))}
      />
      <StatInput
        label="Constitution"
        property="con"
        value={stdArray.con}
        disabled={validated}
        onChange={(event) => setStatsChange('con', parseInt(event.target.value))}
      />
      <StatInput
        label="Intelligence"
        property="int"
        value={stdArray.int}
        disabled={validated}
        onChange={(event) => setStatsChange('int', parseInt(event.target.value))}
      />
      <StatInput
        label="Wisdom"
        property="wis"
        value={stdArray.wis}
        disabled={validated}
        onChange={(event) => setStatsChange('wis', parseInt(event.target.value))}
      />
      <StatInput
        label="Charisma"
        property="cha"
        value={stdArray.cha}
        disabled={validated}
        onChange={(event) => setStatsChange('cha', parseInt(event.target.value))}
      />
    </Row>
  );
}

export default StandardArray;
