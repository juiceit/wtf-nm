export interface Attribute {
  name: string;
  level: number;
  category: string;
  inclination: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  speciality?: string;
}

export interface Renown {
  name: string;
  level: number;
}

export interface Merit {
  name: string;
  level: number;
  maxLevel?: number;
}

export interface Character {
  name: string;
  fullName: string;
  player: string;
  pack: string;
  auspice: string;
  tribe: string;
  virtue: string;
  vice: string;
  flaws: string[];
  harmony: number;
  attributes: Attribute[];
  skills: Skill[];
  merits: Merit[];
  totem: Merit;
  renown: Renown[];
  primalUrge: number;
  gifts: any[];
  rites: any[];
  weapons: any[];
  health: {
    max: number;
    bashing: number;
    lethal: number;
    aggravated: number;
  };
  willpower: {
    max: number;
    current: number;
  };
  essence: number;
  exp: number;
  currentForm: string;
  gauruTurns: number;
  extra?: string;
  imageUrl?: string;
}
