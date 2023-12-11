/* eslint-disable no-unused-vars */
import React, { FormEvent, useState } from 'react';
import { readSearchParams, updateSearchParams } from '../../utils/searchParams';
import {
  BackgroundModal,
  Button,
  ColorInput,
  ColorLabel,
  Form,
  Label,
  ModalBox,
  ResetButton,
  TextInput,
  Title,
} from './Emotion';
import { CloseIcon } from '../../icons/CloseIcon';

interface Props {
  onClose: () => void;
  onSearchParam: (value: string) => void;
  onColorParam: (value: string) => void;
}

export const FilterModal: React.FC<Props> = ({
  onClose,
  onSearchParam,
  onColorParam,
}) => {
  const searchParam = readSearchParams('search') || '';
  const colorParam = readSearchParams('color') || '';
  const [search, setSearch] = useState(searchParam);
  const [color, setColor] = useState(colorParam);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search === searchParam && color === colorParam) {
      onClose();
      return;
    }

    onSearchParam(search);
    onColorParam(color);
    onClose();
  };

  return (
    <BackgroundModal onClick={onClose}>
      <ModalBox onClick={(event) => event.stopPropagation()}>
        <Title>Filter</Title>

        <Form onSubmit={handleSubmit}>
          <Label>
            <TextInput
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Label>

          <ColorLabel>
            <ColorInput
              type="color"
              value={color ? color : '#cccccc'}
              onChange={(event) => setColor(event.target.value)}
            />

            {color && (
              <ResetButton type="button" onClick={() => setColor('')}>
                <CloseIcon />
              </ResetButton>
            )}
          </ColorLabel>
          <Button type="submit">Filter</Button>
        </Form>
      </ModalBox>
    </BackgroundModal>
  );
};
