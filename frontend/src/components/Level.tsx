import React from 'react';
import styled from 'styled-components';

const LevelList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

interface LevelIndicatorProps {
  filled?: boolean;
}

const LevelIndicator = styled.li<LevelIndicatorProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 4px;
  ${(props) => (props.filled ? 'background-color: white' : '')}
`;

interface LevelProps {
  level: number;
  maxLevel?: number;
  minLevel?: number;
}

export default function Level({
  level,
  maxLevel = 5,
  minLevel = 1,
}: LevelProps) {
  let levels: JSX.Element[] = [];
  for (let i = minLevel; i <= maxLevel; i++) {
    levels = [...levels, <LevelIndicator key={i} filled={i <= level} />];
  }
  return <LevelList>{levels.map((lvl) => lvl)}</LevelList>;
}
