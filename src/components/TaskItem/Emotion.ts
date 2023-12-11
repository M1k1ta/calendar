import styled from '@emotion/styled';

export const TaskBox = styled('div')`
  background-color: #fff;
  border-radius: 3px;
  padding: 2px 5px 5px;
  margin-bottom: 5px;
`;

export const TaskText = styled('p')`
  font-size: 15px;
  letter-spacing: 0.6px;
  padding: 1px 0 4px;
`;

export const ColorsBox = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ColorInput = styled('input')`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: 0;
  padding: 5px 0;
  cursor: pointer;

  width: 30px;
  height: 16px;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border-radius: 6px;
    border: none;
  }
`;

export const AddColorButton = styled('button')`
  border: none;
  width: 30px;
  height: 6px;
  padding: 2px 0;
  border-radius: 6px;
  background-color: #ccc;
  transition: background-color 400ms;

  &:hover {
    background-color: #bbb;
  }
`;
