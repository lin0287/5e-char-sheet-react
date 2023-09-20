import {useMemo} from "react";

export interface StandardArrayContextType {
  strength: number;
  dexterity: number;
  constitution: number;
  wisdom: number;
  intelligence: number;
  charisma: number;

  setStrength: React.Dispatch<React.SetStateAction<number>>;
  setDexterity: React.Dispatch<React.SetStateAction<number>>;
  setConstitution: React.Dispatch<React.SetStateAction<number>>;
  setWisdom: React.Dispatch<React.SetStateAction<number>>;
  setIntelligence: React.Dispatch<React.SetStateAction<number>>;
  setCharisma: React.Dispatch<React.SetStateAction<number>>;
}
