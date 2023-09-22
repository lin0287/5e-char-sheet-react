export type playerRace = {
  value: string;
  label: string;
  bonuses: bonusType[];
};
export interface GroupedOption {
  readonly label: string;
  readonly options: readonly playerRace[];
}

export interface bonus {
  bonusType: bonusType;
  bonusMagnitude: number;
}

export enum bonusType {
  playerChoice="playerChoice",
  Str = "Str",
  Dex = "Dex",
  Con = "Con",
  Int = "Int",
  Wis = "Wis",
  Cha = "Cha"
}

export function toBonusEnum(input: string): bonusType | undefined {
  switch (input) {
    case "Str":
      return bonusType.Str;
    case "Dex":
      return bonusType.Dex;
    case "Con":
      return bonusType.Con;
    case "Int":
      return bonusType.Int;
    case "Wis":
      return bonusType.Wis;
    case "Cha":
      return bonusType.Cha;
    default:
      return undefined;
  }
}

export const Dragonborn: readonly playerRace[] = [
  { value: 'Black Dragonborn', label: 'Black Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Blue Dragonborn', label: 'Blue Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Brass Dragonborn', label: 'Brass Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Bronze Dragonborn', label: 'Bronze Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Copper Dragonborn', label: 'Copper Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Gold Dragonborn', label: 'Gold Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Green Dragonborn', label: 'Green Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Red Dragonborn', label: 'Red Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'Silver Dragonborn', label: 'Silver Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
  { value: 'White Dragonborn', label: 'White Dragonborn', bonuses: [bonusType.Str, bonusType.Cha], },
];

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Dragonborn',
    options: Dragonborn,
  },
];
