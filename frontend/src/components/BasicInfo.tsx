import React from "react";
import styled from "styled-components";
import { formatAuspice } from "../utils/helpers";

const BasicInfoContainer = styled.div`
  width: 100%;
  max-width: 1000px;
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

const Header = styled.h1`
  margin-bottom: 0;
`;

const FullName = styled.div`
  margin: 0.5rem 0 1.5rem;
`;

const Information = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;

  @media screen and (min-width: 400px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
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
        <Header>{name}</Header>
        <FullName>{fullName}</FullName>
        <Information>
          <Info id="auspice" label="Auspice" value={formatAuspice(auspice)} />
          <Info id="tribe" label="Tribe" value={tribe} />
          <Info id="virtue" label="Virtue" value={virtue} />
          <Info id="vice" label="Vice" value={vice} />
          <Info id="player" label="Player" value={player} />
          <Info id="exp" label="Experience" value={exp} />
        </Information>
      </BasicInfoPanel>
    </BasicInfoContainer>
  );
}
