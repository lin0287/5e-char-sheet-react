import Row from 'react-bootstrap/Row';
import React from "react";
import StatInput from "./StatInput"; // Import the StatInput component
import {StatsArray} from "../StatsArray";


interface StdArrayProps {
  standardArray: StatsArray;
  setStatsArray: React.Dispatch<React.SetStateAction<StatsArray>>;
  validated: boolean;
}

function StandardArray({ standardArray, setStatsArray, validated }: StdArrayProps) {

  function setStatsChange(property: keyof StatsArray, value: number) {
    updateStatProperty(property, value);
  }

  function updateStatProperty(property: keyof StatsArray, value: number) {
    setStatsArray((prevStatsArray) => ({
      ...prevStatsArray,
      [property]: value,
    }));
  }

  console.log(standardArray)

  return (
      <Row>
        <StatInput
          label="Strength"
          property="str"
          value={standardArray.str}
          disabled={validated}
          onChange={(event) => setStatsChange('str', parseInt(event.target.value))}
        />
        <StatInput
          label="Dexterity"
          property="dex"
          value={standardArray.dex}
          disabled={validated}
          onChange={(event) => setStatsChange('dex', parseInt(event.target.value))}
        />
        <StatInput
          label="Constitution"
          property="con"
          value={standardArray.con}
          disabled={validated}
          onChange={(event) => setStatsChange('con', parseInt(event.target.value))}
        />
        <StatInput
          label="Intelligence"
          property="int"
          value={standardArray.int}
          disabled={validated}
          onChange={(event) => setStatsChange('int', parseInt(event.target.value))}
        />
        <StatInput
          label="Wisdom"
          property="wis"
          value={standardArray.wis}
          disabled={validated}
          onChange={(event) => setStatsChange('wis', parseInt(event.target.value))}
        />
        <StatInput
          label="Charisma"
          property="cha"
          value={standardArray.cha}
          disabled={validated}
          onChange={(event) => setStatsChange('cha', parseInt(event.target.value))}
        />
      </Row>
  );
}

export default StandardArray;
