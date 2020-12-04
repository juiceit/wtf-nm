import React from 'react';
import styled from 'styled-components';
import { Renown } from '../types/types';
import Level from './Level';
import Section from './Section';

const RenownName = styled.div`
  padding: 0.5rem 1rem 0.5rem 0;
`;

function RenownRow({ name, level }: Renown) {
  return (
    <>
      <RenownName>{name}</RenownName>
      <Level level={level} />
    </>
  );
}

const StyledRenownCategory = styled.div`
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

const RenownGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media screen and (min-width: 400px) {
    grid-template-columns: auto auto;
    align-self: center;
  }
`;

interface RenownCategoryProps {
  renowns: Renown[];
}

function RenownCategory({ renowns }: RenownCategoryProps) {
  return (
    <StyledRenownCategory>
      <RenownGrid>
        {renowns.map((renown) => (
          <RenownRow key={renown.name} {...renown} />
        ))}
      </RenownGrid>
    </StyledRenownCategory>
  );
}

const RenownCategories = styled.div`
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

interface RenownsProps {
  renowns: Renown[];
}

export default function Renowns({ renowns }: RenownsProps) {
  return (
    <Section>
      <h2>Renown</h2>
      <RenownCategories>
        <RenownCategory renowns={renowns} />
      </RenownCategories>
    </Section>
  );
}
