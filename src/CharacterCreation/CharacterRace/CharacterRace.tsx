import {Col, Form, Row} from "react-bootstrap";
import Select from "react-select";
import {bonusType, groupedOptions, playerRace} from "../CharacterRaces";
import {useContext, useState} from "react";
import {AppContext, AppContextType} from "../../GlobalContext";

export function CharacterRace() {
  const context = useContext(AppContext) as AppContextType;
  const { playerRace, setPlayerRace } = context;
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

  return(
    <Form validated={validated}>
      <Row>
        <Col>
          <Form.Label>Character Race</Form.Label>
          <Select
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
          <Form.Select value={primaryStat} defaultValue="">
            <option value="" disabled>Please select</option>
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
          <Form.Select value={secondaryStat} defaultValue="">
            <option value="" disabled>Please select</option>
            <option value="Str">Strength</option>
            <option value="Dex">Dexterity</option>
            <option value="Con">Constitution</option>
            <option value="Int">Intelligence</option>
            <option value="Wis">Wisdom</option>
            <option value="Cha">Charisma</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}
