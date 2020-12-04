/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { Renown } from '../types/types';
import Level from './Level';
import Section from './Section';
import RenownComponent from './Renown';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SliderLine = styled.div`
  position: relative;
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background-color: white;
`;

const SliderLabel = styled.div`
  &:first-child {
    padding-right: 1rem;
  }
  &:last-child {
    padding-left: 1rem;
  }
`;

interface SliderHandleProps {
  position: number;
}

const SliderHandle = styled.div<SliderHandleProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -6px;
  ${(props) => `left: calc(${props.position}% - 8px)`}
`;

interface SliderProps {
  value: number;
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
}

function Slider({
  value, min, max, minLabel, maxLabel,
}: SliderProps) {
  const length = max - min;
  const relativeValue = value - min;
  return (
    <SliderContainer>
      <SliderLabel>{minLabel ?? min}</SliderLabel>
      <SliderLine>
        <SliderHandle position={(relativeValue * 100) / length} />
      </SliderLine>
      <SliderLabel>{maxLabel ?? max}</SliderLabel>
    </SliderContainer>
  );
}

interface RenownHarmonyPrimalUrgeProps {
  renown: Renown[];
  harmony: number;
  primalUrge: number;
}

export default function RenownHarmonyPrimalUrge({
  renown,
  harmony,
  primalUrge,
}: RenownHarmonyPrimalUrgeProps) {
  return (
    <Section>
      <RenownComponent renowns={renown} />
      <h2>Harmony</h2>
      <Slider value={harmony} min={-10} max={10} minLabel="🐺" maxLabel="🧑" />
      <h2>Primal Urge</h2>
      <Level level={primalUrge} maxLevel={10} />
    </Section>
  );
}
