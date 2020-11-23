import React from "react";
import styled from "styled-components";

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
  ${(props) => (props.filled ? `background-color: white` : "")}
`;

export default function Level({ level }: { level: number }) {
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
