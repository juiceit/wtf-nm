import React from "react";
import styled from "styled-components";

const BasicInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 300px;
  border: 10px solid white;
  box-shadow: 0 2px 4px black;
`;

const BasicInfoPanel = styled.div`
  width: 100%;
  flex: 1;

  @media screen and (min-width: 600px) {
    margin-left: 2rem;
  }
`;

const Information = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;

  @media screen and (min-width: 800px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto auto;
    grid-auto-flow: column;
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
`;

const InfoContainer = styled.div`
  margin-bottom: 1.5rem;
`;

interface InfoProps {
  id: string;
  label: string;
  value: string | number;
}

function Info({ id, label, value }: InfoProps) {
  return (
    <InfoContainer>
      <Label htmlFor={id}>{label}</Label>
      <div>{value}</div>
    </InfoContainer>
  );
}

interface BasicInfoProps {
  name: string;
  fullName: string;
  player: string;
  pack: string;
  auspice: string;
  tribe: string;
  virtue: string;
  vice: string;
  exp: number;
  imageUrl?: string;
}

export default function BasicInfo({
  name,
  fullName,
  player,
  imageUrl,
  pack,
  auspice,
  tribe,
  virtue,
  vice,
  exp,
}: BasicInfoProps) {
  return (
    <BasicInfoContainer>
      <Image src={imageUrl} alt={name} />
      <BasicInfoPanel>
        <h1>{name}</h1>
        <Information>
          <Info id="fullName" label="Full name" value={fullName} />
          <Info id="player" label="Player" value={player} />
          <Info id="auspice" label="Auspice" value={auspice} />
          <Info id="tribe" label="Tribe" value={tribe} />
          <Info id="virtue" label="Virtue" value={virtue} />
          <Info id="vice" label="Vice" value={vice} />
          <Info id="pack" label="Pack" value={pack} />
          <Info id="exp" label="Experience" value={exp} />
        </Information>
      </BasicInfoPanel>
    </BasicInfoContainer>
  );
}
