import React from 'react';
import styled from 'styled-components';
import { Merit } from '../types/types';
import Level from './Level';
import Section from './Section';

const MeritName = styled.div`
  padding: 0.5rem 1rem 0.5rem 0;
`;

function MeritRow({ name, level, maxLevel }: Merit) {
  return (
    <>
      <MeritName>{name}</MeritName>
      <Level level={level} maxLevel={maxLevel} />
    </>
  );
}

const StyledMeritCategory = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #424242;
  box-shadow: 0 2px 4px black;

  @media screen and (min-width: 400px) {
    width: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
`;

const MeritGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media screen and (min-width: 400px) {
    grid-template-columns: auto auto;
    align-self: center;
  }
`;

interface MeritCategoryProps {
  merits: Merit[];
  totem: Merit;
}

function MeritCategory({ merits, totem }: MeritCategoryProps) {
  return (
    <StyledMeritCategory>
      <MeritGrid>
        {merits.map((merit) => (
          <MeritRow key={merit.name} {...merit} />
        ))}
        <MeritRow {...totem} />
      </MeritGrid>
    </StyledMeritCategory>
  );
}

const MeritCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0 -1rem;

  @media screen and (min-width: 400px) {
    margin: 0;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 870px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

interface MeritsProps {
  merits: Merit[];
  totem: Merit;
}

export default function Merits({ merits, totem }: MeritsProps) {
  return (
    <Section>
      <h2>Merits</h2>
      <MeritCategories>
        <MeritCategory merits={merits} totem={totem} />
      </MeritCategories>
    </Section>
  );
}
