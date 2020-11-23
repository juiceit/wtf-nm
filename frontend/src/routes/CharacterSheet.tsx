import React from "react";
import styled from "styled-components";
import { Character } from "../types/types";
import Attributes from "../components/Attributes";
import BasicInfo from "../components/BasicInfo";
import Skills from "../components/Skills";
import { Section } from "../components/Section";
import MeritsTotemFlaws from "../components/MeritsTotemFlaws";
import RenownHarmonyPrimalUrge from "../components/RenownHarmonyPrimalUrge";

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
    auspice,
    tribe,
    virtue,
    vice,
    exp,
    imageUrl,
    attributes,
    skills,
    merits,
    totem,
    flaws,
    renown,
    harmony,
    primalUrge,
  } = character;
  return (
    <Main>
      <BasicInfo
        name={name}
        fullName={fullName}
        player={player}
        imageUrl={imageUrl}
        auspice={auspice}
        tribe={tribe}
        virtue={virtue}
        vice={vice}
        exp={exp}
      />
      <Attributes attributes={attributes} />
      <Skills skills={skills} />
      <MeritsTotemFlaws merits={merits} totem={totem} flaws={flaws} />
      <RenownHarmonyPrimalUrge
        renown={renown}
        harmony={harmony}
        primalUrge={primalUrge}
      />
      <Section>
        <h2>Gifts</h2>
      </Section>
      <Section>
        <h2>Rites</h2>
      </Section>
      <Section>
        <h2>Weapons</h2>
      </Section>
      <Section>
        <h2>Status</h2>
        <h3>Health</h3>
        <h3>Willpower</h3>
        <h3>Essence</h3>
        <h3>Current Form</h3>
        <h4>Turns in Gauru</h4>
      </Section>
    </Main>
  );
}
