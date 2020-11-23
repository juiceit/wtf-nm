import React from "react";
import styled from "styled-components";
import { Character } from "../types/types";
import Attributes from "../components/Attributes";
import BasicInfo from "../components/BasicInfo";
import Skills from "../components/Skills";

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
  const {
    name,
    fullName,
    player,
    pack,
    auspice,
    tribe,
    virtue,
    vice,
    exp,
    imageUrl,
    attributes,
    skills,
  } = character;
  return (
    <Main>
      <BasicInfo
        name={name}
        fullName={fullName}
        player={player}
        imageUrl={imageUrl}
        pack={pack}
        auspice={auspice}
        tribe={tribe}
        virtue={virtue}
        vice={vice}
        exp={exp}
      />
      <Attributes attributes={attributes} />
      <Skills skills={skills} />
    </Main>
  );
}
