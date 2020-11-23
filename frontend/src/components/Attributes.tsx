import React from "react";
import styled from "styled-components";
import { groupBy } from "lodash";
import { Attribute } from "../types/types";
import { getCategoryHeader } from "../utils/helpers";
import Level from "./Level";
import { Section } from "./Section";

const StyledAttributeCategory = styled.div`
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

const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface AttributeCategoryProps {
  category: string;
  attributes: Attribute[];
}

function AttributeCategory({ category, attributes }: AttributeCategoryProps) {
  return (
    <StyledAttributeCategory>
      <h3>{getCategoryHeader(category)}</h3>
      <AttributeGrid>
        {attributes.map((attribute) => (
          <AttributeRow key={attribute.name} {...attribute} />
        ))}
      </AttributeGrid>
    </StyledAttributeCategory>
  );
}

const AttributeName = styled.div`
  text-align: right;
  padding: 0.5rem 1rem;
`;

function AttributeRow({ name, level }: Attribute) {
  return (
    <>
      <AttributeName>{name}</AttributeName>
      <Level level={level} />
    </>
  );
}

const AttributeCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem -1rem;

  @media screen and (min-width: 400px) {
    margin: -0.5rem -1rem;
  }
`;

export default function Attributes({
  attributes,
}: {
  attributes: Attribute[];
}) {
  const categories = groupBy(attributes, "category");
  return (
    <Section>
      <h2>Attributes</h2>
      <AttributeCategories>
        {Object.keys(categories).map((key: string) => (
          <AttributeCategory
            key={key}
            category={key}
            attributes={categories[key]}
          />
        ))}
      </AttributeCategories>
    </Section>
  );
}
