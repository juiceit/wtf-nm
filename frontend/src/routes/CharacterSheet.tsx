import React from "react";
import styled from "styled-components";
import { Character } from "../types/types";
import Attributes from "../components/Attributes";
import Skills from "../components/Skills";

const Image = styled.img`
  max-width: 100%;
  width: 300px;
`;

const Main = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface CharacterSheetProps {
  character: Character;
}

export default function CharacterSheet({ character }: CharacterSheetProps) {
  const { name, fullName, player, imageUrl, attributes, skills } = character;
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
