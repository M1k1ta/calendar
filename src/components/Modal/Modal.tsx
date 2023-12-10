import React from 'react';
import styled from '@emotion/styled';

const ModalBox = styled('article')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 40vw;
  height: 40vh;
  padding: 40px;
  background-color: #fff;

  animation: InputCrating 400ms;

  @keyframes InputCrating {
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(100%);
    }
  }
`;

const Title = styled('h2')`
  font-size: 30px;
  font-weight: 400;
`;

const Box = styled('div')`
  display: flex;
  justify-content: right;
  gap: 20px;
`;

const Button = `
  width: 90px;
  height: 50px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;
  transition: 0.4s;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FirstButton = styled('button')`
  ${Button}

  background-color: #e7e7e7;
  color: black;

  &:hover {
    background-color: white;
  }
`;

const SecondButton = styled('button')`
  ${Button}

  background-color: #555555;
  color: #fff;
  border: 2px solid #555555;

  &:hover {
    background-color: #ffffff;
    color: #555555;
  }
`;

export const Modal = () => {
  return (
    <ModalBox>
      <Title>Edidting</Title>
      <Box>
        <FirstButton>Ok</FirstButton>
        <SecondButton>No</SecondButton>
      </Box>
    </ModalBox>
  );
};
