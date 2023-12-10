/* eslint-disable no-unused-vars */
import React from 'react';
import { Country } from '../../types/Country';
import styled from '@emotion/styled';

export const SelectList = styled('select')`
  font-family: 'Roboto', sans-serif;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #fd8701;
  padding: 5px;
  background-color: #e3e4e6;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 400ms;

  &::-webkit-scrollbar {
    width: 0;
  }

  &:hover {
    background-color: #dddee0;
  }
`;

export const Option = styled('option')`
  font-family: 'Roboto', sans-serif;
`;

interface Props {
  countryCode: string;
  onChange: (value: string) => void;
  countries: Country[];
}

export const Select: React.FC<Props> = ({
  countryCode,
  countries,
  onChange,
}) => (
  <SelectList
    value={countryCode}
    onChange={(event) => onChange(event.target.value)}
  >
    {countries.map(({ countryCode, name }) => (
      <Option key={countryCode} value={countryCode}>
        {name}
      </Option>
    ))}
  </SelectList>
);
