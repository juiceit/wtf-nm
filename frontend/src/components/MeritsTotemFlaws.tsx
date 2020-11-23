import React from "react";
import { Merit } from "../types/types";
import Merits from "./Merits";
import { Section } from "./Section";

interface MeritsTotemFlawsProps {
  merits: Merit[];
  totem: Merit;
  flaws: string[];
}

export default function MeritsTotemFlaws({
  merits,
  totem,
  flaws,
}: MeritsTotemFlawsProps) {
  return (
    <Section>
      <Merits merits={merits} totem={totem} />
      <h2>Flaws</h2>
      {flaws.length ? (
        <ul>
          {flaws.map((flaw) => (
            <li key={flaw}>{flaw}</li>
          ))}
        </ul>
      ) : (
        <p>None.</p>
      )}
    </Section>
  );
}
