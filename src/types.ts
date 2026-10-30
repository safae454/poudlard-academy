export type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff";

export interface Entity {
  id: number;
}

export interface Wizard extends Entity {
  name: string;
  house: House;
  level: number;
  active: boolean;
}

export type NewWizard = Omit<Wizard, "id">;

export type SpellCategory = "attack" | "defense";

export interface Spell extends Entity {
  name: string;
  category: SpellCategory;
  power: number;
}

export type AcademyEvent =
  | { type: "spell-cast"; wizardId: number; spellName: string }
  | { type: "level-up"; wizardId: number; newLevel: number }
  | { type: "wizard-expelled"; wizardId: number };

export type SpellCastEvent = Extract<AcademyEvent, { type: "spell-cast" }>;