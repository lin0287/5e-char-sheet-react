import {Accordion, Alert} from "react-bootstrap";
import {CharacterRace} from "./CharacterRace/CharacterRace";
import {useGlobalContext} from "../GlobalContext";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CharacterCreation;
