import {Accordion, Alert} from "react-bootstrap";
import {CharacterRace} from "./CharacterRace/CharacterRace";
import {useGlobalContext} from "../GlobalContext";
import {CharacterInfo} from "./CharacterInformation/CharacterInfo";

function CharacterCreation (){
  const { stdArray} = useGlobalContext();

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Racial Options</Accordion.Header>
        <Accordion.Body>
          {
            (stdArray.str !== 0 && stdArray.dex !== 0 && stdArray.con !== 0 &&
              stdArray.wis !== 0 && stdArray.int !== 0 && stdArray.cha !== 0)?
              <CharacterRace/>:<Alert variant={"warning"}>
                Please set the Standard Array prior to setting Race Info!
              </Alert>
          }
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Character Information</Accordion.Header>
        <Accordion.Body>
          <CharacterInfo/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CharacterCreation;
