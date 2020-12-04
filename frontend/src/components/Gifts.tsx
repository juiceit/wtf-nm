import React from 'react';
import { Character, Gift } from '../types/types';
import Section from './Section';

function calculateRollComponent(rollComponent: string, character: Character) {
  const skill = character.skills.find((s) => s.name === rollComponent);
  if (skill) {
    if (skill.level === 0) {
      return skill.category === 'Mental' ? -3 : -1;
    }
    return skill.level;
  }

  const renown = character.renown.find((r) => r.name === rollComponent);
  if (renown) {
    return renown.level;
  }

  const attribute = character.attributes.find((a) => a.name === rollComponent);
  if (attribute) {
    return attribute.level;
  }

  if (rollComponent === 'Primal Urge') {
    return character.primalUrge;
  }

  return 0;
}

function calculateRoll(skillsInRoll: string[], character: Character) {
  return skillsInRoll.reduce(
    (sum, skill) => sum + calculateRollComponent(skill, character),
    0,
  );
}

function levelDots(level: number): string {
  return new Array(level).fill('•').join('');
}

interface GiftComponentProps {
  gift: Gift;
  character: Character;
}

function GiftComponent({ gift, character }: GiftComponentProps) {
  return (
    <div
      style={{
        padding: '1rem',
        borderRadius: '8px',
        margin: '1rem 0',
        backgroundColor: '#424242',
        boxShadow: '0 2px 4px black',
      }}
    >
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <img
          src=""
          alt=""
          style={{ height: '48px', width: '48px', marginRight: '1rem' }}
        />
        <div>
          <div style={{ fontWeight: 'bold' }}>{gift.name}</div>
          <div>
            {gift.cost && `${gift.cost} / `}
            {gift.roll && `${calculateRoll(gift.roll, character)} 🎲 / `}
            {gift.effect}
          </div>
        </div>
      </div>
      {gift.roll && (
        <div
          style={{
            padding: '1rem',
            margin: '0 -1rem 1rem',
            backgroundColor: '#323232',
          }}
        >
          {gift.roll?.length && <div>{gift.roll.join(' + ')}</div>}
          {gift.versus?.length && (
          <div>
            vs
            {gift.versus.join(' + ')}
          </div>
          )}
        </div>
      )}
      <div>{gift.description}</div>
      <div
        style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          color: '#ccc',
        }}
      >
        Gift -
        {' '}
        {gift.type}
        {' '}
        {levelDots(gift.level)}
      </div>
    </div>
  );
}

interface GiftsProps {
  character: Character;
}

export default function Gifts({ character }: GiftsProps) {
  const { gifts } = character;
  return (
    <Section>
      <h2>Gifts</h2>
      {gifts.map((gift) => (
        <GiftComponent gift={gift} character={character} />
      ))}
    </Section>
  );
}
