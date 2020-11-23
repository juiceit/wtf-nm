import { Character } from "../../types/types";

export const AnaLucia: Character = {
  name: "Ana-Lucía",
  fullName: "Ana-Lucía García López",
  player: "Josefina",
  pack: "Flammande berget",
  auspice: "Rahu",
  tribe: "Bloodtalons",
  virtue: "Justice",
  vice: "Wrath",
  flaws: [],
  harmony: 3,
  attributes: [
    {
      name: "Intelligence",
      level: 2,
      category: "Mental",
      inclination: "Power",
    },
    { name: "Wits", level: 2, category: "Mental", inclination: "Finesse" },
    {
      name: "Resolve",
      level: 3,
      category: "Mental",
      inclination: "Resistance",
    },
    { name: "Strength", level: 3, category: "Physical", inclination: "Power" },
    {
      name: "Dexterity",
      level: 2,
      category: "Physical",
      inclination: "Finesse",
    },
    {
      name: "Stamina",
      level: 3,
      category: "Physical",
      inclination: "Resistance",
    },
    { name: "Presence", level: 3, category: "Social", inclination: "Power" },
    {
      name: "Manipulation",
      level: 2,
      category: "Social",
      inclination: "Finesse",
    },
    {
      name: "Composure",
      level: 2,
      category: "Social",
      inclination: "Resistance",
    },
  ],
  skills: [
    { name: "Academics", level: 1, category: "Mental" },
    { name: "Computer", level: 0, category: "Mental" },
    { name: "Crafts", level: 0, category: "Mental" },
    { name: "Investigation", level: 2, category: "Mental" },
    { name: "Medicine", level: 1, category: "Mental" },
    { name: "Occult", level: 2, category: "Mental", speciality: "Promethean" },
    { name: "Politics", level: 1, category: "Mental" },
    { name: "Science", level: 0, category: "Mental", speciality: "Drugs" },
    { name: "Athletics", level: 2, category: "Physical" },
    { name: "Brawl", level: 4, category: "Physical", speciality: "Grappling" },
    { name: "Drive", level: 3, category: "Physical" },
    { name: "Firearms", level: 3, category: "Physical" },
    { name: "Larceny", level: 0, category: "Physical" },
    { name: "Stealth", level: 1, category: "Physical" },
    { name: "Survival", level: 2, category: "Physical", speciality: "Desert" },
    { name: "Weaponry", level: 2, category: "Physical" },
    { name: "Animal Ken", level: 2, category: "Social", speciality: "Dogs" },
    { name: "Empathy", level: 1, category: "Social" },
    { name: "Expression", level: 1, category: "Social" },
    { name: "Intimidation", level: 4, category: "Social" },
    { name: "Persuasion", level: 1, category: "Social" },
    { name: "Socialize", level: 0, category: "Social" },
    { name: "Streetwise", level: 2, category: "Social" },
    { name: "Subterfuge", level: 1, category: "Social" },
  ],
  merits: [
    { name: "Cop", level: 2 },
    { name: "Roxy", level: 1 },
    { name: "Spanish", level: 3, maxLevel: 3 },
    { name: "First Tongue", level: 1, maxLevel: 1 },
    { name: "Danger Sense", level: 2, maxLevel: 2 },
    { name: "Iron Stamina", level: 2, maxLevel: 4 },
  ],
  totem: {
    name: "Nuke",
    level: 1,
  },
  renown: [
    { name: "Purity", level: 3 },
    { name: "Glory", level: 2 },
    { name: "Honor", level: 0 },
    { name: "Wisdom", level: 1 },
    { name: "Cunning", level: 0 },
  ],
  primalUrge: 3,
  gifts: [],
  rites: [],
  weapons: [],
  health: {
    max: 8,
    bashing: 0,
    lethal: 0,
    aggravated: 0,
  },
  willpower: {
    max: 5,
    current: 1,
  },
  essence: 1,
  exp: 25,
  currentForm: "Gauru",
  gauruTurns: 1,
  extra: "",
  imageUrl:
    "https://images.unsplash.com/photo-1535469618671-e58a8c365cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};