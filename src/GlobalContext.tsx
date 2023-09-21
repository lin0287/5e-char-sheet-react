import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { playerRace } from "./CharacterCreation/CharacterRaces"; // Make sure this import is correct

export interface StatsArray {
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
}

export interface AppContextType {
  statsArray: StatsArray;
  playerRace: playerRace | null;
  setPlayerRace: Dispatch<SetStateAction<playerRace | null>>;
  setStatsArray: Dispatch<SetStateAction<StatsArray>>;

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

  const [selectedRace, setSelectedRace] = useState<playerRace | null>(null);

  return (
    <AppContext.Provider
      value={{
        statsArray,
        setStatsArray,
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
