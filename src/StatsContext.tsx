import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface StatsArray {
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
}

interface StatsContextType {
  statsArray: StatsArray;
  setStatsArray: Dispatch<SetStateAction<StatsArray>>;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

interface StatsProviderProps {
  children: ReactNode;
}

export function StatsProvider({ children }: StatsProviderProps) {
  const [statsArray, setStatsArray] = useState<StatsArray>({
    str: 0,
    dex: 0,
    con: 0,
    wis: 0,
    int: 0,
    cha: 0,
  });

  return (
    <StatsContext.Provider value={{ statsArray, setStatsArray }}>
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  const context = useContext(StatsContext);
  if (context === undefined) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
}
