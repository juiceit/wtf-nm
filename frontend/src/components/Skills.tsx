import React from "react";
import styled from "styled-components";
import { groupBy } from "lodash";
import { Skill } from "../types/types";
import { getCategoryHeader } from "../utils/helpers";
import Level from "./Level";
import { Section } from "./Section";

const StyledSkillCategory = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
  margin: 0.5rem 0;
  background-color: #424242;
  box-shadow: 0 2px 4px black;

  @media screen and (min-width: 400px) {
    width: calc(320px - 2rem);
    border-radius: 8px;
    margin: 0.5rem 1rem;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <StyledSkillCategory>
      <h3>{getCategoryHeader(category)}</h3>
      <SkillGrid>
        {skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} />
        ))}
      </SkillGrid>
    </StyledSkillCategory>
  );
}

const SkillName = styled.div`
  text-align: right;
  padding: 0.5rem 1rem;
`;

const SpecialityLabel = styled.div`
  text-align: right;
  padding: 0 1rem 0.75rem;
  font-size: 0.75rem;
  color: #ddd;
`;

const Speciality = styled.div`
  margin-left: 4px;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  color: #ddd;
  font-weight: 700;
`;

function SkillRow({ name, level, speciality }: Skill) {
  return (
    <>
      <SkillName>{name}</SkillName>
      <Level level={level} />
      {speciality && (
        <>
          <SpecialityLabel>Speciality:</SpecialityLabel>
          <Speciality>{speciality}</Speciality>
        </>
      )}
    </>
  );
}

const SkillCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem -1rem;

  @media screen and (min-width: 400px) {
    margin: -0.5rem -1rem;
  }
`;

export default function Skills({ skills }: { skills: Skill[] }) {
  const categories = groupBy(skills, "category");
  return (
    <Section>
      <h2>Skills</h2>
      <SkillCategories>
        {Object.keys(categories).map((key: string) => (
          <SkillCategory key={key} category={key} skills={categories[key]} />
        ))}
      </SkillCategories>
    </Section>
  );
}
