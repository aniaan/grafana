import React from 'react';
import { FuncDefs, FuncInstance } from '../gfunc';
import { GraphiteFunctionEditor } from './GraphiteFunctionEditor';
import { AddGraphiteFunction } from './AddGraphiteFunction';
import { Section } from '@grafana/ui';

type Props = {
  functions: FuncInstance[];
  funcDefs: FuncDefs;
};

export function FunctionsSection({ functions = [], funcDefs }: Props) {
  return (
    <Section label="Functions" fill={true}>
      {functions.map((func: FuncInstance, index: number) => {
        return !func.hidden && <GraphiteFunctionEditor key={index} func={func} />;
      })}
      <AddGraphiteFunction funcDefs={funcDefs} />
    </Section>
  );
}