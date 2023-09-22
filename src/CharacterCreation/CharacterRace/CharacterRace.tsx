import {Button, Col, Form, Row} from "react-bootstrap";
import Select from "react-select";
import {bonusType, groupedOptions, playerRace} from "./CharacterRaceData";
import React, {useContext, useState} from "react";
import {addStatsArray, AppContext, AppContextType, StatsArray} from "../../GlobalContext";

export function CharacterRace() {
  const context = useContext(AppContext) as AppContextType;
  const { playerRace, setPlayerRace, setStatsArray, stdArray} = context;
  const [primaryStat, setPrimaryStat] = useState<bonusType | undefined>(undefined);
  const [secondaryStat, setSecondaryStat] = useState<bonusType | undefined>(undefined);

  const [validated, setValidated] = useState(false);

  function selectRace(race: playerRace | null) {
    if (race){
      setPlayerRace(race);
      setPrimaryStat(race.bonuses.at(0));
      setSecondaryStat(race.bonuses.at(1));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    event.preventDefault();
    const racialBonuses = calculateCharacterRacialStatBonuses();
    const calculatedStats = addStatsArray(stdArray, racialBonuses);
    setStatsArray(calculatedStats);
    setValidated(true);
  }

  function calculateCharacterRacialStatBonuses() : StatsArray{
    let racialBonuses : StatsArray = {
      str : 0, dex : 0, con : 0, int : 0, wis : 0, cha : 0
    }
    if (primaryStat !== undefined && secondaryStat !== undefined){
      applyStatBonus(racialBonuses, primaryStat, 2);
      applyStatBonus(racialBonuses, secondaryStat, 1);
    }
    return racialBonuses
  }

  function applyStatBonus(statBonuses: StatsArray, stat: bonusType, bonusValue: number) {
    switch (stat) {
      case bonusType.Str:
        statBonuses.str += bonusValue;
        break;
      case bonusType.Dex:
        statBonuses.dex += bonusValue;
        break;
      case bonusType.Con:
        statBonuses.con += bonusValue;
        break;
      case bonusType.Int:
        statBonuses.int += bonusValue;
        break;
      case bonusType.Wis:
        statBonuses.wis += bonusValue;
        break;
      case bonusType.Cha:
        statBonuses.cha += bonusValue;
        break;
    }
    return statBonuses;
  }

  return(
    <Form validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Label>Character Race</Form.Label>
          <Select
            required
            value={playerRace || null}
            onChange={(selectedValue) => {
              selectRace(selectedValue as playerRace | null);
            }}
            isSearchable
            options={groupedOptions}
          />
        </Col>
        <Col>
          <Form.Label>+2 Stat</Form.Label>
          <Form.Select value={primaryStat} defaultValue="" required>
            <option value="Str">Strength</option>
            <option value="Dex">Dexterity</option>
            <option value="Con">Constitution</option>
            <option value="Int">Intelligence</option>
            <option value="Wis">Wisdom</option>
            <option value="Cha">Charisma</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>+1 Stat</Form.Label>
          <Form.Select value={secondaryStat} defaultValue="" required>
            <option value="Str">Strength</option>
            <option value="Dex">Dexterity</option>
            <option value="Con">Constitution</option>
            <option value="Int">Intelligence</option>
            <option value="Wis">Wisdom</option>
            <option value="Cha">Charisma</option>
          </Form.Select>
        </Col>
      </Row>
      <div className="pt-3">
      {!validated ? (
        <Button type="submit" variant="primary">
          Submit
        </Button>
      ) : (
        ''
      )}
      </div>
    </Form>
  );
}
