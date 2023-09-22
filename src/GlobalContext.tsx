import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {playerRace} from "./CharacterCreation/CharacterRace/CharacterRaceData"; // Make sure this import is correct

export interface StatsArray {
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
}

export function addStatsArray(statsArray1 : StatsArray, statsArray2 : StatsArray) : StatsArray{
  return {
    str: statsArray1.str + statsArray2.str,
    dex: statsArray1.dex + statsArray2.dex,
    con: statsArray1.con + statsArray2.con,
    wis: statsArray1.wis + statsArray2.wis,
    int: statsArray1.int + statsArray2.int,
    cha: statsArray1.cha + statsArray2.cha,
  };
}

export interface AppContextType {
  statsArray: StatsArray;
  stdArray: StatsArray;
  playerRace: playerRace | null;
  setPlayerRace: Dispatch<SetStateAction<playerRace | null>>;
  setStatsArray: Dispatch<SetStateAction<StatsArray>>;
  setStdArray: Dispatch<SetStateAction<StatsArray>>;

}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface StatsProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: StatsProviderProps) {
  const [statsArray, setStatsArray] = useState<StatsArray>({
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  });

  const [stdArray, setStdArray] = useState<StatsArray>({
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  });

  const [selectedRace, setSelectedRace] = useState<playerRace | null>(null);

  return (
    <AppContext.Provider
      value={{
        statsArray,
        setStatsArray,
        stdArray,
        setStdArray,
        playerRace: selectedRace,
        setPlayerRace: setSelectedRace,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within an AppContextProvider');
  }
  return context;
}
