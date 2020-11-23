import React from 'react';
import styled from 'styled-components';
import { groupBy } from 'lodash';

interface Attribute {
  name: string;
  level: number;
  category: string;
  inclination: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  speciality?: string;
}

interface Renown {
  name: string;
  level: number;
}

interface Merit {
  name: string;
  level: number;
  maxLevel?: number;
}

interface Character {
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
  gifts: [];
  rites: [];
  weapons: [];
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

const character: Character = {
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
    {name: "Intelligence", level: 2, category: "Mental", inclination: "Power"},
    {name: "Wits", level: 2, category: "Mental", inclination: "Finesse"},
    {name: "Resolve", level: 3, category: "Mental", inclination: "Resistance"},
    {name: "Strength", level: 3, category: "Physical", inclination: "Power"},
    {name: "Dexterity", level: 2, category: "Physical", inclination: "Finesse"},
    {name: "Stamina", level: 3, category: "Physical", inclination: "Resistance"},
    {name: "Presence", level: 3, category: "Social", inclination: "Power"},
    {name: "Manipulation", level: 2, category: "Social", inclination: "Finesse"},
    {name: "Composure", level: 2, category: "Social", inclination: "Resistance"},
  ],
  skills: [
    {name: "Academics", level: 1, category: "Mental"},
    {name: "Computer", level: 0, category: "Mental"},
    {name: "Crafts", level: 0, category: "Mental"},
    {name: "Investigation", level: 2, category: "Mental"},
    {name: "Medicine", level: 1, category: "Mental"},
    {name: "Occult", level: 2, category: "Mental", speciality: "Promethean"},
    {name: "Politics", level: 1, category: "Mental"},
    {name: "Science", level: 0, category: "Mental", speciality: "Drugs"},
    {name: "Athletics", level: 2, category: "Physical"},
    {name: "Brawl", level: 4, category: "Physical", speciality: "Grappling"},
    {name: "Drive", level: 3, category: "Physical"},
    {name: "Firearms", level: 3, category: "Physical"},
    {name: "Larceny", level: 0, category: "Physical"},
    {name: "Stealth", level: 1, category: "Physical"},
    {name: "Survival", level: 2, category: "Physical", speciality: "Desert"},
    {name: "Weaponry", level: 2, category: "Physical"},
    {name: "Animal Ken", level: 2, category: "Social", speciality: "Dogs"},
    {name: "Empathy", level: 1, category: "Social"},
    {name: "Expression", level: 1, category: "Social"},
    {name: "Intimidation", level: 4, category: "Social"},
    {name: "Persuasion", level: 1, category: "Social"},
    {name: "Socialize", level: 0, category: "Social"},
    {name: "Streetwise", level: 2, category: "Social"},
    {name: "Subterfuge", level: 1, category: "Social"},
  ],
  merits: [
    {name: "Cop", level: 2},
    {name: "Roxy", level: 1},
    {name: "Spanish", level: 3, maxLevel: 3},
    {name: "First Tongue", level: 1, maxLevel: 1},
    {name: "Danger Sense", level: 2, maxLevel: 2},
    {name: "Iron Stamina", level: 2, maxLevel: 4},
  ],
  totem: {
    name: "Nuke",
    level: 1,
  },
  renown: [
    {name: "Purity", level: 3},
    {name: "Glory", level: 2},
    {name: "Honor", level: 0},
    {name: "Wisdom", level: 1},
    {name: "Cunning", level: 0},
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
  imageUrl: "https://images.unsplash.com/photo-1535469618671-e58a8c365cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
}

const Image = styled.img`
  max-width: 100%;
  width: 300px;
`;

const Main = styled.main`
  padding: 1rem;
`;

export default function CharacterSheet() {
  const {name, fullName, player, imageUrl, attributes, skills} = character;
  return (
    <Main>
      <h1>{name}</h1>
      <p>Name: {fullName}</p>
      <p>Player: {player}</p>
      <Image src={imageUrl} alt={name} />
      <Attributes attributes={attributes} />
      <Skills skills={skills} />
    </Main>
  );
}

function Attributes({attributes}: {attributes: Attribute[]}) {
  const categories = groupBy(attributes, 'category');
  return (
    <section>
      <h2>Attributes</h2>
      {Object.keys(categories).map((key: string) => (
        <AttributeCategory key={key} category={key} attributes={categories[key]} />
      ))}
    </section>
  );
}

interface AttributeCategoryProps {
  category: string;
  attributes: Attribute[];
}

function AttributeCategory({category, attributes}: AttributeCategoryProps) {
  return (
    <>
      <h3>{category}</h3>
      <ul>
        {attributes.map(({name, level}) => (
          <li key={name}>{name}: {level}</li>
        ))}
      </ul>
    </>
  );
}

const SkillCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
`;

function Skills({skills}: {skills: Skill[]}) {
  const categories = groupBy(skills, 'category');
  return (
    <section>
      <h2>Skills</h2>
      <SkillCategories>
        {Object.keys(categories).map((key: string) => (
          <SkillCategory key={key} category={key} skills={categories[key]} />
        ))}
      </SkillCategories>
    </section>
  );
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledSkillCategory = styled.div`
  width: 320px;
  padding: 0 1rem;
`;

function SkillCategory({category, skills}: SkillCategoryProps) {
  return (
    <StyledSkillCategory>
      <h3>{getCategoryHeader(category)}</h3>
      <SkillGrid>
        {skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} />
        ))}
      </SkillGrid>
    </StyledSkillCategory>
  );
}

function getCategoryHeader(category: string) {
  switch (category) {
    case "Mental":
      return "🧠 Mental";
    case "Physical":
      return "💪 Physical";
    case "Social":
      return "💬 Social";
    default:
      return category;
  }
}

const SkillName = styled.div`
  text-align: right;
  padding: 0.5rem 1rem;
`;

const SpecialityLabel = styled.div`
  text-align: right;
  padding: 0 1rem 0.75rem;
  font-size: 0.75rem;
  color: #ddd;
`;

const Speciality = styled.div`
  margin-left: 4px;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  color: #ddd;
  font-weight: 700;
`;

function SkillRow({name, level, speciality}: Skill) {
  return (
    <>
      <SkillName>{name}</SkillName>
      <Level level={level} />
      {speciality && (
        <>
          <SpecialityLabel>Speciality:</SpecialityLabel>
          <Speciality>{speciality}</Speciality>
        </>
      )}
    </>
  );
}

const LevelList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

function Level({level}: {level: number}) {
  return (
    <LevelList>
      <LevelIndicator filled={level >= 1} />
      <LevelIndicator filled={level >= 2} />
      <LevelIndicator filled={level >= 3} />
      <LevelIndicator filled={level >= 4} />
      <LevelIndicator filled={level >= 5} />
    </LevelList>
  );
}

interface LevelIndicatorProps {
  filled?: boolean;
}

const LevelIndicator = styled.li<LevelIndicatorProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 4px;
  ${props => props.filled ? `background-color: white` : ""}
`;
