/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from './Emotion';

interface Props {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (text: string) => void;
}

export const TaskInput: React.FC<Props> = ({ text, onChange, onBlur }) => (
  <Input
    type="text"
    value={text}
    onChange={onChange}
    onBlur={() => onBlur(text)}
    onKeyDown={({ key }) => {
      if (key === 'Enter') {
        onBlur(text);
      }
    }}
    autoFocus
  />
);
